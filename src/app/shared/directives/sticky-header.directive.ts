import { Directive, Renderer2, HostListener, Input, ElementRef } from "@angular/core";
@Directive({
    selector: "[appStickyHeader]"
})
export class StickyHeaderDirective {
    @Input() public topOffset = 1000;
    @Input() isContent = false;
    @HostListener("window:scroll", ["$event"])
    public windowScrolled($event) {
        if (this.isContent) {
            // this.windowScrollEventContent();
        }
        else {
            this.windowScrollEvent($event);
        }
    }
    constructor(private el: ElementRef, private renderer: Renderer2) {

    }
    windowScrollEventContent() {
        const isReachingTop = this.getTop() > this.topOffset;
        if (isReachingTop) {
            this.renderer.setStyle(this.el.nativeElement, "margin-top", "40px");
        }
        else {
            this.renderer.setStyle(this.el.nativeElement, "margin-top", "initial");
        }
    }
    windowScrollEvent($event) {
        console.log('directive hitting');
       const isReachingTop = this.getTop() > this.topOffset + 88;
        if (isReachingTop) {
            this.renderer.setStyle(this.el.nativeElement, "position", "fixed");
            this.renderer.setStyle(this.el.nativeElement, "top", "88px");
            this.renderer.setStyle(this.el.nativeElement, "box-shadow", "0 2px 8px 0 rgba(0, 0, 0, .15)");
        }
        else {
            this.renderer.setStyle(this.el.nativeElement, "position", "relative");
            this.renderer.setStyle(this.el.nativeElement, "top", "0");
            this.renderer.setStyle(this.el.nativeElement, "box-shadow", "none");          
        } 
        console.log('directive End hitting');
    }
   
    getTop() {
        return (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    }
    
}