package com.ft.admin.repository;

import com.ft.admin.entity.TradeUserTradeRoleFunc;
import com.ft.admin.entity.TradeUserTradeRoleFuncPK;

import java.util.List;

public interface TradeUserTradeRoleFuncsRepository
        extends CustomRepository<TradeUserTradeRoleFunc, TradeUserTradeRoleFuncPK> {
    List<TradeUserTradeRoleFunc> findByUserEmail(String email);

    public TradeUserTradeRoleFunc findById_TradeUser_EmailAndId_TradeFunctionality_IdAndId_TradeRole_Id(
            String email, Integer tradeFunctionalityId, Integer tradeRoleId);

}