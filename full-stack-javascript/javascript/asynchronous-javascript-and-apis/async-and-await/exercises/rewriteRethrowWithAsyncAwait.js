class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new HttpError(response);
//     }
//   });
// }

// Ask for a user name until github returns a valid user
// function demoGithubUser() {
//   let name = prompt("Enter a name?", "iliakan");
//
//   return loadJson(`https://api.github.com/users/${name}`)
//     .then((user) => {
//       alert(`Full name: ${user.name}.`);
//       return user;
//     })
//     .catch((err) => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("No such user, please reenter.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }

/**
 * @param {String} url
 */
async function loadJson(url) {
  const response = await fetch(url);

  if (response.status === 200) {
    const result = await response.json();

    return result;
  }

  throw new HttpError(response);
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");
  let user;

  while (true) {
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (error) {
      if (error instanceof HttpError && error.response.status === 404) {
        alert("No such user, please reenter.");
      } else {
        throw error;
      }
    }
  }

  alert(`Full name: ${user.name}.`);
  return user;
}
