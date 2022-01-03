package com.example.Reservation.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name="reservation_table")
public class ReservationEntity implements Serializable {
    @Id
    @Column(name="user_id")
    String user_Id;
    @Column(name="start_date")
    String start_Date;
    @Column(name="end_date")
    String end_Date;
    @Column(name="content")
    String content;


}
