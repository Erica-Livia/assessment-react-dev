class MyListNode<T> {
  value: T;
  next: MyListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class MyLinkedList<T> {
  head: MyListNode<T> | null = null;

  // Add a new element to the end of the list
  add(value: T): void {
    const newNode = new MyListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current: MyListNode<T> | null = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Remove an element by value
  remove(value: T): void {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current: MyListNode<T> | null = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Find an element by value
  find(value: T): MyListNode<T> | null {
    let current: MyListNode<T> | null = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Print the list for debugging
  printList(): void {
    let current: MyListNode<T> | null = this.head;
    const values: T[] = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}