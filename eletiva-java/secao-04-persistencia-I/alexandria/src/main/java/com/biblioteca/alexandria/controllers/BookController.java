package com.biblioteca.alexandria.controllers;

import com.biblioteca.alexandria.controllers.dto.BookDTO;
import com.biblioteca.alexandria.controllers.dto.ResponseDTO;
import com.biblioteca.alexandria.models.entities.Book;
import com.biblioteca.alexandria.service.BookService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/books")
public class BookController {

  private final BookService bookService;

  @Autowired
  public BookController(BookService bookService) {
    this.bookService = bookService;
  }

  @PostMapping()
  public ResponseEntity<ResponseDTO<Book>> createBook(@RequestBody BookDTO bookDTO) {
    Book newBook = bookService.insertBook(bookDTO.toBook());
    ResponseDTO<Book> responseDTO = new ResponseDTO<>("Book created successfully", newBook);
    return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);
  }

  @PostMapping("/{bookId}")
  public ResponseEntity<ResponseDTO<Book>> updateBook(@PathVariable Long bookId,
      @RequestBody BookDTO bookDTO) {
    Optional<Book> optionalBook = bookService.updateBook(bookId, bookDTO.toBook());
    if (optionalBook.isPresent()) {
      ResponseDTO<Book> responseDTO = new ResponseDTO<>(
          String.format("Não foi encontrado o livre de ID %d",
              bookId), null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }
    ResponseDTO<Book> responseDTO = new ResponseDTO<>("Book updated successfully",
        optionalBook.get());
    return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
  }

  @DeleteMapping("/{bookId}")
  public ResponseEntity<ResponseDTO<Book>> deleteBook(@PathVariable Long bookId) {
    Optional<Book> optionalBook = bookService.removeBookById(bookId);
    if (optionalBook.isEmpty()) {
      ResponseDTO<Book> responseDTO = new ResponseDTO<>(
          String.format("Não foi encontrado o livre de ID %d",
              bookId), null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }
    ResponseDTO<Book> responseDTO = new ResponseDTO<>("Book deleted successfully",
        null);
    return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
  }

  @GetMapping("/{bookId}")
  public ResponseEntity<ResponseDTO<Book>> findBookById(@PathVariable Long bookId) {
    Optional<Book> optionalBook = bookService.findBookById(bookId);
    if (optionalBook.isEmpty()) {
      ResponseDTO<Book> responseDTO = new ResponseDTO<>(
          String.format("Não foi encontrado o livre de ID %d",
              bookId), null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }
    ResponseDTO<Book> responseDTO = new ResponseDTO<>("Book found successfully",
        optionalBook.get());
    return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
  }

  @GetMapping()
  public ResponseEntity<ResponseDTO<List<Book>>> findAllBooks() {
    List<Book> books = bookService.findAllBooks();
    ResponseDTO<List<Book>> responseDTO = new ResponseDTO<>("Books found successfully",
        books);
    return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
  }
}
