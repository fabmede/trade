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
	@SequenceGenerator(name = "trade_group_seq", sequenceName = "trade_group_seq", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "trade_group_seq")	
	private Integer id;

	private String description;

	private String name;

	//bi-directional many-to-one association to TradeGroupTradeRoleFunc
	@OneToMany
	@JoinColumn(name="trade_group_id")
	private List<TradeGroupTradeRoleFunc> tradeGroupTradeRoleFuncs;

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

	public List<TradeGroupTradeRoleFunc> getTradeGroupTradeRoleFuncs() {
		return this.tradeGroupTradeRoleFuncs;
	}

	public void setTradeGroupTradeRoleFuncs(List<TradeGroupTradeRoleFunc> tradeGroupTradeRoleFuncs) {
		this.tradeGroupTradeRoleFuncs = tradeGroupTradeRoleFuncs;
	}
}