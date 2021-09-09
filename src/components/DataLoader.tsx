import { useAppDispatch, useAppSelector } from "../app/hooks";
import { incrementedAvailableId } from "../features/availableId/availableId-slice";
import { added, reset } from "../features/texts/texts-slice";
import { strings } from "../values/Strings";
import { DataItem } from "./DataItem";

export default function DataLoader() {

    const texts = useAppSelector((state) => state.texts.value);
    const availableId = useAppSelector((state) => state.availableId.value);
    const dispatch = useAppDispatch();

    function onAdd() {
        dispatch(added({id: availableId, content: ""}));
        dispatch(incrementedAvailableId());
    }

    function onReset() {
        dispatch(reset());
    }

    return (
        <div>
            {texts.map(text => <DataItem key={text.id} text={text}/>)}
                
            <button onClick={() => onAdd()}>{strings.add}</button>
            <button onClick={() => onReset()}>{strings.reset}</button>
        </div>
    );

}