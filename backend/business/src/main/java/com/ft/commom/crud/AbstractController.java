package com.ft.commom.crud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

public abstract class AbstractController <D extends AbstractDto, S extends AbstractService<D>>{

    @Autowired
    private S service; 
    
    @RequestMapping("/")
    public ResponseEntity<List<D>> getTradeFunctionalities(){
        return ResponseEntity.ok(this.service.findAll());
    }

    @PostMapping("/")
    public ResponseEntity<D> create(@RequestBody D dto){
        return ResponseEntity.ok(this.service.create(dto));
    }

    @PutMapping("/{idAString}")
    public ResponseEntity<D> update(@RequestBody D dto, @PathVariable String idAString){
        return ResponseEntity.ok(this.service.update(dto, idAString));
    }    

    @DeleteMapping("/{idAString}")
    public ResponseEntity<String> delete(@PathVariable String idAString){
        this.service.delete(idAString);
        return ResponseEntity.ok().body(null);
    }

    public S getService(){
        return this.service;
    }
}
