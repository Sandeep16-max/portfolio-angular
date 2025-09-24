import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Hero } from './features/hero/hero';
import { About } from "./features/about/about";
import { Projects } from "./features/projects/projects";
import { Contact } from "./features/contact/contact";
import { Footer } from "./shared/footer/footer";
import { Data } from './services/data';

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		Header, 
		Hero, 
		About, 
		Projects, 
		Footer,
		Contact
	],
	templateUrl: './app.html',
	styleUrl: './app.scss'
})
export class App implements OnInit{

	constructor(private dataService: Data) {

	}

	ngOnInit(): void {
		this.dataService.getSiteInfo();
	}
}
