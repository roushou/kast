import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { videos } from "../database/schemas";
import { asyncFaillable } from "../utils";

const router = new Hono();

router.get("/videos/:id", async (ctx) => {
  const id = Number.parseInt(ctx.req.param("id"));
  if (Number.isNaN(id)) {
    throw new HTTPException(400);
  }

  const tx = await asyncFaillable(
    ctx.var.db.query.videos.findFirst({ where: eq(videos.id, id) }),
  );

  if (!tx.success) {
    throw new HTTPException(500, { message: "failed to retrieve video" });
  }

  if (!tx.data) {
    throw new HTTPException(404, { message: "video not found" });
  }

  return ctx.json(tx.data);
});

router.post(
  "/videos",
  zValidator(
    "json",
    z.object({
      title: z.string().min(1),
      description: z.string().min(1),
    }),
  ),
  async (ctx) => {
    const payload = ctx.req.valid("json");

    const tx = await asyncFaillable(
      ctx.var.db.insert(videos).values({
        title: payload.title,
        description: payload.description,
        // TODO
        bucketUrl: "",
      }),
    );

    if (!tx.success) {
      throw new HTTPException(500, { message: "failed to create video" });
    }

    return ctx.json({ message: "success" });
  },
);

export { router as videosRouter };
