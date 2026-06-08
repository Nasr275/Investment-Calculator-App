import { Component } from '@angular/core';
import { Input, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InverstmentService } from '../investment.service';
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {


  constructor(private investmentService: InverstmentService) {

  }

  get results(){
    return this.investmentService.resultData;
  }

  // results = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]>()

  // We use ? because it is acceptable for results to be undefined before clicking calculate
  // @Input() results?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]

}
