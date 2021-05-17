package com.auction.anabada.item.dto;


import com.auction.anabada.user.domain.Category;
import lombok.Data;


@Data
public class EnrollItemDto {

    private String itemName;
    private Category category;
    private Long lowerBoundPrice;

    private String auctionStartDate; // 웹에서 던져주는 Date에 맞춰서 변경할 필요가 있다.
    private String auctionEndDate; // 마찬가지


    private String itemImage;
}
