package com.ft.admin.entity;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.*;


/**
 * The persistent class for the trade_group_trade_role_func database table.
 * 
 */
@Entity
@Table(name="trade_group_trade_role_func")
@NamedQuery(name="TradeGroupTradeRoleFunc.findAll", query="SELECT t FROM TradeGroupTradeRoleFunc t")
public class TradeGroupTradeRoleFunc implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private TradeGroupTradeRoleFuncPK id;

	public TradeGroupTradeRoleFunc() {
	}

	public TradeGroupTradeRoleFuncPK getId() {
		return this.id;
	}

	public void setId(TradeGroupTradeRoleFuncPK id) {
		this.id = id;
	}


	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		TradeGroupTradeRoleFunc that = (TradeGroupTradeRoleFunc) o;
		return id.equals(that.id);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
}