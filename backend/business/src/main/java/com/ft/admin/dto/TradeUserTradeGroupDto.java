package com.ft.admin.dto;

public class TradeUserTradeGroupDto {

    private Integer tradeGroupId;
    private String userEmail;

    public Integer getTradeGroupId() {
        return tradeGroupId;
    }

    public void setTradeGroupId(Integer tradeGroupId) {
        this.tradeGroupId = tradeGroupId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public TradeUserTradeGroupDto(Integer tradeGroupId, String userEmail) {
        this.tradeGroupId = tradeGroupId;
        this.userEmail = userEmail;
    }
}
