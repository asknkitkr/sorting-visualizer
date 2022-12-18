// Insertion Sort Algorithm
export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;

  const auxiliaryArray = array.slice();

  insertionSortHelper(auxiliaryArray, animations);
  return animations;
}

function insertionSortHelper(array, animations) {
  for (let i = 1; i < array.length; ++i) {
    const key = array[i];
    let j = i;

    while ((j > 0) & (array[j - 1] > key)) {
      animations.push([j, j - 1]);
      animations.push([j, j - 1]);
      animations.push([j, array[j - 1]]);

      array[j] = array[j - 1];
      j--;
    }

    animations.push([j, i]);
    animations.push([j, i]);
    animations.push([j, key]);

    array[j] = key;
  }
}
