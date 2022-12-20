/*
    Declaring a variable with const is similar to let when it comes to block scope

    The x declared in the block, in this example, is not the same as the x declared outside the block:
*/
const x = 10;
// here x is 10

{
  const x = 2;
  // here x is 2
}

// here x is 10
