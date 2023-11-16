package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;
import java.util.List;


/**
 * The persistent class for the trade_user database table.
 * 
 */
@Entity
@Table(name="trade_user")
@NamedQuery(name="TradeUser.findAll", query="SELECT t FROM TradeUser t")
public class TradeUser implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private String email;

	private String name;

	@OneToMany
	@JoinColumn(name="user_email")
	private List<TradeUserTradeGroup> tradeUserTradeGroups;

	@OneToMany
	@JoinColumn(name="user_email")
	private List<TradeUserTradeRuleFunc> tradeUserTradeRuleFuncs;

	public TradeUser() {
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<TradeUserTradeGroup> getTradeUserTradeGroups() {
		return tradeUserTradeGroups;
	}

	public void setTradeUserTradeGroups(List<TradeUserTradeGroup> tradeUserTradeGroups) {
		this.tradeUserTradeGroups = tradeUserTradeGroups;
	}

	public List<TradeUserTradeRuleFunc> getTradeUserTradeRuleFuncs() {
		return this.tradeUserTradeRuleFuncs;
	}

	public void setTradeUserTradeRuleFuncs(List<TradeUserTradeRuleFunc> tradeUserTradeRuleFuncs) {
		this.tradeUserTradeRuleFuncs = tradeUserTradeRuleFuncs;
	}

}