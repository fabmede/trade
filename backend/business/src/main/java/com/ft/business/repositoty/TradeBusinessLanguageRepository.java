package com.ft.business.repositoty;

import com.ft.admin.repository.CustomRepository;
import com.ft.business.entity.TradeBusinessLanguage;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeBusinessLanguageRepository extends CustomRepository<TradeBusinessLanguage, String> {

    @Override
    List<TradeBusinessLanguage> findAll();
}
