package com.ft.admin.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ft.admin.dto.TradeFunctionalityDto;
import com.ft.admin.entity.TradeFunctionality;
import com.ft.admin.repository.TradeFunctionalityRepository;
import com.ft.commom.crud.AbstractService;

@Service
public class TradeFunctionalityService extends AbstractService<TradeFunctionalityDto> {
 
    @Autowired
    TradeFunctionalityRepository tradeFunctionalityRepository;  
    
    public List<TradeFunctionalityDto> findAll(){
        List<TradeFunctionality> tradeFunctionalities = this.tradeFunctionalityRepository.findAll();
        return tradeFunctionalities.stream().map( el-> new TradeFunctionalityDto(el.getId(), el.getDescription(), el.getName())).collect(Collectors.toList()); 
    }

    @Transactional
    public TradeFunctionalityDto update(TradeFunctionalityDto tradeFunctionalityDto, String idAString){
        tradeFunctionalityDto.setId(Integer.valueOf(idAString));
        Optional<TradeFunctionality> oTradeFunctionality =  this.tradeFunctionalityRepository.findById(tradeFunctionalityDto.getId()); 

        if(!oTradeFunctionality.isPresent()){
            throw new RuntimeException("There is no register to update"); 
        }

        TradeFunctionality tradeFunctionality = oTradeFunctionality.get(); 
        tradeFunctionality.setDescription(tradeFunctionalityDto.getDescription());
        tradeFunctionality.setName(tradeFunctionalityDto.getName());
        tradeFunctionality = this.tradeFunctionalityRepository.save(tradeFunctionality);
        return new TradeFunctionalityDto(tradeFunctionality.getId(), tradeFunctionality.getDescription(), tradeFunctionality.getName());
    }   
    
    @Transactional
    public TradeFunctionalityDto create(TradeFunctionalityDto tradeFunctionalityDto){
        TradeFunctionality tradeFunctionality = new TradeFunctionality();
        tradeFunctionality.setDescription(tradeFunctionalityDto.getDescription());
        tradeFunctionality.setName(tradeFunctionalityDto.getName());
        tradeFunctionality = this.tradeFunctionalityRepository.save(tradeFunctionality);
        return new TradeFunctionalityDto(tradeFunctionality.getId(), tradeFunctionality.getDescription(), tradeFunctionality.getName());
    }   
    
    @Transactional
    public void delete(String idAString){
       
       Integer id = Integer.valueOf(idAString); 
       Optional<TradeFunctionality> oTradeFunctionality =  this.tradeFunctionalityRepository.findById(id); 

        if(!oTradeFunctionality.isPresent()){
            throw new RuntimeException("There is no register to delete"); 
        }

        TradeFunctionality tradeFunctionality = oTradeFunctionality.get(); 
        this.tradeFunctionalityRepository.delete(tradeFunctionality);
    }    
}
