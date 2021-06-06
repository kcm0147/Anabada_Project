package com.auction.anabada.wishitem.service;


import com.auction.anabada.item.domain.Item;
import com.auction.anabada.item.service.ItemService;
import com.auction.anabada.user.domain.User;
import com.auction.anabada.user.service.UserService;
import com.auction.anabada.wishitem.domain.WishItem;
import com.auction.anabada.wishitem.repository.WishItemRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class WishItemService {

    private final WishItemRepository wishItemRepository;
    private final UserService userService;
    private final ItemService itemService;

    @Transactional
    public boolean createWishItem(Long userId,Long itemId){
        User user = userService.findById(userId);
        Item item = itemService.findById(itemId);

        Optional<WishItem> wishItems = user.getWishItems().stream()
            .filter(o -> o.getItem().getItemId() == itemId).findAny();
        if(wishItems.isPresent()) return false;

        itemService.updateInterestCnt(item,item.getInterestCnt()+1);

        WishItem wishItem = new WishItem(user,item);
        wishItemRepository.save(wishItem);


        return true;
    }

    @Transactional
    public boolean removeWishItem(Long userId,Long itemId) {
        User user = userService.findById(userId);
        Item item = itemService.findById(itemId);

        Optional<WishItem> wishItems = user.getWishItems().stream()
            .filter(o -> o.getItem().getItemId() == itemId)
            .findFirst();

        if (wishItems.isEmpty())
            return false;
        itemService.updateInterestCnt(item,item.getInterestCnt()-1);

        WishItem wishItem = wishItems.get();
        wishItem.removeRelated();

        wishItemRepository.remove(wishItem.getWishItemId());

        return true;

    }


}
