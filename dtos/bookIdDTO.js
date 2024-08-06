class BookIdDTO {
  static validate(id) {
    return isNaN(Number(id)) 
  }
}

export { BookIdDTO };
