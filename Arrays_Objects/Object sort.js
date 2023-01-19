{
  const nObj = {
    four: 4,
    two: 2,
    one: 1,
    five: 5,
    three: 3,
  };
  const contactObj = {
    Abu: 91919122,
    Mom: 89393299,
    Nana: 38293983,
    Idris: 39849829,
    Mami: 32832923,
  };
  console.log("Original contactObj{}: " + contactObj);
  // // Sorting the contactObj{} in Ascending order as per keys:
  // 1. making the array to store its keys:
  const keysArr = Object.keys(contactObj);
  // 2. sorting the array of keys in ascending order
  keysArr.sort();
  // 3. Making a new object that will store the contactObj sorted by keys in ascending order
  const AscSort_contactObj_keys = {};

  // 4. assigning the sorted key names to its values and adding them to the new object.
  for (let i = 0; i < keysArr.length; i++) {
    AscSort_contactObj_keys[keysArr[i]] = contactObj[keysArr[i]];
  }
  // 5. printing the new object:
  console.log(
    "The keys of contactObj{} sorted in ascending order: ",
    AscSort_contactObj_keys
  );

  console.log(); // This is just for line breaks

  // // Sorting the contactObj{} in Descending order as per keys:
  // imp: The first two steps are the same from above..
  // 3. Reversing the keysArr so that the value of keys are in Descending order.

  keysArr.reverse();

  // 4. Making a new object that will store the contactObj sorted by keys in ascending order
  const DescSort_contactObj_keys = {};

  // 5. assigning the sorted key names to its values and adding them to the new object.
  for (let i = 0; i < keysArr.length; i++) {
    DescSort_contactObj_keys[keysArr[i]] = contactObj[keysArr[i]];
  }

  // 6. printing the new object:
  console.log(
    "The keys of contactObj{} sorted in Descending order: ",
    DescSort_contactObj_keys
  );

  console.log();

  console.log("Original nObj{}:", nObj);
  // // Sorting the values of nObj in Ascending order:

  // 1. Making an array to store the values of the nObj:
  const valuesArr = Object.values(nObj);

  // 2. Sorting the values of valuesArr in Ascending order:
  valuesArr.sort(function (a, b) {
    return a - b;
  });

  // 3. Making an obj that will store the values of elements of the original nObj in Ascending order:
  const AscSort_nObj_values = {};

  // 4. Making a function that returns a key as per the values

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] == value); // imp: This is a way to pass a short function into a function without defining it previously or naming it.
    // imp: If you do not know about the find method check out line no.340 in Array_Methods
  }

  // 5. Making the object sorted in ascending order:
  for (let i = 0; i < valuesArr.length; i++) {
    // 5.2 Passing the nObj, the values of sorted valuesArr in the function and then getting the keys and assigning it to its values
    AscSort_nObj_values[getKeyByValue(nObj, valuesArr[i])] = valuesArr[i];
  }
  // 6. printing the new object:
  console.log(
    "The sorted nObj{} in ascending order as per values:",
    AscSort_nObj_values
  );

  // // Sorting the values of nObj in descending order:

  // imp: The first two steps are the same from above..
  // 3. Reversing the ascending order of the valuesArr. So, it is sorted in descending order:

  valuesArr.reverse();

  // 4. Making an obj that will store the values of elements of the original nObj in Descending order:
  const DescSort_nObj_values = {};

  // imp: The 5th step is also the same as above as we need to get the keys as per its values i.e. the function.

  // 6. Making the object sorted in descending order:
  for (let i = 0; i < valuesArr.length; i++) {
    DescSort_nObj_values[getKeyByValue(nObj, valuesArr[i])] = valuesArr[i];
  }

  // 7. printing the new object:
  console.log(
    "The sorted nObj{} in descending order as per values:",
    DescSort_nObj_values
  );
}
