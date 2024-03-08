package com.ft.admin.dto;

import com.ft.admin.entity.TradeUserTradeGroup;

public class TradeUserTradeGroupDto {

    private TradeGroupDto tradeGroupDto;
    private TradeUserDto tradeUserDto;

    public TradeUserTradeGroupDto(TradeGroupDto tradeGroupDto, TradeUserDto tradeUserDto) {
        this.tradeGroupDto = tradeGroupDto;
        this.tradeUserDto = tradeUserDto;
    }

    public TradeGroupDto getTradeGroupDto() {
        return tradeGroupDto;
    }

    public void setTradeGroupDto(TradeGroupDto tradeGroupDto) {
        this.tradeGroupDto = tradeGroupDto;
    }

    public TradeUserDto getTradeUserDto() {
        return tradeUserDto;
    }

    public void setTradeUserDto(TradeUserDto tradeUserDto) {
        this.tradeUserDto = tradeUserDto;
    }

    public static TradeUserTradeGroupDto toDto(TradeUserTradeGroup tradeUserTradeGroup) {

        return new TradeUserTradeGroupDto(new TradeGroupDto(tradeUserTradeGroup.getId().getTradeGroup().getId(),
                tradeUserTradeGroup.getId().getTradeGroup().getDescription(),
                tradeUserTradeGroup.getId().getTradeGroup().getName()),
                new TradeUserDto(tradeUserTradeGroup.getId().getTradeUser().getEmail(),
                        tradeUserTradeGroup.getId().getTradeUser().getName()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((tradeGroupDto == null) ? 0 : tradeGroupDto.hashCode());
        result = prime * result + ((tradeUserDto == null) ? 0 : tradeUserDto.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        TradeUserTradeGroupDto other = (TradeUserTradeGroupDto) obj;
        if (tradeGroupDto == null) {
            if (other.tradeGroupDto != null)
                return false;
        } else if (!tradeGroupDto.equals(other.tradeGroupDto))
            return false;
        if (tradeUserDto == null) {
            if (other.tradeUserDto != null)
                return false;
        } else if (!tradeUserDto.equals(other.tradeUserDto))
            return false;
        return true;
    }
}
