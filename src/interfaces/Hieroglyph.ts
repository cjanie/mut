import { KeyBoardKey } from "./KeyBoardKey";

export interface Hieroglyph extends KeyBoardKey {
    code: [string, number, "*"?],
    phoneticValues?: string[]
}