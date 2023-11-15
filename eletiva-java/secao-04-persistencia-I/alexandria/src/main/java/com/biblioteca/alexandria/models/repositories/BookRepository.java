package com.biblioteca.alexandria.models.repositories;

import com.biblioteca.alexandria.models.entities.Book;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event.ID;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}
