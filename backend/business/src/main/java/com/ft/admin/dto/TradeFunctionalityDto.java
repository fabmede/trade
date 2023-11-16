package com.ft.admin.dto;

public class TradeFunctionalityDto {
    
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

    public TradeFunctionalityDto(Integer id, String description, String name) {
        this.id = id;
        this.description = description;
        this.name = name;
    }
    
}
