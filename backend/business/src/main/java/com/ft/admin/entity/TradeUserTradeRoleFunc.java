package com.ft.admin.entity;

import java.io.Serializable;
import jakarta.persistence.*;


/**
 * The persistent class for the trade_user_trade_role_func database table.
 * 
 */
@Entity
@Table(name="trade_user_trade_role_func")
@NamedQuery(name="TradeUserTradeRoleFunc.findAll", query="SELECT t FROM TradeUserTradeRoleFunc t")
public class TradeUserTradeRoleFunc implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private TradeUserTradeRoleFuncPK id;

	@Column(name="user_email", insertable=false, updatable=false)
	private String userEmail;

	public TradeUserTradeRoleFunc() {
	}

	public TradeUserTradeRoleFuncPK getId() {
		return this.id;
	}

	public void setId(TradeUserTradeRoleFuncPK id) {
		this.id = id;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
}