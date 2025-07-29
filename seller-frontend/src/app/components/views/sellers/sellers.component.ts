import { Component, OnInit } from '@angular/core';
import { Seller } from '../../../models/seller.model';
import { SellerService } from '../../../services/seller.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SellerFormComponent } from '../seller-form/seller-form.component';

@Component({
  selector: 'app-sellers',
  imports:[CommonModule, CurrencyPipe, SellerFormComponent],
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {

  sellers: Seller[] = [];
  showForm = false; 

  constructor(private sellerService: SellerService) { }

  // Methods
  ngOnInit(): void {
    this.loadSellers(); 
  }

  loadSellers(): void {
    this.sellerService.findAll().subscribe(data => {
      this.sellers = data;
    });
  }

  // Handlers
  onSellerCreated(): void {
    this.showForm = false; 
    this.loadSellers();
  }
}