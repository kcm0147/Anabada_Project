package com.auction.anabada.item.service;

import com.auction.anabada.item.domain.Item;
import com.auction.anabada.item.dto.EnrollItemDto;
import com.auction.anabada.item.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    @Transactional
    public Item enrollItem(EnrollItemDto itemDto){
        Item item = Item.createItem(itemDto);
        itemRepository.save(item);

        return item;
    }


    public Item findById(Long id) {
        return itemRepository.findById(id);
    }
}
