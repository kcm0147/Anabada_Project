package com.auction.anabada.item.repository;

import com.auction.anabada.item.domain.Item;
import com.auction.anabada.item.dto.ItemDto;
import com.auction.anabada.user.domain.Category;
import java.util.List;
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

    @Transactional(readOnly = true)
    public List<Item> findAll() {
        return em.createQuery("select i from Item i")
            .getResultList();
    }

    @Transactional(readOnly = true)
    public List<Item> findWithCategory(List<Category> categories) {
        long size = categories.size();
        if (size == 0)
            return findAll();
        String sql = "select i from Item i where i.category in (";

        for (int i = 0; i < size; i++) {
            sql += "'" + categories.get(i) + "',";
        }
        sql = sql.substring(0, sql.length() - 1) + ")";
        System.out.println("실행된 SQL :  "+ sql);
        return em.createQuery(sql, Item.class).getResultList();
    }

    @Transactional(readOnly = true)
    public List<Item> findWithItemName(String includedName){
        String sql = "select i from Item i where i.itemName LIKE ?1";
        return em.createQuery(sql, Item.class)
            .setParameter(1, includedName)
            .getResultList();
    }

    @Transactional(readOnly = true)
    public List<Item> findBest8Items() {
        String sql = "select i from Item i ORDER BY i.interestCnt desc ";
        return em.createQuery(sql, Item.class)
            .setFirstResult(0)
            .setMaxResults(8)
            .getResultList();
    }
}
