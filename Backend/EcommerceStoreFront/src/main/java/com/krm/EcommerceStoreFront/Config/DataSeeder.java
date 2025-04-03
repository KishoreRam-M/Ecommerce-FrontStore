package com.krm.EcommerceStoreFront.Config;

import com.krm.EcommerceStoreFront.Model.Category;
import com.krm.EcommerceStoreFront.Model.Product;
import com.krm.EcommerceStoreFront.Repo.CategoryRepo;
import com.krm.EcommerceStoreFront.Repo.ProductRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final CategoryRepo categoryRepo;
    private final ProductRepo productRepo;

    public DataSeeder(CategoryRepo categoryRepo, ProductRepo productRepo) {
        this.categoryRepo = categoryRepo;
        this.productRepo = productRepo;
    }

    @Override
    public void run(String... args) {
        Category electronics = new Category();
        Category fashion = new Category();


        if (categoryRepo.count() == 0) {

            electronics.setName("Electronics");

            fashion.setName("Fashion");

            categoryRepo.saveAll(List.of(electronics, fashion));
        }

        if (productRepo.count() == 0) {
            Product product1 = new Product();
            product1.setName("Smartphone");
            product1.setDescription("Latest model smartphone");
            product1.setPrice(699.99);
            product1.setImageUrl("/images/smartphone.jpg");  // Local path

            product1.setCategory(electronics);

            Product product2 = new Product();
            product2.setName("T-Shirt");
            product2.setDescription("Cotton t-shirt");
            product2.setPrice(19.99);

            product2.setImageUrl("/images/tshirt.jpg");  // Local path
            product2.setCategory(fashion);

            productRepo.saveAll(List.of(product1, product2));
        }
    }
}
