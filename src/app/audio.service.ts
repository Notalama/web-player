import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AudioService {

  trackList1 = [];
  trackList2 = [];
  genVolume = 50;
  genPlay: boolean;
  volSubject: Subject<number>;
  playSubject: Subject<boolean>;
  constructor() {
    this.volSubject = new Subject();
    this.playSubject = new Subject();
  }
  genVolValueChange(volume) {
    this.volSubject.next(volume);
  }
  togglePlay() {
    this.genPlay = !this.genPlay;
    this.playSubject.next(this.genPlay);
  }
  removeTrack(index, listNumber) {
    if (listNumber === 1) {
      this.trackList1.splice(index, 1);
    } else {
      this.trackList2.splice(index, 1);
    }
  }
}
