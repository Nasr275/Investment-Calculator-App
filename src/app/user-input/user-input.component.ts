import { Component, EventEmitter, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InverstmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() calculate = new EventEmitter<InvestmentInput>();
  //calculate = output<InvestmentInput>()

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InverstmentService) {

  }

  //Use + sign to quickly change string to numbers
  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()

      // you need to add the () function of siganls because you want to emit the value of the signal not the signal itself
    });


    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment(),
    //   duration: +this.enteredDuration(),
    //   expectedReturn: +this.enteredExpectedReturn(),
    //   annualInvestment: +this.enteredAnnualInvestment()

    //   // you need to add the () function of siganls because you want to emit the value of the signal not the signal itself
    // })

    //Reseting the form after submission by setting the signals to their original values
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');


  }
}
