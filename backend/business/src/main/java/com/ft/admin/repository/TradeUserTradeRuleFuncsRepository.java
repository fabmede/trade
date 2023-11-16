package com.ft.admin.repository;

import com.ft.admin.entity.TradeUserTradeRuleFunc;
import com.ft.admin.entity.TradeUserTradeRuleFuncPK;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TradeUserTradeRuleFuncsRepository  extends JpaRepository<TradeUserTradeRuleFunc, TradeUserTradeRuleFuncPK> {
    List<TradeUserTradeRuleFunc> findByUserEmail(String email);
}