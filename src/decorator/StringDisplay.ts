import Display from './Display';

class StringDisplay extends Display {
  str: string;
  constructor(str: string) {
    super();
    this.str = str;
  }

  getColumns(): number {
    return this.str.length;
  }

  getRows(): number {
    return 1;
  }

  getRowText(row: number): string {
    if (row === 0) {
      return this.str;
    } else {
      return null;
    }
  }
}

export default StringDisplay;
