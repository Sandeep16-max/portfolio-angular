import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Data } from '../../services/data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  imports: [RouterModule, NgFor, MatCardModule, NgIf, CommonModule,FormsModule]
})

export class Contact {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    if (this.name && this.email && this.message) {
      console.log({ name: this.name, email: this.email, message: this.message });
      alert('Message sent successfully!');
      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      alert('Please fill in all fields.');
    }
  }
}