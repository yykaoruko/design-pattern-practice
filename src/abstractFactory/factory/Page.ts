import Item from './Item';
const fs = require('fs');

abstract class Page {
  protected title: string;
  protected auther: string;
  protected content: Item[] = [];

  constructor(title: string, auther: string) {
    this.title = title;
    this.auther = auther;
  }

  public add(item: Item) {
    this.content.push(item);
  }
  public output(): void {
    const filename: string = `./dist/${this.title}.html`;
    const content: string = this.makeHTML();
    try {
      fs.writeFileSync(filename, content);
      console.log(`${filename}を作成しました`);
    } catch (err) {
      console.log(err);
    }
  }
  public abstract makeHTML: () => string;
}

export default Page;