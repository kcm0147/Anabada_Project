package com.auction.anabada.biddetail.dto;

//== 입찰 조회용(상) DTO ==//세

import com.auction.anabada.user.domain.Category;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class DetailBidsDto {

    private Long itemId;
    private String itemName;

    private Long bidDetailId;
    private Category category;

    private String AuctionDate;
    private Long curPrice;

    private Boolean result;

    @Builder
    public DetailBidsDto(Long itemId,Long bidDetailId,String itemName, Category category,
        String AuctionDate,Long curPrice,Boolean result) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.bidDetailId=bidDetailId;

        this.category = category;
        this.AuctionDate=AuctionDate;
        this.curPrice=curPrice;
        this.result=result;
    }

}
