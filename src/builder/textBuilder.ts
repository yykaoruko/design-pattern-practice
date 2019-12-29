import Builder from './builder';

class TextBuilder implements Builder {
  private _buffer = '';
  public makeTitle(str: string): void {
    this._buffer += '=============\n';
    this._buffer += `「${str}」\n`;
    this._buffer += '\n';
  }
  public makeString(str: string): void {
    this._buffer += `■${str}\n`;
    this._buffer += `\n`;
  }
  public makeItems(items: string[]): void {
    items.forEach(item => {
      this._buffer += `  ・${item}\n`;
    })
    this._buffer += '\n';
  }
  public close(): void {
    this._buffer += '=============\n';
  }
  public getResult(): string {
    return this._buffer;
  }
}

export default TextBuilder;
