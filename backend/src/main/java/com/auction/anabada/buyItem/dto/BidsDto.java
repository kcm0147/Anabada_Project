package com.auction.anabada.buyItem.dto;

import com.auction.anabada.user.domain.Category;
import java.time.LocalDateTime;
import java.util.Date;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

//== 아이템 등록,조회용 DTO ==//
@Data
@NoArgsConstructor
public class BidsDto {

    private Long interestCnt;
    private long itemId;
    private String itemName;
    private Category category;
    private long lowerBoundPrice;
    private long currentPrice;
    private LocalDateTime auctionStartDate;
    private LocalDateTime auctionEndDate;
    private String itemImage;

    @Builder
    public BidsDto(Long interestCnt, long itemId, String itemName, Category category,
        long lowerBoundPrice, long currentPrice, LocalDateTime auctionStartDate, LocalDateTime auctionEndDate,
        String itemImage) {
        this.interestCnt = interestCnt;
        this.itemId = itemId;
        this.itemName = itemName;
        this.category = category;
        this.lowerBoundPrice = lowerBoundPrice;
        this.currentPrice = currentPrice;
        this.auctionStartDate = auctionStartDate;
        this.auctionEndDate = auctionEndDate;
        this.itemImage = itemImage;
    }
}
