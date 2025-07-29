package com.abutua.seller_backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_seller")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome não pode ser vazio")
    @Size(min = 5, message = "O nome deve ter no mínimo 5 caracteres")
    private String name;

    @NotNull(message = "O salário não pode ser nulo")
    @Positive(message = "O salário deve ser maior que zero")
    private Double salary;
    
    @NotNull(message = "O bônus não pode ser nulo")
    @Min(value = 0, message = "O percentual de bônus deve ser no mínimo 0")
    @Max(value = 100, message = "O percentual de bônus deve ser no máximo 100")
    private Double bonus;
    
    @NotNull(message = "O gênero não pode ser nulo")
    private Integer gender;
    
}