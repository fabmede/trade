package com.ft.admin.dto;


public class TradeUserTradeRoleFuncDto {

    private String userEmail;
    private Integer tradeRoleId;
    private Integer tradeFunctionalityId;

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public Integer getTradeRoleId() {
        return tradeRoleId;
    }

    public void setTradeRoleId(Integer tradeRoleId) {
        this.tradeRoleId = tradeRoleId;
    }

    public Integer getTradeFunctionalityId() {
        return tradeFunctionalityId;
    }

    public void setTradeFunctionalityId(Integer tradeFunctionalityId) {
        this.tradeFunctionalityId = tradeFunctionalityId;
    }

    public TradeUserTradeRoleFuncDto(String userEmail, Integer tradeRoleId, Integer tradeFunctionalityId) {
        this.userEmail = userEmail;
        this.tradeRoleId = tradeRoleId;
        this.tradeFunctionalityId = tradeFunctionalityId;
    }
}
