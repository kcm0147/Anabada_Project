package com.auction.anabada.wishitem.domain;


import com.auction.anabada.item.domain.Item;
import com.auction.anabada.user.domain.User;
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
public class WishItem {

    @Id
    @GeneratedValue
    @Column(name="wish_item_id")
    private Long wishItemId;

    @ManyToOne
    @JoinColumn(name="item_id")
    private Item item;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;


    public WishItem(User user,Item item){
        setUser(user);
        setItem(item);
    }

    public void setItem(Item item){
        if(this.item!=null){
            this.item.getWishItems().remove(this);
        }
        this.item=item;
        item.getWishItems().add(this);
    }

    public void setUser(User user){
        if(this.user!=null){
            this.user.getWishItems().remove(this);
        }
        this.user=user;
        user.getWishItems().add(this);
    }


    public void removeRelated(){
        this.user.getWishItems().remove(this);
        this.item.getWishItems().remove(this);
        this.item=null;
        this.user=null;
    }
}
