class Queue<T> {
  private items: T[];

  constructor() {
      this.items = [];
  }

  enqueue(element: T): void {
      this.items.push(element);
  }

  dequeue(): T | undefined {
      return this.items.shift();
  }

  peek(): T | undefined {
      return this.items[0];
  }

  isEmpty(): boolean {
      return this.items.length === 0;
  }

  size(): number {
      return this.items.length;
  }

  clear(): void {
      this.items = [];
  }

  toArray(): T[] {
      return this.items.slice();
  }
}

// 사용 예제
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // 출력: 1
console.log(queue.size()); // 출력: 3
console.log(queue.dequeue()); // 출력: 1

console.log(queue.toArray()); // 출력: [2, 3]
console.log(queue.size());    // 출력: 2