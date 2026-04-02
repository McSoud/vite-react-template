import { useRef, useEffect } from "react";

export default function useTitle(t: string) {
  const title = useRef(t);
  useEffect(function () {
    document.title = `${title.current} - ${import.meta.env.VITE_APP_NAME}`;
  }, []);
}
