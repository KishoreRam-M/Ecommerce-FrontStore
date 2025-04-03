package com.krm.EcommerceStoreFront.Repo;

import com.krm.EcommerceStoreFront.Model.Category;
import com.krm.EcommerceStoreFront.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepo extends JpaRepository<Category,Long> {

}
