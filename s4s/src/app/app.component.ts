import { Component, Input, OnInit } from '@angular/core';
import { environment } from './../environments/environment.prod';
import { Track } from 'ngx-audio-player';
import * as confetti from 'canvas-confetti';

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
msaapDisablePositionSlider = true;
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

  ngOnInit(){
  
  //   confetti.create()({
  //     shapes: ['square'],
  //     particleCount: 100,
  //     spread: 90,
  //     origin: {
  //         y: (.6) 
  //     }
  // });

//   confetti.create()({
//       particleCount: 1000,
//       spread: 150,
//       origin: { y: 0.7 }
// });

var duration = 25 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 10, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti.create()(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  confetti.create()(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);
}
 path='../assets/song.mp3';
  msaapPlaylist: Track[] = [
    {
        title: 'Audio One Title',
        link: this.path,
        artist: 'Artist',
        // duration: 'Duration'
        
    },]
   
}
