class MinHeap<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  get size(): number {
    return this.items.length;
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private swap(index1: number, index2: number): void {
    [this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1],
    ];
  }

  private siftUp(): void {
    let currentIndex = this.items.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (
      currentIndex > 0 &&
      this.items[currentIndex] < this.items[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  private siftDown(): void {
    let currentIndex = 0;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);

    while (leftChildIndex < this.items.length) {
      let smallerChildIndex = leftChildIndex;
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      if (
        rightChildIndex < this.items.length &&
        this.items[rightChildIndex] < this.items[smallerChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.items[currentIndex] < this.items[smallerChildIndex]) break;

      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
      leftChildIndex = this.getLeftChildIndex(currentIndex);
    }
  }

  insert(value: T): void {
    this.items.push(value);
    this.siftUp();
  }

  extractMin(): T | undefined {
    if (this.items.length === 0) return undefined;

    const min = this.items[0];
    const last = this.items.pop();

    if (this.items.length > 0 && last !== undefined) {
      this.items[0] = last;
      this.siftDown();
    }

    return min;
  }
}

// 사용 예제
const minHeap = new MinHeap<number>();
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);
minHeap.insert(5);
minHeap.insert(4);

console.log(minHeap.extractMin()); // 출력: 1
console.log(minHeap.extractMin()); // 출력: 2
console.log(minHeap.extractMin()); // 출력: 3
