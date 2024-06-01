package com.ft.business.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ft.business.dto.TradeBusinessDto;
import com.ft.business.dto.TradeBusinessHistDto;
import com.ft.business.dto.TradeBusinessLanguageDto;
import com.ft.business.dto.TradeBusinessTestAndExecuteDto;
import com.ft.business.entity.TradeBusiness;
import com.ft.business.entity.TradeBusinessHist;
import com.ft.business.entity.TradeBusinessLanguage;
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

    @PutMapping("/{id}/tradebusinesssource")
    public ResponseEntity<TradeBusinessDto> updateTradeBusinessSource(@RequestBody TradeBusinessDto tradeBusinessDto, @PathVariable Long id) {
        tradeBusinessDto.setId(id);
        TradeBusinessDto tradeBusinessDtoToReturn = this.tradeBusinessService.updateTradeBusinessSource(tradeBusinessDto); 
        return ResponseEntity.ok(tradeBusinessDtoToReturn);
    }   

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        this.tradeBusinessService.deleteTradeBusiness(id);
        return ResponseEntity.ok().body(null);
    }

    @GetMapping("/{id}/tradebusinesssource")
    public ResponseEntity<List<TradeBusinessHistDto>> getTradeBusinessHist(@PathVariable Long id) {
        List<TradeBusinessHist> listTradeBusinessHist = this.tradeBusinessService.findTradeBusinessHistByTradeBusinessId(id); 
        List<TradeBusinessHistDto> listTradeBusinessHistDto = new ArrayList<>();
        listTradeBusinessHist.forEach(el-> listTradeBusinessHistDto.add(TradeBusinessHistDto.toDto(el)));
        return ResponseEntity.ok(listTradeBusinessHistDto);
    }   

    @GetMapping("/tradebusinesslanguages")
    public ResponseEntity<List<TradeBusinessLanguageDto>> getTradebusinesslanguages() {

        List<TradeBusinessLanguageDto> listTradeBusinessLanguageDto = new ArrayList<>();
        List<TradeBusinessLanguage> listTradeBusiness = this.tradeBusinessService.findAllTradeBusinessLanguage();
        listTradeBusiness.forEach(el -> listTradeBusinessLanguageDto.add(TradeBusinessLanguageDto.toDto(el)));
        return ResponseEntity.ok(listTradeBusinessLanguageDto);
    }

    @PutMapping("/tradebusinesssource/compileandexecute")
    public ResponseEntity<Object> compileAndExecute(@RequestBody TradeBusinessTestAndExecuteDto tradeBusinessTestAndExecuteDto) {
        Object compileAndeExecute = this.tradeBusinessService.compileAndExecute(tradeBusinessTestAndExecuteDto); 
        String response = ""; 
        try {
            response = new ObjectMapper().writeValueAsString(compileAndeExecute);
        }catch( JsonProcessingException e ){
            response = e.getMessage();      
        }

        return ResponseEntity.ok(response);
    }
    
    @PutMapping("/{id}/execute")
    public ResponseEntity<TradeBusinessDto> executeTradeBusiness(@RequestBody TradeBusinessDto tradeBusinessDto, @PathVariable Long id) {
        tradeBusinessDto.setId(id);
        TradeBusinessDto tradeBusinessDtoToReturn = this.tradeBusinessService.updateTradeBusiness(tradeBusinessDto); 

        return ResponseEntity.ok(tradeBusinessDtoToReturn);
    }
}
