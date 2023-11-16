package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;

/**
 * The primary key class for the trade_user_trade_rule_func database table.
 * 
 */
@Embeddable
public class TradeUserTradeRuleFuncPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="user_email")
	private String userEmail;

	@Column(name="trade_rule_id")
	private Integer tradeRuleId;

	@Column(name="trade_functionality_id")
	private Integer tradeFunctionalityId;

	public TradeUserTradeRuleFuncPK() {
	}
	public String getUserEmail() {
		return this.userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public Integer getTradeRuleId() {
		return this.tradeRuleId;
	}
	public void setTradeRuleId(Integer tradeRuleId) {
		this.tradeRuleId = tradeRuleId;
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
		if (!(other instanceof TradeUserTradeRuleFuncPK)) {
			return false;
		}
		TradeUserTradeRuleFuncPK castOther = (TradeUserTradeRuleFuncPK)other;
		return 
			this.userEmail.equals(castOther.userEmail)
			&& this.tradeRuleId.equals(castOther.tradeRuleId)
			&& this.tradeFunctionalityId.equals(castOther.tradeFunctionalityId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.userEmail.hashCode();
		hash = hash * prime + this.tradeRuleId.hashCode();
		hash = hash * prime + this.tradeFunctionalityId.hashCode();
		
		return hash;
	}
}