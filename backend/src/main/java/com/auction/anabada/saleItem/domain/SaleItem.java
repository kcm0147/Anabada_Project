package com.auction.anabada.saleItem.domain;

import com.auction.anabada.item.domain.Item;
import com.auction.anabada.user.domain.User;
import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class SaleItem {

    @Id
    @GeneratedValue
    @Column(name="sale_item_id")
    private Long saleItemId;

    @OneToOne(mappedBy = "saleItem")
    private Item item;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User seller;
}