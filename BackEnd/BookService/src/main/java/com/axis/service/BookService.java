package com.axis.service;

import java.util.List;

import com.axis.model.Book;

public interface BookService {
	
	public Book addBook(Book book);
	public List<Book> getAllBooks();
	public Book getBooksById(int id);
	public Book updateBook(int id,Book book);
	public String deleteBook(int id);

}