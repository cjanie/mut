import { useAppDispatch, useAppSelector } from "../app/hooks";
import { incrementedAvailableId } from "../features/availableId/availableId-slice";
import { added } from "../features/texts/texts-slice";

export function useOnAddText() {

    const availableId = useAppSelector((state) => state.availableId.value);
    const dispatch = useAppDispatch();

    function onAdd() {
        dispatch(added({id: availableId, content: ""}));
        dispatch(incrementedAvailableId());
    }

    return () => onAdd();

}