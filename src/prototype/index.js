{
    class Product {
        // class を作るたびに
        // 同じ動作をする createClone を作るのは好ましくないので
        // abscract class に定義
        createClone() {
            let p = null;
            try {
                p = Object.create(this);
            }
            catch (error) {
                console.log(error);
            }
            return p;
        }
    }
    class Manager {
        constructor() {
            this._hash = {};
        }
        register(name, prot) {
            this._hash[name] = prot;
        }
        create(protoname) {
            const p = this._hash[protoname];
            return p.createClone();
        }
    }
    class MessageBox extends Product {
        constructor(decochar) {
            super();
            this._decochar = decochar;
        }
        use(s) {
            let length = 0;
            for (let i = 0; i < s.length; i++) {
                let chr = s.charCodeAt(i);
                if ((chr >= 0x00 && chr < 0x81) ||
                    chr === 0xf8f0 ||
                    (chr >= 0xff61 && chr < 0xffa0) ||
                    (chr >= 0xf8f1 && chr < 0xf8f4)) {
                    length += 1;
                }
                else {
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
    }
    function main() {
        const manegar = new Manager();
        const mbox = new MessageBox('/');
        const sbox = new MessageBox('*');
        manegar.register('warning message', mbox);
        manegar.register('slash message', sbox);
        const p1 = manegar.create('warning message');
        p1.use('Hello!');
        const p2 = p1.createClone();
        p2.use('Hello!');
    }
    main();
}
