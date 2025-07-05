class Node {
  /**
   * @param {any} data
   * @param {Node} left
   * @param {Node} right
   */
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  /**
   * @param {Node} node
   */
  levelOrder(node) {
    if (node === undefined || node === null) return;
    let queue = [];
    queue.push(node);

    while (queue.length !== 0) {
      let currentNode = queue.pop();

      console.log(currentNode.data);
      if (currentNode.left !== undefined) queue.push(currentNode.left);
      if (currentNode.right !== undefined) queue.push(currentNode.right);
      queue.pop();
    }
  }

  /**
   * @param {Node} node
   */
  preOrder(node) {
    if (node === undefined || node === null) return;
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  /**
   * @param {Node} node
   */
  inOrder(node) {
    if (node === undefined || node === null) return;
    this.preOrder(node.left);
    console.log(node.data);
    this.preOrder(node.right);
  }

  /**
   * @param {Node} node
   */
  postOrder(node) {
    if (node === undefined || node === null) return;
    this.preOrder(node.left);
    this.preOrder(node.right);
    console.log(node.data);
  }
}
