import { useAppDispatch, useAppSelector } from "../app/hooks";
import { store } from "../app/store";
import { added, reset } from "../features/texts/texts-slice";
import { Text } from "../interfaces/Text";
import { useOnAddText } from "../usecases/useOnAddText";
import { useOnResetTexts } from "../usecases/useOnResetTexts";


test("add should increment data", () => {
    // Arrange: store preparation
    let listOfTexts: Text[] = [];
    store.subscribe(() => listOfTexts = store.getState().texts.value);
    store.dispatch(reset());

    // act: dispatch an action
    store.dispatch(added({id: 1, content: ""}));

    // assert
    expect(listOfTexts.length).toBe(1);

    store.dispatch(added({id: 2, content: ""}));
    expect(listOfTexts.length).toBe(2);

});