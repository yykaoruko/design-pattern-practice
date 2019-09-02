{
  interface Product {
    use(s: string): void;
    createClone(): Product;
  }

  class Manager {
    private _hash = {};
    constructor() {}
    public register(name: string, prot: Product): void {
      this._hash[name] = prot;
    }
    public create(protoname: string): Product {
      const p: Product = this._hash[protoname];
      return p.createClone();
    }
  }

  class MessageBox implements Product {
    private _decochar: string;
    constructor(decochar: string) {
      this._decochar = decochar;
    }
    public use(s: string) {
      let length = 0;
      for (let i = 0; i < s.length; i++) {
        let chr = s.charCodeAt(i);
        if (
          (chr >= 0x00 && chr < 0x81) ||
          chr === 0xf8f0 ||
          (chr >= 0xff61 && chr < 0xffa0) ||
          (chr >= 0xf8f1 && chr < 0xf8f4)
        ) {
          length += 1;
        } else {
          length += 2;
        }
      }
      for (let i = 0; i < length + 4; i++) {
        process.stdout.write(this._decochar);
      }
      process.stdout.write('\n');
      process.stdout.write(`${this._decochar} ${s} ${this._decochar}\n`);
      for (let i = 0; i < length + 4; i++) {
        process.stdout.write(this._decochar);
      }
      process.stdout.write('\n');
    }
    createClone(): Product {
      let p: Product = null;
      try {
        // シャローコピー
        p = Object.assign(this);
      } catch (error) {
        console.log(error);
      }
      return p;
    }
  }

  // class UnderlinePen {}

  function main() {
    const manegar = new Manager();
    const mbox = new MessageBox('/');
    const sbox = new MessageBox('*');
    manegar.register('warning message', mbox);
    manegar.register('slash message', sbox);

    const p1 = manegar.create('warning message');
    // p1.use('Hello!');

    // const p2 = manegar.create('slash message');
    // p2.use('Hello!');

    console.log(p1 === mbox);
  }
  main();
}
