package com.example.Reservation.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "account_table")
public class AccountEntity implements Serializable {
    @Id
    @Column(name="user_id")
    String user_Id;
    @Column(name="user_pwd")
    String user_Pwd;
    @Column(name="user_name")
    String user_Name;
    @Column(name="user_email")
    String user_Email;


}
