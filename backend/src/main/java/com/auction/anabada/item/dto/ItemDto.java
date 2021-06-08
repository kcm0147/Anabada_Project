package com.auction.anabada.item.dto;

import com.auction.anabada.item.domain.Item;
import com.auction.anabada.user.domain.Category;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import lombok.Data;

//== 상품 조회용 DTO ==//
@Data
public class ItemDto {

    private Long itemId;
    private String itemName;

    @Enumerated(EnumType.STRING)
    private Category category;
    private Long lowerBoundPrice;
    private Long currentPrice;
    private String auctionStartDate;
    private String auctionEndDate;
    private Long interestCnt;
    private String description;
    private byte[] itemImage;


    public ItemDto(Item item) {
        this.itemId = item.getItemId();
        this.itemName = item.getItemName();
        this.category = item.getCategory();
        this.lowerBoundPrice = item.getLowerBoundPrice();
        this.currentPrice = item.getCurrentPrice();
        this.auctionStartDate = item.getAuctionStartDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        this.auctionEndDate = item.getAuctionEndDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        this.interestCnt = item.getInterestCnt();
        this.itemImage = encodingFile(item.getImagePath());
        this.description = item.getDescription();
    }

    private byte[] encodingFile(String filePath){
        InputStream imageStream = null;
        byte[] imageByteArray = new byte[0];
        try {
            imageStream = new FileInputStream(filePath);
            imageByteArray = imageStream.readAllBytes();
            imageStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return imageByteArray;
    }
}
