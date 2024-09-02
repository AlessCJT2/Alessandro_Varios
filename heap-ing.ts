import TreeNode from "./tree-node-ing";

class Heap {
  private root: TreeNode | null;

  constructor(rootValue: number) {
    this.root = new TreeNode(rootValue);
  }

  public depth(value: number, ref: TreeNode | null = this.root): number {
    if (ref === null) {
      return -1;
    } else if (ref.data === value) {
      return 0;
    }

    const leftDepth = this.depth(value, ref.left);
    const rightDepth = this.depth(value, ref.right);

    if (leftDepth === -1 && rightDepth === -1) {
      return -1;
    }

    return Math.max(leftDepth, rightDepth) + 1;
  }

  public height(ref: TreeNode | null = null): number {
    if (ref === null) {
      return 0;
    }

    return Math.max(this.height(ref.left), this.height(ref.right));
  }

  public insertLeft(value: number, ref: number) {
    const refNode = this.search(ref);

    if (refNode !== null) {
      const newNode = new TreeNode(value);
      console.log(refNode.left);
      if (refNode.left === null) {
        refNode.left = newNode;
      } else {
        throw new Error("The left side is not empty");
      }
    } else {
      throw new Error("The reference doesn't exist");
    }
  }

  public insertRight(value: number, ref: number) {
    const refNode = this.search(ref);

    if (refNode !== null) {
      const newNode = new TreeNode(value);
      if (refNode.right === null) {
        refNode.right = newNode;
      } else {
        throw new Error("The right side is not empty");
      }
    } else {
      throw new Error("The reference doesn't exist");
    }
  }

  public preorder(ref: TreeNode | null = this.root): string {
    if (ref === null) {
      return "";
    }

    if (ref.left === null && ref.right === null) {
      return ref.data.toString();
    }

    let result = `${ref.data} (`;
    result += `${this.preorder(ref.left)},`;
    result += `${this.preorder(ref.right)})`;

    return result;
  }

  public search(
    value: number,
    ref: TreeNode | null = this.root
  ): TreeNode | null {
    if (ref !== null && ref.data === value) {
      return ref;
    } else if (ref !== null) {
      const leftResult = this.search(value, ref.left);

      if (leftResult === null) {
        const rightResult = this.search(value, ref.right);

        return rightResult;
      }

      return leftResult;
    }

    return null;
  }
}

export default Heap;