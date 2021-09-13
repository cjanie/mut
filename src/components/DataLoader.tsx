import { useAppSelector } from "../app/hooks";
import { useOnAddText } from "../usecases/useOnAddText";
import { useOnResetTexts } from "../usecases/useOnResetTexts";
import { strings } from "../values/Strings";
import { DataItem } from "./DataItem";

export default function DataLoader() {

    const texts = useAppSelector((state) => state.texts.value);
    
    const onAdd = useOnAddText();

    const onReset = useOnResetTexts();

    return (
        <div>
            {texts.map(text => <DataItem key={text.id} text={text}/>)}
                
            <button onClick={() => onAdd()}>{strings.add}</button>
            <button onClick={() => onReset()}>{strings.reset}</button>
        </div>
    );
}