import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { users } from "../database/schemas";
import { asyncFaillable } from "../utils";

const router = new Hono();

router.get("/users/:id", async (ctx) => {
  const id = Number.parseInt(ctx.req.param("id"));
  if (Number.isNaN(id)) {
    throw new HTTPException(400);
  }

  const tx = await asyncFaillable(
    ctx.var.db.query.users.findFirst({ where: eq(users.id, id) }),
  );

  if (!tx.success) {
    throw new HTTPException(500, { message: "failed to retrieve user" });
  }

  if (!tx.data) {
    throw new HTTPException(404, { message: "user not found" });
  }

  return ctx.json(tx.data);
});

router.post(
  "/users",
  zValidator(
    "json",
    z.object({
      username: z.string().min(1),
      description: z.string().min(1),
    }),
  ),
  async (ctx) => {
    const payload = ctx.req.valid("json");

    const tx = await asyncFaillable(
      ctx.var.db.insert(users).values({
        username: payload.username,
        description: payload.description,
      }),
    );

    if (!tx.success) {
      throw new HTTPException(500, { message: "failed to create user" });
    }

    return ctx.json({ message: "success" });
  },
);

export { router as usersRouter };
