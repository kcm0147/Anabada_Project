package com.auction.anabada.user.domain;

import com.auction.anabada.buyItem.domain.BuyItem;
import com.auction.anabada.saleItem.domain.SaleItem;
import java.util.List;
import javax.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private Long userId;

    private String name;
    private String phoneNum;
    private String nickName;
    private String accountId;
    private String password;
    private String address;

    @Lob @Basic(fetch = FetchType.EAGER)
    private String profileImage;

    private Category interest;

    @OneToMany(mappedBy="buyer")
    private List<BuyItem> buyItems;

    @OneToMany(mappedBy="seller")
    private List<SaleItem> saleItems;

    @Builder
    public User(String name, String phoneNum, String nickName, String accountId, String password, String address, Category interest){
        this.name = name;
        this.phoneNum = phoneNum;
        this.nickName = nickName;
        this.accountId = accountId;
        this.password = password;
        this.address = address;
        this.interest = interest;
    }
}
