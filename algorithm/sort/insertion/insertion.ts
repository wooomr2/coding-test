namespace insertion {
  function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i]; // 현재 요소를 선택합니다.(두번째요소부터 선택)
      let j = i - 1;

      // 현재 요소보다 큰 요소들을 오른쪽으로 한 칸씩 이동합니다.
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }

      // 현재 요소를 적절한 위치에 삽입합니다.
      arr[j + 1] = current;
    }

    return arr;
  }

  const exampleArray: number[] = [64, 34, 25, 12, 22, 11, 90];

  const sortedArray: number[] = insertionSort(exampleArray);
  console.log("정렬된 배열:", sortedArray); // 출력: [ 11, 12, 22, 25, 34, 64, 90 ]
}
