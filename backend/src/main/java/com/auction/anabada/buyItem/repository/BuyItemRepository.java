package com.auction.anabada.buyItem.repository;

import com.auction.anabada.buyItem.domain.BuyItem;
import com.auction.anabada.item.domain.Item;
import java.util.List;
import javax.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@RequiredArgsConstructor
@Transactional
public class BuyItemRepository {

    private final EntityManager em;

    @Transactional(readOnly = true)
    public BuyItem findById(Long id){
        return em.find(BuyItem.class,id);
    }

    @Transactional(readOnly=true)
    public List<BuyItem> findAll(){
        return em.createQuery("select b from BuyItem b")
            .getResultList();
    }

    public Long save(BuyItem buyItem) {
        if(buyItem.getBuyItemId()==null) {
            em.persist(buyItem);
            return buyItem.getBuyItemId();
        }

        return null;
    }

    public void remove(BuyItem deleteBuyItem) {
        deleteBuyItem.getBuyer().getBuyItems().remove(deleteBuyItem);

        Item item = deleteBuyItem.getItem();
        if(item.getBuyItems().size()==1){
            em.remove(deleteBuyItem);
            em.remove(item);
        }
        else {
            deleteBuyItem.getItem().getBuyItems().remove(deleteBuyItem);
            em.remove(deleteBuyItem);
        }
    }


}
