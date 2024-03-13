package com.ft.business.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import jakarta.persistence.*;

/**
 * The primary key class for the trade_group_trade_role_func database table.
 * 
 */
@Embeddable
public class TradeBusinessHistPK implements Serializable, Cloneable {

	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name="trade_business_id")
	private TradeBusiness tradeBusiness;

	@Column
	private LocalDateTime date;

	public TradeBusiness getTradeBusiness() {
		return tradeBusiness;
	}

	public void setTradeBusiness(TradeBusiness tradeBusiness) {
		this.tradeBusiness = tradeBusiness;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((tradeBusiness == null) ? 0 : tradeBusiness.hashCode());
		result = prime * result + ((date == null) ? 0 : date.hashCode());
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
		TradeBusinessHistPK other = (TradeBusinessHistPK) obj;
		if (tradeBusiness == null) {
			if (other.tradeBusiness != null)
				return false;
		} else if (!tradeBusiness.equals(other.tradeBusiness))
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		return true;
	} 

	
	

}