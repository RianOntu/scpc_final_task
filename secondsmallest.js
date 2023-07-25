function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Error: Array must contain at least two elements.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      return "Error: There is no second smallest element in the array.";
    }
  
    return secondSmallest;
  }
  
  // Test the function
  const array1 = [5, 3, 8, 1, 7, 2, 6];
  const array2 = [4, 4, 4, 4];
  const array3 = [10];
  const array4 = [8, 8, 8, 2, 2, 2];
  
  console.log(findSecondSmallest(array1)); 
  console.log(findSecondSmallest(array2)); 
  console.log(findSecondSmallest(array3)); 
  console.log(findSecondSmallest(array4)); 
  