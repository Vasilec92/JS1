const sum = (a,b) =>{
   return a+b
}

const subtraction = (a,b) =>{
   return a-b
}

const multiplication = (a,b) =>{
   return a*b
}

const division = (a,b) =>{
   return a/b
}

const mathOperation = (arg1, arg2, operation)=>{
   switch(operation){
      case "+":
         return sum(arg1, arg2)
      break
      case "-":
         return subtraction(arg1, arg2)
      break
      case "*":
         return multiplication(arg1, arg2)
      break
      case "/":
         return division(arg1, arg2)
      break
   }
}

console.log(mathOperation(5,5,"+"))

