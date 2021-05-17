package com.auction.anabada.buyItem.service;

import com.auction.anabada.buyItem.domain.BuyItem;
import com.auction.anabada.buyItem.dto.BidsDto;
import com.auction.anabada.buyItem.repository.BuyItemRepository;
import com.auction.anabada.item.domain.Item;
import com.auction.anabada.item.service.ItemService;
import com.auction.anabada.user.domain.User;
import com.auction.anabada.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BuyItemService {

    private final BuyItemRepository buyItemRepository;
    private final UserService userService;
    private final ItemService itemService;

    @Transactional
    public Long makeBid(Long userId, Long itemId){
        User user = userService.findById(userId);
        Item item = itemService.findById(itemId);

        BuyItem buyItem = new BuyItem(user, item);
        return buyItemRepository.save(buyItem);
    }

    public long update(BidsDto bidsDto) {
        return bidsDto.getItemId();
    }
}
