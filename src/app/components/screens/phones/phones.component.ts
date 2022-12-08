import {Component, OnInit} from '@angular/core';
import {DataResponse} from "../../../services/service.interface";
import {PhonesService} from "../../../services/phones.service";

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit{
  phones: DataResponse[] = []

  constructor(private phoneService: PhonesService ) {
  }
  ngOnInit(){
    this.phoneService.getAllPhones().subscribe(data => {
      this.phones = data
    })
  }
}
