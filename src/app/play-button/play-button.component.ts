import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent implements OnInit, OnDestroy {
  private audio: HTMLAudioElement;
  private video: HTMLVideoElement | null = null;
  isPlaying = false;
  hasBeenClicked = false;

  constructor() {
    this.audio = new Audio('assets/music.mp3');
    this.audio.loop = true;
  }

  ngOnInit(): void {
    // Wait a bit for the video element to be available
    setTimeout(() => {
      this.video = document.querySelector('video');
      if (!this.video) {
        console.warn('Video element not found');
      }
    }, 500);
  }

  togglePlayback(): void {
    this.isPlaying = !this.isPlaying;
    this.hasBeenClicked = true;
    
    if (this.isPlaying) {
      this.audio?.play().catch(error => {
        console.warn('Audio playback failed:', error);
        this.isPlaying = false;
      });
      
      if (this.video) {
        this.video.play().catch(error => {
          console.warn('Video playback failed:', error);
          this.isPlaying = false;
        });
      }
    } else {
      this.audio?.pause();
      if (this.video) {
        this.video.pause();
      }
    }
  }

  ngOnDestroy(): void {
    if (this.audio) {
      this.audio.pause();
    }
  }
}
