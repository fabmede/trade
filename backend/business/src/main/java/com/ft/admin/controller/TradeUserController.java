package com.ft.admin.controller;

import com.ft.admin.dto.TradeUserDto;
import com.ft.admin.dto.TradeUserTradeGroupDto;
import com.ft.admin.dto.TradeUserTradeRoleFuncDto;
import com.ft.admin.entity.TradeUserTradeGroup;
import com.ft.admin.entity.TradeUserTradeRoleFunc;
import com.ft.admin.service.TradeUserService;
import com.ft.commom.crud.AbstractController;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("tradeusers")
public class TradeUserController  extends AbstractController<TradeUserDto, TradeUserService>  {

    @PutMapping("/{email}/tradeUserTradeRoleFuncs")
    public ResponseEntity<TradeUserTradeRoleFuncDto> createTradeUserTradeRoleFuncs(@PathVariable String email,
            @RequestBody TradeUserTradeRoleFuncDto tradeUserTradeRoleFuncDto) {

        tradeUserTradeRoleFuncDto.getTradeUserDto().setEmail(email);
        TradeUserTradeRoleFunc tradeUserTradeRoleFunc = this.getService()
                .createTradeUserTradeRoleFuncs(tradeUserTradeRoleFuncDto);
        return ResponseEntity.ok(TradeUserTradeRoleFuncDto.toDto(tradeUserTradeRoleFunc));
    }

    @RequestMapping("/{email}/tradeUserTradeRoleFuncs")
    public ResponseEntity<List<TradeUserTradeRoleFuncDto>> getTradeUserTradeRoleFuncs(@PathVariable String email) {

        List<TradeUserTradeRoleFunc> tradeUserTradeRoleFunc = this.getService()
                .findTradeUserTradeRoleFuncsByUserEmail(email);
        List<TradeUserTradeRoleFuncDto> tradeUserTradeRoleFuncDtos = tradeUserTradeRoleFunc.stream()
                .map(el -> TradeUserTradeRoleFuncDto.toDto(el)).collect(Collectors.toList());

        return ResponseEntity.ok(tradeUserTradeRoleFuncDtos);
    }

    @DeleteMapping("/{email}/tradeUserTradeRoleFuncs")
    public ResponseEntity<Void> deleteTradeUserTradeRoleFuncs(@PathVariable String email,
            @RequestBody TradeUserTradeRoleFuncDto tradeUserTradeRoleFuncDto) {

        tradeUserTradeRoleFuncDto.getTradeUserDto().setEmail(email);
        this.getService().deleteTradeUserTradeRoleFuncs(tradeUserTradeRoleFuncDto);
        return ResponseEntity.ok().body(null);
    }

    @RequestMapping("/{email}/tradeUserTradeGroups")
    public ResponseEntity<List<TradeUserTradeGroupDto>> getTradeUserTradeGroups(@PathVariable String email) {
        return ResponseEntity.ok(this.getService().findTradeUserTradeGroupByEmail(email));
    }


    @PutMapping("/{email}/tradeUserTradeGroups")
    public ResponseEntity<List<TradeUserTradeGroupDto>> createTradeUserTradeGroup(
            @PathVariable String email,
            @RequestBody List<TradeUserTradeGroupDto> listTradeUserTradeGroupDto) {

        List<TradeUserTradeGroupDto> listTradeUserTradeGroupDtoToReturn = new ArrayList<>();

        listTradeUserTradeGroupDto.forEach(el -> {
            el.getTradeUserDto().setEmail(email);
            TradeUserTradeGroup tradeUserTradeGroup = this.getService().saveTradeUserTradeGroup(el);
            listTradeUserTradeGroupDtoToReturn.add(TradeUserTradeGroupDto.toDto(tradeUserTradeGroup));
        });

        return ResponseEntity.ok(listTradeUserTradeGroupDtoToReturn);
    }

    @DeleteMapping("/{email}/tradeUserTradeGroups")
    public ResponseEntity<Void> deleteTradeUserTradeGroups(@PathVariable String email,
            @RequestBody TradeUserTradeGroupDto tradeUserTradeGroupDto) {

        tradeUserTradeGroupDto.getTradeUserDto().setEmail(email);
        this.getService().deleteTradeUserGroup(tradeUserTradeGroupDto);
        return ResponseEntity.ok().body(null);
    }

}
