package com.abutua.seller_backend.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abutua.seller_backend.dtos.SellerDTO;
import com.abutua.seller_backend.models.Seller;
import com.abutua.seller_backend.repositories.SellerRepository;

@Service
public class SellerService {

    @Autowired
    private SellerRepository repository;

    public List<Seller> findAll() {
        return repository.findAll();
    }

    // DTO converter
    public Seller insert(SellerDTO sellerDTO) {
        Seller entity = new Seller();
        entity.setName(sellerDTO.getName());
        entity.setSalary(sellerDTO.getSalary());
        entity.setBonus(sellerDTO.getBonus());
        entity.setGender(sellerDTO.getGender());
        
        return repository.save(entity);
    }
}