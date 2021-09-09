import { Hieroglyph } from "../interfaces/Hieroglyph";
import { Letter } from "../interfaces/Letter";

export function getHieroglyphs(): Hieroglyph[] {
    return [
        {code: ["A", 1]}, {code: ["A", 2]}, {code: ["A", 3]}, {code: ["A", 14]}, {code: ["A", 14, "*"]},
        {code: ["B", 1]}, {code: ["B", 2]}, {code: ["B", 3]},
        {code: ["C", 1]}, {code: ["C", 2]},  {code: ["C", 3]}
    ];
}

export function getGreekLetters(): Letter[] {
    return [{name: "alpha"}, {name: "beta"}, {name: "gamma"}, {name: "delta"}]
}
