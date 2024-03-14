class MaxHeap<T> {
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
      this.items[currentIndex] > this.items[parentIndex]
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
      let largerChildIndex = leftChildIndex;
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      if (
        rightChildIndex < this.items.length &&
        this.items[rightChildIndex] > this.items[largerChildIndex]
      ) {
        largerChildIndex = rightChildIndex;
      }

      if (this.items[currentIndex] > this.items[largerChildIndex]) break;

      this.swap(currentIndex, largerChildIndex);
      currentIndex = largerChildIndex;
      leftChildIndex = this.getLeftChildIndex(currentIndex);
    }
  }

  insert(value: T): void {
    this.items.push(value);
    this.siftUp();
  }

  extractMax(): T | undefined {
    if (this.items.length === 0) return undefined;

    const max = this.items[0];
    const last = this.items.pop();

    if (this.items.length > 0 && last !== undefined) {
      this.items[0] = last;
      this.siftDown();
    }

    return max;
  }
}

// 사용 예제
const maxHeap = new MaxHeap<number>();
maxHeap.insert(3);
maxHeap.insert(2);
maxHeap.insert(1);
maxHeap.insert(5);
maxHeap.insert(4);

console.log(maxHeap.extractMax()); // 출력: 5
console.log(maxHeap.extractMax()); // 출력: 4
console.log(maxHeap.extractMax()); // 출력: 3
