export class PreloadFile {
  private readonly fileName: string;
  private readonly onLoad: boolean;
  private readonly fileType: string;

  constructor(name: string, imageType: string, suspend: boolean = false) {
    this.fileName = name;
    this.onLoad = !(suspend ?? false);
    this.fileType = imageType;
  }

  name(): string {
    return this.fileName;
  }
  type(): string {
    return this.fileType;
  }
  onPageLoad(): boolean {
    return this.onLoad;
  }
}
