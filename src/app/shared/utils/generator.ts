export class Generator {
  static randomId(): number {
    return new Date().getTime() + parseInt(String(Math.random() * 1000000));
  }
}
