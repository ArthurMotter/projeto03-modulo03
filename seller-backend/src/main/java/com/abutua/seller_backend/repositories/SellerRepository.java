package com.abutua.seller_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.abutua.seller_backend.models.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {
    
}
