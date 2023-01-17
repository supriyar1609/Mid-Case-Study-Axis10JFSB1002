package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.model.Book;

public interface BookRepository extends JpaRepository<Book, Integer>{

}