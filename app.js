const normal = document.querySelector(".normal");
const promiseAll = document.querySelector(".all");

// normal
const normalCalls = async () => {
  await getData();
  await getData();
  await getData();
  await getData();
  await getData();
  await getData();
  await getData();
  await getData();
  await getData();
  await getData();

  normal.classList.remove("hidden");
};

// all
const promiseAllCalls = async () => {
  await Promise.all([
    getData(),
    getData(),
    getData(),
    getData(),
    getData(),
    getData(),
    getData(),
    getData(),
    getData(),
    getData(),
  ]);

  promiseAll.classList.remove("hidden");
};

reset();

// functions
async function getData() {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve("done"), 1000);
  });
}

function reset() {
  normal.classList.add("hidden");
  promiseAll.classList.add("hidden");

  normalCalls();
  promiseAllCalls();
}
