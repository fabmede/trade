package com.ft.business.dto;

import java.time.LocalDateTime;

import com.ft.business.entity.TradeBusinessHist;

public class TradeBusinessHistDto {

    private TradeBusinessDto tradeBusinessDto;

    private String source;

    private LocalDateTime date;

    private TradeBusinessLanguageDto tradeBusinessLanguageDto;


    public TradeBusinessHistDto(TradeBusinessDto tradeBusinessDto, String source, LocalDateTime date, TradeBusinessLanguageDto tradeBusinessLanguageDto) {
        this.tradeBusinessDto = tradeBusinessDto;
        this.source = source;
        this.date = date;
        this.tradeBusinessLanguageDto = tradeBusinessLanguageDto; 
    }

    public TradeBusinessDto getTradeBusinessDto() {
        return tradeBusinessDto;
    }

    public void setTradeBusinessDto(TradeBusinessDto tradeBusinessDto) {
        this.tradeBusinessDto = tradeBusinessDto;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public static TradeBusinessHistDto toDto(TradeBusinessHist tradeBusinessHist) {

        return new TradeBusinessHistDto(TradeBusinessDto.toDto(tradeBusinessHist.getId().getTradeBusiness()),
                tradeBusinessHist.getSource(),
                tradeBusinessHist.getId().getDate(),
                TradeBusinessLanguageDto.toDto(tradeBusinessHist.getTradeBusinessLanguage()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((tradeBusinessDto == null) ? 0 : tradeBusinessDto.hashCode());
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
        TradeBusinessHistDto other = (TradeBusinessHistDto) obj;
        if (tradeBusinessDto == null) {
            if (other.tradeBusinessDto != null)
                return false;
        } else if (!tradeBusinessDto.equals(other.tradeBusinessDto))
            return false;
        return true;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public TradeBusinessLanguageDto getTradeBusinessLanguageDto() {
        return tradeBusinessLanguageDto;
    }

    public void setTradeBusinessLanguageDto(TradeBusinessLanguageDto tradeBusinessLanguageDto) {
        this.tradeBusinessLanguageDto = tradeBusinessLanguageDto;
    }



}
