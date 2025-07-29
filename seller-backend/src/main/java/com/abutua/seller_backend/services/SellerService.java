package com.abutua.seller_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.abutua.seller_backend.dtos.SellerDTO;
import com.abutua.seller_backend.models.Seller;
import com.abutua.seller_backend.repositories.SellerRepository;
import com.abutua.seller_backend.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class SellerService {

    @Autowired
    private SellerRepository repository;

    public List<Seller> findAll() {
        return repository.findAll();
    }

    // GET by ID
    public Seller findById(long id) {
        Optional<Seller> result = repository.findById(id);
        return result.orElseThrow(() -> new ResourceNotFoundException("Vendedor não encontrado"));
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

    // Update
    public Seller update(long id, SellerDTO sellerDTO) {
        try {
            Seller entity = repository.getReferenceById(id);
            
            entity.setName(sellerDTO.getName());
            entity.setSalary(sellerDTO.getSalary());
            entity.setBonus(sellerDTO.getBonus());
            entity.setGender(sellerDTO.getGender());

            return repository.save(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Vendedor não encontrado");
        }
    }

    // Delete
    public void delete(long id) {
        findById(id); 

        try {
            repository.deleteById(id);
        }
        catch (DataIntegrityViolationException e) {
            throw new RuntimeException("Violação de integridade de dados");
        }
    }
}