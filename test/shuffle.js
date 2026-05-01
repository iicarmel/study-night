import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle", () => {
  it("keeps the same items and length after shuffling", () => {
    const original = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffled = shuffle(original);

    expect(shuffled).to.have.members(original);
    expect(shuffled).to.have.lengthOf(original.length);
  });
});