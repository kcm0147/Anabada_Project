package com.auction.anabada.buyItem.domain;

import com.auction.anabada.item.domain.Item;
import com.auction.anabada.user.domain.User;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Entity
@Getter
@NoArgsConstructor
public class BuyItem {

    @Id
    @GeneratedValue
    @Column(name="buy_item_id")
    private Long buyItemId;

    private Long interestCnt;

    @ManyToOne
    @JoinColumn(name="item_id")
    private Item item;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User buyer;
}
