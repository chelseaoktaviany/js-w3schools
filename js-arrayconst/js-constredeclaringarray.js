//redeclaring an array with const, in another scope, or in another block, is allowed:
const cars = ["Volvo", "BMW"]; //allowed
{
    const cars = ["Volvo", "BMW"]; //allowed
}
{
    const cars = ["Volvo", "BMW"]; //allowed
}