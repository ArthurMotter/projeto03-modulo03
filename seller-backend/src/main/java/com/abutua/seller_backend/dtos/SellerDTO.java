package com.abutua.seller_backend.dtos;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public class SellerDTO {

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

    // Getters e Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public Double getBonus() {
        return bonus;
    }

    public void setBonus(Double bonus) {
        this.bonus = bonus;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }
}