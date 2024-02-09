package com.ft.admin.repository;

import com.ft.admin.entity.TradeUserTradeRoleFunc;
import com.ft.admin.entity.TradeUserTradeRoleFuncPK;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TradeUserTradeRoleFuncsRepository  extends JpaRepository<TradeUserTradeRoleFunc, TradeUserTradeRoleFuncPK> {
    List<TradeUserTradeRoleFunc> findByUserEmail(String email);
}