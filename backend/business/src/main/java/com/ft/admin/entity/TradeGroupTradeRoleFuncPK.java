package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;

/**
 * The primary key class for the trade_group_trade_role_func database table.
 * 
 */
@Embeddable
public class TradeGroupTradeRoleFuncPK implements Serializable, Cloneable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name="trade_functionality_id")
	private TradeFunctionality tradeFunctionality;

	@ManyToOne
	@JoinColumn(name="trade_group_id")
	private TradeGroup tradeGroup;

	@ManyToOne
	@JoinColumn(name="trade_role_id")
	private TradeRole tradeRole;

	public TradeGroupTradeRoleFuncPK() {
	}

	public TradeGroup getTradeGroup() {
		return tradeGroup;
	}

	public void setTradeGroup(TradeGroup tradeGroup) {
		this.tradeGroup = tradeGroup;
	}

	public TradeRole getTradeRole() {
		return tradeRole;
	}

	public void setTradeRole(TradeRole tradeRole) {
		this.tradeRole = tradeRole;
	}

	public TradeFunctionality getTradeFunctionality() {
		return tradeFunctionality;
	}

	public void setTradeFunctionality(TradeFunctionality tradeFunctionality) {
		this.tradeFunctionality = tradeFunctionality;
	}

	public TradeGroupTradeRoleFuncPK getClone() {
		try {
			return (TradeGroupTradeRoleFuncPK) super.clone();
		} catch (CloneNotSupportedException e) {
			System.out.println (" Cloning not allowed. " );
			return this;
		}
	}

}