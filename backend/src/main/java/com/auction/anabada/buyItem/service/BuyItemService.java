package com.auction.anabada.buyItem.service;

import com.auction.anabada.biddetail.domain.BidDetail;
import com.auction.anabada.biddetail.repository.BidRepository;
import com.auction.anabada.buyItem.domain.BuyItem;
import com.auction.anabada.buyItem.repository.BuyItemRepository;
import com.auction.anabada.item.domain.Item;
import com.auction.anabada.item.service.ItemService;
import com.auction.anabada.user.domain.User;
import com.auction.anabada.user.service.UserService;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BuyItemService {

    private final BuyItemRepository buyItemRepository;
    private final BidRepository bidRepository;
    private final UserService userService;
    private final ItemService itemService;

    @Transactional
    public boolean makeBid(Long userId, Long itemId,Long bidCost){
        User user = userService.findById(userId);
        Item item = itemService.findById(itemId);
        BuyItem buyItem;

        if((item.getSaleItem().getSeller().getUserId())==userId) return false;
        if(LocalDateTime.now().isAfter(item.getAuctionEndDate())) return false;
        if(bidCost<item.getCurrentPrice() || bidCost<item.getLowerBoundPrice())
            return false;

        Optional<BuyItem> first = user.getBuyItems().stream()
            .filter(o -> o.getItem().getItemId() == itemId)
            .findFirst();


        if(first.isEmpty()){
            buyItem = createBuyItem(user, item);
        }
        else
            buyItem=first.get();

        itemService.updatePrice(item,bidCost);

        BidDetail bidDetail = new BidDetail(buyItem,bidCost);
        bidRepository.save(bidDetail);

        return true;
    }

    @Transactional
    public BuyItem createBuyItem(User user,Item item){
        BuyItem buyItem = new BuyItem(user, item);
        buyItemRepository.save(buyItem);

        return buyItem;
    }

}
