import { Component, OnInit } from '@angular/core';
import { Seller } from '../../../models/seller.model';
import { SellerService } from '../../../services/seller.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SellerFormComponent } from '../seller-form/seller-form.component';

@Component({
  selector: 'app-sellers',
  imports: [CommonModule, CurrencyPipe, SellerFormComponent],
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {

  sellers: Seller[] = [];
  sellerToEdit: Seller | null = null;
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
    this.sellerToEdit = null;
    this.loadSellers();
  }

  handleEdit(seller: Seller): void {
    this.sellerToEdit = seller;
    this.showForm = true;
  }

  handleNewSeller(): void {
    this.sellerToEdit = null;
    this.showForm = true;
  }

  handleDelete(id: number): void {
    if (confirm('Tem certeza que deseja remover este vendedor?')) {
      this.sellerService.delete(id).subscribe(() => {
        alert('Vendedor removido com sucesso!');
        this.loadSellers();
      });
    }
  }
}