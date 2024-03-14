import { TreeNode } from "./tree-node";

class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // 전위 순회 (Preorder Traversal)
  preorderTraversal(node: TreeNode<T> | null = this.root): void {
    if (node) {
      console.log(node.value);
      this.preorderTraversal(node.left);
      this.preorderTraversal(node.right);
    }
  }

  // 중위 순회 (Inorder Traversal)
  inorderTraversal(node: TreeNode<T> | null = this.root): void {
    if (node) {
      this.inorderTraversal(node.left);
      console.log(node.value);
      this.inorderTraversal(node.right);
    }
  }

  // 후위 순회 (Postorder Traversal)
  postorderTraversal(node: TreeNode<T> | null = this.root): void {
    if (node) {
      this.postorderTraversal(node.left);
      this.postorderTraversal(node.right);
      console.log(node.value);
    }
  }
}

// 사용 예제
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(20);

console.log("Preorder Traversal:");
tree.preorderTraversal(); // 출력: 10, 5, 3, 7, 15, 12, 20

console.log("Inorder Traversal:");
tree.inorderTraversal(); // 출력: 3, 5, 7, 10, 12, 15, 20

console.log("Postorder Traversal:");
tree.postorderTraversal(); // 출력: 3, 7, 5, 12, 20, 15, 10
