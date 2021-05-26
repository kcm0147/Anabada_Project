package com.auction.anabada.item.api;

import com.auction.anabada.item.domain.Item;
import com.auction.anabada.item.dto.EnrollItemDto;
import com.auction.anabada.item.dto.ItemDto;
import com.auction.anabada.item.service.ItemService;
import com.auction.anabada.user.domain.Category;
import io.swagger.annotations.ApiOperation;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ItemApiController {

    private final EntityManager em;
    private final ItemService itemService;

    @ApiOperation(value="상품 조회", notes = "등록된 모든 상품을 조회한다.")
    @GetMapping("/api/item/all")
    public List<EnrollItemDto> getAllItems(){
        List<Item> items = itemService.findAll();
        return items.stream().map(i -> new EnrollItemDto(i))
            .collect(Collectors.toList());
    }

    @ApiOperation(value="카테고리 조회", notes = "선택한 카테고리 별로 상품을 조회한다. [~, ~] 안에 스트링 형태로 콤마로 구분하여 다중 선택이 가능하다.")
    @PostMapping("/api/item/category")
    public List<EnrollItemDto> getItemByCategory(@RequestBody List<Category> categories){
        return itemService.findWithCategory(categories)
            .stream().map(i -> new EnrollItemDto(i))
            .collect(Collectors.toList());
    }

    @ApiOperation(value="상품 이름 조회", notes = "입력한 이름이 포함된 상품을 조회한다. 스트링 형태로 상품 이름에 포함될 단어를 전송한다.")
    @PostMapping("/api/item/name")
    public List<EnrollItemDto> getItemByName(@RequestBody String includedName){
        return itemService.findWithItemName(includedName)
            .stream().map(i -> new EnrollItemDto(i))
            .collect(Collectors.toList());
    }

    @ApiOperation(value="인기 경매품 조회", notes="인기도 기준 상위 8개 상품을 조회한다.")
    @PostMapping("/api/item/best8")
    public List<ItemDto> getBest8Items(){
        return itemService.findBest8Items()
            .stream().map(i-> new ItemDto(i))
            .collect(Collectors.toList());
    }
}
