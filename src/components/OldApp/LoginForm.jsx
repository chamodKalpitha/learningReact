export function LoginForm() {
  function consoleLog(e) {
    e.preventDefault();
    const fromData = new FormData(e.target);
    console.log(fromData.get("username"));
  }

  return (
    <form onSubmit={consoleLog}>
      <label htmlFor="username">UserName</label>
      <input type="text" id="username" name="username" />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <button>Login</button>
    </form>
  );
}
