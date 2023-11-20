package com.ft.admin.controller;

import com.ft.admin.dto.TradeGroupDto;
import com.ft.admin.entity.TradeGroup;
import com.ft.admin.entity.TradeGroupTradeRuleFunc;
import com.ft.admin.service.TradeGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @PostMapping("/")
    public ResponseEntity<TradeGroupDto> create(@RequestBody TradeGroupDto tradeGroupDto){
        return ResponseEntity.ok(this.tradeGroupService.createTradeGroup(tradeGroupDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TradeGroupDto> update(@RequestBody TradeGroupDto tradeGroupDto, @PathVariable Integer id){
        tradeGroupDto.setId(id);
        return ResponseEntity.ok(this.tradeGroupService.updateTradeGroup(tradeGroupDto));
    }    

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Integer id){
        this.tradeGroupService.deleteTradeGroup(id);
        return ResponseEntity.ok().body(null);
    }    
}
