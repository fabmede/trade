package com.ft.admin.service;

import com.ft.admin.dto.TradeRoleDto;
import com.ft.admin.entity.TradeRole;
import com.ft.admin.repository.TradeRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TradeRoleService {

    @Autowired
    private TradeRoleRepository tradeRoleRepository;


    public List<TradeRole> findAll(){
        return this.tradeRoleRepository.findAll();
    }

    @Transactional
    public TradeRoleDto updateTradeRole(TradeRoleDto tradeRoleDto){
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
    public TradeRoleDto createTradeRole(TradeRoleDto tradeRoleDto){
        TradeRole tradeRole = new TradeRole();
        tradeRole.setDescription(tradeRoleDto.getDescription());
        tradeRole.setName(tradeRoleDto.getName());
        tradeRole = this.tradeRoleRepository.save(tradeRole);
        return new TradeRoleDto(tradeRole.getId(), tradeRole.getDescription(), tradeRole.getName());
    }   
    
    @Transactional
    public void deleteTradeRole(Integer id){
       Optional<TradeRole> oTradeRole =  this.tradeRoleRepository.findById(id); 

        if(!oTradeRole.isPresent()){
            throw new RuntimeException("There is no register to delete"); 
        }

        TradeRole tradeRole = oTradeRole.get(); 
        this.tradeRoleRepository.delete(tradeRole);
    }     
}
