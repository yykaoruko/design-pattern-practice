const fs = require('fs');
const path = require('path');

{
  interface FileIO {
    readFromFile(filepath: string): void;
    writeToFile(filepath: string): void;
    setValue(key: string, value: string): void;
    getValue(key: string): string;
  }

  class FileProperties implements FileIO {
    private _data = {};
    readFromFile(filepath: string) {
      const resolvePath = path.resolve(__dirname, filepath);
      const txt: string = fs.readFileSync(resolvePath, 'utf8');
      this._splitString(txt);
    }
    private _splitString(str: string): void {
      const strs = str.split(/\n/);
      strs.forEach(value => {
        const data = value.split('=');
        this._data[data[0]] = data[1];
      });
    }
    writeToFile(filepath: string): void {
      let data: string = '';
      for (let key in this._data) {
        data += `${key}=${this._data[key]}\n`;
      }
      const date: Date = new Date();
      const txt = `# writen by FileProperties\n# ${date}\n${data}`;
      const resolvePath = path.resolve(__dirname, filepath);
      fs.writeFile(resolvePath, txt, err => {
        if (err) {
          throw err;
        }
      });
    }
    setValue(key: string, value: string): void {
      this._data[key] = value;
    }
    getValue(key: string): string {
      return this._data[key];
    }
  }

  const main = (): void => {
    const file = new FileProperties();
    file.readFromFile('file.txt');
    file.setValue('name', 'ruko');
    file.writeToFile('./filenew.txt');
  };

  main();
}
