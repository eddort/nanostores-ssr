import { atom } from "nanostores";
import { onRoute } from "../nanostores";

export const myFirstStore = atom({});

onRoute(myFirstStore, "/", async () => {
  return { test: 1 };
});
