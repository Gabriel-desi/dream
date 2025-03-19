export default async function findUser(email, password) {
  try {
    const promise = await fetch("http://localhost:3000/users");
    if (!Promise.ok) {
      throw new Error(Promise.message);
    }
    const users = await promise.json();

    const foundUser = users.find((user) => {
      return user.email === email;
    });

    if (foundUser) {
      if (password === password) {
        return "valid password";
      }
      return "invalid password";
    }

    if (!foundUser) {
      return "user not found";
    }
  } catch (err) {
    return err.message;
  }
}
