import Border from './Border';
// eslint-disable-next-line no-unused-vars
import Display from './Display';

class FullBorder extends Border {
  protected display: Display;
  constructor(display: Display) {
    super(display);
    this.display = display;
  }
  getColumns(): number {
    // 文字数は中身の両側に飾り文字分を加えたもの
    return 1 + this.display.getColumns() + 1;
  }
  getRows(): number {
    // 行数は中身の行数に上下の飾り文字分を加えたもの
    return 1 + this.display.getRows() + 1;
  }
  getRowText(row: number): string {
    // 指定した行の内容
    if (row === 0) {
      return '+' + this.makeLine('-', this.display.getColumns()) + '+';
    } else if (row === this.display.getRows() + 1) {
      return '+' + this.makeLine('-', this.display.getColumns()) + '+';
    } else {
      return '|' + this.display.getRowText(row - 1) + '|';
    }
  }
  makeLine(ch: string, count: number) {
    let buf = '';
    for (let i = 0; i < count; i++) {
      buf += ch;
    }
    return buf;
  }
}

export default FullBorder;
