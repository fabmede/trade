package com.ft.admin.repository;

import com.ft.admin.entity.TradeRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeRoleRepository extends JpaRepository<TradeRole, Integer> {

    @Override
    List<TradeRole> findAll();
}
