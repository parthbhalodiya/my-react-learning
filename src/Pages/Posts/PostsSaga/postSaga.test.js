import { runSaga } from "redux-saga";

import postSaga from "./getAllpostSaga";
it("should test makeFetchTodosRequest saga", async () => {
    const dispatched = []
    await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        postSaga
      ).toPromise();
      
})