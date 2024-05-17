import { FavoriteFoods } from "./FavoriteFoods";
import { UserDetails } from "./UserDetails";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { ArrayState } from "./ArrayState";

export function UserProfile() {
  return (
    <div>
      <UserDetails
        key={20}
        id={22}
        name="chamod"
        age={21}
        email="chamodlive@live.com"
        setstate={test}
      />
      <FavoriteFoods />
      <LoginForm />
      <RegisterForm />
      <ArrayState />
    </div>
  );
}

function test() {}
