import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Education } from '../../models/education';
import { Experience } from '../../models/experience';
import { Data } from '../../services/data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  imports: [NgFor, NgIf, MatIconModule, NgClass, MatChipsModule]
})
export class About implements OnInit{

	educationItems: Education[] = [];
	experienceItems: Experience[] = [];

	constructor(private dataService: Data){
		
	}

	ngOnInit(): void {
		this.dataService.getEducation().subscribe((data: Education[]) =>{
			this.educationItems = data;
		});

		this.dataService.getExperience().subscribe((data: Experience[]) =>{
			this.experienceItems = data;
		});
	}

	selectedItem: number | null = 0;

	toggleItem(index: number) {
		this.selectedItem = this.selectedItem === index ? null : index;
	}
}
