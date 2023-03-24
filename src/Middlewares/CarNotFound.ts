export default class CarNotFound extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CarNotFound';
    this.stack = '404';
  }
}
