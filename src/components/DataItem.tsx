import { useEffect, useState } from "react";
import { Item } from "../interfaces/Item";
import { save } from "../redux/dataSlice";
import { store } from "../redux/store";
import { strings } from "../values/Strings";

type Props = {
    item: Item
}

export function DataItem(props: Props) {

    const [mode, setMode] = useState(null as null | "update" | "read");
    const [buttonText, setButtonText] = useState(strings.update);
    const [updatedItem, setUpdatedItem] = useState(null as null | Item);

    useEffect(() => {
        if(props.item.content === "") setMode("update");
        mode === "update" ? setButtonText(strings.save) : setButtonText (strings.update);
    }, [props.item.content, mode]);
    

    function onUpdate() {
        setMode("update");
    }

    function onSave() {
        if(updatedItem !== null) {
            store.dispatch(save(updatedItem));
        }
        setMode("read");
    }

    function onButtonClick() {
        mode === "read" ? onUpdate() : onSave();
    }

    function getTextView(item: Item) {
        return mode === "read" ? (<p>{item.content}</p>) : (
            <p>
                <input type="text" id={item.id.toString()} defaultValue={item.content} onChange={() => updateItem()} />
            </p>
        );
    }

    function updateItem() {
        const content = (document.getElementById(props.item.id.toString()) as HTMLInputElement).value;
        const updated = {
            id: props.item.id,
            content: content
        } as Item;
        setUpdatedItem(updated);
    }

    return (
        <div>
            {getTextView(props.item)} 
            <button onClick={() => onButtonClick()}>{buttonText}</button>
        </div>
    );

}