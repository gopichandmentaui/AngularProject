import {
  Component,
  OnInit
}
  from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
}
  from 'ngx-gallery';
@Component({
  selector: 'app-pdp-image',
  templateUrl: './pdp-image.component.html',
  styleUrls: ['./pdp-image.component.scss']
})
export class PdpImageComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }
  ngOnInit(): void {
    this.galleryOptions = [{
      width: '100%',
      height: '400px',
      thumbnailsColumns: 6,
      imageAnimation: NgxGalleryAnimation.Fade,
      thumbnailsMargin: 32,
      thumbnailsSwipe: true,
      preview: false,
      previewSwipe: true,
      thumbnailMargin: 0,
      arrowPrevIcon: 'icon sr-chevron-left',
      arrowNextIcon: 'icon sr-chevron-right',
      thumbnailsAutoHide: true,
      imageArrows: false
    }, // max-width 800
    {
      breakpoint: 800,
      width: '100%',
      height: '270px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20,
      thumbnailsMoveSize: 10
    }, // max-width 400
    {
      breakpoint: 400,
      preview: false
    }
    ];

    this.galleryImages = [
      //            {
      //                small:'../images/small.jpeg',
      //                medium:'../images/medium.jpeg',
      //                big:'../images/1-big.jpeg'
      //            },
      //            {
      //                small: '/images/7-small.jpeg',
      //                medium: '/images/7-medium.jpeg',
      //                big: '/images/2-big.jpeg'
      //            },
      //            {
      //                small: '/images/8-small.jpeg',
      //                medium: '/images/8-medium.jpeg',
      //                big: 'i/mages/8-big.jpeg'
      //            },
      //            {
      //                small: '/images/2-small.jpeg',
      //                medium: '/images/2-medium.jpeg',
      //                big: '/images/2-big.jpeg'
      //            },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg'
      }, {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
      }, {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
      }, {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
      }, {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
      }, {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
      }, {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
      }, {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
      }
    ];
  }

}
