package com.auction.anabada.biddetail.domain;

import com.auction.anabada.buyItem.domain.BuyItem;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class BidDetail {

    @Id
    @GeneratedValue
    @Column(name="bid_detail_id")
    private Long bidDetailId;

    private LocalDateTime bidTime;
    private Long bidCost;
    private Boolean result;


    @ManyToOne
    @JoinColumn(name="buy_item_id")
    private BuyItem buyItem;

    public BidDetail(BuyItem buyItem,Long bidCost){
        setBuyItem(buyItem);
        this.bidCost=bidCost;
        this.bidTime=LocalDateTime.now();
        this.result=false;
    }

    public void setBuyItem(BuyItem buyItem){
        if(this.buyItem!=null){
            this.buyItem.getBidDetails().remove(this);
        }
        this.buyItem=buyItem;
        this.buyItem.getBidDetails().add(this);
    }
}
