package com.auction.anabada.saleItem.api;

import com.auction.anabada.item.dto.EnrollItemDto;
import com.auction.anabada.saleItem.service.SaleItemService;
import io.swagger.annotations.ApiOperation;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SaleItemApiController {

    private final SaleItemService saleItemService;

    @ApiOperation(value="물품등록",notes="2018-08-04 12:05:12 와 같은 형식으로 넣어줘야합니다.")
    @PostMapping("/api/SaleItem/enrollItem")
    public Long enrollItem(@RequestBody @Valid EnrollItemDto enrollItemDto,HttpServletRequest req){
        long userId = (Long)req.getSession().getAttribute("userId");

        return saleItemService.addSaleItem(userId,enrollItemDto);
    }


}