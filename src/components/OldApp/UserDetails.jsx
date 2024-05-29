import PropTypes from "prop-types";
import "./UserDetails.css";
import { useState } from "react";

export function UserDetails({ id, name, age, email, setstate }) {
  const [isEditing, setisEditing] = useState(false);
  const [username, setUsername] = useState(name);
  const [useremail, setUseremail] = useState(email);

  console.log(isEditing);
  return (
    <div>
      <div>
        <button onClick={() => setisEditing((cuurentState) => !cuurentState)}>
          {!isEditing ? "Edit" : "Cancel"}
        </button>
        <button
          onClick={() => {
            setstate((currentState) => {
              currentState.filter((value) => {
                if (value.id !== id) return false;
              });
              console.log(currentState);
            });
          }}
        >
          Delete
        </button>
        <button
          disabled={!isEditing}
          onClick={() => {
            setstate((currentState) => {
              return currentState.map((currentUser) => {
                if (currentUser.id === id)
                  return { ...currentUser, name: username, email: useremail };
                else return currentUser;
              });
            });
            setisEditing(false);
          }}
        >
          save
        </button>
      </div>
      <div>
        <p className="username">
          Username:{" "}
          {isEditing ? (
            <input
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          ) : (
            name
          )}
        </p>
        <p>Age: {age}</p>
        <div>
          <span>Email: </span>
          <span>
            {isEditing ? (
              <input
                name="email"
                id="email"
                type="email"
                value={useremail}
                onChange={(e) => setUseremail(e.target.value)}
              ></input>
            ) : (
              email
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  setstate: PropTypes.func.isRequired,
};
