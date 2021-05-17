package com.auction.anabada.item.repository;

import com.auction.anabada.item.domain.Item;
import javax.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
@RequiredArgsConstructor
public class ItemRepository {

    private final EntityManager em;

    public void save(Item item) {
        if(item.getItemId() != null)
            em.merge(item);
        else
            em.persist(item);
    }

    @Transactional(readOnly = true)
    public Item findById(Long id) {
        return em.find(Item.class, id);
    }
}
