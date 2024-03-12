package com.ft.business.service;

import com.ft.business.dto.TradeBusinessDto;
import com.ft.business.entity.TradeBusiness;
import com.ft.business.repositoty.TradeBusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TradeBusinessService {

    @Autowired
    private TradeBusinessRepository tradeBusinessRepository;

    public List<TradeBusiness> findAll() {
        return this.tradeBusinessRepository.findAll();
    }

    @Transactional
    public TradeBusinessDto saveNewTradeBusiness(TradeBusinessDto tradeBusinessDto) {
        TradeBusiness tradeBusiness = new TradeBusiness();
        tradeBusiness.setName(tradeBusinessDto.getName());
        tradeBusiness.setDescription(tradeBusinessDto.getDescription());
        tradeBusiness.setSource(tradeBusinessDto.getSource());
        tradeBusiness = this.tradeBusinessRepository.save(tradeBusiness);
        return TradeBusinessDto.toDto(tradeBusiness);
    }

    @Transactional
    public TradeBusinessDto updateTradeBusiness(TradeBusinessDto tradeBusinessDto) {

        Optional<TradeBusiness> oTradeBusiness = this.tradeBusinessRepository.findById(tradeBusinessDto.getId());

        if (!oTradeBusiness.isPresent()) {
            throw new RuntimeException("There is no register to update");
        }

        TradeBusiness tradeBusiness = oTradeBusiness.get();
        tradeBusiness.setName(tradeBusinessDto.getName());
        tradeBusiness.setDescription(tradeBusinessDto.getDescription());
        tradeBusiness.setSource(tradeBusinessDto.getSource());
        tradeBusiness = this.tradeBusinessRepository.save(tradeBusiness);
        return TradeBusinessDto.toDto(tradeBusiness);
    }

        
    @Transactional
    public void deleteTradeBusiness(Long id){
       Optional<TradeBusiness> oTradeBusiness =  this.tradeBusinessRepository.findById(id); 

        if(!oTradeBusiness.isPresent()){
            throw new RuntimeException("There is no register to delete"); 
        }

        TradeBusiness tradeBusiness = oTradeBusiness.get(); 
        this.tradeBusinessRepository.delete(tradeBusiness);
    }  
}
