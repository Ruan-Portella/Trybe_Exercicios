package com.biblioteca.alexandria.models.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "books")
public class Book {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String title;
  private String genre;

  public Book() {
  }

  public Book(Long id, String title, String genre) {
    this.id = id;
    this.title = title;
    this.genre = genre;
  }

  public Long getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public String getGenre() {
    return genre;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setGenre(String genre) {
    this.genre = genre;
  }
}
