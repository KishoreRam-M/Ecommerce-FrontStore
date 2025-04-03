package com.krm.EcommerceStoreFront.Controller;

import com.krm.EcommerceStoreFront.Model.Product;
import com.krm.EcommerceStoreFront.Repo.ProductRepo;
import com.krm.EcommerceStoreFront.Service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    private final ProductRepo productRepo;

    public ProductController(ProductRepo productRepo, ProductService productService) {
        this.productRepo = productRepo;
        this.productService = productService;
    }


    private final ProductService productService;

    @GetMapping
    public ResponseEntity<?> getAllProducts() {
        try {
            List<Product> products = productRepo.findAll();
            return ResponseEntity.ok(products);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error fetching products: " + e.getMessage());
        }
    }


    @GetMapping("/category/{id}")
    public ResponseEntity<?> getProductByCategoryId(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(productRepo.findByCategoryId(id));

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("category id not found" + e.getMessage());
        }

    }
}
