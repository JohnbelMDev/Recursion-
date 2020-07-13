// rewrote code in javascript 
// based on C++ and wrote in Javascript


 myfunction(5);


 function myfunction(number)
{
    if(number >0 )
    {
    console.log("I'm a recursive function and I'm showing the number of times I'm called before the function = " + number);
     myfunction(number-1);
   }
     // console.log("Number ")
     console.log("I'm a recursive function and I'm showing the number after it's being passed = " + number);



}
