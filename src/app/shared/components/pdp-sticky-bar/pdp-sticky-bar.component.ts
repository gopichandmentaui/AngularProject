import { Component, OnInit, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pdp-sticky-bar',
  templateUrl: './pdp-sticky-bar.component.html',
  styleUrls: ['./pdp-sticky-bar.component.scss']
})
export class PdpStickyBarComponent implements OnInit, AfterViewInit {
  [x: string]: any;
  stickyOffsetTop: any;
  mainNavLinks: any;
  mainSections: any;
  lastId: any;
  hasViewInit = false;
  private stickHeaderNav;
  specificationtab = true;
  constructor(private el: ElementRef, private renderer: Renderer2) {

  }
  ngAfterViewInit() {
    this.stickHeaderNav = this.el.nativeElement.querySelector("#spec-sticky-header");
    this.stickyOffsetTop = this.el.nativeElement.querySelector("#spec-sticky-header").offsetTop;
    this.mainNavLinks = this.el.nativeElement.querySelectorAll("nav a");
    this.mainSections = this.el.nativeElement.querySelectorAll("main section");
    this.hasViewInit = true;
  }

  ngOnInit() {
  }

  @HostListener("window:scroll", ["$event"])
  windowScrolled(event) {
    //console.log('inside sticky bar hostlistener');
    if (this.hasViewInit) {
      const isReachingTop = window.pageYOffset >= this.stickyOffsetTop - 128;
      // 
      if (isReachingTop) {
        this.renderer.setStyle(this.stickHeaderNav, "top", "88px");
        this.renderer.setStyle(this.stickHeaderNav, "box-shadow", "0 2px 8px 0 rgba(0, 0, 0, .15)");
        this.renderer.setStyle(this.stickHeaderNav, "position", "fixed");
      }
      else {
        this.renderer.setStyle(this.stickHeaderNav, "position", "relative");
        this.renderer.setStyle(this.stickHeaderNav, "top", "0");
        this.renderer.setStyle(this.stickHeaderNav, "box-shadow", "none");
      }
      let fromTop = window.scrollY;
      this.mainNavLinks.forEach(linkTop => {
        let section = this.el.nativeElement.querySelector(linkTop.hash);
        // console.log(section)

        if (
          section.offsetTop - 144 <= fromTop &&
          section.offsetTop - 144 + section.offsetHeight > fromTop
        ) {
          linkTop.classList.add("current");
          this.mainNavLinks.forEach(link => {
            if (link.hash !== linkTop.hash) link.classList.remove('current')
          });
          // console.log(this.mainNavLinks);
        }
      });
    }

  }
  scrollTo(id) {
    const section = this.el.nativeElement.querySelector(id);
    window.scrollTo(0, section.offsetTop - 144);
    if (id == "#section1") {
      this.specificationtab = true;
    } else {
      this.specificationtab = false;
    }
  }

}

