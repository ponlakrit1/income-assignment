import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wallet-card',
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.css']
})
export class WalletCardComponent implements OnInit {

  @Input('item') arrDataCard: any;

  constructor() { }

  ngOnInit() {
    
  }

}
