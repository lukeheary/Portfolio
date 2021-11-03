import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  public mobileMenuOn = false;
  public allowNavbarScroll = true;

  constructor() { 
  }

  ngOnInit(): void {
  }


  public ngAfterViewInit() {
    this.hideNavbarOnScroll();
  }

  hideNavbarOnScroll() {
      let previousScrollPosition = window.pageYOffset;
      window.onscroll = () => {
        let currentScrollPosition = window.pageYOffset;
        let navbar = document.getElementById('navbar');
        if(this.allowNavbarScroll) {

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

  openMobileNavbarMenu() {
    let mobileMenu = document.getElementById('mobileMenu');
    let line1 = document.getElementById('line1')
    let line2 = document.getElementById('line2')
    let line3 = document.getElementById('line3')

    if(this.mobileMenuOn) {
      mobileMenu!.style.top = '-92vh';
      this.mobileMenuOn = false;
      this.allowNavbarScroll = true;

      line1!.style.transform = 'rotate(0deg)'
      line1!.style.top = '0px'
      line2!.style.display = 'block'
      line3!.style.transform = 'rotate(0deg)'
      line1!.style.width = '25px'
      line3!.style.width = '25px'

    } else {
      mobileMenu!.style.top = '10vh';
      this.mobileMenuOn = true;
      this.allowNavbarScroll = false;

      line1!.style.transform = 'rotate(45deg)'
      line1!.style.top = '9px'
      line2!.style.display = 'none'
      line3!.style.transform = 'rotate(-45deg)'
      line1!.style.width = '30px'
      line3!.style.width = '30px'
    }
  }

  scrollToTopOfPage() {
    window.scrollTo({top: 0, behavior: 'smooth'});

  }
}
