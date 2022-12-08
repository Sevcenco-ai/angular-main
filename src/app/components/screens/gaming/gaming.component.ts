import {Component, OnInit} from '@angular/core';
import {DataResponse} from "../../../services/service.interface";
import {GamingService} from "../../../services/gaming.service";

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.scss']
})
export class GamingComponent implements OnInit{
  gamingDevices: DataResponse[] = []

  constructor(private gamingService: GamingService ) {
  }
  ngOnInit(){
    this.gamingService.getAllGamingDevices().subscribe(data => {
      this.gamingDevices = data
    })
  }
}
