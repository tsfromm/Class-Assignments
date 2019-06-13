package com.example.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Car {

    public Car(String carMake, String carModel, Integer year) {
    this.carMake = carMake;
    this.carModel = carModel;
    this.year = year;
}
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String carMake;
    private String carModel;
    private Integer year;

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", carMake='" + carMake + '\'' +
                ", carModel='" + carModel + '\'' +
                ", year='" + year + '\'' +
                '}';
    }

    private Car() {

    }
}
