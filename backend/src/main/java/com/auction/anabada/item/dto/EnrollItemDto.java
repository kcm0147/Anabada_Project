package com.auction.anabada.item.dto;


import com.auction.anabada.item.domain.Item;
import com.auction.anabada.user.domain.Category;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class EnrollItemDto {

    private String itemName;
    private Category category;
    private Long lowerBoundPrice;
    private String auctionStartDate; // 웹에서 던져주는 Date에 맞춰서 변경할 필요가 있다.
    private String auctionEndDate; // 마찬가지
    private String itemImage;

    public EnrollItemDto(Item item) {
        this.itemName = item.getItemName();
        this.category = item.getCategory();
        this.lowerBoundPrice = item.getLowerBoundPrice();
        this.auctionStartDate = item.getAuctionStartDate().toLocalTime().toString();
        this.auctionEndDate = item.getAuctionEndDate().toLocalTime().toString();
        this.itemImage = item.getItemImage();
    }
}
