package com.auction.anabada.saleItem.domain;

import static javax.persistence.FetchType.LAZY;

import com.auction.anabada.user.domain.User;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;


@Entity
@Getter
@NoArgsConstructor
public class SaleItem {

    @Id
    @GeneratedValue
    @Column(name = "sale_item_id")
    private Long saleItemId;

    @OneToOne(fetch=LAZY)
    @JoinColumn(name="item_id")
    private Item item; // 위의 Import 삭제하기

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;


}
