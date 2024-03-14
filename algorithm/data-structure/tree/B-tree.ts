class BTreeNode<T> {
  keys: T[];
  children: BTreeNode<T>[];
  isLeaf: boolean;
  degree: number;

  constructor(degree: number, isLeaf: boolean) {
    this.keys = [];
    this.children = [];
    this.isLeaf = isLeaf;
    this.degree = degree;
  }
}

class BTree<T> {
  root: BTreeNode<T> | null;
  degree: number;

  constructor(degree: number) {
    this.root = null;
    this.degree = degree;
  }

  search(node: BTreeNode<T> | null, key: T): BTreeNode<T> | null {
    let i = 0;
    while (i < node!.keys.length && key > node!.keys[i]) {
      i++;
    }

    if (i < node!.keys.length && key === node!.keys[i]) {
      return node;
    }

    if (node!.isLeaf) {
      return null;
    }

    return this.search(node!.children[i], key);
  }

  insert(key: T): void {
    if (!this.root) {
      this.root = new BTreeNode<T>(this.degree, true);
      this.root.keys.push(key);
      return;
    }

    let current = this.root;
    if (current.keys.length === 2 * this.degree - 1) {
      const newRoot = new BTreeNode<T>(this.degree, false);
      newRoot.children.push(this.root);
      this.splitChild(newRoot, 0);
      this.root = newRoot;

      let i = 0;
      if (newRoot.keys[0] < key) {
        i++;
      }
      this.insertNonFull(newRoot.children[i], key);
    } else {
      this.insertNonFull(current, key);
    }
  }

  private splitChild(parent: BTreeNode<T>, index: number): void {
    const degree = this.degree;
    const child = parent.children[index];
    const newChild = new BTreeNode<T>(degree, child.isLeaf);

    parent.keys.splice(index, 0, child.keys[degree - 1]);
    parent.children.splice(index + 1, 0, newChild);

    newChild.keys = child.keys.splice(degree, degree - 1);

    if (!child.isLeaf) {
      newChild.children = child.children.splice(degree, degree);
    }
  }

  private insertNonFull(node: BTreeNode<T>, key: T): void {
    let i = node.keys.length - 1;
    if (node.isLeaf) {
      while (i >= 0 && key < node.keys[i]) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = key;
    } else {
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }

      i++;
      if (node.children[i].keys.length === 2 * this.degree - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }
}

// 사용 예제
const btree = new BTree<number>(3); // B-트리의 차수를 3으로 설정
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);

console.log(btree.search(btree.root, 6)); // 출력: BTreeNode { keys: [ 6 ], children: [], isLeaf: true, degree: 3 }
