package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;


/**
 * The persistent class for the trade_functionality database table.
 * 
 */
@Entity
@Table(name="trade_functionality")
@NamedQuery(name="TradeFunctionality.findAll", query="SELECT t FROM TradeFunctionality t")
public class TradeFunctionality implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "trade_functionality_seq", sequenceName = "trade_functionality_seq", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "trade_functionality_seq")	
	private Integer id;

	@Column
	private String description;

	@Column
	private String name;

	public TradeFunctionality() {
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