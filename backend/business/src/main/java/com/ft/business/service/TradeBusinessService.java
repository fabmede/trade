package com.ft.business.service;


import com.ft.business.dto.TradeBusinessDto;
import com.ft.business.dto.TradeBusinessTestAndExecuteDto;
import com.ft.business.entity.TradeBusiness;
import com.ft.business.entity.TradeBusinessHist;
import com.ft.business.entity.TradeBusinessHistPK;
import com.ft.business.entity.TradeBusinessLanguage;
import com.ft.business.executor.ExecutorJava;
import com.ft.business.repositoty.TradeBusinessHistRepository;
import com.ft.business.repositoty.TradeBusinessLanguageRepository;
import com.ft.business.repositoty.TradeBusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TradeBusinessService {

    @Autowired
    private TradeBusinessRepository tradeBusinessRepository;

    @Autowired
    private TradeBusinessHistRepository tradeBusinessHistRepository;

    @Autowired
    private TradeBusinessLanguageRepository tradeBusinessLanguageRepository;

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
    public TradeBusinessDto updateTradeBusinessSource(TradeBusinessDto tradeBusinessDto) {

        Optional<TradeBusiness> oTradeBusiness = this.tradeBusinessRepository.findById(tradeBusinessDto.getId());

        if (!oTradeBusiness.isPresent()) {
            throw new RuntimeException("There is no register to update");
        }

        TradeBusinessLanguage tradeBusinessLanguage = new TradeBusinessLanguage();
        tradeBusinessLanguage.setDescription(tradeBusinessDto.getTradeBusinessLanguageDto().getDescription());
        tradeBusinessLanguage.setName(tradeBusinessDto.getTradeBusinessLanguageDto().getName());
        
        TradeBusiness tradeBusiness = oTradeBusiness.get();
        TradeBusiness tradeBusinessToHist = new TradeBusiness();
        tradeBusinessToHist.setDescription(tradeBusiness.getDescription());
        tradeBusinessToHist.setName(tradeBusiness.getName());
        tradeBusinessToHist.setSource(tradeBusiness.getSource());
        tradeBusinessToHist.setId(tradeBusiness.getId());
        tradeBusinessToHist.setTradeBusinessLanguage(tradeBusiness.getTradeBusinessLanguage());
        this.saveNewTradeBusinessHist(tradeBusinessToHist);

        tradeBusiness.setSource(tradeBusinessDto.getSource());
        tradeBusiness.setTradeBusinessLanguage(tradeBusinessLanguage);
        tradeBusiness = this.tradeBusinessRepository.save(tradeBusiness);
        return TradeBusinessDto.toDto(tradeBusiness);
    }

    @Transactional
    private TradeBusinessHist saveNewTradeBusinessHist(TradeBusiness tradeBusiness) {
        TradeBusinessHistPK businessHistPK = new TradeBusinessHistPK();
        businessHistPK.setTradeBusiness(tradeBusiness);
        businessHistPK.setDate(LocalDateTime.now());
        TradeBusinessHist tradeBusinessHist = new TradeBusinessHist();
        tradeBusinessHist.setId(businessHistPK);
        tradeBusinessHist.setSource(tradeBusiness.getSource());
        tradeBusinessHist.setTradeBusinessLanguage(tradeBusiness.getTradeBusinessLanguage());
        tradeBusinessHist = this.tradeBusinessHistRepository.save(tradeBusinessHist);
        return tradeBusinessHist;
    }

    @Transactional
    public void deleteTradeBusiness(Long id) {
        Optional<TradeBusiness> oTradeBusiness = this.tradeBusinessRepository.findById(id);

        if (!oTradeBusiness.isPresent()) {
            throw new RuntimeException("There is no register to delete");
        }

        TradeBusiness tradeBusiness = oTradeBusiness.get();
        this.tradeBusinessRepository.delete(tradeBusiness);
    }

    public List<TradeBusinessHist> findTradeBusinessHistByTradeBusinessId(Long tradeBusinessId) {
        return this.tradeBusinessHistRepository.findById_TradeBusiness_Id(tradeBusinessId);
    }

    public List<TradeBusinessLanguage> findAllTradeBusinessLanguage() {
        List<TradeBusinessLanguage> tradeTradeBusinessLanguages = this.tradeBusinessLanguageRepository.findAll();
        return tradeTradeBusinessLanguages; 
    }

    public Object compileAndExecute(TradeBusinessTestAndExecuteDto tradeBusinessTestAndExecuteDto) {
        Object compileAndExecute = ExecutorJava.executeJavaScript(tradeBusinessTestAndExecuteDto.getSource(), tradeBusinessTestAndExecuteDto.getJsonStringParameter());
        return compileAndExecute; 
    }
    
}
