package com.ft.admin.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ft.admin.dto.TradeFunctionalityDto;
import com.ft.admin.service.TradeFunctionalityService;
import com.ft.commom.crud.AbstractController;

@RestController
@RequestMapping("tradefunctionalities")
public class TradeFunctionalityController extends AbstractController<TradeFunctionalityDto, TradeFunctionalityService> {
    

}
