import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';


export interface Currency {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}

@Injectable({
  providedIn: 'root',
})
export class CurreCurrencyServiceServicencyService {


  private apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  Currency!:Currency[];
  USD:number=0;
  EUR:number=0;

  selectedLeftCurrency:string="";
  selectedTRightCurrency:string="";

  public formGroup= new FormGroup({
    leftInput: new FormControl(''),
    rightInput: new FormControl(''),
  })

  constructor(private http: HttpClient) {
  }


  getExchangeRates() {
     this.http.get<Currency[]>(this.apiUrl).subscribe(data => {
      this.Currency=data;
      for (const currency of this.Currency) {
        if(currency.cc=="USD")
        {
          this.USD=currency.rate;
        }
        else if(currency.cc=="EUR")
        {
          this.EUR=currency.rate;
        }
      }


         const uah: Currency = {
          r030: 980,
          txt: 'Гривня',
          rate: 1,
          cc: 'UAH',
          exchangedate: data[0].exchangedate,
        };
        this.Currency.unshift(uah);
    });;
  }
}
