/*
    Redeclaring a variable with const, in another scope, or in another block, is allowed:
*/

const x = 2; //allowed

{
  const x = 3; //allowed
}

{
  const x = 4; //allowed
}
