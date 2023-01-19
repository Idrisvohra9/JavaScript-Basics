{
  let n = 9;
  let f = 3.14;
  let i = Infinity;

  let s = "hello1";
  let nan = NaN;

  let b = true;

  let arr = [1, 2, 3];
  let obj = {
    Name: "Idris",
    Age: 19,
    Gender: "Male",
    Status: "Single",
    IsStudent: true,
  };

  // $Number Datatype teller:
  console.log("n = " + n, ",", "f = " + f, ",", "i = " + i);
  console.log("n==Number(n):", n == Number(n));
  console.log("Number.isInteger(n):", Number.isInteger(n));
  console.log(
    "Number.isSafeInteger(n):",
    Number.isSafeInteger(n),
    "(If the number is not a float number..)"
  );
  console.log(
    "Number.isFinite(n):",
    Number.isFinite(n),
    "(If the number is finite..)"
  );
  console.log("typeof n == 'number':", typeof n == "number");
  console.log("!!n instanceof Number:", n instanceof Number); // imp: Does'nt work...

  console.log(
    "Number.isSafeInteger(f):",
    Number.isSafeInteger(f),
    "(If the number is a floating point number..)"
  );
  console.log(
    "Number.isFinite(i):",
    Number.isFinite(i),
    "(If the number is infinite..)"
  );

  console.log();

  // $String Datatype teller:
  console.log("s = " + s);
  console.log("s==String(s):", s == String(s));
  console.log("typeof s == 'string':", typeof s == "string");
  console.log("!!s instanceof String:", s instanceof String); // imp: Does'nt work...

  console.log();

  // $Boolean Datatype teller:
  console.log("b = " + b);
  console.log("b==Boolean(b):", b == Boolean(b));
  console.log("typeof b == 'boolean':", typeof b == "boolean");
  console.log("!!b instanceof Boolean:", b instanceof Boolean); // ?Does'nt work...

  console.log();

  // $Array Datatype teller:
  console.log("arr = ", arr);
  console.log(
    "!!arr==Array(arr):",
    arr == Array(arr),
    "(This is because the Array Constructor creates a nested array if used on a datatype other than Array)"
  );
  console.log(
    "~~typeof arr == 'object':",
    typeof arr == "(object",
    "The type of arr is 'object'..)"
  );
  console.log("Array.isArray(arr):", Array.isArray(arr));
  console.log("arr instanceof Array:", arr instanceof Array);

  console.log();

  // $Object Datatype teller:
  console.log("obj = ", obj);
  console.log("obj==Object(obj):", obj == Object(obj));
  console.log("typeof obj=='object':", typeof obj == "object");
  console.log("obj instanceof Object:", obj instanceof Object);

  console.log();

  // $NaN Datatype teller:
  console.log("nan = ", nan);
  // console.log(nan == NaN(nan));// There is no NaN constructor.
  console.log(typeof nan == "number"); // ?
}
