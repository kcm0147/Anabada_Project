package com.auction.anabada.biddetail.service;

import com.auction.anabada.biddetail.domain.BidDetail;
import com.auction.anabada.biddetail.dto.DetailBidsDto;
import com.auction.anabada.biddetail.dto.SimpleBidsDto;
import com.auction.anabada.biddetail.repository.BidRepository;
import com.auction.anabada.buyItem.domain.BuyItem;
import com.auction.anabada.buyItem.repository.BuyItemRepository;
import com.auction.anabada.item.domain.Item;
import com.auction.anabada.item.repository.ItemRepository;
import com.auction.anabada.user.domain.User;
import com.auction.anabada.user.service.UserService;
import java.time.LocalDateTime;
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
    private final UserService userService;

    public List<BidDetail> findAll(){
        return bidRepository.findAll();
    }


    @Transactional
    public List<DetailBidsDto> findBidDetails(Long userId,Long buyItemId){
        BuyItem buyItem = buyItemRepository.findById(buyItemId);
        if(userId==buyItem.getBuyer().getUserId()){
            List<DetailBidsDto> itemDtoList = new ArrayList<>();
            Boolean result=false;

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
                    .result(result)
                    .build();

                itemDtoList.add(bidsDto);
            });

            return itemDtoList;
        }
        else
            return null;
    }

    @Transactional
    public List<SimpleBidsDto> findSimpleBids(Long userId){
        User user = userService.findById(userId);

        List<SimpleBidsDto> itemDtoList = new ArrayList<>();
        user.getBuyItems().forEach(o -> {
            Item item = o.getItem();
            Long lastAuctionPrice=0L;
            String result="진행중";
            BidDetail lastBidDetail = o.getBidDetails().get(o.getBidDetails().size()-1);

            if(LocalDateTime.now().isAfter(item.getAuctionEndDate())){
                lastAuctionPrice=item.getCurrentPrice();
                if(lastBidDetail.getBidCost().equals(lastAuctionPrice)){
                    result="낙찰";
                }
                else
                    result="패찰";
            }



            String lastTime=lastBidDetail.getBidTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
            SimpleBidsDto bidsDto = SimpleBidsDto.builder()
                .itemId(item.getItemId())
                .buyItemId(o.getBuyItemId())
                .itemName(item.getItemName())
                .category(item.getCategory())
                .itemPath(item.getImagePath())
                .lastUserPrice(lastBidDetail.getBidCost())
                .lastAuctionPrice(lastAuctionPrice)
                .lastAuctionDate(lastTime)
                .result(result)
                .build();

            itemDtoList.add(bidsDto);
        });

        return itemDtoList;
    }

}
