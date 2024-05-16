import { useState } from "react";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const isDisabled = !username || !password || !displayName;

  return (
    <form>
      <div>
        <label htmlFor="rusername">Username</label>
        <input
          type="text"
          name="rusername"
          id="rusername"
          value={username}
          onChange={(e) => {
            setUsername((prevUsername) => (prevUsername = e.target.value));
          }}
        />
      </div>
      <div>
        <label htmlFor="rpassword">Password</label>
        <input
          type="text"
          name="rpassword"
          id="rpassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rdisplayname">Display Name</label>
        <input
          type="text"
          name="rdisplayname"
          id="rdisplayname"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      <button disabled={isDisabled}>Register</button>
      <div>
        <span>username: {username}</span>
        <br />
        <span>password: {password}</span>
        <br />
        <span>display Name: {displayName}</span>
      </div>
    </form>
  );
}
