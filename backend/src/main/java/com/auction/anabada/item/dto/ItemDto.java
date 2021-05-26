package com.auction.anabada.item.dto;

import com.auction.anabada.item.domain.Item;
import com.auction.anabada.user.domain.Category;
import java.time.LocalDateTime;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import lombok.Data;

@Data
public class ItemDto {

    private Long itemId;
    private String itemName;

    @Enumerated(EnumType.STRING)
    private Category category;
    private Long lowerBoundPrice;
    private Long currentPrice;
    private LocalDateTime auctionStartDate;
    private LocalDateTime auctionEndDate;
    private String itemImage;
    private Long interestCnt;

    public ItemDto(Item item) {
        this.itemId = item.getItemId();
        this.itemName = item.getItemName();
        this.category = item.getCategory();
        this.lowerBoundPrice = item.getLowerBoundPrice();
        this.currentPrice = item.getCurrentPrice();
        this.auctionStartDate = item.getAuctionStartDate();
        this.auctionEndDate = item.getAuctionEndDate();
        this.itemImage = item.getItemImage();
        this.interestCnt = item.getInterestCnt();
    }
}
