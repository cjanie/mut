import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { saved } from "../features/texts/texts-slice";
import { Text } from "../interfaces/Text";
import { strings } from "../values/Strings";

type Props = {
    text: Text
}

export function DataItem(props: Props) {

    const [mode, setMode] = useState(null as null | "update" | "read");
    const [buttonText, setButtonText] = useState(strings.update);
    const [updatedItem, setUpdatedItem] = useState(null as null | Text);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(props.text.content === "") setMode("update");
        mode === "update" ? setButtonText(strings.save) : setButtonText (strings.update);
    }, [props.text.content, mode]);
    

    function onUpdate() {
        setMode("update");
    }

    function onSave() {
        if(updatedItem !== null) {
            dispatch(saved(updatedItem));
        }
        setMode("read");
    }

    function onButtonClick() {
        mode === "read" ? onUpdate() : onSave();
    }

    function getTextView(item: Text) {
        return mode === "read" ? (<p>{item.content}</p>) : (
            <p>
                <input type="text" defaultValue={item.content} onChange={(e) => updateItem(String(e.target.value))} />
            </p>
        );
    }

    function updateItem(content: string) {
        const updated = {
            id: props.text.id,
            content: content
        } as Text;
        setUpdatedItem(updated);
    }

    return (
        <div>
            {getTextView(props.text)} 
            <button onClick={() => onButtonClick()}>{buttonText}</button>
        </div>
    );

}