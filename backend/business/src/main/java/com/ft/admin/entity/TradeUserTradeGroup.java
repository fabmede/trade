package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;


/**
 * The persistent class for the trade_user_trade_group database table.
 * 
 */
@Entity
@Table(name="trade_user_trade_group")
@NamedQuery(name="TradeUserTradeGroup.findAll", query="SELECT t FROM TradeUserTradeGroup t")
public class TradeUserTradeGroup implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private TradeUserTradeGroupPK id;

	@Column(name="user_email", insertable=false, updatable=false)
	private String userEmail;

	public TradeUserTradeGroup() {
	}

	public TradeUserTradeGroupPK getId() {
		return this.id;
	}

	public void setId(TradeUserTradeGroupPK id) {
		this.id = id;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
}