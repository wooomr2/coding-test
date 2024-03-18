namespace shell {
  export function shellSort(arr: number[]) {
    const len = arr.length;
    let gap = Math.floor(len / 2);

    while (gap > 0) {
      for (let i = gap; i < len; i++) {
        let j = i;
        const current = arr[i];
        while (j >= gap && current < arr[j - gap]) {
          arr[j] = arr[j - gap];
          j -= gap;
        }
        arr[j] = current;
      }
      gap = Math.floor(gap / 2);
    }
    return arr;
  }

  const exampleArray: number[] = [64, 34, 25, 12, 22, 11, 90];

  const sortedArray: number[] = shellSort(exampleArray);
  console.log("정렬된 배열:", sortedArray); // 출력: [ 11, 12, 22, 25,
}
