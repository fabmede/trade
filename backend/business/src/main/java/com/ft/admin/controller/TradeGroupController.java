package com.ft.admin.controller;

import com.ft.admin.entity.TradeGroup;
import com.ft.admin.entity.TradeGroupTradeRuleFunc;
import com.ft.admin.service.TradeGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("tradegroups")
public class TradeGroupController {

    @Autowired
    private TradeGroupService tradeGroupService;

    @GetMapping("/")
    public ResponseEntity<List<TradeGroup>> getTradeGroup(){
        return ResponseEntity.ok(this.tradeGroupService.findAll());
    }

    @RequestMapping("/{tradeGroupId}/tradeGroupTradeRuleFuncs")
    public ResponseEntity<List<TradeGroupTradeRuleFunc>> getTradeGroupTradeRuleFuncFuncs(@PathVariable Integer tradeGroupId){
        return ResponseEntity.ok(this.tradeGroupService.findTradeGroupTradeRuleFuncByTradeGroupId(tradeGroupId));
    }
}
