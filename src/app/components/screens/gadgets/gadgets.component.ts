import {Component, OnInit} from '@angular/core';
import {DataResponse} from "../../../services/service.interface";
import {GadgetsService} from "../../../services/gadgets.service";

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.scss']
})
export class GadgetsComponent implements OnInit{
  gadgets: DataResponse[] = []

  constructor(private gadgetsService: GadgetsService) {
  }

  ngOnInit() {
    this.gadgetsService.getAllGadgets().subscribe(data => {
      this.gadgets = data
    })
  }
}
