package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;

/**
 * The primary key class for the trade_user_trade_role_func database table.
 * 
 */
@Embeddable
public class TradeUserTradeRoleFuncPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name="user_email")
	private TradeUser tradeUser;

	@ManyToOne
	@JoinColumn(name="trade_functionality_id")
	private TradeFunctionality tradeFunctionality;

	@ManyToOne
	@JoinColumn(name="trade_role_id")
	private TradeRole tradeRole;

	public TradeUserTradeRoleFuncPK() {
	}

	public TradeUser getTradeUser() {
		return tradeUser;
	}

	public void setTradeUser(TradeUser tradeUser) {
		this.tradeUser = tradeUser;
	}

	public TradeFunctionality getTradeFunctionality() {
		return tradeFunctionality;
	}

	public void setTradeFunctionality(TradeFunctionality tradeFunctionality) {
		this.tradeFunctionality = tradeFunctionality;
	}

	public TradeRole getTradeRole() {
		return tradeRole;
	}

	public void setTradeRole(TradeRole tradeRole) {
		this.tradeRole = tradeRole;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((tradeUser == null) ? 0 : tradeUser.hashCode());
		result = prime * result + ((tradeFunctionality == null) ? 0 : tradeFunctionality.hashCode());
		result = prime * result + ((tradeRole == null) ? 0 : tradeRole.hashCode());
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
		TradeUserTradeRoleFuncPK other = (TradeUserTradeRoleFuncPK) obj;
		if (tradeUser == null) {
			if (other.tradeUser != null)
				return false;
		} else if (!tradeUser.equals(other.tradeUser))
			return false;
		if (tradeFunctionality == null) {
			if (other.tradeFunctionality != null)
				return false;
		} else if (!tradeFunctionality.equals(other.tradeFunctionality))
			return false;
		if (tradeRole == null) {
			if (other.tradeRole != null)
				return false;
		} else if (!tradeRole.equals(other.tradeRole))
			return false;
		return true;
	}

	
}