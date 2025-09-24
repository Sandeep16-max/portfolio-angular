import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { Data } from '../../services/data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  imports: [NgFor]
})
export class Projects implements OnInit{
	projects: Project[] = [];

	constructor(private dataService: Data) {
		
	}

	ngOnInit(): void {
		this.dataService.getProjects().subscribe((projects: Project[]) => {
			this.projects = projects;
		});
	}
}
