export function LikedUser({ id, userName, count }) {
  return (
    <div key={id}>
      <p>
        {userName} eat {count}
      </p>
    </div>
  );
}
