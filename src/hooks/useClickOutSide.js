import { useEffect, useRef, useState } from "react";

export default function useClickOutSide() {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      console.log(nodeRef.current.contains(e.target));
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        console.log("side");
        setShow(false);
      } else {
        console.log("inside");
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}
