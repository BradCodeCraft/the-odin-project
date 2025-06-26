let database;

function connect() {
  database = {
    async query(isOk) {
      if (!isOk) throw new Error("Query failed");
    },
  };
}

function disconnect() {
  database = null;
}

// Helper function to call async function `fn` after `ms` milliseconds
function delay(fn, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => fn().then(resolve, reject), ms);
  });
}

async function run() {
  connect();

  try {
    await Promise.all([
      // these 3 parallel jobs take different time: 100, 200 and 300 ms
      // we use the `delay` helper to achieve this effect
      delay(() => database.query(true), 100),
      delay(() => database.query(false), 200),
      delay(() => database.query(false), 300),
    ]);
  } catch (error) {
    console.log("Error handled (or was it?)");
  }

  disconnect();
}

function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resultsCount = 0;
    let hasError = false; // we'll set it to true upon first error

    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          if (hasError) return; // ignore the promise if already errored
          results[index] = result;
          resultsCount++;
          if (resultsCount === promises.length) {
            resolve(results); // when all results are ready - successs
          }
        })
        .catch((error) => {
          if (hasError) return; // ignore the promise if already errored
          hasError = true; // wops, error!
          reject(error); // fail with rejection
        });
    });
  });
}

function customPromiseAllWait(promises) {
  return new Promise((resolve, reject) => {
    const results = new Array(promises.length);
    let settledCount = 0;
    let firstError = null;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
        })
        .catch((error) => {
          if (firstError === null) {
            firstError = error;
          }
        })
        .finally(() => {
          settledCount++;
          if (settledCount === promises.length) {
            if (firstError !== null) {
              reject(firstError);
            } else {
              resolve(results);
            }
          }
        });
    });
  });
}

// wait for all promises to settle
// return results if no errors
// throw AggregateError with all errors if any
function allOrAggregateError(promises) {
  return Promise.allSettled(promises).then((results) => {
    const errors = [];
    const values = [];

    results.forEach((res, i) => {
      if (res.status === "fulfilled") {
        values[i] = res.value;
      } else {
        errors.push(res.reason);
      }
    });

    if (errors.length > 0) {
      throw new AggregateError(errors, "One or more promises failed");
    }

    return values;
  });
}

run();
