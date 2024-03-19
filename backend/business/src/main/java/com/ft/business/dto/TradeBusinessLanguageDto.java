package com.ft.business.dto;

import com.ft.business.entity.TradeBusinessLanguage;

public class TradeBusinessLanguageDto {

    private String name;

    private String description;

    public TradeBusinessLanguageDto(String name, String description) {
        this.name = name;
        this.description = description;
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

    public static TradeBusinessLanguageDto toDto(TradeBusinessLanguage tradeBusinessLanguage) {

        if (tradeBusinessLanguage == null) {
            return null;
        } else {
            return new TradeBusinessLanguageDto(tradeBusinessLanguage.getName(),
                    tradeBusinessLanguage.getDescription());
        }
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
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
        TradeBusinessLanguageDto other = (TradeBusinessLanguageDto) obj;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        return true;
    }

}
