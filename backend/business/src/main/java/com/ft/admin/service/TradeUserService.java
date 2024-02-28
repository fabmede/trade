package com.ft.admin.service;

import com.ft.admin.dto.TradeGroupDto;
import com.ft.admin.dto.TradeUserDto;
import com.ft.admin.dto.TradeUserTradeGroupDto;
import com.ft.admin.dto.TradeUserTradeRoleFuncDto;
import com.ft.admin.entity.*;
import com.ft.admin.repository.TradeUserRepository;
import com.ft.admin.repository.TradeUserTradeGroupRepository;
import com.ft.admin.repository.TradeUserTradeRoleFuncsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TradeUserService {

    @Autowired
    private TradeUserRepository tradeUserRepository;

    @Autowired
    private TradeUserTradeRoleFuncsRepository tradeUserTradeRoleFuncsRepository;

    @Autowired
    private TradeUserTradeGroupRepository tradeUserTradeGroupRepository;

    public List<TradeUserDto> findAll() {
        List<TradeUser> listTradeUser = this.tradeUserRepository.findAll();
        List<TradeUserDto> listTradeUserDto = listTradeUser.stream().map( el-> new TradeUserDto(el.getEmail(),el.getName())).collect(Collectors.toList());
        return listTradeUserDto;
    }

    public List<TradeUserTradeRoleFuncDto> findTradeUserTradeRoleFuncsByUserEmail(String email) {
        List<TradeUserTradeRoleFunc>  tradeUserTradeRoleFunc = this.tradeUserTradeRoleFuncsRepository.findByUserEmail(email);
        List<TradeUserTradeRoleFuncDto>  tradeUserTradeRoleFuncDtos = tradeUserTradeRoleFunc.stream().map( el -> new TradeUserTradeRoleFuncDto(el.getId().getUserEmail(),el.getId().getTradeRoleId(), el.getId().getTradeFunctionalityId())).collect(Collectors.toList());
        return tradeUserTradeRoleFuncDtos;
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
    public TradeUserTradeRoleFuncDto saveTradeUserTradeRoleFuncs(TradeUserTradeRoleFuncDto tradeUserTradeGroupDto){
        TradeUserTradeRoleFunc tradeUserTradeRoleFunc = new TradeUserTradeRoleFunc();
        tradeUserTradeRoleFunc.setId(new TradeUserTradeRoleFuncPK());
        tradeUserTradeRoleFunc.getId().setTradeRoleId(tradeUserTradeGroupDto.getTradeRoleId());
        tradeUserTradeRoleFunc.getId().setUserEmail(tradeUserTradeGroupDto.getUserEmail());
        tradeUserTradeRoleFunc.getId().setTradeFunctionalityId(tradeUserTradeGroupDto.getTradeFunctionalityId());
        this.tradeUserTradeRoleFuncsRepository.save(tradeUserTradeRoleFunc);
        return tradeUserTradeGroupDto;
    }

     @Transactional
    public TradeUserDto updateTradeUser(TradeUserDto tradeUserDto) {
        Optional<TradeUser> oTradeUser = this.tradeUserRepository.findById(tradeUserDto.getEmail());

        if (!oTradeUser.isPresent()) {
            throw new RuntimeException("There is no register to update");
        }

        TradeUser tradeUser = oTradeUser.get();
        tradeUser.setName(tradeUserDto.getName());
        tradeUser = this.tradeUserRepository.save(tradeUser);
        return new TradeUserDto(tradeUser.getEmail(), tradeUser.getName());
    }
}
