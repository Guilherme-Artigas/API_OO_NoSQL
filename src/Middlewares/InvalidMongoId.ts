export default class InvalidMongoId extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'IvalidMongoId';
    this.stack = '422';
  }
}