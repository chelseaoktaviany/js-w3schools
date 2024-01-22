async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("I love you!!");
    }, 3000);
  });
  console.log(await myPromise);
}

myDisplay();
