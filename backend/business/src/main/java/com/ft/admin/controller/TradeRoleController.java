package com.ft.admin.controller;

import com.ft.admin.dto.TradeRoleDto;
import com.ft.admin.entity.TradeRole;
import com.ft.admin.service.TradeRoleService;
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
@RequestMapping("traderoles")
public class TradeRoleController {

    @Autowired
    private TradeRoleService tradeRoleService;

    @GetMapping("/")
    public ResponseEntity<List<TradeRole>> getTradeRole(){
        return ResponseEntity.ok(this.tradeRoleService.findAll());
    }


    @PostMapping("/")
    public ResponseEntity<TradeRoleDto> create(@RequestBody TradeRoleDto tradeRoleDto){
        return ResponseEntity.ok(this.tradeRoleService.createTradeRole(tradeRoleDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TradeRoleDto> update(@RequestBody TradeRoleDto tradeRoleDto, @PathVariable Integer id){
        tradeRoleDto.setId(id);
        return ResponseEntity.ok(this.tradeRoleService.updateTradeRole(tradeRoleDto));
    }    

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Integer id){
        this.tradeRoleService.deleteTradeRole(id);
        return ResponseEntity.ok().body(null);
    }    
}
