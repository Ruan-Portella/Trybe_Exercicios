package com.biblioteca.alexandria.service;

import com.biblioteca.alexandria.models.entities.Book;
import com.biblioteca.alexandria.models.repositories.BookRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

  private BookRepository bookRepository;

  @Autowired
  public BookService(BookRepository bookRepository) {
    this.bookRepository = bookRepository;
  }

  public Book insertBook(Book book) {
    return bookRepository.save(book);
  }

  public Optional<Book> updateBook(Long id, Book book) {
    Optional<Book> bookToUpdate = bookRepository.findById(id);
    if (bookToUpdate.isPresent()) {
      Book bookFromDB = bookToUpdate.get();
      bookFromDB.setTitle(book.getTitle());
      bookFromDB.setGenre(book.getGenre());

      Book updatedBook = bookRepository.save(bookFromDB);
      return Optional.of(updatedBook);
    }
    return bookToUpdate;
  }

  public Optional<Book> removeBookById(Long id) {
    Optional<Book> bookToRemove = bookRepository.findById(id);
    if (bookToRemove.isPresent()) {
      bookRepository.deleteById(id);
    }
    return bookToRemove;
  }

  public Optional<Book> findBookById(Long id) {
    return bookRepository.findById(id);
  }

  public List<Book> findAllBooks() {
    return bookRepository.findAll();
  }
}
