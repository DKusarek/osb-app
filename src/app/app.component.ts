import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    // Start playing as soon as the view is initialized
    this.audioPlayer.nativeElement.play().catch(error => {
      console.log('Audio playback failed:', error);
    });
  }

  ngOnDestroy(): void {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.pause();
      this.audioPlayer.nativeElement.currentTime = 0;
    }
  }
}
