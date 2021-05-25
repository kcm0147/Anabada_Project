package com.auction.anabada.item.service;

import com.auction.anabada.item.domain.Item;
import com.auction.anabada.item.dto.EnrollItemDto;
import com.auction.anabada.item.repository.ItemRepository;
import com.auction.anabada.user.domain.Category;
import java.util.List;
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

    public List<Item> findAll(){
        return itemRepository.findAll();
    }

    public List<Item> findWithCategory(List<Category> categories) {
        return itemRepository.findWithCategory(categories);
    }

    public List<Item> findWithItemName(String includedName){
        return itemRepository.findWithItemName(includedName);
    }
}
