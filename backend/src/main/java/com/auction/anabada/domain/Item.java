package com.auction.anabada.domain;

import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
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

    @OneToOne
    @JoinColumn(name = "sale_item_id")
    private SaleItem saleItem;

    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<BuyItem> buyItems = new ArrayList<>();

}
