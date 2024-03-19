package com.ft.business.dto;

import com.ft.business.entity.TradeBusiness;

public class TradeBusinessDto {

    private Long id;

    private String name;

    private String description;

    private String source;

    private TradeBusinessLanguageDto tradeBusinessLanguageDto;

    public TradeBusinessDto(Long id, String name, String description, String source,
            TradeBusinessLanguageDto tradeBusinessLanguageDto) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.source = source;
        this.tradeBusinessLanguageDto = tradeBusinessLanguageDto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
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
        TradeBusinessDto other = (TradeBusinessDto) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

    public static TradeBusinessDto toDto(TradeBusiness tradeBusiness) {

        return new TradeBusinessDto(tradeBusiness.getId(), tradeBusiness.getName(), tradeBusiness.getDescription(),
                tradeBusiness.getSource(), TradeBusinessLanguageDto.toDto(tradeBusiness.getTradeBusinessLanguage()));
    }

    public TradeBusinessLanguageDto getTradeBusinessLanguageDto() {
        return tradeBusinessLanguageDto;
    }

    public void setTradeBusinessLanguageDto(TradeBusinessLanguageDto tradeBusinessLanguageDto) {
        this.tradeBusinessLanguageDto = tradeBusinessLanguageDto;
    }

}
