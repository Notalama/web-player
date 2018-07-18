import { Component, OnInit, Renderer2, ViewChild, ElementRef, Input } from '@angular/core';
import { AudioService } from '../../audio.service';

@Component({
  selector: 'app-mix-controller',
  templateUrl: './mix-controller.component.html',
  styleUrls: ['./mix-controller.component.scss']
})
export class MixControllerComponent implements OnInit {
  @ViewChild('audio') el: ElementRef;

  @Input() index: number;

  volValue: number;
  isPlay: boolean;
  fileList = [];
  currentIndex = 0;
  constructor(
    private rd: Renderer2,
    private audioService: AudioService) { }

  ngOnInit() {
    this.volValue = this.audioService.genVolume;
    if (this.index === 0) {
      this.fileList = this.audioService.trackList1;
    } else {
      this.fileList = this.audioService.trackList2;
    }
    if (!!this.fileList[0]) {
      this.rd.setAttribute(this.el.nativeElement, 'src', this.fileList[0].reader.result);
    }
    this.audioService.volSubject.subscribe(res => {
      this.el.nativeElement.volume = res / 100;
      this.volValue = res;
    });
    this.audioService.playSubject.subscribe(res => {
      const playPromise = this.el.nativeElement.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          res ? this.pause() : this.play();
        })
        .catch(error => {

        });
      }
    });
  }
  play() {
    this.isPlay = true;
    this.el.nativeElement.play();
  }
  pause() {
    this.isPlay = false;
    this.el.nativeElement.pause();
  }
  slowRate() {
    this.el.nativeElement.playbackRate -= .1;
  }
  fastRate() {
    this.el.nativeElement.playbackRate += .1;
  }
  previousTrack() {
    if (0 < this.currentIndex) {
      this.currentIndex--;
    }
    this.rd.setAttribute(this.el.nativeElement, 'src', this.fileList[this.currentIndex].reader.result);
    this.play();
  }
  nextTrack() {
    if (this.currentIndex < this.fileList.length - 1) {
      this.currentIndex++;
    }
    this.rd.setAttribute(this.el.nativeElement, 'src', this.fileList[this.currentIndex].reader.result);
    this.play();
  }
  handleVolChange(e) {
    const vol =  e.value / 100;
    this.el.nativeElement.volume = vol;
  }
  setNewFile(index) {
    this.rd.setAttribute(this.el.nativeElement, 'src', this.fileList[index].reader.result);
    this.currentIndex = index;
    this.play();
  }
}
