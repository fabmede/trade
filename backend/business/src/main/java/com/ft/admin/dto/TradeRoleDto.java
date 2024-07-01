package com.ft.admin.dto;

import com.ft.commom.crud.AbstractDto;

public class TradeRoleDto extends AbstractDto {
    
    private Integer id;

	private String description;

	private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public TradeRoleDto(Integer id, String description, String name) {
        this.id = id;
        this.description = description;
        this.name = name;
    }
    
    public String getIdAsString(){
        return String.valueOf(this.getId());
    }
}
