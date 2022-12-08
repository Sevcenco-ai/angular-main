import {Component, OnInit} from '@angular/core';
import {DataResponse} from "../../../services/service.interface";
import {LaptopsService} from "../../../services/laptops.service";

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent implements OnInit{
 laptops: DataResponse[] = []

  constructor(private laptopService: LaptopsService) {
  }

  ngOnInit() {
   this.laptopService.getAllLaptops().subscribe( data => {
     this.laptops = data
   })
  }
}
