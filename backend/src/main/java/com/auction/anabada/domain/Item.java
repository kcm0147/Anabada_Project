package com.auction.anabada.domain;

import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.OneToMany;
import org.springframework.data.annotation.Id;

@Entity
@Getter
@NoArgsConstructor
public class Item {

    @Id @GeneratedValue
    @Column(name="item_id")
    private long id;

    private String itemName;
    private String category;
    private long lowerBoundPrice;
    private long currentPrice;
    private Date auctionStartDate;
    private Date auctionEndDate;
    private String itemImage;
    private long interests;

    @OneToOne(mappedBy = "item")
    private SaleItem saleItem;

    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<BuyItem> buyItems = new ArrayList<>();

}
