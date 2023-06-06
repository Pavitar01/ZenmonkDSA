function substring(words) {
    const result = [];
  
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];//mass
      
      for (let j = 0; j < words.length; j++) {

        if (i !== j && words[j].includes(currentWord)) {
          result.push(currentWord);
          break;
        }
      }
    }
  
    return result;
  }

//   words=[]
words = ["mass","as","hero","superhero"]
console.log(substring(words))