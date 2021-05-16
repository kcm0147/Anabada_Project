package com.auction.anabada.user.domain;


import com.auction.anabada.saleItem.domain.SaleItem;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
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

    private Category interest;

    @OneToMany(mappedBy="user")
    private List<BuyItem> buyItems;

    @OneToMany(mappedBy="user")
    private List<SaleItem> saleItems;


}
