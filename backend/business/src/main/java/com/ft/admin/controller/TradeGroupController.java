package com.ft.admin.controller;

import com.ft.admin.dto.TradeGroupDto;
import com.ft.admin.dto.TradeGroupTradeRoleFuncDto;
import com.ft.admin.entity.TradeGroup;
import com.ft.admin.entity.TradeGroupTradeRoleFunc;
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

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("tradegroups")
public class TradeGroupController {

    @Autowired
    private TradeGroupService tradeGroupService;

    @GetMapping("/")
    public ResponseEntity<List<TradeGroupDto>> getTradeGroup() {
        List<TradeGroup> tradeGroups = this.tradeGroupService.findAll();
        List<TradeGroupDto> tradeGroupDtos = new ArrayList<>();
        tradeGroups.forEach(e -> tradeGroupDtos.add(new TradeGroupDto(e.getId(), e.getName(), e.getDescription())));
        return ResponseEntity.ok(tradeGroupDtos);
    }

    @PostMapping("/")
    public ResponseEntity<TradeGroupDto> create(@RequestBody TradeGroupDto tradeGroupDto) {
        return ResponseEntity.ok(this.tradeGroupService.createTradeGroup(tradeGroupDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TradeGroupDto> update(@RequestBody TradeGroupDto tradeGroupDto, @PathVariable Integer id) {
        tradeGroupDto.setId(id);
        return ResponseEntity.ok(this.tradeGroupService.updateTradeGroup(tradeGroupDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Integer id) {
        this.tradeGroupService.deleteTradeGroup(id);
        return ResponseEntity.ok().body(null);
    }

    @RequestMapping("/{tradeGroupId}/tradeGroupTradeRoleFuncs")
    public ResponseEntity<List<TradeGroupTradeRoleFuncDto>> getTradeGroupTradeRoleFuncFuncs(
            @PathVariable Integer tradeGroupId) {

        List<TradeGroupTradeRoleFunc> listTradeGroupTradeRoleFunc = this.tradeGroupService.findTradeGroupTradeRoleFuncByTradeGroupId(tradeGroupId);
        List<TradeGroupTradeRoleFuncDto> listTradeGroupTradeRoleFuncDto = listTradeGroupTradeRoleFunc.stream()
                .map(e -> TradeGroupTradeRoleFuncDto.toDto(e))
                .collect(Collectors.toList());

        return ResponseEntity.ok(listTradeGroupTradeRoleFuncDto);
    }

    @PutMapping("/{tradeGroupId}/tradeGroupTradeRoleFuncs")
    public ResponseEntity<TradeGroupTradeRoleFuncDto> createTradeGroupTradeRoleFunc(@PathVariable Integer tradeGroupId,
                                                                                    @RequestBody TradeGroupTradeRoleFuncDto tradeGroupTradeRoleFuncDto) {

        TradeGroupTradeRoleFunc tradeGroupTradeRoleFuncSaved = this.tradeGroupService.createTradeGroupTradeRoleFunc(tradeGroupTradeRoleFuncDto);
        TradeGroupTradeRoleFuncDto tradeGroupTradeRoleFuncDtoToReturn = TradeGroupTradeRoleFuncDto.toDto(tradeGroupTradeRoleFuncSaved);
        return ResponseEntity.ok().body(tradeGroupTradeRoleFuncDtoToReturn);

    }

    @DeleteMapping("/{tradeGroupId}/tradeGroupTradeRoleFuncs")
    public ResponseEntity<Void> deleteTradeGroupTradeRoleFunc(@PathVariable Integer tradeGroupId,
                                                                                    @RequestBody TradeGroupTradeRoleFuncDto tradeGroupTradeRoleFuncDto) {

        this.tradeGroupService.deleteTradeGroupTradeRoleFunc(tradeGroupTradeRoleFuncDto);
        return ResponseEntity.ok().body(null);
    }

}
