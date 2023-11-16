package com.ft.business.repositoty;

import com.ft.business.entity.Business;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RuleRepository extends CrudRepository<Business, Long> {

    @Override
    List<Business> findAll();
}
