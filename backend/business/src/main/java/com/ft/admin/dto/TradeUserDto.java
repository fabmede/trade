package com.ft.admin.dto;

import com.ft.commom.crud.AbstractDto;

public class TradeUserDto extends AbstractDto{

    private String email;

    private String name;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public TradeUserDto(String email, String name) {
        this.email = email;
        this.name = name;
    }


    @Override
    public String getIdAsString() {
        return this.email;
    }
}
