namespace merge {
  function mergeSort(arr: number[]): number[] {
    if (arr.length < 2) {
      return arr;
    }

    const left = arr.splice(0, arr.length / 2);

    return merge(mergeSort(left), mergeSort(arr));
  }

  function merge(left: number[], right: number[]): number[] {
    const arr: number[] = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift()!);
      } else {
        arr.push(right.shift()!);
      }
    }

    return [...arr, ...left, ...right];
  }

  const exampleArray: number[] = [64, 34, 25, 12, 22, 11, 90];

  const sortedArray: number[] = mergeSort(exampleArray);
  console.log("정렬된 배열:", sortedArray); // 출력: [ 11, 12, 22, 25, 34, 64, 90 ]
}
