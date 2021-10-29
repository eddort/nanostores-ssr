import { atom } from "nanostores";
import { nextJsHydrate, ssr } from "../nanostores";

export const myFirstStore = atom({});

ssr(
  myFirstStore,
  "/",
  async () => {
    return { firstStore: 1 };
  },
  nextJsHydrate
);

export const mySecondStore = atom({});

ssr(
  mySecondStore,
  "/",
  async () => {
    return { secondStore: 2 };
  },
  nextJsHydrate
);
