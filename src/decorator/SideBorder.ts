import Border from './Border';
// eslint-disable-next-line no-unused-vars
import Display from './Display';

class SideBoder extends Border {
  private borderChar: string;
  constructor(display: Display, ch: string) {
    super(display);
    this.borderChar = ch;
  }
  getColumns(): number {
    // 文字数は中身の両側に飾り文字分を加えたもの
    return 1 + this.display.getColumns() + 1;
  }
  getRows(): number {
    return this.display.getRows();
  }
  getRowText(row: number): string {
    return this.borderChar + this.display.getRowText(row) + this.borderChar;
  }
}

export default SideBoder;
