export default function SignUp() {
  return (
    fetch("http://localhost:3001/api/MyInventory/signup")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error)),
    (
      <form>
        <label for="email">email</label>
        <input type="email" id="email" />
        <label for="username">username</label>
        <input type="text" id="username" />
        <label for="password">password</label>
        <input type="password" id="password" />
      </form>
    )
  );
}
