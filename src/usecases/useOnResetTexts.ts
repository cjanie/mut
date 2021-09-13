import { useAppDispatch } from "../app/hooks";
import { reset } from "../features/texts/texts-slice";

export function useOnResetTexts() {

    const dispatch = useAppDispatch();

    function onReset() {
        dispatch(reset());
    }

    return () => onReset();

}