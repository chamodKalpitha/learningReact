import { FavoriteFoods } from "./FavoriteFoods";
import { UserDetails } from "./UserDetails";

export function UserProfile() {
  return (
    <div>
      <UserDetails name="chamod" age={21} email="chamodlive@live.com" />
      <FavoriteFoods />
    </div>
  );
}
