import { useState } from "react";

import { Hieroglyph } from "../interfaces/Hieroglyph";
import { KeyBoard } from "../interfaces/KeyBoard";
import { KeyBoardKey } from "../interfaces/KeyBoardKey";
import { Letter } from "../interfaces/Letter";
import { getGreekLetters, getHieroglyphs } from "../providers/providers";
import { strings } from "../values/Strings";

export function Keyboard() {

    const textSymbols = [] as KeyBoardKey[];

    const [text, setText] = useState("");
    const [keyBoardType, setKeyBoardType] = useState("hieroglyphic" as "hieroglyphic" | "greek");

    function onClickKey(symbol: Hieroglyph | Letter) {
        textSymbols.push(symbol);
        if("code" in symbol) {
            setText(text + symbol.code.toString());
        } else {
            setText(text + symbol.name);
        }
        
    }

    function displayKeyBoard(keyBoardType: "hieroglyphic" | "greek") {
        switch(keyBoardType) {
            case "hieroglyphic":
                const keyBoardHieroglyphs: KeyBoard<Hieroglyph> = {
                    keys: getHieroglyphs()
                };
                return (
                    <div>
                        {keyBoardHieroglyphs.keys.map(hieroglyph => (
                            <button 
                                key={hieroglyph.code.toString()} 
                                onClick={() => onClickKey(hieroglyph)}>
                                {hieroglyph.code}
                            </button>))}
                    </div>
                );
            case "greek":
                const keyBoardGreekLetters: KeyBoard<Letter> = {
                    keys: getGreekLetters()
                };
                return (
                    <div>
                        {keyBoardGreekLetters.keys.map(letter => (
                            <button
                                key={letter.name}
                                onClick={() => onClickKey(letter)}>
                                {letter.name}
                            </button>
                        ))}
                    </div>
                );
            default:
                const _exhaustiveCheck: never = keyBoardType;
                return _exhaustiveCheck;
        }

    }


    return (
    <div>
        <div>
            <p>Select keyboard</p>
            <select value={keyBoardType} onChange={(e) => {setKeyBoardType(String(e.target.value) as "hieroglyphic" | "greek")}}>
                <option value="hieroglyphic">{strings.hieroglyphic}</option>
                <option value="greek">{strings.greek}</option>
            </select>
        </div>
        <div>
            <p>{text}</p>
        </div>
        {displayKeyBoard(keyBoardType)}
    </div>);
}