package com.ft.business.entity;

import jakarta.persistence.*;

@Entity
@Table(name="trade_business_hist")
@NamedQuery(name="TradeBusinessHist.findAll", query="SELECT t FROM TradeBusinessHist t")
public class TradeBusinessHist {

    @Id
    private TradeBusinessHistPK id;

    @Column
    private String source;

    public TradeBusinessHistPK getId() {
        return id;
    }

    public void setId(TradeBusinessHistPK id) {
        this.id = id;
    }

    
    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
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
        TradeBusinessHist other = (TradeBusinessHist) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }


    


}