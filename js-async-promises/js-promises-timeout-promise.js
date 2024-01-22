let myPromise = new Promise((myResolve, myReject) => {
  setTimeout(() => {
    myResolve("I love you!");
  }, 3000);
});

myPromise.then((value) => {
  console.log(value);
});
