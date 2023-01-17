package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.exception.IDNotFoundException;
import com.axis.model.Book;
import com.axis.repository.BookRepository;
import com.axis.utils.AppConstants;

@Service
public class BookServiceImpl implements BookService{
	
	
	@Autowired
	BookRepository bookRepository;
	
	
	@Override
	public Book addBook(Book book) {
		return bookRepository.save(book);
	}

	
	@Override
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}

	
	@Override
	public Book getBooksById(int id) {
		return bookRepository.findById(id).orElseThrow(()-> new IDNotFoundException(AppConstants.BOOK_ID_NOT_FOUND_MESSAGE));
	}

	
	@Override
	public Book updateBook(int id, Book book) {
		Book book1=bookRepository.findById(id).orElseThrow(()-> new IDNotFoundException(AppConstants.BOOK_ID_NOT_FOUND_MESSAGE));
		book1.setTitle(book.getTitle());
		book1.setAuthor(book.getAuthor());
		
		return bookRepository.save(book1);
	}

	
	@Override
	public String deleteBook(int id) {
		Book book1=bookRepository.findById(id).orElseThrow(()-> new IDNotFoundException(AppConstants.BOOK_ID_NOT_FOUND_MESSAGE));
		bookRepository.delete(book1);
		return AppConstants.BOOK_DELETE_MESSAGE;
	}
	
	

}