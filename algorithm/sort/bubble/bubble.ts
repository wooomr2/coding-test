namespace bubble {
  function bubbleSort(arr: number[]): number[] {
    const n = arr.length;

    // 배열을 순회하며 인접한 요소를 비교하여 정렬합니다.
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // 현재 요소와 다음 요소를 비교하여 순서가 잘못되어 있다면 교환합니다.
        if (arr[j] > arr[j + 1]) {
          // 임시 변수를 사용하여 요소를 교환합니다.
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  }

  const exampleArray: number[] = [64, 34, 25, 12, 22, 11, 90];

  const sortedArray: number[] = bubbleSort(exampleArray);
  console.log("정렬된 배열:", sortedArray); // 출력: [ 11, 12, 22, 25, 34, 64, 90 ]s
}
