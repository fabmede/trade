package com.ft.business.controller;

import com.ft.business.dto.TradeBusinessDto;
import com.ft.business.entity.TradeBusiness;
import com.ft.business.service.TradeBusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/tradebusiness")
public class TradeBusinessController {

    @Autowired
    private TradeBusinessService tradeBusinessService;

    @GetMapping("/")
    public ResponseEntity<List<TradeBusinessDto>> getTradeBusiness() {

        List<TradeBusinessDto> listTradeBusinessDto = new ArrayList<>();
        List<TradeBusiness> listTradeBusiness = this.tradeBusinessService.findAll();
        listTradeBusiness.forEach(el -> listTradeBusinessDto.add(TradeBusinessDto.toDto(el)));
        return ResponseEntity.ok(listTradeBusinessDto);
    }

    @PostMapping("/")
    public ResponseEntity<TradeBusinessDto> saveNewTradeBusiness(@RequestBody TradeBusinessDto tradeBusinessDto) {
        TradeBusinessDto tradeBusinessDtoToReturn = this.tradeBusinessService.saveNewTradeBusiness(tradeBusinessDto); 
        return ResponseEntity.ok(tradeBusinessDtoToReturn);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TradeBusinessDto> updateTradeBusiness(@RequestBody TradeBusinessDto tradeBusinessDto, @PathVariable Long id) {
        tradeBusinessDto.setId(id);
        TradeBusinessDto tradeBusinessDtoToReturn = this.tradeBusinessService.updateTradeBusiness(tradeBusinessDto); 

        return ResponseEntity.ok(tradeBusinessDtoToReturn);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        this.tradeBusinessService.deleteTradeBusiness(id);
        return ResponseEntity.ok().body(null);
    }

}
