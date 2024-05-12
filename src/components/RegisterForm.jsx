export function RegisterForm() {
  return (
    <form>
      <div>
        <label htmlFor="rusername">Username</label>
        <input type="text" name="rusername" id="rusername" />
      </div>
      <div>
        <label htmlFor="rpassword">Password</label>
        <input type="text" name="rpassword" id="rpassword" />
      </div>
      <div>
        <label htmlFor="rdisplayname">Display Name</label>
        <input type="text" name="rdisplayname" id="rdisplayname" />
      </div>
      <button>Register</button>
    </form>
  );
}
