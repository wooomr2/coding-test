namespace heap {
  export function heapSort(arr: number[]) {
    let endIndex = arr.length - 1;

    let midIndex = Math.floor((endIndex - 1) / 2);
    while (midIndex >= 0) {
      shiftDown(arr, midIndex--, endIndex);
    }

    while (endIndex > 0) {
      swap(arr, endIndex--, 0);
      shiftDown(arr, 0, endIndex);
    }

    return arr;
  }

  function shiftDown(arr: number[], midIndex: number, endIndex: number) {
    let currentIndex = midIndex;
    let leftIndex = currentIndex * 2 + 1;
    let rightIndex = currentIndex * 2 + 2;

    while (leftIndex <= endIndex) {
      let largest = currentIndex;

      if (arr[largest] < arr[leftIndex]) {
        largest = leftIndex;
      }

      if (rightIndex <= endIndex && arr[largest] < arr[rightIndex]) {
        largest = rightIndex;
      }

      if (largest === currentIndex) {
        return;
      }

      swap(arr, currentIndex, largest);

      currentIndex = largest;
      leftIndex = currentIndex * 2 + 1;
    }
  }

  function swap(arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  const exampleArray: number[] = [64, 34, 25, 12, 22, 11, 90];

  const sortedArray: number[] = heapSort(exampleArray);
  console.log("정렬된 배열:", sortedArray); // 출력: [ 11, 12, 22, 25, 34, 64, 90 ]
}
