package com.auction.anabada.item.domain;

import com.auction.anabada.buyItem.domain.BuyItem;
import com.auction.anabada.saleItem.domain.SaleItem;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Entity
@Getter
@NoArgsConstructor
public class Item {

    @Id @GeneratedValue
    @Column(name="item_id")
    private long itemId;

    private String itemName;
    private String category;
    private long lowerBoundPrice;
    private long currentPrice;
    private Date auctionStartDate;
    private Date auctionEndDate;
    private String itemImage;
    private long interests;

    @OneToOne
    @JoinColumn(name = "sale_item_id")
    private SaleItem saleItem;

    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<BuyItem> buyItems = new ArrayList<>();

}
