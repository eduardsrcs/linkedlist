class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(data) {
    // const node = {data, next: null}
    const node = new Node(data)

    if(this.tail) {
      this.tail.next = node
    }

    if(!this.head) {
      this.head = node
    }

    this.tail = node
  }

  prepend(data) {
    // const node = {data, next: this.head}
    const node = new Node(data, this.head)

    this.head = node

    if(!this.tail) {
      this.tail = node
    }
  }

  find(data) {
    if(!this.head){
      return
    }

    let current = this.head
    while(current) {
      if(current.data === data) {
        return current
      }
      current = current.next
    }
  }

  insertAfter(after, data) {
    const found = this.find(after)

    if(!found) {
      return
    }

    found.next = new Node(data, found.next)
  }

  toArray() {
    const output = []
    let current = this.head

    while(current) {
      output.push(current)
      current = current.next
    }

    return output
  }

  remove(data) {
    if(!this.head) {
      return
    }

    while (this.head && this.head.data === data) {
      this.head = this.head.next
    }

    let current = this.head
    while( current.next) {
      if (current.next.data === data) {
        // remove
        current.next = current.next.next
      } else {
        current = current.next
      }
    }

    if (this.tail.data === data) {
      this.tail = current
    }
  }
}

const list = new LinkedList()
list.append('my')
list.append('name')
list.prepend('Hi')
// list.append('is')
list.append('Slim')
list.append('Shady')
list.insertAfter('name', 'is')

list.prepend(42)
list.append(24)

list.remove(42)
list.remove(24)
list.remove(24)

console.log(list.toArray());
console.log(list.find('Slim'));