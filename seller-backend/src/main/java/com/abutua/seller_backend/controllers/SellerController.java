package com.abutua.seller_backend.controllers;

import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.abutua.seller_backend.dtos.SellerDTO;
import com.abutua.seller_backend.models.Seller;
import com.abutua.seller_backend.services.SellerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/sellers")
public class SellerController {

    @Autowired
    private SellerService service;

    // GET All
    @GetMapping
    public ResponseEntity<List<Seller>> findAll() {
        List<Seller> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    // GET by Id
    @GetMapping(value = "/{id}")
    public ResponseEntity<Seller> findById(@PathVariable long id) {
        Seller seller = service.findById(id);
        return ResponseEntity.ok(seller);
    }

    // POST
    @PostMapping
    public ResponseEntity<Seller> insert(@Valid @RequestBody SellerDTO sellerDTO) {
        Seller newSeller = service.insert(sellerDTO);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                    .buildAndExpand(newSeller.getId()).toUri();
        
        return ResponseEntity.created(uri).body(newSeller);
    }

    // PUT
    @PutMapping(value = "/{id}")
    public ResponseEntity<Seller> update(@PathVariable long id, @Valid @RequestBody SellerDTO sellerDTO) {
        Seller updatedSeller = service.update(id, sellerDTO);
        return ResponseEntity.ok(updatedSeller);
    }
}