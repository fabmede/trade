package com.ft.admin.controller;

import com.ft.admin.dto.TradeUserDto;
import com.ft.admin.dto.TradeUserTradeGroupDto;
import com.ft.admin.dto.TradeUserTradeRoleFuncDto;
import com.ft.admin.service.TradeUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("tradeusers")
public class TradeUserController {

    @Autowired
    private TradeUserService tradeUserService;


    @PostMapping("/")
    public ResponseEntity<TradeUserDto> saveNew(@RequestBody TradeUserDto tradeUserDto){
        return ResponseEntity.ok(this.tradeUserService.saveTradeUser(tradeUserDto));
    }

    @PutMapping("/{email}/tradeUserTradeGroups")
    public ResponseEntity<TradeUserTradeGroupDto> saveTradeUserTradeGroup(@RequestBody TradeUserTradeGroupDto tradeUserTradeGroupDto){
        return ResponseEntity.ok(this.tradeUserService.saveTradeUserTradeGroup(tradeUserTradeGroupDto));
    }

    @PutMapping("/{email}/tradeUserTradeRoleFuncs")
    public ResponseEntity<TradeUserTradeRoleFuncDto> saveTradeUserTradeRoleFuncs(@RequestBody TradeUserTradeRoleFuncDto tradeUserTradeRoleFuncDto){
        return ResponseEntity.ok(this.tradeUserService.saveTradeUserTradeRoleFuncs(tradeUserTradeRoleFuncDto));
    }

    @RequestMapping("/")
    public ResponseEntity<List<TradeUserDto>> getTradeUsers(){
        return ResponseEntity.ok(this.tradeUserService.findAll());
    }

    @RequestMapping("/{email}/tradeUserTradeRoleFuncs")
    public ResponseEntity<List<TradeUserTradeRoleFuncDto>> getTradeUserTradeRoleFuncs(@PathVariable String email){
        return ResponseEntity.ok(this.tradeUserService.findTradeUserTradeRoleFuncsByUserEmail(email));
    }

    @RequestMapping("/{email}/tradeUserTradeGroups")
    public ResponseEntity<List<TradeUserTradeGroupDto>> getTradeUserTradeGroups(@PathVariable String email){
        return ResponseEntity.ok(this.tradeUserService.findTradeUserTradeGroupByEmail(email));
    }
}
