import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { videoCategories, videos } from "../database/schemas";
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

router.get("/videos", async (ctx) => {
  const tx = await asyncFaillable(ctx.var.db.query.videos.findMany());

  if (!tx.success) {
    throw new HTTPException(500, { message: "failed to retrieve videos" });
  }

  return ctx.json(tx.data);
});

router.post(
  "/videos",
  zValidator(
    "json",
    z.object({
      // TODO: User id should be extracted from signature
      userId: z.number().min(0),
      title: z.string().min(1),
      description: z.string().min(1),
      categories: z.array(z.enum(videoCategories)),
    }),
  ),
  async (ctx) => {
    const payload = ctx.req.valid("json");

    const tx = await asyncFaillable(
      ctx.var.db.insert(videos).values({
        userId: payload.userId,
        title: payload.title,
        description: payload.description,
        categories: payload.categories,
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
