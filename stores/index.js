import { atom } from "nanostores";
import { onRoute } from "../nanostores";

export const myFirstStore = atom({});

onRoute(myFirstStore, "/", async () => {
  return { firstStore: 1 };
});

export const mySecondStore = atom({});

onRoute(mySecondStore, "/", async () => {
  return { secondStore: 2 };
});
