import { useState } from "react";
import { UserDetails } from "./UserDetails";
export function ArrayState() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "chamod",
      age: 45,
      email: "chamodlive@live.com",
    },
    {
      id: 2,
      name: "kalpitha",
      age: 15,
      email: "kalpithalive@live.com",
    },
  ]);
  const userDetailsList = users.map((user) => {
    return (
      <UserDetails
        key={user.id}
        id={user.id}
        name={user.name}
        age={user.age}
        email={user.email}
        setstate={setUsers}
      />
    );
  });
  return <div>{userDetailsList}</div>;
}
