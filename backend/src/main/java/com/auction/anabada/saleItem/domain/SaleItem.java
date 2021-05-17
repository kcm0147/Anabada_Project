package com.auction.anabada.saleItem.domain;

import com.auction.anabada.item.domain.Item;
import com.auction.anabada.user.domain.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class SaleItem {

    @Id
    @GeneratedValue
    @Column(name="sale_item_id")
    private Long saleItemId;


    @OneToOne(mappedBy = "saleItem")
    private Item item;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User seller;

    public SaleItem(Item item,User seller){
        setItem(item);
        setSeller(seller);
    }


    public void setItem(Item item){
        this.item=item;
        this.item.setSaleItem(this);
    }

    public void setSeller(User seller){
        if(this.seller!=null){
            this.seller.getSaleItems().remove(this);
        }
        this.seller=seller;
        seller.getSaleItems().add(this);
    }
}