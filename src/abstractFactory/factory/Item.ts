abstract class Item {
  protected caption: string;
  abstract makeHTML(): string;
  constructor(caption: string) {
    this.caption = caption;
  }
}

export default Item;
