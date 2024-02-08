import { any } from "zod";

export function mergeTwoArrays(obj1: any, obj2: any) {
  const mergeMap = new Map();
  obj1.map((item: any) => mergeMap.set(item.hotelName, item));
  obj2.map((item: any) => mergeMap.set(item.hotelName, item));
  const mergedArr = Array.from(mergeMap.values());
  return mergedArr;
}