import Builder from './builder';
const fs = require('fs');

class HTMLBuilder implements Builder {
  private _filename: string;
  private _filepath: string;
  private _writer: string;
  public makeTitle(str: string) {
    this._filename = `${str}.html`;
    this._filepath = `./dist/${this._filename}`;
    const data = `<html><body>\n<h1>${str}</h1>\n`
    try {
      fs.writeFileSync(this._filepath, data);
    } catch(e) {
      console.log(e);
    }
  }
  public makeString(str: string) {
    const data = `<h2>${str}</h2>\n`
    fs.appendFileSync(this._filepath, data);
  }
  public makeItems(items: string[]) {
    fs.appendFileSync(this._filepath, '<ul>\n');
    items.forEach(item => {
      const data = `<li>${item}</li>\n`;
      fs.appendFileSync(this._filepath, data);
    });
    fs.appendFileSync(this._filepath, '</ul>\n');
  }
  public close() {
    fs.appendFileSync(this._filepath, '</body></html>\n');
  }
  public getResult() {
    return this._filename;
  }
}

export default HTMLBuilder;
