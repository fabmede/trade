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

	@Column(name="user_email")
	private String userEmail;

	@Column(name="trade_role_id")
	private Integer tradeRoleId;

	@Column(name="trade_functionality_id")
	private Integer tradeFunctionalityId;

	public TradeUserTradeRoleFuncPK() {
	}
	public String getUserEmail() {
		return this.userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public Integer getTradeRoleId() {
		return this.tradeRoleId;
	}
	public void setTradeRoleId(Integer tradeRoleId) {
		this.tradeRoleId = tradeRoleId;
	}
	public Integer getTradeFunctionalityId() {
		return this.tradeFunctionalityId;
	}
	public void setTradeFunctionalityId(Integer tradeFunctionalityId) {
		this.tradeFunctionalityId = tradeFunctionalityId;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof TradeUserTradeRoleFuncPK)) {
			return false;
		}
		TradeUserTradeRoleFuncPK castOther = (TradeUserTradeRoleFuncPK)other;
		return 
			this.userEmail.equals(castOther.userEmail)
			&& this.tradeRoleId.equals(castOther.tradeRoleId)
			&& this.tradeFunctionalityId.equals(castOther.tradeFunctionalityId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.userEmail.hashCode();
		hash = hash * prime + this.tradeRoleId.hashCode();
		hash = hash * prime + this.tradeFunctionalityId.hashCode();
		
		return hash;
	}
}