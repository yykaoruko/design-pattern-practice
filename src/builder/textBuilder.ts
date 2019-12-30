import Builder from './builder';

class TextBuilder extends Builder {
  private _buffer = '';
  public buildTitle(str: string): void {
    this._buffer += '=============\n';
    this._buffer += `「${str}」\n`;
    this._buffer += '\n';
  }
  public buildString(str: string): void {
    this._buffer += `■${str}\n`;
    this._buffer += `\n`;
  }
  public buildItems(items: string[]): void {
    items.forEach(item => {
      this._buffer += `  ・${item}\n`;
    })
    this._buffer += '\n';
  }
  public buildDone(): void {
    this._buffer += '=============\n';
  }
  public getResult(): string {
    return this._buffer;
  }
}

export default TextBuilder;
