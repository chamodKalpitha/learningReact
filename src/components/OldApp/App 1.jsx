import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    document.title = "React Tutorials " + counter;
  }, [sync]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchUsers() {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal, // check whether  request need to abort or not
        });
        const jsond = await data.json();
        console.log(jsond);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error);
        }
      }
    }
    fetchUsers();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      <h1>You Click the button {counter} times</h1>
      <button
        onClick={() => {
          setCounter((currentCounter) => currentCounter + 1);
        }}
      >
        Click me
      </button>

      <button onClick={() => setSync((currentSync) => !currentSync)}>
        {" "}
        Sync Now
      </button>
    </div>
  );
}
