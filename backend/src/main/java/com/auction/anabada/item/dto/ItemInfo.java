package com.auction.anabada.item.dto;

import com.auction.anabada.user.domain.Category;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import lombok.Data;

@Data
public class ItemInfo {
    private String itemName;
    @Enumerated(EnumType.STRING)
    private Category category;
    private Long lowerBoundPrice;
    private String auctionStartDate;
    private String auctionEndDate;
    private String description;
    private String imagePath;
}
