import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SellerService } from '../../../services/seller.service';

@Component({
  selector: 'app-seller-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.css']
})
export class SellerFormComponent implements OnInit {

  sellerForm!: FormGroup;

  // Emits the creation of an seller for other components
  @Output() sellerCreated = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private sellerService: SellerService
  ) { }

  // Methods
  ngOnInit(): void {
    this.sellerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      salary: [null, [Validators.required, Validators.min(0.01)]],
      bonus: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      gender: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.sellerForm.invalid) {
      return;
    }

    this.sellerService.create(this.sellerForm.value).subscribe(() => {
      alert('Vendedor cadastrado com sucesso!');
      this.sellerCreated.emit();
      this.sellerForm.reset({ bonus: 0 });
    });
  }

  //Handlers & Helpers
  get formControls() {
    return this.sellerForm.controls;
  }

}