package com.auction.anabada.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Getter
@NoArgsStructor
public class SaleItem {

    @Id @GeneratedValue
    @Column(name="sale_item_id")
    Long id;

    @OneToOne(mappedBy = "saleItem")
    Item item;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User seller;
}