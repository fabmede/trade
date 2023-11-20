package com.ft.admin.service;

import com.ft.admin.dto.TradeGroupDto;
import com.ft.admin.entity.TradeGroup;
import com.ft.admin.entity.TradeGroupTradeRuleFunc;
import com.ft.admin.repository.TradeGroupRepository;
import com.ft.admin.repository.TradeGroupTradeRuleFuncRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TradeGroupService {

    @Autowired
    private TradeGroupRepository tradeGroupRepository;

    @Autowired
    private TradeGroupTradeRuleFuncRepository tradeGroupTradeRuleFuncRepository;

    public List<TradeGroup> findAll(){
        return this.tradeGroupRepository.findAll();
    }

    public List<TradeGroupTradeRuleFunc> findTradeGroupTradeRuleFuncByTradeGroupId(Integer tradeGroupId){
        return this.tradeGroupTradeRuleFuncRepository.findByTradeGroupId(tradeGroupId);
    }

    @Transactional
    public TradeGroupDto updateTradeGroup(TradeGroupDto tradeGroupDto){
        Optional<TradeGroup> oTradeGroup =  this.tradeGroupRepository.findById(tradeGroupDto.getId()); 

        if(!oTradeGroup.isPresent()){
            throw new RuntimeException("There is no register to update"); 
        }

        TradeGroup tradeGroup = oTradeGroup.get(); 
        tradeGroup.setDescription(tradeGroupDto.getDescription());
        tradeGroup.setName(tradeGroupDto.getName());
        tradeGroup = this.tradeGroupRepository.save(tradeGroup);
        return new TradeGroupDto(tradeGroup.getId(), tradeGroup.getDescription(), tradeGroup.getName());
    }   
    
    @Transactional
    public TradeGroupDto createTradeGroup(TradeGroupDto tradeGroupDto){
        TradeGroup tradeGroup = new TradeGroup();
        tradeGroup.setDescription(tradeGroupDto.getDescription());
        tradeGroup.setName(tradeGroupDto.getName());
        tradeGroup = this.tradeGroupRepository.save(tradeGroup);
        return new TradeGroupDto(tradeGroup.getId(), tradeGroup.getDescription(), tradeGroup.getName());
    }   
    
    @Transactional
    public void deleteTradeGroup(Integer id){
       Optional<TradeGroup> oTradeGroup =  this.tradeGroupRepository.findById(id); 

        if(!oTradeGroup.isPresent()){
            throw new RuntimeException("There is no register to delete"); 
        }

        TradeGroup tradeGroup = oTradeGroup.get(); 
        this.tradeGroupRepository.delete(tradeGroup);
    }     
}
