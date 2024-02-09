package com.ft.business.controller;

import com.ft.business.entity.Business;
import com.ft.business.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/business")
public class BusinessController {

    @Autowired
    private BusinessService businessService;


    @GetMapping("/")
    public ResponseEntity<List<Business>> getRoles(){
        return ResponseEntity.ok(this.businessService.findAll());
    }
}
