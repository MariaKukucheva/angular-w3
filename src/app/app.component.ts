import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-w3-2201681061';

  titleN='';
  content='';
  notes: Note[] = [];
  tempTitle: string = '';
  tempContent: string = '';
  selectedNote: Note | null = null;

 
  errorMessage1: string = '';
  errorMessage2: string = '';

  saveNote() {
    if (this.tempTitle.trim().length >= 5 && this.tempContent.trim().length >= 7) {
      this.notes.push({ title: this.tempTitle, content: this.tempContent });
      this.tempTitle = '';
      this.tempContent = '';
      this.titleN='';
      this.content='';
      this.errorMessage1 = ''; 
      this.errorMessage2 = ''; 
    } else {
      this.errorMessage1 = 'Заглавието трябва да съдържа поне 5 символа';
      this.errorMessage2 = 'Съдържанието трябва да съдържа поне 7 символа.';
    }
  }


  editNote() {
    
    if (this.selectedNote) {
      this.selectedNote.title = this.tempTitle;
      this.selectedNote.content = this.tempContent;
      this.selectedNote = null;
      
    this.resetTempData();
    }
  }

  deleteNote() {
    if (this.selectedNote) {
      const index = this.notes.indexOf(this.selectedNote);
      if (index !== -1) {
        this.notes.splice(index, 1);
        this.selectedNote = null;
        
    this.resetTempData();
      }
    }
  }

  selectNote(note: Note) {
    this.tempTitle = note.title;
    this.tempContent = note.content;
    this.selectedNote = note;
  }

  processInputTitle(event: any) {
    this.tempTitle = event.target.value;
    
  }

  processInputNote(event: any) {
    this.tempContent = event.target.value;
  }

  private resetTempData() {
    this.tempTitle = '';
    this.tempContent  = '';
  }
}

interface Note {
  title: string;
  content: string;
}
