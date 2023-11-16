package com.ft.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ft.admin.dto.TradeFunctionalityDto;
import com.ft.admin.service.TradeFunctionalityService;

@RestController
@RequestMapping("tradefunctionalities")
public class TradeFunctionalityController {
    
    @Autowired
    private TradeFunctionalityService tradeFunctionalityService; 
    
    
    @RequestMapping("/")
    public ResponseEntity<List<TradeFunctionalityDto>> getTradeFunctionalities(){
        return ResponseEntity.ok(this.tradeFunctionalityService.findAll());
    }

    @PostMapping("/")
    public ResponseEntity<TradeFunctionalityDto> create(@RequestBody TradeFunctionalityDto tradeFunctionalityDto){
        return ResponseEntity.ok(this.tradeFunctionalityService.createTradeFunctionality(tradeFunctionalityDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TradeFunctionalityDto> update(@RequestBody TradeFunctionalityDto tradeFunctionalityDto, @PathVariable Integer id){
        tradeFunctionalityDto.setId(id);
        return ResponseEntity.ok(this.tradeFunctionalityService.updateTradeFunctionality(tradeFunctionalityDto));
    }    

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Integer id){
        this.tradeFunctionalityService.deleteTradeFunctionality(id);
        return ResponseEntity.ok().body(null);
    }

}
