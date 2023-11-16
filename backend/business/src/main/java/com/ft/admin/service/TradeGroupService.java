package com.ft.admin.service;

import com.ft.admin.entity.TradeGroup;
import com.ft.admin.entity.TradeGroupTradeRuleFunc;
import com.ft.admin.repository.TradeGroupRepository;
import com.ft.admin.repository.TradeGroupTradeRuleFuncRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
