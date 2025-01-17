import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../image-modal/image-modal.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images = [
    { src: 'assets/images/1.jpeg', alt: 'Image 1' },
    { src: 'assets/images/2.jpeg', alt: 'Image 2' },
    { src: 'assets/images/3.jpeg', alt: 'Image 3' },
    { src: 'assets/images/4.jpeg', alt: 'Image 4' },
    { src: 'assets/images/5.jpeg', alt: 'Image 5' },
    { src: 'assets/images/6.jpeg', alt: 'Image 6' }
  ];

  cols = 3;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(result => {
        if (result.matches) {
          this.cols = 1;
        } else {
          this.cols = 3;
        }
      });
  }

  openImageModal(image: { src: string; alt: string }): void {
    this.dialog.open(ImageModalComponent, {
      data: image,
      panelClass: 'image-modal-dialog',
      maxWidth: '100vw',
      maxHeight: '100vh',
      backdropClass: 'image-modal-backdrop'
    });
  }
}
