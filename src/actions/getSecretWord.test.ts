import moxios from "moxios";
import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "./getSecretWord";

// describe.skip("getSecretWord", () => {
//   beforeEach(() => {
//     moxios.install();
//   });

//   afterEach(() => {
//     moxios.uninstall();
//   });

//   test("secretWord is returned", () => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: "party",
//       });
//     });
//     return getSecretWord().then((secretWord) => {
//       expect(secretWord).toBe("party");
//     });
//   });
// });

describe.skip("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("secretWord is returned", () => {
    const initialState = {
      success: false,
      secretWord: "",
      guessedWords: [],
    };
    const store = storeFactory(initialState);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });

    return store.dispatch(getSecretWord() as any).then(() => {
      const secretWord = store.getState().secretWord;
      expect(secretWord).toBe("party");
    });
  });
});
