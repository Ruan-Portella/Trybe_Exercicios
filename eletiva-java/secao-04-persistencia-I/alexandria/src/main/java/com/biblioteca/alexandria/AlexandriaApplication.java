package com.biblioteca.alexandria;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.biblioteca.alexandria.models.entities")
@EnableJpaRepositories("com.biblioteca.alexandria.models.repositories")
public class AlexandriaApplication {

  public static void main(String[] args) {
    SpringApplication.run(AlexandriaApplication.class, args);
  }

}
