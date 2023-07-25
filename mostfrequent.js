function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let mostFrequentElement;
    let maxFrequency = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];
      frequencyMap[currentElement] = (frequencyMap[currentElement] || 0) + 1;
  
      if (frequencyMap[currentElement] > maxFrequency) {
        maxFrequency = frequencyMap[currentElement];
        mostFrequentElement = currentElement;
      }
    }
  
    return mostFrequentElement;
  }
  
  
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const outputElement = findMostFrequentElement(inputArray);
  console.log(outputElement); 
  