export function getBubbleSortAnimations(array) {
  const animations = [];

  if (array.length <= 1) return array;
  bubbleSortHelper(array, animations);
  return animations;
}

function bubbleSortHelper(array, animations) {
  let length = array.length;
  let i, j;
  let swapped;

  for (i = 0; i < length; i++) {
    swapped = false;
    for (j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
        animations.push([j, array[j + 1], j + 1, array[j]]);

        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (swapped === false) break;
  }
}
