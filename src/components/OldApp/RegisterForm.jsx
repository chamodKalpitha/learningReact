import { useState } from "react";

export function RegisterForm() {
  const [formfield, setFormFields] = useState({
    username: "",
    password: "",
    displayName: "",
  });

  const isActive =
    !formfield.displayName || !formfield.password || !formfield.username;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="rusername">Username</label>
        <input
          type="text"
          name="rusername"
          id="rusername"
          value={formfield.username}
          onChange={(e) => {
            setFormFields((preFormFields) => ({
              ...preFormFields,
              username: e.target.value,
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor="rpassword">Password</label>
        <input
          type="text"
          name="rpassword"
          id="rpassword"
          value={formfield.password}
          onChange={(e) =>
            setFormFields((preFormFields) => ({
              ...preFormFields,
              password: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="rdisplayname">Display Name</label>
        <input
          type="text"
          name="rdisplayname"
          id="rdisplayname"
          value={formfield.displayName}
          onChange={(e) => {
            setFormFields((preFormFields) => ({
              ...preFormFields,
              displayName: e.target.value,
            }));
          }}
        />
      </div>
      <button disabled={isActive}>Register</button>
      <div>
        <span>username: {formfield.username}</span>
        <br />
        <span>password: {formfield.password}</span>
        <br />
        <span>display Name: {formfield.displayName}</span>
      </div>
    </form>
  );
}
