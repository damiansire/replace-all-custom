import identity from "./index";

describe("identity", () => {
  it("should return the same primitive value", () => {
    expect(identity(5)).toBe(5);
    expect(identity("hello")).toBe("hello");
    expect(identity(true)).toBe(true);
    expect(identity(null)).toBe(null);
    expect(identity(undefined)).toBe(undefined);
  });

  it("should return the same object reference", () => {
    const obj = { name: "John", age: 30 };
    expect(identity(obj)).toBe(obj);
  });

  it("should return the same array reference", () => {
    const arr = [1, 2, 3];
    expect(identity(arr)).toBe(arr);
  });

  it("should handle complex objects", () => {
    const complexObj = {
      name: "Alice",
      address: {
        city: "New York",
        country: "USA",
      },
      hobbies: ["reading", "swimming"],
    };
    expect(identity(complexObj)).toEqual(complexObj);
  });
});
