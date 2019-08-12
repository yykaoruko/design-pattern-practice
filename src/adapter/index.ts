{
  // 継承
  class Banner {
    private _string: string;
    constructor(str: string) {
      this._string = str;
    }
    showWithParen() {
      console.log(`(${this._string})`);
    }
    showWithAster() {
      console.log(`**${this._string}**`);
    }
  }

  interface Print {
    printWeak(): void;
    printStrong(): void;
  }

  class PrintBanner extends Banner implements Print {
    constructor(str: string) {
      super(str);
    }
    printWeak() {
      this.showWithParen();
    }
    printStrong() {
      this.showWithAster();
    }
  }

  const printBanner = new PrintBanner('aa');
  printBanner.printWeak();
  printBanner.printStrong();
}

{
  // 委譲
  class Banner {
    private _string: string;
    constructor(str: string) {
      this._string = str;
    }
    showWithParen() {
      console.log(`(${this._string})`);
    }
    showWithAster() {
      console.log(`**${this._string}**`);
    }
  }

  abstract class Print {
    abstract printWeak(): void;
    abstract printStrong(): void;
  }

  class PrintBanner extends Print {
    private _banner: Banner;
    constructor(str: string) {
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

  const printBanner = new PrintBanner('b');
  printBanner.printWeak();
  printBanner.printStrong();
}
