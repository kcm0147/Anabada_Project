package com.auction.anabada.item.dto;


import com.auction.anabada.item.domain.Item;
import com.auction.anabada.user.domain.Category;
import java.sql.Blob;
import java.time.format.DateTimeFormatter;
import javax.persistence.Lob;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class EnrollItemDto {

    private String itemName;
    private Category category;
    private Long lowerBoundPrice;
    private String auctionStartDate;
    private String auctionEndDate;

    @Lob
    private String itemImage;

    public EnrollItemDto(Item item) {
        this.itemName = item.getItemName();
        this.category = item.getCategory();
        this.lowerBoundPrice = item.getLowerBoundPrice();
        this.auctionStartDate = item.getAuctionStartDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        this.auctionEndDate = item.getAuctionEndDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        this.itemImage = item.getItemImage();
    }
}
