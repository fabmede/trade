package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;
import java.util.List;


/**
 * The persistent class for the trade_group database table.
 * 
 */
@Entity
@Table(name="trade_group")
@NamedQuery(name="TradeGroup.findAll", query="SELECT t FROM TradeGroup t")
public class TradeGroup implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer id;

	private String description;

	private String name;

	//bi-directional many-to-one association to TradeGroupTradeRuleFunc
	@OneToMany
	@JoinColumn(name="trade_group_id")
	private List<TradeGroupTradeRuleFunc> tradeGroupTradeRuleFuncs;

	public TradeGroup() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<TradeGroupTradeRuleFunc> getTradeGroupTradeRuleFuncs() {
		return this.tradeGroupTradeRuleFuncs;
	}

	public void setTradeGroupTradeRuleFuncs(List<TradeGroupTradeRuleFunc> tradeGroupTradeRuleFuncs) {
		this.tradeGroupTradeRuleFuncs = tradeGroupTradeRuleFuncs;
	}
}