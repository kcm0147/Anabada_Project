package com.auction.anabada.buyItem.domain;

import com.auction.anabada.biddetail.domain.BidDetail;
import com.auction.anabada.item.domain.Item;
import com.auction.anabada.user.domain.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class BuyItem {

    @Id
    @GeneratedValue
    @Column(name="buy_item_id")
    private Long buyItemId;

    private Long interestCnt;

    @ManyToOne
    @JoinColumn(name="item_id")
    private Item item;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User buyer;

    @JsonIgnore
    @OneToMany(mappedBy = "buyItem")
    private List<BidDetail> bidDetails;


    public BuyItem(User user, Item item){
        setUser(user);
        setItem(item);
    }

    //== 연관관계 편의 메소드 ==//
    private void setItem(Item item) {
        if(this.item!=null){
            this.item.getBuyItems().remove(this);
        }
        this.item = item;
        item.getBuyItems().add(this);
    }

    private void setUser(User buyer) {
        if(this.buyer != null){
            this.buyer.getBuyItems().remove(this);
        }
        this.buyer = buyer;
        buyer.getBuyItems().add(this);
    }
}
