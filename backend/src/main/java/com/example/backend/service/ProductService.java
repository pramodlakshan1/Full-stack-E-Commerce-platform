package com.example.backend.service;

import com.example.backend.entity.Product;

import java.util.List;

public interface ProductService {
    Product createProduct(Product product);
    Product updateProduct( Long id,Product product);
    Product getProductById(Long id);
    List<Product> getProductsByCategory(Long categoryId);
    List<Product> getAllProducts();
    List<Product> searchProductsByName(String name);
    void deleteProduct(Long id);
}
