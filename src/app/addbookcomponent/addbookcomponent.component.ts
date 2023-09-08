import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';

interface BookIface {
  title: string;
  author: string;
  img_url: string;
  price : string;
  category: string;
  _id:null;
}

@Component({
  selector: 'app-addbookcomponent',
  templateUrl: './addbookcomponent.component.html',
  styleUrls: ['./addbookcomponent.component.css']
})
export class AddbookcomponentComponent implements OnInit {

  constructor(private bookservice: BookServiceService) {}

  books: BookIface[] = [];
  showForm: boolean = false;
  formHeader = "Add Book";
  title: string | null = null;
  author: string | null = null;
  img_url: string | null = null;
  price : string | null = null;
  category: string | null = null;

  id!: string | null;
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.bookservice.fetchBooks().subscribe(
      (data: any) => {
        console.log(data); // Add this line to see the response data in the console
        this.books = data;
      },
      (err) => console.log(err)
    );
  }

  deletebook(id: any) {
    this.bookservice.deleteBook(id).subscribe((res) => {
      this.getData();
    });
  }

  openForm(data: BookIface | null = null) {
    this.showForm = true;
    if (data) {
      this.title = data?.title;
      this.author = data?.author;
      this.img_url = data?.img_url;
      this.price = data?.price;
      this.category = data?.category;
      this.id = data?._id;
      this.formHeader="Edit Book"
    }
    else{
      this.id = null;
      this.formHeader="Add Book"
    }
  }

  saveChanges() {
    this.showForm = false;
    
    // Create a new 'Body' interface to represent the data you want to send to the server
    interface Body {
      title: string | null;
      author: string | null;
      img_url: string | null;
      price : string | null;
      category: string | null;
      id: string | null;
    }

    let body: Body = {
      title: this.title,
      author: this.author,
      img_url: this.img_url,
      price : this.price,
      category: this.category,
      id: null 
    };

    if (this.id) {
      body.id = this.id; // Set 'id' if it exists
      this.bookservice.putBook(body).subscribe((res)=>{
        this.getData()
      },(err)=>{console.log("put")
      })
    }
    else{
      this.bookservice.postBook(body).subscribe((res)=>{
        this.getData()
      },(err)=>{console.log("post");
      })
    }
    this.clearForm();
  }

  closeForm() {
    this.showForm = false;
    this.clearForm();
  }

  clearForm() {
    this.author = null;
    this.title = null;
    this.img_url = null;
    this.price = null;
    this.category = null;
  }
}
