export function UserDetails({ data }) {
  return (
    <>
      <p>Username: {data.name}</p>
      <p>Age: {data.age}</p>
      <div>
        <span>Email: </span>
        <span>{data.email}</span>
      </div>
    </>
  );
}
