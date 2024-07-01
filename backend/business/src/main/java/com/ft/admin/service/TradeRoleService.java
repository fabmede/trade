package com.ft.admin.service;

import com.ft.admin.dto.TradeRoleDto;
import com.ft.admin.entity.TradeRole;
import com.ft.admin.repository.TradeRoleRepository;
import com.ft.commom.crud.AbstractService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TradeRoleService extends AbstractService <TradeRoleDto>{

    @Autowired
    private TradeRoleRepository tradeRoleRepository;

    public List<TradeRoleDto> findAll(){
        List<TradeRole> tradeRoles = this.tradeRoleRepository.findAll();
        return tradeRoles.stream().map( el-> new TradeRoleDto(el.getId(), el.getDescription(), el.getName())).collect(Collectors.toList()); 
    }

    @Transactional
    public TradeRoleDto update(TradeRoleDto tradeRoleDto, String idAString){

        tradeRoleDto.setId(Integer.valueOf(idAString));
        Optional<TradeRole> oTradeRole =  this.tradeRoleRepository.findById(tradeRoleDto.getId()); 

        if(!oTradeRole.isPresent()){
            throw new RuntimeException("There is no register to update"); 
        }

        TradeRole tradeRole = oTradeRole.get(); 
        tradeRole.setDescription(tradeRoleDto.getDescription());
        tradeRole.setName(tradeRoleDto.getName());
        tradeRole = this.tradeRoleRepository.save(tradeRole);
        return new TradeRoleDto(tradeRole.getId(), tradeRole.getDescription(), tradeRole.getName());
    }   
    
    @Transactional
    public TradeRoleDto create(TradeRoleDto tradeRoleDto){
        TradeRole tradeRole = new TradeRole();
        tradeRole.setDescription(tradeRoleDto.getDescription());
        tradeRole.setName(tradeRoleDto.getName());
        tradeRole = this.tradeRoleRepository.save(tradeRole);
        return new TradeRoleDto(tradeRole.getId(), tradeRole.getDescription(), tradeRole.getName());
    }   
    
    @Transactional
    public void delete(String idAString){

       Integer id = Integer.valueOf(idAString); 
       Optional<TradeRole> oTradeRole =  this.tradeRoleRepository.findById(id); 

        if(!oTradeRole.isPresent()){
            throw new RuntimeException("There is no register to delete"); 
        }

        TradeRole tradeRole = oTradeRole.get(); 
        this.tradeRoleRepository.delete(tradeRole);
    }     
}
