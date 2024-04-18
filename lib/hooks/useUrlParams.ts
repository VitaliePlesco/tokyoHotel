import { useSearchParams } from "next/navigation";
import { object } from "zod";

export function useUrlParams(...params: any[]) {
  const searchParams = useSearchParams();


  const paramsObject = Object.fromEntries(searchParams.entries());
  return paramsObject;
}