import PropTypes from "prop-types";
import "./UserDetails.css";

export function UserDetails({ name, age, email }) {
  return (
    <>
      <p className="username">Username: {name}</p>
      <p>Age: {age}</p>
      <div>
        <span>Email: </span>
        <span>{email}</span>
      </div>
    </>
  );
}

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};
