package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;

/**
 * The primary key class for the trade_user_trade_group database table.
 * 
 */
@Embeddable
public class TradeUserTradeGroupPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name="trade_group_id")
	private TradeGroup tradeGroup;

	@ManyToOne
	@JoinColumn(name="user_email")
	private TradeUser tradeUser;

	public TradeUserTradeGroupPK() {
	}

	public TradeGroup getTradeGroup() {
		return tradeGroup;
	}

	public void setTradeGroup(TradeGroup tradeGroup) {
		this.tradeGroup = tradeGroup;
	}

	public TradeUser getTradeUser() {
		return tradeUser;
	}

	public void setTradeUser(TradeUser tradeUser) {
		this.tradeUser = tradeUser;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((tradeGroup == null) ? 0 : tradeGroup.hashCode());
		result = prime * result + ((tradeUser == null) ? 0 : tradeUser.hashCode());
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
		TradeUserTradeGroupPK other = (TradeUserTradeGroupPK) obj;
		if (tradeGroup == null) {
			if (other.tradeGroup != null)
				return false;
		} else if (!tradeGroup.equals(other.tradeGroup))
			return false;
		if (tradeUser == null) {
			if (other.tradeUser != null)
				return false;
		} else if (!tradeUser.equals(other.tradeUser))
			return false;
		return true;
	}
	

	
}