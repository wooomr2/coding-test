namespace selection {
  function selectionSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;

      // 현재 인덱스부터 배열 끝까지 순회하며 가장 작은 요소의 인덱스를 찾습니다.
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      // 가장 작은 요소와 현재 요소를 교환합니다.
      if (minIdx !== i) {
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
      }
    }

    return arr;
  }

  // 테스트를 위한 예시 배열
  const exampleArray: number[] = [64, 34, 25, 12, 22, 11, 90];

  // 선택 정렬을 적용하여 배열을 정렬합니다.
  const sortedArray: number[] = selectionSort(exampleArray);
  console.log("정렬된 배열:", sortedArray); // 출력: [ 11, 12, 22, 25, 34, 64, 90 ]
}
