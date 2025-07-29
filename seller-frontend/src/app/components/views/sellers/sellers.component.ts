import { Component, OnInit } from '@angular/core';
import { Seller } from '../../../models/seller.model';
import { SellerService } from '../../../services/seller.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-sellers',
  imports:[CommonModule, CurrencyPipe],
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {

  sellers: Seller[] = [];

  constructor(private sellerService: SellerService) { }

  ngOnInit(): void {
    this.sellerService.findAll().subscribe(data => {
      this.sellers = data;
    });
  }
}