import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    this.navbar();
  }

  ngOnInit(): void {
  }

  navbar() {
    let previousScrollPosition = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPosition = window.pageYOffset;
      let navbar = document.getElementById('navbar');

      // hides the navbar when scrolling down, shows when scrolling up
      if(currentScrollPosition > 0) {
        if(previousScrollPosition > currentScrollPosition) {
          navbar!.style.top = "0px";
          navbar!.style.boxShadow = "0 5px 10px rgb(0 0 0 / 0.2)";
        } else {
          navbar!.style.top = "-65px";
        }
        previousScrollPosition = currentScrollPosition;
      }

      // removes the navbar box shadow when at the top of page  
      if(window.pageYOffset === 0) {
        navbar!.style.top = "0px";
        navbar!.style.paddingTop = "20px";
        navbar!.style.boxShadow = "";

      } else {
        navbar!.style.paddingTop = "0px";
      }

    }
  }
}
