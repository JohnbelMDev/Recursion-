# Recursion-

What is a recursive function?
A recursive function is a function that calls itself inside of a function

Example: 

          function myfunction()

          {
            Var a,b,total;
            total = a+b;
            Return total;
             myfunction();   <---- recursive function because it’s being call inside of that same function. 

           }
  

When to use recursion:

https://slideplayer.com/slide/5016691/

What happens when a function doesn’t have a way to stop?
That function will cause the program to crash. Also those type of recursive function 
Will use a lot of the stack memory and overfull

An example of when how a recursive function is stopped

  
           recursion(5)<--- passing 5 as a parameter 

           function recursion(number)<--- 5 is passed through the function
              {
                if(number >0 )
                console.log(“I'm a recursive”);
                 myfunction(number-1); <----- 5 is being subtracted by 1.. 

               }

  
1st call of the function 
Value of number:5 

2nd call of the function 
Value of number:4

3rd call of the function 
Value of number:3

4rd call of the function 
Value of number:2


5th call of the function 
Value of number:1

6th call of the function 
Value of number:0


            Program Output:
  		      This is recursive
            This is recursive
            This is recursive
            This is recursive
            This is recursive

