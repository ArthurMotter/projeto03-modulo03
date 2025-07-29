import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SellerService } from '../../../services/seller.service';
import { Seller } from '../../../models/seller.model';

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

  // Receive the entity to be edited
  @Input() sellerToEdit: Seller | null = null;

  // Emits the creation of an seller for other components
  @Output() sellerCreated = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private sellerService: SellerService
  ) { }

  // Methods
  ngOnInit(): void {
    // 1. Cria o formulário, como antes
    this.sellerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      salary: [null, [Validators.required, Validators.min(0.01)]],
      bonus: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      gender: [null, [Validators.required]]
    });

    // 2. VERIFICA SE ESTÁ EM MODO DE EDIÇÃO
    // Se sellerToEdit foi passado como Input, preenche o formulário.
    if (this.sellerToEdit) {
      this.sellerForm.patchValue(this.sellerToEdit);
    }
  }

  // Handlers
  onSubmit(): void {
    if (this.sellerForm.invalid) {
      return;
    }

    // Handles creation or edition
    if (this.sellerToEdit) {
      this.sellerService.update(this.sellerToEdit.id, this.sellerForm.value).subscribe(() => {
        alert('Vendedor atualizado com sucesso!');
        this.sellerCreated.emit();
        this.resetForm();
      });
    } else {
      this.sellerService.create(this.sellerForm.value).subscribe(() => {
        alert('Vendedor cadastrado com sucesso!');
        this.sellerCreated.emit();
        this.resetForm();
      });
    }
  }

  resetForm(): void {
    this.sellerForm.reset({ bonus: 0 });
    this.sellerToEdit = null;
  }

  // Helpers
  get formControls() {
    return this.sellerForm.controls;
  }

}