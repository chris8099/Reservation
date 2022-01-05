package com.example.Reservation.controller;

import com.example.Reservation.repository.DeleteReservationRepository;
import com.example.Reservation.repository.UpdatePwdAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UpdatePwdAccountController {
    @Autowired
    private UpdatePwdAccountRepository updateAccountRepository;
    @RequestMapping("/update_pwd")
    @Transactional

    public String updateUserInfo(@RequestParam("user_pwd") String user_pwd,@RequestParam("id")Integer id)
    {
        updateAccountRepository.updateOne(user_pwd,id);
        return "done";
    }
}
