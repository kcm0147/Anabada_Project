package com.auction.anabada.biddetail.dto;

import com.auction.anabada.user.domain.Category;
import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

//== 입찰 조회용(간략) DTO ==//
@Data
@NoArgsConstructor
public class SimpleBidsDto {

    private Long itemId; // 물건의 경매 Id
    private Long buyItemId; // 유저의 물건의 입찰 고유 Id

    private String itemName;
    private Category category;
    private String itemImage;

    private String lastAuctionDate;

    private Long lastPrice;

    private Boolean result;

    @Builder
    public SimpleBidsDto(Long itemId,Long buyItemId,String itemName, Category category,String itemImage,
        String lastAuctionDate,Long lastPrice,Boolean result) {
        this.itemId = itemId;
        this.buyItemId= buyItemId;
        this.itemName = itemName;
        this.category = category;
        this.itemImage = itemImage;
        this.lastAuctionDate = lastAuctionDate;
        this.lastPrice = lastPrice;
        this.result=result;
    }
}
