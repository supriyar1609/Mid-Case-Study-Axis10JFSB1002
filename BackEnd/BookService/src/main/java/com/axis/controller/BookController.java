package com.axis.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.exception.IDNotFoundException;
import com.axis.model.Book;
import com.axis.repository.BookRepository;
import com.axis.service.BookService;

@RestController
@RequestMapping("book")
@CrossOrigin(origins="*")
public class BookController {
	

	@Autowired
	BookService bookService;
	
	@PostMapping("/addBook")
	public ResponseEntity<Book> addBook(@RequestBody Book book){
		Book book2 = bookService.addBook(book);
		return new ResponseEntity<Book>(book, HttpStatus.OK);
	}
	
	@GetMapping("/getAllBooks")
	public ResponseEntity<List<Book>> getAllBooks(){
		List<Book> books = bookService.getAllBooks();
		return new ResponseEntity<List<Book>>(books, HttpStatus.OK);
	}
	
	@GetMapping("/get_book/{bookID}")
	public  ResponseEntity<List<Book>> getBooksById(@PathVariable int bookID) {
		Book book = bookService.getBooksById(bookID);
				//.orElseThrow(() -> new IDNotFoundException("Book not found with id :" + id));
		List<Book> books = new ArrayList<>();
		books.add(book);
		return ResponseEntity.ok(books);
	}
	
	@PutMapping("/update_book/{bookID}")
	public ResponseEntity<Book> updateBook(@PathVariable int bookID,@RequestBody Book book){
		return new ResponseEntity<Book>(bookService.updateBook(bookID, book),HttpStatus.OK);
	}

	
	@DeleteMapping("/delete_book/{bookID}")
	public ResponseEntity<String> deleteBook(@PathVariable int bookID){
		return new ResponseEntity<String>(bookService.deleteBook(bookID),HttpStatus.OK);
	}


}
