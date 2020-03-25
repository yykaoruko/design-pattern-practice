import Link from '../factory/Link';

class ListLink extends Link {
  constructor(caption: string, url: string) {
    super(caption, url);
  }
  public makeHTML() {
    return `<li><a href="${this.url}">${this.caption}</a></li>`;
  }
};

export default ListLink;
