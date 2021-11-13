import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const PortalBackdrop = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.getElementById("backdrop"))
    : null;
};

export default PortalBackdrop;
