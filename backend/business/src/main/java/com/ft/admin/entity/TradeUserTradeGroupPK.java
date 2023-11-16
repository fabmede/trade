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

	@Column(name="trade_group_id")
	private Integer tradeGroupId;

	@Column(name="user_email")
	private String userEmail;

	public TradeUserTradeGroupPK() {
	}
	public Integer getTradeGroupId() {
		return this.tradeGroupId;
	}
	public void setTradeGroupId(Integer tradeGroupId) {
		this.tradeGroupId = tradeGroupId;
	}
	public String getUserEmail() {
		return this.userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof TradeUserTradeGroupPK)) {
			return false;
		}
		TradeUserTradeGroupPK castOther = (TradeUserTradeGroupPK)other;
		return 
			this.tradeGroupId.equals(castOther.tradeGroupId)
			&& this.userEmail.equals(castOther.userEmail);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.tradeGroupId.hashCode();
		hash = hash * prime + this.userEmail.hashCode();
		
		return hash;
	}
}