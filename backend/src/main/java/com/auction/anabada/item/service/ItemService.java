package com.auction.anabada.item.service;

import com.auction.anabada.item.domain.Item;
import com.auction.anabada.item.dto.EnrollItemDto;
import com.auction.anabada.item.repository.ItemRepository;
import com.auction.anabada.search.service.SearchService;
import com.auction.anabada.item.domain.Category;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ItemService {

    private final ItemRepository itemRepository;
    private final SearchService searchService;

    @Transactional
    public Item enrollItem(EnrollItemDto itemDto){
        Item item = Item.createItem(itemDto);
        itemRepository.save(item);

        return item;
    }

    @Transactional
    public Boolean updatePrice(Item item,Long nCost){
        if(item.getItemId()!=null){
            item.updatePrice(nCost);
            itemRepository.save(item);
            return true;
        }

        return false;
    }

    public Item findById(Long id) {
        return itemRepository.findById(id);
    }

    public List<Item> findAll(){
        return itemRepository.findAll();
    }

    public List<Item> findWithCategory(List<Category> categories) {
        searchService.addCategorySearch(categories);
        return itemRepository.findWithCategory(categories);
    }

    public List<Item> findWithItemName(String includedName){
        if(searchService.addNameSearch(includedName)){
            log.info("성공적으로 인기 검색어 카운트가 증가하였습니다.");
        } else {
            log.warn("인기 검색어 카운트가 증가하지 않았습니다.");
            log.warn("입력된 검색어 : " + includedName);
        }
        return itemRepository.findWithItemName(includedName);
    }

    public List<Item> findBest8Items() {
        return itemRepository.findBest8Items();
    }

    public List<Category> getCategories() {
        return Arrays.stream(Category.values()).collect(Collectors.toList());
    }
}
