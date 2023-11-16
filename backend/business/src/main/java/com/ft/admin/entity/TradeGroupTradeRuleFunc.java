package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;


/**
 * The persistent class for the trade_group_trade_rule_func database table.
 * 
 */
@Entity
@Table(name="trade_group_trade_rule_func")
@NamedQuery(name="TradeGroupTradeRuleFunc.findAll", query="SELECT t FROM TradeGroupTradeRuleFunc t")
public class TradeGroupTradeRuleFunc implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private TradeGroupTradeRuleFuncPK id;

	@Column(name="trade_group_id", insertable=false, updatable=false)
	private Integer tradeGroupId;

	public TradeGroupTradeRuleFunc() {
	}

	public TradeGroupTradeRuleFuncPK getId() {
		return this.id;
	}

	public void setId(TradeGroupTradeRuleFuncPK id) {
		this.id = id;
	}

}