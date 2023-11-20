package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;


/**
 * The persistent class for the trade_rule database table.
 * 
 */
@Entity
@Table(name="trade_role")
@NamedQuery(name="TradeRole.findAll", query="SELECT t FROM TradeRole t")
public class TradeRole implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "trade_role_seq", sequenceName = "trade_role_seq", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "trade_role_seq")	
	private Integer id;

	private String description;

	private String name;

	public TradeRole() {
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