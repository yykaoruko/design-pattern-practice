{
    class Book {
        constructor(name = undefined) {
            this._name = name;
        }
        getName() {
            return this._name;
        }
    }
    class BookShelf {
        constructor(books = []) {
            this._books = [];
            for (let item of books) {
                this._books.push(item);
            }
        }
        getBooks() {
            return this._books;
        }
        getLength() {
            return this._books.length;
        }
        iterator() {
            return new BookShelfIterator(this);
        }
    }
    class BookShelfIterator {
        constructor(bookShelf) {
            this._pointer = 0;
            this._bookShelf = bookShelf;
            this._pointer = 0;
        }
        next() {
            if (this._pointer < this._bookShelf.getLength()) {
                return {
                    done: false,
                    value: this._bookShelf.getBooks()[this._pointer++],
                };
            }
            else {
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
