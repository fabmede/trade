package com.ft.admin.repository;

import com.ft.admin.entity.TradeUserTradeGroup;
import com.ft.admin.entity.TradeUserTradeGroupPK;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeUserTradeGroupRepository extends CustomRepository<TradeUserTradeGroup, TradeUserTradeGroupPK> {

    List<TradeUserTradeGroup> findByUserEmail(String email);

    public TradeUserTradeGroup findById_TradeUser_EmailAndId_tradeGroup_Id(
            String email, Integer tradeGroupId);
}
