package com.auction.anabada.saleItem.repository;

import com.auction.anabada.saleItem.domain.SaleItem;
import com.auction.anabada.user.domain.User;
import javax.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@RequiredArgsConstructor
@Transactional
public class SaleItemRepository {

    private final EntityManager em;

    public void save(SaleItem saleItem) {
        if(saleItem.getSaleItemId() != null)
            em.merge(saleItem);
        else
            em.persist(saleItem);
    }

    @Transactional(readOnly = true)
    public SaleItem findById(Long id) {
        return em.find(SaleItem.class, id);
    }
}
