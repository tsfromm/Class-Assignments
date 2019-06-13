package com.example.demo;

import com.example.demo.domain.Car;
import com.example.demo.domain.Dealership;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {
    private static final Logger log = LoggerFactory.getLogger(DemoApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(Dealership dealership) {
        return args -> {
            dealership.save(new Car("Datsun", "280ZX", 2000));
            dealership.save(new Car("Toyota", "Tacoma", 2001));
            dealership.save(new Car("Volkswagon", "Passat", 2002));
            dealership.save(new Car("Chevy", "Cobalt", 2003));
            dealership.save(new Car("Honda","CR-V", 2004));
            dealership.save(new Car("Honda","Civic", 2005));
            dealership.save(new Car("Ford","Focus", 2005));

            log.info("Cars found using findAll(): ");
            log.info("--------------------------- ");
            for(Car car : dealership.findAll()) {
                log.info(car.toString());
            }
            log.info("");

            dealership.findById(1L).ifPresent(car -> {
                log.info("Customer found using findById(): ");
                log.info("---------------------------------");
                log.info(car.toString());
                log.info("");
            });
        };
    }
}
