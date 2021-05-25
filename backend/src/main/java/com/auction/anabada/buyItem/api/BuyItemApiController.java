package com.auction.anabada.buyItem.api;

import com.auction.anabada.buyItem.dto.BuyDto;
import com.auction.anabada.buyItem.service.BuyItemService;
import io.swagger.annotations.ApiOperation;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class BuyItemApiController {

    private final BuyItemService buyItemService;

//    @ApiOperation(value="입찰하기", notes="item ID를 입력하여 해당 물품을 입찰한다.")
//    @MessageMapping("/buyItem/add")
//    public boolean addBuyItem(@DestinationVariable("buyItem") BuyDto buyDto, HttpServletRequest req)
//        throws InterruptedException {
//        Thread.sleep(100); // delay
//        Long userId = (Long)req.getSession().getAttribute("userId");
//        return buyItemService.makeBid(userId,buyDto.getItemId(),buyDto.getPrice());
//    }

    @ApiOperation(value="입찰하기", notes="item ID를 입력하여 해당 물품을 입찰한다.")
    @PostMapping("/buyItem/add")
    public boolean addBuyItemAPI(@RequestBody BuyDto buyDto, HttpServletRequest req)
        throws InterruptedException {
        Thread.sleep(100); // delay
        Long userId = (Long)req.getSession().getAttribute("userId");
        return buyItemService.makeBid(userId, buyDto.getItemId(),buyDto.getPrice());
    }

//    @ApiOperation(value="입찰 수정", notes="item ID를 입력하여 해당 물품의 입찰 정보를 수정한다.")
//    @PutMapping("/api/buyItem/update/{itemId}")
//    public Long updateBuyItem(BidsDto bidsDto){
//        return buyItemService.update(bidsDto);
//    }
}
