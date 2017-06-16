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

function applyIt1(func, args) {
  return function() {
    return func(...args);
  };
}

 /*
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

  function applyIt(func, args) {
    // build up the func call as a string and eval it!
    // yay closures!
    let funcCall = 'func(';

    // apply necessary formatting to the arg list
    const argList = args.map(function(arg) {
      return (typeof arg === 'string') ? `'${arg}'` : arg;
    });

    // put all the arguments together and close out the parens
    funcCall += argList.join(",") + ");";

    // eval(‘func(args[0]... args[i])’);
    return function() {
      return eval(funcCall);
    };
  }


var jae = function(name, age, location) {
       console.log(name + " is " + age + " and he lives in " + location);
};

var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
jaero(); //Returns "Jae is 19 and he lives in South Carolina"