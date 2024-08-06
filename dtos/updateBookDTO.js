class UpdateBookDTO {
  static #updatableKeys = 'title author'.split(' ');

  static validate(book) {
    const keys = Object.keys(book);
    return this.#updatableKeys.filter((key) => keys.includes(key));
  }
}

export { UpdateBookDTO };
