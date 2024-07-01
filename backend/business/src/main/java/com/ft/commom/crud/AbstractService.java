package com.ft.commom.crud;

import java.util.List;


public abstract class AbstractService<D extends AbstractDto> {
    

    public abstract List<D> findAll();

    public abstract D update(D dto, String idAsString);

    public abstract void delete(String idAsString);
   
    public abstract D create(D dto);
    
}
