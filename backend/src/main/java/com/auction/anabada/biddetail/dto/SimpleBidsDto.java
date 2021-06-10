package com.auction.anabada.biddetail.dto;

import com.auction.anabada.user.domain.Category;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.time.LocalDateTime;
import javax.persistence.Lob;
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

    private Long lastUserPrice;
    private Long lastAuctionPrice;

    private Boolean result;

    @Builder
    public SimpleBidsDto(Long itemId,Long buyItemId,String itemName, Category category,String itemPath,
        String lastAuctionDate,Long lastUserPrice,Long lastAuctionPrice,Boolean result) {
        this.itemId = itemId;
        this.buyItemId= buyItemId;
        this.itemName = itemName;
        this.category = category;
        this.itemImage = itemPath;
        this.lastAuctionDate = lastAuctionDate;
        this.lastUserPrice=lastUserPrice;
        this.lastAuctionPrice=lastAuctionPrice;
        this.result=result;
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
