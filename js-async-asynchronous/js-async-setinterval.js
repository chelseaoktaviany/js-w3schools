// when using the javascript function setInterval(), you can specify a callback function to be executed for each interval:

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}
