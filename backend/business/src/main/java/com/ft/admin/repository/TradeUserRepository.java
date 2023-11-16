package com.ft.admin.repository;

import com.ft.admin.entity.TradeUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeUserRepository extends JpaRepository<TradeUser, String> {

    @Override
    List<TradeUser> findAll();
}
