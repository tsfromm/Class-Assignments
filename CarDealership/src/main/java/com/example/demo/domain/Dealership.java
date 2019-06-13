package com.example.demo.domain;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface Dealership extends CrudRepository<Car, Long> {
    List<Car> findByCarModel(String carModel);
}