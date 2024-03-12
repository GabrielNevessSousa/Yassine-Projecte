import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {
  slideIndex = 1;

  moveSlide(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  showSlides(n: number) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }
    (slides[this.slideIndex - 1] as HTMLElement).style.display = "flex";
  }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }
}