// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
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

  throw new Error(response.status);
}
