import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const resizeEventHandler = (e) => {
      console.log("Window/ViewPort Resized!");
    };

    window.addEventListener("resize", resizeEventHandler);

    return () => {
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, []);
  return <div></div>;
}
