abstract class Builder {
  private _initialized = false;
  public abstract buildTitle(str: string): void;
  public abstract buildString(str: string): void;
  public abstract buildItems(args: string[]): void;
  public abstract buildDone(): void;

  public makeTitle(str: string): void {
    if (!this._initialized) {
      this.buildTitle(str);
      this._initialized = true;
    } else {
      throw new Error('already initialized');
    }
  }
  public makeString(str: string): void {
    if (this._initialized) {
      this.buildString(str);
    } else {
      throw new Error('not initialized');
    }
  }
  public makeItems(args: string[]): void {
    if (this._initialized) {
      this.buildItems(args);
    } else {
      throw new Error('not initialized');
    }
  }
  public close(): void {
    if (this._initialized) {
      this.buildDone();
    } else {
      throw new Error('not initialized');
    }
  }
}

// interface Builder {
//   makeTitle(str: string): void;
//   makeString(str: string): void;
//   makeItems(args: string[]): void;
//   close(): void;
// }

export default Builder;
