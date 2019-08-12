{
    // 継承
    class Banner {
        constructor(str) {
            this._string = str;
        }
        showWithParen() {
            console.log(`(${this._string})`);
        }
        showWithAster() {
            console.log(`**${this._string}**`);
        }
    }
    class PrintBanner extends Banner {
        constructor(str) {
            super(str);
        }
        printWeak() {
            this.showWithParen();
        }
        printStrong() {
            this.showWithAster();
        }
    }
    const printBanner = new PrintBanner('aa'); // Print型を強調するため
    printBanner.printWeak();
    printBanner.printStrong();
}
{
    // 委譲
    class Banner {
        constructor(str) {
            this._string = str;
        }
        showWithParen() {
            console.log(`(${this._string})`);
        }
        showWithAster() {
            console.log(`**${this._string}**`);
        }
    }
    class Print {
    }
    class PrintBanner extends Print {
        constructor(str) {
            super();
            this._banner = new Banner(str);
        }
        printWeak() {
            this._banner.showWithParen();
        }
        printStrong() {
            this._banner.showWithAster();
        }
    }
    const printBanner = new PrintBanner('b'); // Print型を強調するため
    printBanner.printWeak();
    printBanner.printStrong();
}
