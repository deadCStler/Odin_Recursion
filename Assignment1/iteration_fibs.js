function fibs(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let result = [0, 1];
    let prev = 1,
      sec_prev = 0,
      fibN = 0;
    while (n > 2) {
      fibN = prev + sec_prev;
      result.push(fibN);
      sec_prev = prev;
      prev = fibN;
      n--;
    }
    return result;
  }
}

console.log(fibs(8));
