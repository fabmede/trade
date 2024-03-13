package com.ft.business.repositoty;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ft.admin.repository.CustomRepository;
import com.ft.business.entity.TradeBusinessHist;
import com.ft.business.entity.TradeBusinessHistPK;

@Repository
public interface TradeBusinessHistRepository extends CustomRepository<TradeBusinessHist, TradeBusinessHistPK> {

    @Override
    List<TradeBusinessHist> findAll();

    public List<TradeBusinessHist> findById_TradeBusiness_Id(
            Long tradeBusinessId);
}
