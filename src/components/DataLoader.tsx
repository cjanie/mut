import { useEffect, useState } from "react";
import { Item } from "../interfaces/Item";
import { add, reset } from "../redux/dataSlice";
import { store } from "../redux/store";
import { strings } from "../values/Strings";
import { DataItem } from "./DataItem";

export default function DataLoader() {

    const [data, setData] = useState(store.getState() as Item[]);
    const [availableId, setAvailableId] = useState(1);
    
    useEffect(() => observeData());

    function observeData() {
        store.subscribe(() => setData(store.getState()));
    }

    function onAdd() {
        store.dispatch(add({id: availableId, content: ""}));
        setAvailableId(availableId + 1);
    }

    function onReset() {
        store.dispatch(reset());
    }

    return (
        <div>
            {data.map(item => <DataItem key={item.id} item={item}/>)}
                
            <button onClick={() => onAdd()}>{strings.add}</button>
            <button onClick={() => onReset()}>{strings.reset}</button>
        </div>
    );

}