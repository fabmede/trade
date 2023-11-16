package com.ft.admin.dto;


public class TradeUserTradeRuleFuncDto {

    private String userEmail;
    private Integer tradeRuleId;
    private Integer tradeFunctionalityId;

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public Integer getTradeRuleId() {
        return tradeRuleId;
    }

    public void setTradeRuleId(Integer tradeRuleId) {
        this.tradeRuleId = tradeRuleId;
    }

    public Integer getTradeFunctionalityId() {
        return tradeFunctionalityId;
    }

    public void setTradeFunctionalityId(Integer tradeFunctionalityId) {
        this.tradeFunctionalityId = tradeFunctionalityId;
    }

    public TradeUserTradeRuleFuncDto(String userEmail, Integer tradeRuleId, Integer tradeFunctionalityId) {
        this.userEmail = userEmail;
        this.tradeRuleId = tradeRuleId;
        this.tradeFunctionalityId = tradeFunctionalityId;
    }
}
