import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero implements OnInit {
  texts: string[] = ['Sandeep Lakhina', 'a Developer', 'an Engineer'];
  currentText: string = this.texts[0];
  index: number = 0;

  images: string[] = [
    'transparent.png',
    '/header_tablet.png',
    '/header_penpot.png',
    'header_pen.png',
    'header_papers.png',
    'header_paperclip.png',
    'header_marker.png',
    'header_flowerpot.png',
    'header_edding.png'
  ];

  // random positions for final destination
  imagePositions: { top: string, left: string }[] = [
    { top: '5%', left: '10%' },
    { top: '15%', left: '75%' },
    { top: '25%', left: '50%' },
    { top: '60%', left: '15%' },
    { top: '50%', left: '70%' },
    { top: '75%', left: '40%' },
    { top: '80%', left: '80%' },
    { top: '10%', left: '35%' },
    { top: '30%', left: '20%' }
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.texts.length;
      this.currentText = this.texts[this.index];
    }, 2500);
  }

  getImageStyle(i: number) {
    return {
      top: this.imagePositions[i].top,
      left: this.imagePositions[i].left,
      animationDelay: `${i * 0.3}s` 
    };
  }
menuOpen = false;
  scrollTo(sectionId: string) {
        const section = document.getElementById(sectionId);
        const offset = 80;
        if (section) {
			const elementPosition = section.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });

			this.menuOpen = false;
        }
    }
}
