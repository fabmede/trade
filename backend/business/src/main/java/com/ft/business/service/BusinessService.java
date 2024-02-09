package com.ft.business.service;


import com.ft.business.entity.Business;
import com.ft.business.repositoty.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessService {

    @Autowired
    private RoleRepository roleRepository;


    public List<Business> findAll(){
        return this.roleRepository.findAll();
    }
}
