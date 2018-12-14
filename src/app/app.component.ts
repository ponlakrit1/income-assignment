import { Component } from '@angular/core';
import { MoneyService } from './service/money.service';

declare var require: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';

  optionType: string;
  money: number;
  crrDate: string;
  note: number;
  payType: string;
  search: string;

  moment = require('moment');
  arrData: any;

  constructor(private moneyService: MoneyService) {
    this.optionType = '1';
    this.payType = 'apple';
    this.search = 'all';
    this.crrDate = this.moment().format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.getRecord();
  }

  onSubmit(){
    if(this.optionType == '1'){
      this.payType = "smile";
    }

    var temp = {
      saveDate: this.crrDate,
      amount: this.money,
      note: this.note,
      optionType: this.optionType,
      payType: this.payType
    };

    this.sendNewRecord(temp);
  }

  resetData(){
    this.note = null;
    this.money = null;
    this.payType = 'apple';
    this.crrDate = this.moment().format('YYYY-MM-DD');
  }

  async sendNewRecord(data){
    await this.moneyService.sendNewMoneyRecord(data).subscribe(
      () => {
        this.getRecord();
        this.resetData();
      }
    );
  }

  async getRecord(){
    await this.moneyService.getAllMoneyList().subscribe(
      data => {
        this.arrData = data;
      }
    );
  }

  async onChange(value){
    if(value == "all"){
      this.getRecord();
    } else {
      await this.moneyService.findByPayType(value).subscribe(
        data => {
          this.arrData = data;
        }
      );
    }
  }
  
}
