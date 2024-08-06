class BooksService {
  #repository;
  
  constructor(repository) {
    this.#repository = repository
  }

  create(book) {
    return this.#repository.create(book);
  }

  list() {
    return this.#repository.list();
  }

  listOne(id) {
    return this.#repository.listOne(id);
  }

  update(id, properties) {
    return this.#repository.update(id, properties);
  }

  delete(id) {
    return this.#repository.delete(id);
  }
}

export { BooksService };
