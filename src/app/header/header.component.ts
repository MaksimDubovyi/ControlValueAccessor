import { Component, OnInit } from '@angular/core';
import { CurreCurrencyServiceServicencyService } from '../services/currency-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(public curreCurrencyServiceServicencyService: CurreCurrencyServiceServicencyService) {
  }

  ngOnInit(): void {
    this.curreCurrencyServiceServicencyService.getExchangeRates();
  }

}
