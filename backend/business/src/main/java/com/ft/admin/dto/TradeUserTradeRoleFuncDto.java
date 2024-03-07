package com.ft.admin.dto;

import com.ft.admin.entity.TradeUserTradeRoleFunc;

public class TradeUserTradeRoleFuncDto {

    private TradeUserDto tradeUserDto;
    private TradeRoleDto tradeRoleDto;
    private TradeFunctionalityDto tradeFunctionalityDto;

    public TradeUserDto getTradeUserDto() {
        return tradeUserDto;
    }

    public void setTradeUserDto(TradeUserDto tradeUserDto) {
        this.tradeUserDto = tradeUserDto;
    }

    public TradeRoleDto getTradeRoleDto() {
        return tradeRoleDto;
    }

    public void setTradeRoleDto(TradeRoleDto tradeRoleDto) {
        this.tradeRoleDto = tradeRoleDto;
    }

    public TradeFunctionalityDto getTradeFunctionalityDto() {
        return tradeFunctionalityDto;
    }

    public void setTradeFunctionalityId(TradeFunctionalityDto tradeFunctionalityDto) {
        this.tradeFunctionalityDto = tradeFunctionalityDto;
    }

    public TradeUserTradeRoleFuncDto(TradeUserDto tradeUserDto, TradeRoleDto tradeRoleDto,
            TradeFunctionalityDto tradeFunctionalityDto) {
        this.tradeUserDto = tradeUserDto;
        this.tradeRoleDto = tradeRoleDto;
        this.tradeFunctionalityDto = tradeFunctionalityDto;
    }

    public static TradeUserTradeRoleFuncDto toDto(TradeUserTradeRoleFunc tradeUserTradeRoleFunc) {

        return new TradeUserTradeRoleFuncDto(
                new TradeUserDto(tradeUserTradeRoleFunc.getId().getTradeUser().getEmail(),
                        tradeUserTradeRoleFunc.getId().getTradeUser().getEmail()),
                new TradeRoleDto(tradeUserTradeRoleFunc.getId().getTradeRole().getId(),
                        tradeUserTradeRoleFunc.getId().getTradeRole().getDescription(),
                        tradeUserTradeRoleFunc.getId().getTradeRole().getName()),
                new TradeFunctionalityDto(tradeUserTradeRoleFunc.getId().getTradeFunctionality().getId(),
                        tradeUserTradeRoleFunc.getId().getTradeFunctionality().getDescription(),
                        tradeUserTradeRoleFunc.getId().getTradeFunctionality().getName()));

    }
}
