function romanToInteger(romanNumeral) {
    const romanNumeralsMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentChar = romanNumeral[i];
      const currentValue = romanNumeralsMap[currentChar];
  
      if (currentValue < prevValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return result;
  }
  
  // Test the function
  const romanNumeral1 = "IX";
  const romanNumeral2 = "XXI";
  const romanNumeral3 = "MCMXCIV";
  
  console.log(romanToInteger(romanNumeral1)); 
  console.log(romanToInteger(romanNumeral2)); 
  console.log(romanToInteger(romanNumeral3)); 
  