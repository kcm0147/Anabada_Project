package com.auction.anabada.biddetail.repository;

import com.auction.anabada.biddetail.domain.BidDetail;
import java.util.List;
import javax.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@RequiredArgsConstructor
@Transactional
public class BidRepository {

    private final EntityManager em;

    public void save(BidDetail bidDetail){
        if(bidDetail.getBidDetailId()!=null){
            em.merge(bidDetail);
        }
        else
            em.persist(bidDetail);
    }

    @Transactional(readOnly = true)
    public List<BidDetail> findAll(){
        return em.createQuery("select b from BidDetail b")
            .getResultList();
    }
}
