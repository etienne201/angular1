import { Component, OnInit } from '@angular/core';
//import { IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-visa-card',
  templateUrl: './visa-card.component.html',
  styleUrls: ['./visa-card.component.css']
})
export class VisaCardComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false
  minDate: Date;
  maxDate: Date;
  
  constructor() { 
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
  }

}
