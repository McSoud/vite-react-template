import { useEffect } from "react";

export default function useTitle(title: string) {
  useEffect(function () {
    document.title = `${title} - ${import.meta.env.VITE_APP_NAME}`;
  }, []);
}
