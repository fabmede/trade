package com.ft.admin.service;

import com.ft.admin.dto.TradeGroupDto;
import com.ft.admin.dto.TradeGroupTradeRoleFuncDto;
import com.ft.admin.entity.*;
import com.ft.admin.repository.TradeGroupRepository;
import com.ft.admin.repository.TradeGroupTradeRoleFuncRepository;
import com.ft.commom.crud.AbstractService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TradeGroupService extends AbstractService<TradeGroupDto> {

    @Autowired
    private TradeGroupRepository tradeGroupRepository;

    @Autowired
    private TradeGroupTradeRoleFuncRepository tradeGroupTradeRoleFuncRepository;

    public List<TradeGroupDto> findAll() {
        List<TradeGroup> listTradeGroup = this.tradeGroupRepository.findAll();
        return listTradeGroup.stream().map( el-> new TradeGroupDto(el.getId(),el.getDescription(),el.getName())).toList();
    }

    @Transactional
    public TradeGroupDto update(TradeGroupDto tradeGroupDto, String idAString) {

        tradeGroupDto.setId(Integer.parseInt(idAString));
        Optional<TradeGroup> oTradeGroup = this.tradeGroupRepository.findById(tradeGroupDto.getId());

        if (!oTradeGroup.isPresent()) {
            throw new RuntimeException("There is no register to update");
        }

        TradeGroup tradeGroup = oTradeGroup.get();
        tradeGroup.setDescription(tradeGroupDto.getDescription());
        tradeGroup.setName(tradeGroupDto.getName());
        tradeGroup = this.tradeGroupRepository.save(tradeGroup);
        return new TradeGroupDto(tradeGroup.getId(), tradeGroup.getDescription(), tradeGroup.getName());
    }

    @Transactional
    public TradeGroupDto create(TradeGroupDto tradeGroupDto) {
        TradeGroup tradeGroup = new TradeGroup();
        tradeGroup.setDescription(tradeGroupDto.getDescription());
        tradeGroup.setName(tradeGroupDto.getName());
        tradeGroup = this.tradeGroupRepository.save(tradeGroup);
        return new TradeGroupDto(tradeGroup.getId(), tradeGroup.getDescription(), tradeGroup.getName());
    }

    @Transactional
    public void delete(String idAString) {

        Integer id = Integer.valueOf(idAString);
        Optional<TradeGroup> oTradeGroup = this.tradeGroupRepository.findById(id);

        if (!oTradeGroup.isPresent()) {
            throw new RuntimeException("There is no register to delete");
        }

        TradeGroup tradeGroup = oTradeGroup.get();
        this.tradeGroupRepository.delete(tradeGroup);
    }

    public List<TradeGroupTradeRoleFunc> findTradeGroupTradeRoleFuncByTradeGroupId(Integer tradeGroupId) {
        tradeGroupTradeRoleFuncRepository.clear();
        List<TradeGroupTradeRoleFunc> listTradeGroupTradeRoleFunc = this.tradeGroupTradeRoleFuncRepository
                .findById_TradeGroup_Id(tradeGroupId);
        return listTradeGroupTradeRoleFunc;
    }

    public TradeGroupTradeRoleFunc findTradeGroupTradeRoleFuncById(Integer tradeGroupId,
                                                                   Integer tradeFunctionalityId,
                                                                   Integer tradeRoleId) {
        tradeGroupTradeRoleFuncRepository.clear();
        TradeGroupTradeRoleFunc tradeGroupTradeRoleFunc = this.tradeGroupTradeRoleFuncRepository
                .findById_TradeGroup_IdAndId_TradeFunctionality_IdAndId_TradeRole_Id(tradeGroupId, tradeFunctionalityId, tradeRoleId);
        return tradeGroupTradeRoleFunc;
    }

    public TradeGroupTradeRoleFunc findTradeGroupTradeRoleFuncById(TradeGroupTradeRoleFuncPK groupTradeRoleFuncPK) {
        tradeGroupTradeRoleFuncRepository.clear();
        return this.findTradeGroupTradeRoleFuncById(groupTradeRoleFuncPK.getTradeGroup().getId(),
                groupTradeRoleFuncPK.getTradeFunctionality().getId(),
                groupTradeRoleFuncPK.getTradeRole().getId());
    }

    @Transactional
    public TradeGroupTradeRoleFunc createTradeGroupTradeRoleFunc(
            TradeGroupTradeRoleFuncDto tradeGroupTradeRoleFuncDto) {

        TradeGroupTradeRoleFuncPK groupTradeRoleFuncPK = new TradeGroupTradeRoleFuncPK();
        groupTradeRoleFuncPK.setTradeFunctionality(new TradeFunctionality());
        groupTradeRoleFuncPK.setTradeGroup(new TradeGroup());
        groupTradeRoleFuncPK.setTradeRole(new TradeRole());

        groupTradeRoleFuncPK
                .getTradeFunctionality().setId(tradeGroupTradeRoleFuncDto.getTradeFunctionalityDto().getId());
        groupTradeRoleFuncPK.getTradeGroup().setId(tradeGroupTradeRoleFuncDto.getTradeGroupDto().getId());
        groupTradeRoleFuncPK.getTradeRole().setId(tradeGroupTradeRoleFuncDto.getTradeRoleDto().getId());
        TradeGroupTradeRoleFunc groupTradeRoleFunc = new TradeGroupTradeRoleFunc();
        groupTradeRoleFunc.setId(groupTradeRoleFuncPK);
        TradeGroupTradeRoleFunc tradeGroupTradeRoleFuncSaved = tradeGroupTradeRoleFuncRepository.saveAndFlush(groupTradeRoleFunc);
        tradeGroupTradeRoleFuncSaved = this.findTradeGroupTradeRoleFuncById(groupTradeRoleFuncPK.getTradeGroup().getId(),
                groupTradeRoleFuncPK.getTradeFunctionality().getId(),
                groupTradeRoleFuncPK.getTradeRole().getId());
        ;
        return tradeGroupTradeRoleFuncSaved;
    }

    @Transactional
    public void deleteTradeGroupTradeRoleFunc(
            TradeGroupTradeRoleFuncDto tradeGroupTradeRoleFuncDto) {

        TradeGroupTradeRoleFuncPK groupTradeRoleFuncPK = new TradeGroupTradeRoleFuncPK();
        groupTradeRoleFuncPK.setTradeFunctionality(new TradeFunctionality());
        groupTradeRoleFuncPK.setTradeGroup(new TradeGroup());
        groupTradeRoleFuncPK.setTradeRole(new TradeRole());

        groupTradeRoleFuncPK
                .getTradeFunctionality().setId(tradeGroupTradeRoleFuncDto.getTradeFunctionalityDto().getId());
        groupTradeRoleFuncPK.getTradeGroup().setId(tradeGroupTradeRoleFuncDto.getTradeGroupDto().getId());
        groupTradeRoleFuncPK.getTradeRole().setId(tradeGroupTradeRoleFuncDto.getTradeRoleDto().getId());
        TradeGroupTradeRoleFunc groupTradeRoleFunc = new TradeGroupTradeRoleFunc();
        groupTradeRoleFunc.setId(groupTradeRoleFuncPK);
        tradeGroupTradeRoleFuncRepository.delete(groupTradeRoleFunc);
        tradeGroupTradeRoleFuncRepository.flush();
     }
}
