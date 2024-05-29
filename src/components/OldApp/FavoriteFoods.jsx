import { LikedUser } from "./LikedUser";
import styles from "./favoriteFoods.module.css";
export function FavoriteFoods() {
  const userData = [
    {
      id: 1,
      username: "perera",
      count: 30,
    },
    {
      id: 2,
      username: "Shanthi",
      count: 50,
    },
  ];

  return (
    <section>
      <span className={styles.title}>Favorite Foods</span>
      <br />
      <ul>
        <li className={styles.items}>Sushi</li>
        <li className={styles.items}>Pizza</li>
        <li className={styles.items}>Mediterranean Food</li>
      </ul>
      {userData.map((user) => {
        return (
          <LikedUser
            key={user.id}
            userName={user.username}
            count={user.count}
          />
        );
      })}
    </section>
  );
}
