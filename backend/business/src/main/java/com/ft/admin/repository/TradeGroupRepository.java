package com.ft.admin.repository;

import com.ft.admin.entity.TradeGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeGroupRepository extends JpaRepository<TradeGroup, Integer> {

    @Override
    public List<TradeGroup> findAll();

}
