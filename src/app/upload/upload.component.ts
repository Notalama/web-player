import { AuthGuardService } from './../auth-guard.service';
import { AudioService } from './../audio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private audioService: AudioService, private authGuardService: AuthGuardService) { }

  ngOnInit() {
  }

  logFile(event, index) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      if (index === 1) {
        this.audioService.trackList1.push({file, reader});
      } else {
        this.audioService.trackList2.push({file, reader});
      }
    }, false);
    if (file) {
      reader.readAsDataURL(file);
      this.authGuardService.activateList();
    }
  }
}
