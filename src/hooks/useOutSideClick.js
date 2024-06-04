import { useEffect } from "react";

function useOutsideClick(ref, exeptionId, cb) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.id !== exeptionId
      ) {
        cb();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
}

export default useOutsideClick;
