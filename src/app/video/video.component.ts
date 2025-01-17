import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Start playing as soon as the view is initialized
    this.videoPlayer.nativeElement.play().catch(error => {
      console.log('Video playback failed:', error);
    });
  }
}
