class CreateBookDTO {
  static #requiredKeys = 'title author'.split(' ');

  static validate(book) {
    const keys = Object.keys(book);
    return this.#requiredKeys.filter((key) => !keys.includes(key));
  }
}

export { CreateBookDTO };
