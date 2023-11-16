package com.ft.admin.service;

import com.ft.admin.dto.TradeUserDto;
import com.ft.admin.dto.TradeUserTradeGroupDto;
import com.ft.admin.dto.TradeUserTradeRuleFuncDto;
import com.ft.admin.entity.*;
import com.ft.admin.repository.TradeUserRepository;
import com.ft.admin.repository.TradeUserTradeGroupRepository;
import com.ft.admin.repository.TradeUserTradeRuleFuncsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TradeUserService {

    @Autowired
    private TradeUserRepository tradeUserRepository;

    @Autowired
    private TradeUserTradeRuleFuncsRepository tradeUserTradeRuleFuncsRepository;

    @Autowired
    private TradeUserTradeGroupRepository tradeUserTradeGroupRepository;

    public List<TradeUserDto> findAll() {
        List<TradeUser> listTradeUser = this.tradeUserRepository.findAll();
        List<TradeUserDto> listTradeUserDto = listTradeUser.stream().map( el-> new TradeUserDto(el.getEmail(),el.getName())).collect(Collectors.toList());
        return listTradeUserDto;
    }

    public List<TradeUserTradeRuleFuncDto> findTradeUserTradeRuleFuncsByUserEmail(String email) {
        List<TradeUserTradeRuleFunc>  tradeUserTradeRuleFunc = this.tradeUserTradeRuleFuncsRepository.findByUserEmail(email);
        List<TradeUserTradeRuleFuncDto>  tradeUserTradeRuleFuncDtos = tradeUserTradeRuleFunc.stream().map( el -> new TradeUserTradeRuleFuncDto(el.getId().getUserEmail(),el.getId().getTradeRuleId(), el.getId().getTradeFunctionalityId())).collect(Collectors.toList());
        return tradeUserTradeRuleFuncDtos;
    }

    public List<TradeUserTradeGroupDto> findTradeUserTradeGroupByEmail(String email){
        List<TradeUserTradeGroup>  tradeUserTradeGroups = this.tradeUserTradeGroupRepository.findByUserEmail(email);
        List<TradeUserTradeGroupDto>  tradeUserTradeGroupsDto = tradeUserTradeGroups.stream().map( el -> new TradeUserTradeGroupDto(el.getId().getTradeGroupId(),el.getId().getUserEmail())).collect(Collectors.toList());
        return tradeUserTradeGroupsDto;
    }

    @Transactional
    public TradeUserDto saveTradeUser(TradeUserDto tradeUserDto){
        TradeUser tradeUser = new TradeUser();
        tradeUser.setEmail(tradeUserDto.getEmail());
        tradeUser.setName(tradeUserDto.getName());
        tradeUser = this.tradeUserRepository.save(tradeUser);
        return new TradeUserDto(tradeUser.getEmail(), tradeUser.getName());
    }

    @Transactional
    public TradeUserTradeGroupDto saveTradeUserTradeGroup(TradeUserTradeGroupDto tradeUserTradeGroupDto){
        TradeUserTradeGroup tradeUserTradeGroup = new TradeUserTradeGroup();
        tradeUserTradeGroup.setId(new TradeUserTradeGroupPK());
        tradeUserTradeGroup.getId().setTradeGroupId(tradeUserTradeGroupDto.getTradeGroupId());
        tradeUserTradeGroup.getId().setUserEmail(tradeUserTradeGroupDto.getUserEmail());
        this.tradeUserTradeGroupRepository.save(tradeUserTradeGroup);
        return tradeUserTradeGroupDto;
    }

    @Transactional
    public TradeUserTradeRuleFuncDto saveTradeUserTradeRuleFuncs(TradeUserTradeRuleFuncDto tradeUserTradeGroupDto){
        TradeUserTradeRuleFunc tradeUserTradeRuleFunc = new TradeUserTradeRuleFunc();
        tradeUserTradeRuleFunc.setId(new TradeUserTradeRuleFuncPK());
        tradeUserTradeRuleFunc.getId().setTradeRuleId(tradeUserTradeGroupDto.getTradeRuleId());
        tradeUserTradeRuleFunc.getId().setUserEmail(tradeUserTradeGroupDto.getUserEmail());
        tradeUserTradeRuleFunc.getId().setTradeFunctionalityId(tradeUserTradeGroupDto.getTradeFunctionalityId());
        this.tradeUserTradeRuleFuncsRepository.save(tradeUserTradeRuleFunc);
        return tradeUserTradeGroupDto;
    }
}
