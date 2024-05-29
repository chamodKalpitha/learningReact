import { useEffect } from "react";

export default function Name() {
  useEffect(() => {
    const resizeEventHandler = (e) => {
      console.log("Window/ViewPort Resized!");
    };

    window.addEventListener("resize", resizeEventHandler);

    return () => {
      console.log("Unmounting Name Component");
      console.log("Removing resize listner");
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, []);
  return (
    <div>
      <p>Name Component Mounted</p>
    </div>
  );
}
