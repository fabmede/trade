package com.ft.business.service;


import com.ft.business.entity.Business;
import com.ft.business.repositoty.RuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessService {

    @Autowired
    private RuleRepository ruleRepository;


    public List<Business> findAll(){
        return this.ruleRepository.findAll();
    }
}
