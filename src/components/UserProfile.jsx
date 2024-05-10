import { FavoriteFoods } from "./FavoriteFoods";
import { UserDetails } from "./UserDetails";

export function UserProfile() {
  return (
    <div>
      <UserDetails
        data={{ name: "chamod", email: "chamodlive@live.com", age: 30 }}
      />
      <FavoriteFoods />
    </div>
  );
}
