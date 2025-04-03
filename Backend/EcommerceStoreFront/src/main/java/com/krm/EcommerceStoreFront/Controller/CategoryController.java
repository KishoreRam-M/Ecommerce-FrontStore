package com.krm.EcommerceStoreFront.Controller;

import com.krm.EcommerceStoreFront.Model.Category;
import com.krm.EcommerceStoreFront.Repo.CategoryRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/category")
public class CategoryController {

    private final CategoryRepo categoryRepo;

    public CategoryController(CategoryRepo categoryRepo) {
        this.categoryRepo = categoryRepo;
    }

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = categoryRepo.findAll();
        return ResponseEntity.ok(categories);
    }
}
