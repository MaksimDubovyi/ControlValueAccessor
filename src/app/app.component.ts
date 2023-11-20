import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CurreCurrencyServiceServicencyService } from './services/currency-service.service';
import { LeftInputComponent } from './left-input/left-input.component';
import { RightInputComponent } from './right-input/right-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

constructor (public curreCurrencyServiceServicencyService:CurreCurrencyServiceServicencyService){}
sum:string="";
valid:string="";
@ViewChild(LeftInputComponent) leftInputComponent!: LeftInputComponent;
@ViewChild(RightInputComponent) rightInputComponent!: RightInputComponent;

ngAfterViewInit() {


  this.leftInputComponent.setOnChangeRight((value: string) => {

    if( this.validSelectedCurrency())
    {
      this.sum = value.replace(/[^\d.]/g, '');
      const v = this.convertCurrency("left") ;
       this.rightInputComponent.writeValue(v);
    }


  });

  this.rightInputComponent.setOnChangeLeft((value: string) => {
    if( this.validSelectedCurrency())
    {
    this.sum = value.replace(/[^\d.]/g, '');
    const v = this.convertCurrency("right") ;
    this.leftInputComponent.writeValue(v);
    }
  });
}


validSelectedCurrency():boolean
{
  if(this.curreCurrencyServiceServicencyService.selectedLeftCurrency==""||this.curreCurrencyServiceServicencyService.selectedTRightCurrency=="")
  {
    this.valid="Оберіть валюту"
    return false
  }
  else{
    this.valid=""
    return true;
  }
}

convertCurrency(input:string) :string{
  this.valid = "";
  let convertedNumber: number = parseFloat(this.sum);

  let leftCurrency;
  let rightCurrency;

  if(input=="left")
  {
   leftCurrency = this.curreCurrencyServiceServicencyService.Currency.find(currency => currency.cc === this.curreCurrencyServiceServicencyService.selectedLeftCurrency)?.rate;
   rightCurrency = this.curreCurrencyServiceServicencyService.Currency.find(currency => currency.cc === this.curreCurrencyServiceServicencyService.selectedTRightCurrency)?.rate;
  }
  else if (input=="right")
  {
    rightCurrency = this.curreCurrencyServiceServicencyService.Currency.find(currency => currency.cc === this.curreCurrencyServiceServicencyService.selectedLeftCurrency)?.rate;
    leftCurrency = this.curreCurrencyServiceServicencyService.Currency.find(currency => currency.cc === this.curreCurrencyServiceServicencyService.selectedTRightCurrency)?.rate;

  }


  if (leftCurrency && rightCurrency)
  {

          const convertedAmount = (convertedNumber / rightCurrency) * leftCurrency;
          const roundedConvertedAmount = Math.round(convertedAmount * 100) / 100;
          console.log(`Конвертована сума : ${roundedConvertedAmount}`);

        return roundedConvertedAmount.toString();
  }
  else
  {
    return "";
  }

}

}
