import { AudioService } from './../audio.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mix-container',
  templateUrl: './mix-container.component.html',
  styleUrls: ['./mix-container.component.css']
})
export class MixContainerComponent {
  genVolume = 50;
  constructor(private audioService: AudioService) {}

  handleVolChange(e) {
    this.audioService.genVolume = e.value;
    this.audioService.genVolValueChange(e.value);
  }

  togglePlay() {
    this.audioService.togglePlay();
  }
}
