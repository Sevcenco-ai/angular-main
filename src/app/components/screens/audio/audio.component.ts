import {Component, OnInit} from '@angular/core';
import {DataResponse} from "../../../services/service.interface";
import {AudioService} from "../../../services/audio.service";

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit{
  audioDevices: DataResponse[] = []

  constructor(private audioService: AudioService) {
  }

  ngOnInit() {
    this.audioService.getAllAudioGadgets().subscribe( data => {
      this.audioDevices = data
    })
  }
}
