package com.krm.EcommerceStoreFront.Repo;

import com.krm.EcommerceStoreFront.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepo extends JpaRepository<Product, Long> {
    List<Product> findByCategoryId(Long categoryId);

}
