package com.example.backend.service;

import com.example.backend.entity.Category;

import java.util.List;

public interface CategoryService {
    Category createCategory(Category category);

    Category updateCategory(Category category, Long id);

    Category getCategoryById(Long id);

    List<Category> getAllCategories();

    void deleteCategoryById(Long id);

}