import { defineStore } from "pinia";
import { } from "@/composition-api";
export const useStore = defineStore("storeID", () => {
  const a = ref("");
  return { a };
});
