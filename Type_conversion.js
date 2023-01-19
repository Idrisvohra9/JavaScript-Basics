{
  // |Variables we are using:
  let i = 4,
    f = 3.14,
    b = true,
    nan = "nope",
    strOfInt = "234",
    str_Of_Float = "78.9",
    arr = [1, 2, "Three", false, 3.56];

  // // Converting Data types to int:
  console.log("=> int");

  // # String to int Mehods: (parseInt(), Number()).

  let strToInt = parseInt(strOfInt);
  strToInt = Number(strOfInt);
  console.log(strToInt, " (", typeof strToInt, ")");
  // # 234(int)

  // # float to int: Methods: (parseInt()).

  let floatToInt = parseInt(f);
  // *In javascript the data type float is also considered as a number hence, the Number() method will not convert int to float.
  console.log(floatToInt, " (", typeof floatToInt, ")");
  // # 3 (int)

  // # Boolean to int: Methods: (Number()).

  let boolToInt = Number(b);
  console.log(boolToInt, " (", typeof boolToInt, ")");
  // # 1 (int)

  console.log();
  // // Converting data types to float:
  console.log("=> float");

  // # String to float: Methods: (parseFloat(), Number()).
  let strToFloat = parseFloat(str_Of_Float);
  console.log(strToFloat, " (", typeof strToFloat, ")");
  // # 3.14 (float)

  // # int to float: int cannot be converted to float because it has a fixed point of .00 that means it is an integer. It can be converted to string with a fixed point of .00(with toFixed(2) method) but if we convert that to int (with parseInt() method) it will loose its fixed points.

  // # The same way bool also cannot be converted to float because it has either 0 or 1 which is integer in precision(.00).

  // imp: Converting NaN to int or float: ! NaN cannot be converted to int or float as it is a string that doesn't contain any number.

  // imp: Array also cannot be converted to int or float or a number cannot be pasred out of an array it can work if the array is a string or converted to a string first.

  console.log();
  // // Converting data types to strings:
  console.log("=> String");

  // # literally any datatype in JS can be converted to string wtf!!!
  // # .toString and String both the methods return string from any of the data type.

  // # int to string: Methods: (toString(), String()).

  let intToStr = i.toString();
  intToStr = String(i); // # This also works...
  console.log(intToStr, " (", typeof intToStr, ")");
  // # 4  ( string )

  // # float to string: Methods: (toString(), String()).

  let floatToStr = String(f);
  console.log(floatToStr, " (", typeof floatToStr, ")");
  // # 3.14  ( string )

  // # bool to string: Methods: (toString, String()).

  let boolToStr = String(b);
  console.log(boolToStr, " (", typeof boolToStr, ")");
  // # true  ( string )

  // # Array to string: Methods: (toString, String()).

  let arrToStr = String(arr);
  console.log(arrToStr, " (", typeof arrToStr, ")");
  // # 1,2,Three,false,3.56  ( string )
}
