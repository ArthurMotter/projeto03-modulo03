package com.abutua.seller_backend.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abutua.seller_backend.models.Seller;
import com.abutua.seller_backend.services.SellerService;

@RestController
@RequestMapping(value = "/sellers")
public class SellerController {

    @Autowired
    private SellerService service;

    @GetMapping
    public ResponseEntity<List<Seller>> findAll() {
        List<Seller> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }
}