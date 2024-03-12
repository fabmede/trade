package com.ft.business.repositoty;

import com.ft.admin.repository.CustomRepository;
import com.ft.business.entity.TradeBusiness;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeBusinessRepository extends CustomRepository<TradeBusiness, Long> {

    @Override
    List<TradeBusiness> findAll();
}
