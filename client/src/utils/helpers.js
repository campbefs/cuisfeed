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