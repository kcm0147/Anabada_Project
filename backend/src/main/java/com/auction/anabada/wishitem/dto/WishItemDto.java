package com.auction.anabada.wishitem.dto;

import com.auction.anabada.item.domain.Item;
import com.auction.anabada.user.domain.Category;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Lob;
import lombok.Builder;
import lombok.Data;

@Data
public class WishItemDto {

    private Long itemId;
    private String itemName;

    @Enumerated(EnumType.STRING)
    private Category category;
    private Long lowerBoundPrice;
    private Long currentPrice;
    private String auctionStartDate;
    private String auctionEndDate;

    @Lob
    private String itemImage;
    private Long interestCnt;

    public WishItemDto(Item item) {
        this.itemId = item.getItemId();
        this.itemName = item.getItemName();
        this.category = item.getCategory();
        this.lowerBoundPrice = item.getLowerBoundPrice();
        this.currentPrice = item.getCurrentPrice();
        this.auctionStartDate = item.getAuctionStartDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        this.auctionEndDate = item.getAuctionEndDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        this.itemImage = item.getItemImage();
        this.interestCnt = item.getInterestCnt();
    }
}
