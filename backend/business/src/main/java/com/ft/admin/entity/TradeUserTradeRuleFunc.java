package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;


/**
 * The persistent class for the trade_user_trade_rule_func database table.
 * 
 */
@Entity
@Table(name="trade_user_trade_rule_func")
@NamedQuery(name="TradeUserTradeRuleFunc.findAll", query="SELECT t FROM TradeUserTradeRuleFunc t")
public class TradeUserTradeRuleFunc implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private TradeUserTradeRuleFuncPK id;

	@Column(name="user_email", insertable=false, updatable=false)
	private String userEmail;

	public TradeUserTradeRuleFunc() {
	}

	public TradeUserTradeRuleFuncPK getId() {
		return this.id;
	}

	public void setId(TradeUserTradeRuleFuncPK id) {
		this.id = id;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
}