import { runSaga } from "redux-saga";

import userSaga from "./userSaga";
it("should test makeFetchTodosRequest saga", async () => {
    const dispatched = []
    await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        userSaga
      ).toPromise();
      
})