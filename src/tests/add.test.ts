import { add, reset } from "../redux/dataSlice";
import { store } from "../redux/store";

test("add should increment data", () => {

    store.dispatch(reset());
    expect(store.getState().length).toBe(0);
    store.dispatch(add({id: 1, content: "t"}));
    expect(store.getState().length).toBe(1);
    store.dispatch(add({id: 2, content: "t"}));
    expect(store.getState().length).toBe(2);

});