namespace heap {
  export function heapSort(arr: number[]) {
    const len = arr.length;
    let end = len - 1;

    heapify(arr, len);

    while (end > 0) {
      swap(arr, end--, 0);
      siftDown(arr, 0, end);
    }
    return arr;
  }

  function heapify(arr: number[], len: number) {
    let mid = Math.floor((len - 2) / 2); // 부모 노드 index(Math.floor((index - 1) / 2))
    while (mid >= 0) {
      siftDown(arr, mid--, len - 1);
    }
  }

  function siftDown(arr: number[], start: number, end: number) {
    let currentIndex = start;
    let left = currentIndex * 2 + 1; // 왼쪽 자식노드 index
    let right = currentIndex * 2 + 2; // 오른쪽 자식노드 index
    while (left <= end) {
      let largest = currentIndex; // parent노드의 index를 먼저 할당

      if (arr[largest] < arr[left]) {
        largest = left;
      }

      if (right <= end && arr[largest] < arr[right]) {
        largest = right;
      }

      if (largest === currentIndex) {
        return;
      }

      swap(arr, currentIndex, largest);
      currentIndex = largest;
      left = currentIndex * 2 + 1;
    }
  }

  function swap(arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  const exampleArray: number[] = [64, 34, 25, 12, 22, 11, 90];

  const sortedArray: number[] = heapSort(exampleArray);
  console.log("정렬된 배열:", sortedArray); // 출력: [ 11, 12, 22, 25, 34, 64, 90 ]
}
