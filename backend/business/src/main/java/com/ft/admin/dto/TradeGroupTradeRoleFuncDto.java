package com.ft.admin.dto;


import com.ft.admin.entity.TradeGroupTradeRoleFunc;

public class TradeGroupTradeRoleFuncDto {

    private TradeFunctionalityDto tradeFunctionalityDto;

    private TradeRoleDto tradeRoleDto;

    private TradeGroupDto tradeGroupDto;


    public TradeGroupTradeRoleFuncDto(TradeFunctionalityDto tradeFunctionalityDto, TradeRoleDto tradeRoleDto,
                                      TradeGroupDto tradeGroupDto) {
        this.tradeFunctionalityDto = tradeFunctionalityDto;
        this.tradeRoleDto = tradeRoleDto;
        this.tradeGroupDto = tradeGroupDto;
    }

    public TradeFunctionalityDto getTradeFunctionalityDto() {
        return tradeFunctionalityDto;
    }

    public void setTradeFunctionalityDto(TradeFunctionalityDto tradeFunctionalityDto) {
        this.tradeFunctionalityDto = tradeFunctionalityDto;
    }

    public TradeRoleDto getTradeRoleDto() {
        return tradeRoleDto;
    }

    public void setTradeRoleDto(TradeRoleDto tradeRoleDto) {
        this.tradeRoleDto = tradeRoleDto;
    }

    public TradeGroupDto getTradeGroupDto() {
        return tradeGroupDto;
    }

    public void setTradeGroupDto(TradeGroupDto tradeGroupDto) {
        this.tradeGroupDto = tradeGroupDto;
    }

    public static TradeGroupTradeRoleFuncDto toDto(TradeGroupTradeRoleFunc tradeGroupTradeRoleFunc) {
        return new TradeGroupTradeRoleFuncDto(
                new TradeFunctionalityDto(tradeGroupTradeRoleFunc.getId().getTradeFunctionality().getId(),
                        tradeGroupTradeRoleFunc.getId().getTradeFunctionality().getDescription(),
                        tradeGroupTradeRoleFunc.getId().getTradeFunctionality().getName()),
                new TradeRoleDto(tradeGroupTradeRoleFunc.getId().getTradeRole().getId(),
                        tradeGroupTradeRoleFunc.getId().getTradeRole().getDescription(),
                        tradeGroupTradeRoleFunc.getId().getTradeRole().getName()),
                new TradeGroupDto(tradeGroupTradeRoleFunc.getId().getTradeGroup().getId(),
                        tradeGroupTradeRoleFunc.getId().getTradeGroup().getDescription(),
                        tradeGroupTradeRoleFunc.getId().getTradeGroup().getName()));
    }


}
