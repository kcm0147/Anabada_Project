package com.auction.anabada.item.domain;

import com.auction.anabada.buyItem.domain.BuyItem;
import com.auction.anabada.item.dto.EnrollItemDto;
import com.auction.anabada.saleItem.domain.SaleItem;
import com.auction.anabada.user.domain.Category;
import java.sql.Blob;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
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
    private Long itemId;

    private String itemName;

    @Enumerated(EnumType.STRING)
    private Category category;

    private Long lowerBoundPrice;
    private Long currentPrice;
    private LocalDateTime auctionStartDate;
    private LocalDateTime auctionEndDate;

    @Lob @Basic(fetch = FetchType.EAGER)
    private String itemImage;

    private Long interestCnt;

    @OneToOne
    @JoinColumn(name = "sale_item_id")
    private SaleItem saleItem;

    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<BuyItem> buyItems = new ArrayList<>();

    public void setSaleItem(SaleItem saleItem){
        this.saleItem=saleItem;
    }

    public static Item createItem(EnrollItemDto enrollItemDto){
        Item item = new Item();
        item.itemName=enrollItemDto.getItemName();
        item.itemImage=enrollItemDto.getItemImage();
        item.category=enrollItemDto.getCategory();
        item.auctionStartDate=LocalDateTime.parse(enrollItemDto.getAuctionStartDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        item.auctionEndDate=LocalDateTime.parse(enrollItemDto.getAuctionEndDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        item.lowerBoundPrice=enrollItemDto.getLowerBoundPrice();
        item.currentPrice=item.lowerBoundPrice;
        item.interestCnt=0L;

        return item;
    }
}
