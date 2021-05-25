package com.auction.anabada.biddetail.service;

import com.auction.anabada.biddetail.domain.BidDetail;
import com.auction.anabada.biddetail.dto.DetailBidsDto;
import com.auction.anabada.biddetail.dto.SimpleBidsDto;
import com.auction.anabada.biddetail.repository.BidRepository;
import com.auction.anabada.buyItem.domain.BuyItem;
import com.auction.anabada.buyItem.repository.BuyItemRepository;
import com.auction.anabada.item.domain.Item;
import com.auction.anabada.item.repository.ItemRepository;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BidService {

    private final BidRepository bidRepository;
    private final BuyItemRepository buyItemRepository;


    public List<BidDetail> findAll(){
        return bidRepository.findAll();
    }


    @Transactional
    public List<DetailBidsDto> findBidDetails(Long userId,Long buyItemId){
        BuyItem buyItem = buyItemRepository.findById(buyItemId);
        if(userId==buyItem.getBuyer().getUserId()){
            List<DetailBidsDto> itemDtoList = new ArrayList<>();

            buyItem.getBidDetails().forEach(o -> {

                Item item = buyItem.getItem();
                String auctionTime=o.getBidTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
                DetailBidsDto bidsDto = DetailBidsDto.builder()
                    .itemId(item.getItemId())
                    .itemName(item.getItemName())
                    .bidDetailId(o.getBidDetailId())
                    .AuctionDate(auctionTime)
                    .category(item.getCategory())
                    .curPrice(o.getBidCost())
                    .result(o.getResult())
                    .build();

                itemDtoList.add(bidsDto);
            });

            return itemDtoList;
        }
        else
            return null;
    }

}
