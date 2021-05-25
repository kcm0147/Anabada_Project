package com.auction.anabada.user.dto;

import com.auction.anabada.buyItem.domain.BuyItem;
import com.auction.anabada.saleItem.domain.SaleItem;
import com.auction.anabada.user.domain.Category;
import com.auction.anabada.user.domain.User;
import java.util.List;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class UserDto {

    private Long userId;

    @NotEmpty(message = "아이디는 필수값입니다.")
    private String accountId;
    private String name;
    private String phoneNum;
    private String nickName;
    private String profileImage;
    private String address;
    private Category interest;

//    private List<BuyItem> buyItems;
//    private List<SaleItem> saleItems;

    public UserDto(User user) {
        this.userId = user.getUserId();
        this.accountId = user.getAccountId();
        this.name = user.getName();
        this.phoneNum = user.getPhoneNum();
        this.nickName = user.getNickName();
        this.profileImage = user.getProfileImage();
        this.address = user.getAddress();
        this.interest = user.getInterest();
//        buyItems = user.getBuyItems();
//        saleItems = user.getSaleItems();
    }
}
