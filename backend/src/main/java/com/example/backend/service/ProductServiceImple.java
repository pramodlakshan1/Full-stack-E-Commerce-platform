package com.example.backend.service;

import com.example.backend.entity.Product;
import com.example.backend.repository.ProductReposotory;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImple implements ProductService {

    private final ProductReposotory productRepository;


    @Override
    @Transactional
    public Product createProduct(Product product) {
        if (product.getName() == null || product.getName().isEmpty()) {
            throw new IllegalArgumentException("Product name cannot be empty");
        }
        if (product.getPrice() == null || product.getPrice().compareTo(BigDecimal.ZERO) <=0) {
            throw new IllegalArgumentException("Price must be greater than zero");
        }
        if (product.getReOrderQuantity() == null || product.getReOrderQuantity() < 0) {
            throw new IllegalArgumentException("ReOrder quantity cannot be less than zero");
        }

        if (productRepository.existsByName(product.getName())) {
            throw  new RuntimeException("Product already exists");
        }
        return productRepository.save(product);

    }

    @Override
    @Transactional
    public Product updateProduct(Long id, Product updatedProduct) {
        Product existingProduct = getProductById(id);

        if (updatedProduct.getName() != null && !updatedProduct.getName().trim().isEmpty()){
            if (existingProduct.getName().equals(updatedProduct.getName()) && productRepository.existsByName
                    (updatedProduct.getName())) {
                throw  new IllegalArgumentException("Product name '" + updatedProduct.getName() + "' already exists");
            }
            existingProduct.setName(updatedProduct.getName());
        }


    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found with" + id));
    }

    @Override
    public List<Product> getProductsByCategory(Long categoryId) {
        return List.of();
    }

    @Override
    public List<Product> getAllProducts() {
        return List.of();
    }

    @Override
    public List<Product> searchProductsByName(String name) {
        return List.of();
    }

    @Override
    public void deleteProduct(Long id) {

    }
}
