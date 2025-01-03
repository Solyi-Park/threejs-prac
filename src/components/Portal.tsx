import { createPortal } from "react-dom";

export default function Portal({ children }: { children: React.ReactNode }) {
  const node = document.getElementById("portal");
  return createPortal(children, node);
}
