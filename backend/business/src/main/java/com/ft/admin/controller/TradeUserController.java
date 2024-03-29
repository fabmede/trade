package com.ft.admin.controller;

import com.ft.admin.dto.TradeUserDto;
import com.ft.admin.dto.TradeUserTradeGroupDto;
import com.ft.admin.dto.TradeUserTradeRoleFuncDto;
import com.ft.admin.entity.TradeUserTradeGroup;
import com.ft.admin.entity.TradeUserTradeRoleFunc;
import com.ft.admin.service.TradeUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("tradeusers")
public class TradeUserController {

    @Autowired
    private TradeUserService tradeUserService;

    @PostMapping("/")
    public ResponseEntity<TradeUserDto> saveNew(@RequestBody TradeUserDto tradeUserDto) {
        return ResponseEntity.ok(this.tradeUserService.saveTradeUser(tradeUserDto));
    }

    @RequestMapping("/")
    public ResponseEntity<List<TradeUserDto>> getTradeUsers() {
        return ResponseEntity.ok(this.tradeUserService.findAll());
    }

    @PutMapping("/{email}")
    public ResponseEntity<TradeUserDto> update(@RequestBody TradeUserDto tradeUserDto, @PathVariable String email) {
        tradeUserDto.setEmail(email);
        return ResponseEntity.ok(this.tradeUserService.updateTradeUser(tradeUserDto));
    }

    @DeleteMapping("/{email}")
    public ResponseEntity<String> delete(@PathVariable String email) {
        this.tradeUserService.deleteTradeUser(email);
        return ResponseEntity.ok().body(null);
    }

    @PutMapping("/{email}/tradeUserTradeRoleFuncs")
    public ResponseEntity<TradeUserTradeRoleFuncDto> createTradeUserTradeRoleFuncs(@PathVariable String email,
            @RequestBody TradeUserTradeRoleFuncDto tradeUserTradeRoleFuncDto) {

        tradeUserTradeRoleFuncDto.getTradeUserDto().setEmail(email);
        TradeUserTradeRoleFunc tradeUserTradeRoleFunc = this.tradeUserService
                .createTradeUserTradeRoleFuncs(tradeUserTradeRoleFuncDto);
        return ResponseEntity.ok(TradeUserTradeRoleFuncDto.toDto(tradeUserTradeRoleFunc));
    }

    @RequestMapping("/{email}/tradeUserTradeRoleFuncs")
    public ResponseEntity<List<TradeUserTradeRoleFuncDto>> getTradeUserTradeRoleFuncs(@PathVariable String email) {

        List<TradeUserTradeRoleFunc> tradeUserTradeRoleFunc = this.tradeUserService
                .findTradeUserTradeRoleFuncsByUserEmail(email);
        List<TradeUserTradeRoleFuncDto> tradeUserTradeRoleFuncDtos = tradeUserTradeRoleFunc.stream()
                .map(el -> TradeUserTradeRoleFuncDto.toDto(el)).collect(Collectors.toList());

        return ResponseEntity.ok(tradeUserTradeRoleFuncDtos);
    }

    @DeleteMapping("/{email}/tradeUserTradeRoleFuncs")
    public ResponseEntity<Void> deleteTradeUserTradeRoleFuncs(@PathVariable String email,
            @RequestBody TradeUserTradeRoleFuncDto tradeUserTradeRoleFuncDto) {

        tradeUserTradeRoleFuncDto.getTradeUserDto().setEmail(email);
        this.tradeUserService.deleteTradeUserTradeRoleFuncs(tradeUserTradeRoleFuncDto);
        return ResponseEntity.ok().body(null);
    }

    @RequestMapping("/{email}/tradeUserTradeGroups")
    public ResponseEntity<List<TradeUserTradeGroupDto>> getTradeUserTradeGroups(@PathVariable String email) {
        return ResponseEntity.ok(this.tradeUserService.findTradeUserTradeGroupByEmail(email));
    }

    /*
    @PutMapping("/{email}/tradeUserTradeGroups")
    public ResponseEntity<TradeUserTradeGroupDto> createTradeUserTradeGroup(
            @PathVariable String email,
            @RequestBody TradeUserTradeGroupDto tradeUserTradeGroupDto) {

        tradeUserTradeGroupDto.getTradeUserDto().setEmail(email);
        TradeUserTradeGroup tradeUserTradeGroup = this.tradeUserService.saveTradeUserTradeGroup(tradeUserTradeGroupDto);

        return ResponseEntity.ok(TradeUserTradeGroupDto.toDto(tradeUserTradeGroup));
    } */

    @PutMapping("/{email}/tradeUserTradeGroups")
    public ResponseEntity<List<TradeUserTradeGroupDto>> createTradeUserTradeGroup(
            @PathVariable String email,
            @RequestBody List<TradeUserTradeGroupDto> listTradeUserTradeGroupDto) {

        List<TradeUserTradeGroupDto> listTradeUserTradeGroupDtoToReturn = new ArrayList<>();

        listTradeUserTradeGroupDto.forEach(el -> {
            el.getTradeUserDto().setEmail(email);
            TradeUserTradeGroup tradeUserTradeGroup = this.tradeUserService.saveTradeUserTradeGroup(el);
            listTradeUserTradeGroupDtoToReturn.add(TradeUserTradeGroupDto.toDto(tradeUserTradeGroup));
        });

        return ResponseEntity.ok(listTradeUserTradeGroupDtoToReturn);
    }

    @DeleteMapping("/{email}/tradeUserTradeGroups")
    public ResponseEntity<Void> deleteTradeUserTradeGroups(@PathVariable String email,
            @RequestBody TradeUserTradeGroupDto tradeUserTradeGroupDto) {

        tradeUserTradeGroupDto.getTradeUserDto().setEmail(email);
        this.tradeUserService.deleteTradeUserGroup(tradeUserTradeGroupDto);
        return ResponseEntity.ok().body(null);
    }

}
