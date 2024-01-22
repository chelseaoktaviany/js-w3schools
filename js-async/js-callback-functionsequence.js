// this example will end up displaying "Goodbye"
function result(some) {
  console.log(some);
}

function myFirst() {
  result("Hello");
}

function mySecond() {
  result("Goodbye");
}

myFirst();
mySecond();
