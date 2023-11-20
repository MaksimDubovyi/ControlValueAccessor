import { Component } from '@angular/core';
import { CurreCurrencyServiceServicencyService } from '../services/currency-service.service';

@Component({
  selector: 'app-right-select',
  templateUrl: './right-select.component.html',
  styleUrls: ['./right-select.component.css']
})
export class RightSelectComponent {
  constructor(public curreCurrencyServiceServicencyService: CurreCurrencyServiceServicencyService) {
  }

}
