package com.ft.admin.controller;

import com.ft.admin.dto.TradeRoleDto;
import com.ft.admin.service.TradeRoleService;
import com.ft.commom.crud.AbstractController;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("traderoles")
public class TradeRoleController extends AbstractController<TradeRoleDto, TradeRoleService>{

 }
