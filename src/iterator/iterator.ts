{
  interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    // return(value?: any): IteratorResult<T>;
    // throw(value?: any): IteratorResult<T>;
  }

  interface IteratorResult<T> {
    value: T;
    done: boolean;
  }

  interface Aggregate<T> {
    iterator(): Iterator<T>;
  }

  class Book {
    private _name: string;
    constructor(name = undefined) {
      this._name = name;
    }
    getName() {
      return this._name;
    }
  }

  class BookShelf implements Aggregate<Book> {
    public _books: Book[] = [];
    constructor(books: Book[] = []) {
      for (let item of books) {
        this._books.push(item);
      }
    }
    getBooks(): Book[] {
      return this._books;
    }
    getLength(): number {
      return this._books.length;
    }
    iterator(): BookShelfIterator {
      return new BookShelfIterator(this);
    }
  }

  class BookShelfIterator implements Iterator<Book> {
    private _bookShelf: BookShelf;
    private _pointer: number = 0;
    constructor(bookShelf: BookShelf) {
      this._bookShelf = bookShelf;
      this._pointer = 0;
    }
    next(): IteratorResult<Book> {
      if (this._pointer < this._bookShelf.getLength()) {
        return {
          done: false,
          value: this._bookShelf.getBooks()[this._pointer++],
        };
      } else {
        return {
          done: true,
          value: null,
        };
      }
    }
  }

  const bookShelf = new BookShelf([new Book('book1'), new Book('book2')]);
  const bookShelfIterator = bookShelf.iterator();

  console.log(bookShelfIterator.next().value);
  console.log(bookShelfIterator.next().value);
  console.log(bookShelfIterator.next().value);
}
