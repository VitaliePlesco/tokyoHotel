import { useEffect, useRef } from "react";

export const useRenderCount = (file: string) => {
  const rendersNo = useRef(0);
  useEffect(() => {
    rendersNo.current++
    console.log("Rerenders: " + rendersNo.current, file)
  });

};