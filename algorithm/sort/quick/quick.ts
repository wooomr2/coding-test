namespace quick {
  function quickSort(arr: number[]): number[] {
    if (arr.length < 2) {
      return arr;
    }

    const pivotIndex = Math.floor(arr.length / 2); // 중간 인덱스를 피벗으로 선택
    const pivot = arr.splice(pivotIndex, 1)[0]; // 피벗을 배열에서 제거하고 변수에 저장

    const left: number[] = [];
    const right: number[] = [];

    for (const n of arr) {
      n < pivot
        ? left.push(n) // 피벗보다 작은 값은 왼쪽 배열에 추가
        : right.push(n); // 피벗보다 크거나 같은 값은 오른쪽 배열에 추가
    }

    return [...quickSort(left), pivot, ...quickSort(right)]; // 왼쪽 배열, 피벗, 오른쪽 배열을 재귀적으로 정렬 후 합침
  }

  const exampleArray: number[] = [64, 34, 25, 12, 22, 11, 90];

  const sortedArray: number[] = quickSort(exampleArray);
  console.log("정렬된 배열:", sortedArray); // 출력: [ 11, 12, 22, 25, 34, 64, 90 ]
}