function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  
  Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  };
  
  const books = [
    new Book("Book1", "Author1", 1925),
    new Book("Book2", "Author2", 1910),
    new Book("Book3", "Author3", 1710),
    new Book("Book4", "Author4", 1899),
  ];
  
  export { books };