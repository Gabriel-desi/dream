// export default async function createUser(email, password) {
//   try {
//     const response = await fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userId: Math.floor(Math.random(0) * 1000).toString(),
//         email,
//         password,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("failed to create user!");
//     }

//     const userData = await response.json();
//     return userData;
//   } catch (err) {
//     console.log(err.message);
//   }
// }
// export default async function createUser(email, password) {
//   try {
//     const newUser = {
//       id: Math.floor(Math.random() * 1000).toString(),
//       email: email,
//       password: password,
//     };

//     console.log("Sending user data:", newUser); // Debugging

//     const response = await fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     });

//     const userData = await response.json();
//     console.log("User created:", userData);

//     if (!response.ok) {
//       throw new Error("Failed to create user");
//     }

//     return userData;
//   } catch (err) {
//     console.error("Error creating user:", err.message);
//   }
// }

export default async function createUser(email, password) {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: Math.floor(Math.random(0) * 1000).toString(),
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("failed to create user!");
    }

    const userData = await response.json();
    return userData;
  } catch (err) {
    console.log(err.message);
  }
}
