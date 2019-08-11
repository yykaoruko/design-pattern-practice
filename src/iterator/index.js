{
    var Book_1 = /** @class */ (function () {
        function Book(name) {
            if (name === void 0) { name = undefined; }
            this._name = name;
        }
        Book.prototype.getName = function () {
            return this._name;
        };
        return Book;
    }());
    var BookShelf = /** @class */ (function () {
        function BookShelf(maxsize) {
            this._books = [];
            this._last = 0;
            for (var i = 0; i < maxsize; i++) {
                this._books.push(new Book_1());
            }
            console.log(this._books);
        }
        BookShelf.prototype.getBookAt = function (index) {
            return this._books[index];
        };
        BookShelf.prototype.appendBook = function (book) {
            this._books[this._last] = book;
            this._last++;
        };
        BookShelf.prototype.getLength = function () {
            return this._last;
        };
        BookShelf.prototype.iterator = function () {
            return new BookShelfIterator_1(this);
        };
        return BookShelf;
    }());
    var BookShelfIterator_1 = /** @class */ (function () {
        function BookShelfIterator(bookShelf) {
            this._bookShelf = bookShelf;
            this._index = 0;
        }
        BookShelfIterator.prototype.hasNext = function () {
            if (this._index < this._bookShelf.getLength()) {
                return true;
            }
            else {
                return false;
            }
        };
        BookShelfIterator.prototype.next = function () {
            var book = this._bookShelf.getBookAt(this._index);
            this._index++;
            return book;
        };
        return BookShelfIterator;
    }());
    var bookShelf = new BookShelf(4);
    bookShelf.appendBook(new Book_1('a'));
    bookShelf.appendBook(new Book_1('b'));
    bookShelf.appendBook(new Book_1('c'));
    bookShelf.appendBook(new Book_1('d'));
    bookShelf.appendBook(new Book_1('e'));
    var it = bookShelf.iterator();
    while (it.hasNext()) {
        var book = it.next();
        console.log(book.getName());
    }
}
