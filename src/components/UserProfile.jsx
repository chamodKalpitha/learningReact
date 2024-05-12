import { FavoriteFoods } from "./FavoriteFoods";
import { UserDetails } from "./UserDetails";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export function UserProfile() {
  return (
    <div>
      <UserDetails name="chamod" age={21} email="chamodlive@live.com" />
      <FavoriteFoods />
      <LoginForm />
      <RegisterForm />
    </div>
  );
}
