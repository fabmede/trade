package com.ft.admin.repository;

import com.ft.admin.entity.TradeGroupTradeRuleFunc;
import com.ft.admin.entity.TradeGroupTradeRuleFuncPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeGroupTradeRuleFuncRepository extends JpaRepository<TradeGroupTradeRuleFunc, TradeGroupTradeRuleFuncPK> {

    public List<TradeGroupTradeRuleFunc> findByTradeGroupId(Integer tradeGroupId);

}
