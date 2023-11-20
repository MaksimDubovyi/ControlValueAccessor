import { Component } from '@angular/core';
import { CurreCurrencyServiceServicencyService } from '../services/currency-service.service';

@Component({
  selector: 'app-left-select',
  templateUrl: './left-select.component.html',
  styleUrls: ['./left-select.component.css']
})
export class LeftSelectComponent {
  selectedLeftCurrency:string="";
  selectedTRightCurrency:string="";
  sumForom:string="";
  sumTo:string="";
  result:string="";

  labeRightResult:string="";
  labeLeftResult:string="";
  pressFrom:boolean=true;
  valid:string="";

  constructor(public curreCurrencyServiceServicencyService: CurreCurrencyServiceServicencyService) {
  }

}
