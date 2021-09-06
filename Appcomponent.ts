import { Component } from '@angular/core';
​
import { Note } from './noteservice';
import { NotesService } from './notes.service';
​
​
​
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
​
export class AppComponent {
  errMessage: string;
  note: Note = new Note();
  notes: Array<Note>=[];
  
  constructor(private notesService: NotesService){ }
  ngOnInit(){
​
    this.notesService.getNotes().subscribe(response => {
      if (response) {
        this.notes = response;
      } else {
        this.errMessage = 'We are unable to retreive notes list.';
      }
    }, error => {
      this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
    });
  }