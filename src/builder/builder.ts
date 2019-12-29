abstract class Builder {
  public abstract makeTitle(str: string): void;
  public abstract makeString(str: string): void;
  public abstract makeItems(args: string[]): void;
  public abstract close(): void;
}

export default Builder;
