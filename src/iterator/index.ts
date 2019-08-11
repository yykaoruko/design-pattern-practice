{
  // 一つずつスキャンするインターフェース
  interface MyIterator {
    hasNext(): boolean;
    next(): unknown;
  }

  // iteratorメソッドを持った集合体
  // 集合体をiteratorメソッドで一つずつスキャンできる
  // どうゆう風にスキャンしていくかは、MyIteratorによる
  interface Aggregate {
    iterator(): MyIterator;
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

  class BookShelf implements Aggregate {
    private _books: Book[] = [];
    private _last: number = 0;
    constructor(maxsize: number) {
      for (let i = 0; i < maxsize; i++) {
        this._books.push(new Book());
      }
      console.log(this._books);
    }
    getBookAt(index: number): Book {
      return this._books[index];
    }
    appendBook(book: Book): void {
      this._books[this._last] = book;
      this._last++;
    }
    getLength(): number {
      return this._last;
    }
    iterator(): BookShelfIterator {
      return new BookShelfIterator(this);
    }
  }

  class BookShelfIterator implements MyIterator {
    private _bookShelf: BookShelf;
    private _index: number;
    constructor(bookShelf: BookShelf) {
      this._bookShelf = bookShelf;
      this._index = 0;
    }
    hasNext(): boolean {
      if (this._index < this._bookShelf.getLength()) {
        return true;
      } else {
        return false;
      }
    }
    next(): Book {
      const book: Book = this._bookShelf.getBookAt(this._index);
      this._index++;
      return book;
    }
  }

  const bookShelf = new BookShelf(4);

  bookShelf.appendBook(new Book('a'));
  bookShelf.appendBook(new Book('b'));
  bookShelf.appendBook(new Book('c'));
  bookShelf.appendBook(new Book('d'));
  bookShelf.appendBook(new Book('e'));

  const it = bookShelf.iterator();
  while (it.hasNext()) {
    const book = it.next();
    console.log(book.getName());
  }
}
