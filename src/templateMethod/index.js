{
    class AbstractDisplay {
        display() {
            this.open();
            for (let i = 0; i < 5; i++) {
                this.print();
            }
            this.close();
        }
    }
    class CharDisplay extends AbstractDisplay {
        constructor(char) {
            super();
            this._char = char;
        }
        open() {
            process.stdout.write('<<');
        }
        print() {
            process.stdout.write(this._char);
        }
        close() {
            process.stdout.write('>>\n');
        }
    }
    class StringDisplay extends AbstractDisplay {
        constructor(char) {
            super();
            this._char = char;
            let length = 0;
            for (let i = 0; i < this._char.length; i++) {
                let chr = this._char.charCodeAt(i);
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
            this._charLength = length;
        }
        open() {
            console.log(this._charLength);
            this.printLine();
        }
        print() {
            process.stdout.write(`|${this._char}|\n`);
        }
        close() {
            this.printLine();
        }
        printLine() {
            process.stdout.write('+');
            for (let i = 0; i < this._charLength; i++) {
                process.stdout.write('-');
            }
            process.stdout.write('+\n');
        }
    }
    function main() {
        const d1 = new CharDisplay('K');
        d1.display();
        const d2 = new StringDisplay('HEYHEYHEY');
        d2.display();
        const d3 = new StringDisplay('こんにちは');
        d3.display();
    }
    main();
}
