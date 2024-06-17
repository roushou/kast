import { describe, expect, test } from "vitest";
import { healthRouter } from "./health";

describe("health", () => {
  test("Should return 'healthy'", async () => {
    const resp = await healthRouter.request("_health");
    expect(resp.status).toBe(200);
    expect(await resp.text()).toBe("healthy");
  });
});
