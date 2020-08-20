const twoWords = (wordData) => {

    const longest = wordData.split('\n')[0].toLowerCase();
    const first = wordData.split('\n')[1].toLowerCase();
    const last = wordData.split('\n')[2].toLowerCase();
  
    const strToArr = longest.split(' '); 
  
    for (let i=0; i <strToArr.length; i++){

      if (strToArr[i] === first){
        for (let j =0; j <strToArr.length; j++){
          if (strToArr[j] === last){
            return j - i;
          }
        }
      }
    }
    return "-1"
  }
  
  const input = "Peter piper picked a patch of pickeled peppers and sally sold seashells by the seashore \npeter\n`sally"; 
  
  twoWords(input);