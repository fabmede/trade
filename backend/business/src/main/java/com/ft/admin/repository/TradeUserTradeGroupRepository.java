package com.ft.admin.repository;

import com.ft.admin.entity.TradeUserTradeGroup;
import com.ft.admin.entity.TradeUserTradeGroupPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeUserTradeGroupRepository extends JpaRepository<TradeUserTradeGroup, TradeUserTradeGroupPK> {

    List<TradeUserTradeGroup> findByUserEmail(String email);

}
