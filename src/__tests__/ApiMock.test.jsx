vi.mock("../api", () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
    interceptors: { request: { use: vi.fn() } },
  }
}));
import api from "../api";
import { describe, it, expect, vi } from "vitest";

describe("api mock", () => {
  it("should be mocked", () => {
    expect(api.get).toBeTypeOf("function");
    expect(api.post).toBeTypeOf("function");
  });
});