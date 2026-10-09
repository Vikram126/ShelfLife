import { getGreeting } from "@/logic/placeholder";

describe("Trivial test with @/ alias", () => {
  it("imports and executes function successfully", () => {
    expect(getGreeting()).toBe("Welcome to ShelfLife");
  });
});

