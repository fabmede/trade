package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;

/**
 * The primary key class for the trade_group_trade_rule_func database table.
 * 
 */
@Embeddable
public class TradeGroupTradeRuleFuncPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="trade_group_id", insertable=false, updatable=false)
	private Integer tradeGroupId;

	@Column(name="trade_rule_id", insertable=false, updatable=false)
	private Integer tradeRuleId;

	@Column(name="trade_functionality_id", insertable=false, updatable=false)
	private Integer tradeFunctionalityId;

	public TradeGroupTradeRuleFuncPK() {
	}
	public Integer getTradeGroupId() {
		return this.tradeGroupId;
	}
	public void setTradeGroupId(Integer tradeGroupId) {
		this.tradeGroupId = tradeGroupId;
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
		if (!(other instanceof TradeGroupTradeRuleFuncPK)) {
			return false;
		}
		TradeGroupTradeRuleFuncPK castOther = (TradeGroupTradeRuleFuncPK)other;
		return 
			this.tradeGroupId.equals(castOther.tradeGroupId)
			&& this.tradeRuleId.equals(castOther.tradeRuleId)
			&& this.tradeFunctionalityId.equals(castOther.tradeFunctionalityId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.tradeGroupId.hashCode();
		hash = hash * prime + this.tradeRuleId.hashCode();
		hash = hash * prime + this.tradeFunctionalityId.hashCode();
		
		return hash;
	}
}