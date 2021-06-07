package com.auction.anabada.item.api;

import com.auction.anabada.item.domain.Item;
import com.auction.anabada.item.dto.ItemDto;
import com.auction.anabada.item.service.ItemService;
import com.auction.anabada.search.dto.SearchDto;
import com.auction.anabada.search.service.SearchService;
import com.auction.anabada.user.domain.Category;
import io.swagger.annotations.ApiOperation;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ItemApiController {

    private final ItemService itemService;
    private final SearchService searchService;

    @ApiOperation(value="상품 조회", notes = "등록된 모든 상품을 조회한다.")
    @GetMapping("/api/item/all")
    public List<ItemDto> getAllItems(){
        List<Item> items = itemService.findAll();
        return items.stream().map(i -> new ItemDto(i))
            .collect(Collectors.toList());
    }

    @ApiOperation(value="카테고리 검색", notes = "선택한 카테고리 별로 상품을 조회한다. [~, ~] 안에 스트링 형태로 콤마로 구분하여 다중 선택이 가능하다.")
    @PostMapping("/api/item/category")
    public List<ItemDto> getItemByCategory(@RequestBody List<Category> categories){
        return itemService.findWithCategory(categories)
            .stream().map(i -> new ItemDto(i))
            .collect(Collectors.toList());
    }

    @ApiOperation(value="상품 이름 검색", notes = "입력한 이름이 포함된 상품을 조회한다. 쌍따옴표 없는 스트링 형태로 상품 이름에 포함될 단어를 전송한다.")
    @PostMapping("/api/item/name")
    public List<ItemDto> getItemByName(@RequestBody String includedName){
        return itemService.findWithItemName(includedName)
            .stream().map(i -> new ItemDto(i))
            .collect(Collectors.toList());
    }

    @ApiOperation(value="인기 경매품 조회", notes="인기도 기준 상위 8개 상품을 조회한다.")
    @GetMapping("/api/item/best8")
    public List<ItemDto> getBest8Items(){
        return itemService.findBest8Items()
            .stream().map(i-> new ItemDto(i))
            .collect(Collectors.toList());
    }

    @ApiOperation(value="인기 검색어 조회", notes="인기 검색어 상위 8개를 조회한다.")
    @GetMapping("/api/item/favoriteSearch")
    public List<SearchDto> getfavoriteSearch(){
        return searchService.getTop8SearchWord()
            .stream().map(s-> new SearchDto(s))
            .collect(Collectors.toList());
    }
}
