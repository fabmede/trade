package com.ft.business.entity;

import jakarta.persistence.*;

@Entity
@Table(name="trade_business")
@NamedQuery(name="TradeBusiness.findAll", query="SELECT t FROM TradeBusiness t")
public class TradeBusiness {

    @Id
    @SequenceGenerator(name = "trade_business_seq", sequenceName = "trade_business_seq", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "trade_business_seq")	
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String source;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    
}
