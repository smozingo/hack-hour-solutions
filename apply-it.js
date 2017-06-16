/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 */


function applyIt1( func, args) {
  return function () {
    return func(...args);
  }
}




 /*
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

function applyIt(func, args) {
  // build up the func call as a string and eval it!
  let funcStr = 'func(';
  // create an array containing each element of the arg list (arg[0] through arg[n])
  const argList = args.map(function(element, i) {
    return `args[${i}]`;
    //return `${element}`;
   // return (typeof element === 'string')  ? "'" + element + "'" : element;
  });
  // put all the arguments together and close out the parens
  funcStr += argList.join(',') + ');';
  // eval the function
  console.log(funcStr);

  return function() {
    return eval(funcStr);
  }
}


const jae = function(name, age, location) {
  return name + " is " + age + " and he lives in " + location;
};

const jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
console.log(jaero()); //Returns "Jae is 19 and he lives in South Carolina"










