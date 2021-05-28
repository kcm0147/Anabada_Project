package com.auction.anabada.search.repository;

import com.auction.anabada.search.domain.Search;
import java.util.List;
import javax.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@RequiredArgsConstructor
public class SearchRepository {

    private final EntityManager em;

    public List<Search> findTop8SearchCount(){
        String sql = "select s from Search s order by s.count desc";
        return em.createQuery(sql, Search.class)
            .setFirstResult(0)
            .setMaxResults(8)
            .getResultList();
    }

    @Transactional
    public boolean addSearch(String name) {
        List<Search> word = em
            .createQuery("select s from Search s where s.word = :word", Search.class)
            .setParameter("word", name)
            .getResultList();

        if(word.size() == 0){
            em.persist(new Search(name, 1L));
            return true;
        }

        Search search = word.get(0);
        search.setCount(search.getCount() + 1);
        em.persist(search);
        return true;
    }
}
