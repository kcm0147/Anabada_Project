package com.auction.anabada.saleItem.service;


import com.auction.anabada.item.domain.Item;
import com.auction.anabada.item.dto.EnrollItemDto;
import com.auction.anabada.item.service.ItemService;
import com.auction.anabada.saleItem.domain.SaleItem;
import com.auction.anabada.saleItem.repository.SaleItemRepository;
import com.auction.anabada.user.domain.User;
import com.auction.anabada.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SaleItemService {

    private final SaleItemRepository saleItemRepository;
    private final UserService userService;
    private final ItemService itemService;


    public Long addSaleItem(Long userId, EnrollItemDto enrollItemDto){
        User user = userService.findById(userId);
        Item item = itemService.enrollItem(enrollItemDto);
        SaleItem saleItem = new SaleItem(item,user);
        saleItemRepository.save(saleItem);

        return saleItem.getSaleItemId();
    }

}
