export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function timeFormatter (diffTime, createdAt) {
    
  if (diffTime/60 < 1) {
    return Math.round(diffTime) + 's'
  }

  if (diffTime/60 >= 1 && diffTime/60 < 60) {
    return Math.floor(diffTime/60) + 'm'
  }

  if (diffTime/60/60 >= 1 && diffTime/60/60 < 24 ) {
    return Math.floor(diffTime/60/60) + 'h'
  }

  if (diffTime/60/60/24 >= 1 && diffTime/60/60/24 < 7 ) {
    return Math.floor(diffTime/60/60/24) + 'd'
  }

  if (diffTime/60/60/24 > 7 ) {
    return createdAt;
  }
}

export const numFormatter = num => {
  if (num >= 10000 ) {
      let formatted_num = Math.round(Math.floor(num / 1000))
      return `${formatted_num.toString()}k`
  }
  if (num >= 1000 ) {
      let formatted_num = (Math.floor(num / 100)*.1).toFixed(1)
      return `${formatted_num.toString()}k`
  }
  return num.toString();
}

export const difficultyFunc = (totalTime, ingredientCount) => {
  if (ingredientCount > 15 || totalTime > 180) {
    return 'hard';
  } else if (ingredientCount > 8 || totalTime > 30) {
    return 'medium';
  } else {
    return 'easy';
  }
}