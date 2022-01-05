package com.example.Reservation.controller;


import com.example.Reservation.service.AddReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddReservationController {
    @Autowired
    AddReservationService reservationService;

    @RequestMapping("/new_Reservation")
    public String createReservation() {
        reservationService.saveInfo();
        return "done";
    }
}
