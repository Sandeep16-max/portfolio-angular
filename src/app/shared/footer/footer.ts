import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
	currentDate = new Date();
	
	  constructor(public dataService: Data) {}
}
