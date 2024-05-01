// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
    it("Calculates the total points for a word(1 per vowel, 2 per consonant)", () => {
        const word = "tEsT";

        const points = pointsForWord(word);

        expect (points).toBe(7);
    });
});