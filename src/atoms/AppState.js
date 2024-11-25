
import {
  atom,
  DefaultValue,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import { get } from "idb-keyval";

import localforage from "localforage";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  storage: localforage,
});

export const appstateState = atom({
  key: "AppStateAtom",
  default: [],
  effects_UNSTABLE: (param) => [persistAtom({ key: `Downloads_${param}` })],
  // effects_UNSTABLE: [persistAtom],
});
