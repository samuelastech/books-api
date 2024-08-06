class BooksRepository {
  #database = [];
  #count = 0;

  create(book) {
    book.id = this.#count;
    this.#count++;
    this.#database.push(book);
    return book;
  }

  list() {
    return [].concat(this.#database);
  }

  listOne(id) {
    return this.#get(id);
  }

  update(id, properties) {
    const book = this.#get(id);
    for (const key of Object.keys(properties)) {
      book[key] = properties[key];
    }
    console.log(this.#database);
  }

  delete(id) {
    let index = null;
    this.#database.filter((book, i) => {
      if (book.id === +id) {
        index = i;
        return book;
      }
    });

    if (index && !isNaN(index) && index >= 0) {
      this.#database.splice(index, 1);
    } else {
      throw 404;
    }
  }

  #get(id) {
    return this.#database.filter((book) => book.id === +id)[0];
  }
}

export { BooksRepository };
