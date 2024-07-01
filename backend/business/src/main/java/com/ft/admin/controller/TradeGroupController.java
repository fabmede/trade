package com.ft.admin.controller;

import com.ft.admin.dto.TradeGroupDto;
import com.ft.admin.dto.TradeGroupTradeRoleFuncDto;
import com.ft.admin.entity.TradeGroupTradeRoleFunc;
import com.ft.admin.service.TradeGroupService;
import com.ft.commom.crud.AbstractController;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("tradegroups")
public class TradeGroupController extends AbstractController<TradeGroupDto, TradeGroupService>{

    @RequestMapping("/{tradeGroupId}/tradeGroupTradeRoleFuncs")
    public ResponseEntity<List<TradeGroupTradeRoleFuncDto>> getTradeGroupTradeRoleFuncFuncs(
            @PathVariable Integer tradeGroupId) {

        List<TradeGroupTradeRoleFunc> listTradeGroupTradeRoleFunc = this.getService().findTradeGroupTradeRoleFuncByTradeGroupId(tradeGroupId);
        List<TradeGroupTradeRoleFuncDto> listTradeGroupTradeRoleFuncDto = listTradeGroupTradeRoleFunc.stream()
                .map(e -> TradeGroupTradeRoleFuncDto.toDto(e))
                .collect(Collectors.toList());

        return ResponseEntity.ok(listTradeGroupTradeRoleFuncDto);
    }

    @PutMapping("/{tradeGroupId}/tradeGroupTradeRoleFuncs")
    public ResponseEntity<TradeGroupTradeRoleFuncDto> createTradeGroupTradeRoleFunc(@PathVariable Integer tradeGroupId,
                                                                                    @RequestBody TradeGroupTradeRoleFuncDto tradeGroupTradeRoleFuncDto) {

        TradeGroupTradeRoleFunc tradeGroupTradeRoleFuncSaved = this.getService().createTradeGroupTradeRoleFunc(tradeGroupTradeRoleFuncDto);
        TradeGroupTradeRoleFuncDto tradeGroupTradeRoleFuncDtoToReturn = TradeGroupTradeRoleFuncDto.toDto(tradeGroupTradeRoleFuncSaved);
        return ResponseEntity.ok().body(tradeGroupTradeRoleFuncDtoToReturn);

    }

    @DeleteMapping("/{tradeGroupId}/tradeGroupTradeRoleFuncs")
    public ResponseEntity<Void> deleteTradeGroupTradeRoleFunc(@PathVariable Integer tradeGroupId,
                                                                                    @RequestBody TradeGroupTradeRoleFuncDto tradeGroupTradeRoleFuncDto) {

        this.getService().deleteTradeGroupTradeRoleFunc(tradeGroupTradeRoleFuncDto);
        return ResponseEntity.ok().body(null);
    }

}
