class Pyramid00 {
  private _story0: number = 0;
  set story0(value: number) {
    this._story0 = value;
  }
  get story0() {
    return this._story0;
  }
  pyramid(): void {
    for (let i: number = 0; i < this._story0; i++) {
      let space: string = " ".repeat(this._story0 - i - 1);
      let star: string = "*".repeat(i * 2 + 1);
      console.log(space + star);
    }
  }
}
export default Pyramid00;
