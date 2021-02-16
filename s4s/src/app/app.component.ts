import { Component, Input, OnInit } from '@angular/core';
import { environment } from './../environments/environment.prod';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'saif💍❤️sana';
  currentTime = new Date();
  seconds: any;
  calDate: any;
  minutes: any;
  hours: any;
  days: any;

  autoPlay = true;
  msaapDisplayTitle = false;
msaapDisplayPlayList = false;
//msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = false;
msaapDisplayRepeatControls = false;
msaapDisplayArtist = false;
msaapDisplayDuration = false;
msaapDisablePositionSlider = false;
  findDiff() {
    let d1 = Date.now();
    let d2 = new Date(2021, 2, 28);
    let temp = this.getDiff(d1, d2);
    this.calDate = temp[0];
    this.days = temp[1];
    this.hours = temp[2];
    this.minutes = temp[3];
    this.seconds = temp[4];
  }

  getDiff(d1, d2) {
    let secDiff = Math.floor((d2 - d1) / 1000);
    let second = secDiff;
    let minutes = Math.floor(second / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    second = second - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    let newDate =
      'Days: ' +
      days +
      ' Hours: ' +
      hours +
      ' Minutes: ' +
      minutes +
      ' Seconds: ' +
      second;
    return [newDate, days, hours, minutes, second];
  }
  newTime = setInterval(() => {
    this.currentTime = new Date();
    this.findDiff();
  }, 1000);
 path='../assets/song.mp3';
  msaapPlaylist: Track[] = [
    {
        title: 'Audio One Title',
        link: this.path,
        artist: 'Artist',
        // duration: 'Duration'
        
    },]
}
