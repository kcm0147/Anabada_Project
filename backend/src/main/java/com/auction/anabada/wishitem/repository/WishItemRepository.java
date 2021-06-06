package com.auction.anabada.wishitem.repository;

import com.auction.anabada.wishitem.domain.WishItem;
import java.util.List;
import javax.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
@RequiredArgsConstructor
public class WishItemRepository {

    private final EntityManager em;


    public void save(WishItem wishItem) {
        if(wishItem.getWishItemId() != null)
            em.merge(wishItem);
        else
            em.persist(wishItem);
    }

    @Transactional(readOnly = true)
    public WishItem findById(Long id) {
        return em.find(WishItem.class, id);
    }

    @Transactional(readOnly = true)
    public List<WishItem> findAll() {
        return em.createQuery("select w from WishItem w")
            .getResultList();
    }

    public void remove(Long id) {
        em.remove(em.find(WishItem.class, id));
    }

}
