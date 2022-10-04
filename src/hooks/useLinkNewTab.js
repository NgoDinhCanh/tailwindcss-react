import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
  const contentRef = useRef();
  useEffect(() => {
    if (contentRef.current) {
      const links = contentRef.current.querySelectorAll("a");
      links.length > 0 &&
        links.forEach((link) => link.setAttribute("target", "_blank"));
    }
  }, []);
  return { contentRef };
}
