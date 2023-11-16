package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;


/**
 * The persistent class for the trade_rule database table.
 * 
 */
@Entity
@Table(name="trade_rule")
@NamedQuery(name="TradeRule.findAll", query="SELECT t FROM TradeRule t")
public class TradeRule implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer id;

	private String description;

	private String name;

	public TradeRule() {
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

}