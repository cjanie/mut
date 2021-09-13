import { store } from "../app/store"
import { added, reset } from "../features/texts/texts-slice"
import { Text } from "../interfaces/Text";

let texts: Text[] = [];
store.subscribe(() => texts = store.getState().texts.value);

test('should retrieve empty list when no texts', () => {
    store.dispatch(reset());
    expect(texts).toEqual([]);
});

test('should retrieve texts when texts exist', () => {
    store.dispatch(reset());
    store.dispatch(added({id: 1, content: "oh"}));
    store.dispatch(added({id: 2, content: "eh"}));
    expect(texts).toEqual([{id: 1, content: "oh"}, {id: 2, content: "eh"}]);
});