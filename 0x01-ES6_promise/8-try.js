export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
<<<<<<< HEAD
    throw new Error('cannot divide by 0');
  } else {
    const result = numerator / denominator;
    return result;
  }
=======
    throw Error('cannot divide by 0');
  }
  return numerator / denominator;
>>>>>>> 80699723b3ad6347a8e7f042729fd4ce74e307b9
}
