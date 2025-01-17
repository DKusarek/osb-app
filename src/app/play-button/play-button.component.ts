import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent implements OnInit, OnDestroy {
  private audio: HTMLAudioElement | undefined;
  private video: HTMLVideoElement | null = null;
  isPlaying = false;

  ngOnInit(): void {
    this.audio = new Audio('assets/music.mp3');
    this.audio.loop = true;
    this.video = document.querySelector('video');
  }

  togglePlayback(): void {
    this.isPlaying = !this.isPlaying;
    
    if (this.isPlaying) {
      this.audio?.play().catch(error => {
        console.log('Audio playback failed:', error);
      });
      if (this.video) {
        this.video.play().catch(error => {
          console.log('Video playback failed:', error);
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
      this.audio = undefined;
    }
  }
}
