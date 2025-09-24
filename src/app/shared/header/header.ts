import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Data } from '../../services/data';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
	menuOpen = false;

	constructor(public dataService: Data) { }

    scrollTo(sectionId: string) {
        const section = document.getElementById(sectionId);
        const offset = 80;
        if (section) {
			const elementPosition = section.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });

			this.menuOpen = false;
        }
    }

	toggleMenu() {
		this.menuOpen = !this.menuOpen;
	}

}
