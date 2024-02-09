package com.ft.admin.repository;

import com.ft.admin.entity.TradeGroupTradeRoleFunc;
import com.ft.admin.entity.TradeGroupTradeRoleFuncPK;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeGroupTradeRoleFuncRepository extends CustomRepository<TradeGroupTradeRoleFunc, TradeGroupTradeRoleFuncPK> {

    public List<TradeGroupTradeRoleFunc> findById_TradeGroup_Id(Integer tradeGroupId);

    public TradeGroupTradeRoleFunc findById_TradeGroup_IdAndId_TradeFunctionality_IdAndId_TradeRole_Id(Integer tradeGroupId, Integer tradeFunctionalityId, Integer tradeRoleId);

}
