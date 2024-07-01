package com.ft.admin.service;

import com.ft.admin.dto.TradeUserDto;
import com.ft.admin.dto.TradeUserTradeGroupDto;
import com.ft.admin.dto.TradeUserTradeRoleFuncDto;
import com.ft.admin.entity.*;
import com.ft.admin.repository.TradeUserRepository;
import com.ft.admin.repository.TradeUserTradeGroupRepository;
import com.ft.admin.repository.TradeUserTradeRoleFuncsRepository;
import com.ft.commom.crud.AbstractService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TradeUserService extends AbstractService<TradeUserDto> {

    @Autowired
    private TradeUserRepository tradeUserRepository;

    @Autowired
    private TradeUserTradeRoleFuncsRepository tradeUserTradeRoleFuncsRepository;

    @Autowired
    private TradeUserTradeGroupRepository tradeUserTradeGroupRepository;

    public List<TradeUserDto> findAll() {
        List<TradeUser> listTradeUser = this.tradeUserRepository.findAll();
        List<TradeUserDto> listTradeUserDto = listTradeUser.stream()
                .map(el -> new TradeUserDto(el.getEmail(), el.getName())).collect(Collectors.toList());
        return listTradeUserDto;
    }

    @Transactional
    public TradeUserDto create(TradeUserDto tradeUserDto) {
        TradeUser tradeUser = new TradeUser();
        tradeUser.setEmail(tradeUserDto.getEmail());
        tradeUser.setName(tradeUserDto.getName());
        tradeUser = this.tradeUserRepository.save(tradeUser);
        return new TradeUserDto(tradeUser.getEmail(), tradeUser.getName());
    }

    @Transactional
    public TradeUserDto update(TradeUserDto tradeUserDto, String idAString) {

        tradeUserDto.setEmail(idAString);
        Optional<TradeUser> oTradeUser = this.tradeUserRepository.findById(tradeUserDto.getEmail());

        if (!oTradeUser.isPresent()) {
            throw new RuntimeException("There is no register to update");
        }

        TradeUser tradeUser = oTradeUser.get();
        tradeUser.setName(tradeUserDto.getName());
        tradeUser = this.tradeUserRepository.save(tradeUser);
        return new TradeUserDto(tradeUser.getEmail(), tradeUser.getName());
    }

    @Transactional
    public void delete(String idAString) {
        Optional<TradeUser> oTradeUser = this.tradeUserRepository.findById(idAString);

        if (!oTradeUser.isPresent()) {
            throw new RuntimeException("There is no register to update");
        }

        TradeUser tradeUser = oTradeUser.get();
        this.tradeUserRepository.delete(tradeUser);
    }

    @Transactional
    public TradeUserTradeGroup saveTradeUserTradeGroup(TradeUserTradeGroupDto tradeUserTradeGroupDto) {
        TradeUserTradeGroup tradeUserTradeGroup = new TradeUserTradeGroup();
        TradeUserTradeGroupPK tradeUserTradeGroupPK = new TradeUserTradeGroupPK();
        tradeUserTradeGroupPK.setTradeGroup(new TradeGroup());
        tradeUserTradeGroupPK.setTradeUser(new TradeUser());

        tradeUserTradeGroupPK.getTradeGroup().setId(tradeUserTradeGroupDto.getTradeGroupDto().getId());
        tradeUserTradeGroupPK.getTradeGroup()
                .setDescription(tradeUserTradeGroupDto.getTradeGroupDto().getDescription());
        tradeUserTradeGroupPK.getTradeGroup().setName(tradeUserTradeGroupDto.getTradeGroupDto().getName());

        tradeUserTradeGroupPK.getTradeUser().setEmail(tradeUserTradeGroupDto.getTradeUserDto().getEmail());
        tradeUserTradeGroupPK.getTradeUser().setName(tradeUserTradeGroupDto.getTradeUserDto().getName());

        tradeUserTradeGroup.setId(tradeUserTradeGroupPK);

        TradeUserTradeGroup tradeUserTradeGroupSaved = this.tradeUserTradeGroupRepository
                .saveAndFlush(tradeUserTradeGroup);

        tradeUserTradeGroupSaved = this.findTradeUserGroupById(tradeUserTradeGroupDto.getTradeUserDto().getEmail(),
                tradeUserTradeGroupDto.getTradeGroupDto().getId());
        return tradeUserTradeGroupSaved;
    }


    public List<TradeUserTradeRoleFunc> findTradeUserTradeRoleFuncsByUserEmail(String email) {
        List<TradeUserTradeRoleFunc> tradeUserTradeRoleFunc = this.tradeUserTradeRoleFuncsRepository
                .findByUserEmail(email);
        return tradeUserTradeRoleFunc;
    }

    public List<TradeUserTradeGroupDto> findTradeUserTradeGroupByEmail(String email) {
        List<TradeUserTradeGroup> tradeUserTradeGroups = this.tradeUserTradeGroupRepository.findByUserEmail(email);
        List<TradeUserTradeGroupDto> tradeUserTradeGroupsDto = tradeUserTradeGroups.stream()
                .map(el -> TradeUserTradeGroupDto.toDto(el))
                .collect(Collectors.toList());
        return tradeUserTradeGroupsDto;
    }


    @Transactional
    public TradeUserTradeRoleFunc createTradeUserTradeRoleFuncs(TradeUserTradeRoleFuncDto tradeUserTradeRoleFuncDto) {

        TradeUserTradeRoleFuncPK tradeUserTradeRoleFuncPK = new TradeUserTradeRoleFuncPK();
        tradeUserTradeRoleFuncPK.setTradeUser(new TradeUser());
        tradeUserTradeRoleFuncPK.setTradeRole(new TradeRole());
        tradeUserTradeRoleFuncPK.setTradeFunctionality(new TradeFunctionality());

        tradeUserTradeRoleFuncPK
                .getTradeFunctionality().setId(tradeUserTradeRoleFuncDto.getTradeFunctionalityDto().getId());
        tradeUserTradeRoleFuncPK.getTradeUser().setEmail(tradeUserTradeRoleFuncDto.getTradeUserDto().getEmail());
        tradeUserTradeRoleFuncPK.getTradeRole().setId(tradeUserTradeRoleFuncDto.getTradeRoleDto().getId());

        TradeUserTradeRoleFunc tradeUserTradeRoleFunc = new TradeUserTradeRoleFunc();
        tradeUserTradeRoleFunc.setId(tradeUserTradeRoleFuncPK);
        TradeUserTradeRoleFunc tradeUserTradeRoleFuncSaved = this.tradeUserTradeRoleFuncsRepository
                .saveAndFlush(tradeUserTradeRoleFunc);

        tradeUserTradeRoleFuncSaved = this.findTradeUserTradeRoleFuncById(
                tradeUserTradeRoleFuncDto.getTradeUserDto().getEmail(),
                tradeUserTradeRoleFuncDto.getTradeFunctionalityDto().getId(),
                tradeUserTradeRoleFuncDto.getTradeRoleDto().getId());

        return tradeUserTradeRoleFuncSaved;

    }

    @Transactional
    public void deleteTradeUserTradeRoleFuncs(TradeUserTradeRoleFuncDto tradeUserTradeRoleFuncDto) {

        TradeUserTradeRoleFuncPK tradeUserTradeRoleFuncPK = new TradeUserTradeRoleFuncPK();
        tradeUserTradeRoleFuncPK.setTradeUser(new TradeUser());
        tradeUserTradeRoleFuncPK.setTradeRole(new TradeRole());
        tradeUserTradeRoleFuncPK.setTradeFunctionality(new TradeFunctionality());

        tradeUserTradeRoleFuncPK
                .getTradeFunctionality().setId(tradeUserTradeRoleFuncDto.getTradeFunctionalityDto().getId());
        tradeUserTradeRoleFuncPK.getTradeUser().setEmail(tradeUserTradeRoleFuncDto.getTradeUserDto().getEmail());
        tradeUserTradeRoleFuncPK.getTradeRole().setId(tradeUserTradeRoleFuncDto.getTradeRoleDto().getId());

        TradeUserTradeRoleFunc tradeUserTradeRoleFuncToRemove = this.findTradeUserTradeRoleFuncById(
                tradeUserTradeRoleFuncDto.getTradeUserDto().getEmail(),
                tradeUserTradeRoleFuncDto.getTradeFunctionalityDto().getId(),
                tradeUserTradeRoleFuncDto.getTradeRoleDto().getId());

        tradeUserTradeRoleFuncsRepository.delete(tradeUserTradeRoleFuncToRemove);
        tradeUserTradeRoleFuncsRepository.flush();
    }


    public TradeUserTradeRoleFunc findTradeUserTradeRoleFuncById(String email,
            Integer tradeFunctionalityId,
            Integer tradeRoleId) {
        tradeUserTradeRoleFuncsRepository.clear();
        TradeUserTradeRoleFunc tradeUserTradeRoleFunc = this.tradeUserTradeRoleFuncsRepository
                .findById_TradeUser_EmailAndId_TradeFunctionality_IdAndId_TradeRole_Id(email, tradeFunctionalityId,
                        tradeRoleId);
        return tradeUserTradeRoleFunc;
    }

    public TradeUserTradeGroup findTradeUserGroupById(String email, Integer tradeGroupId) {
        tradeUserTradeGroupRepository.clear();
        TradeUserTradeGroup tradeUserTradeGroup = this.tradeUserTradeGroupRepository
                .findById_TradeUser_EmailAndId_tradeGroup_Id(email, tradeGroupId);
        return tradeUserTradeGroup;
    }

    @Transactional
    public void deleteTradeUserGroup(TradeUserTradeGroupDto tradeUserTradeGroupDto) {

        TradeUserTradeGroup tradeUserTradeGroupDelete = this.findTradeUserGroupById(
                tradeUserTradeGroupDto.getTradeUserDto().getEmail(),
                tradeUserTradeGroupDto.getTradeGroupDto().getId());

        tradeUserTradeGroupRepository.delete(tradeUserTradeGroupDelete);
        tradeUserTradeGroupRepository.flush();
    }

}
