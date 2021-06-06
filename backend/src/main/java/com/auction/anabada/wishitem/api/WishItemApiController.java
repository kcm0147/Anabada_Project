package com.auction.anabada.wishitem.api;


import com.auction.anabada.wishitem.service.WishItemService;
import io.swagger.annotations.ApiOperation;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class WishItemApiController {

    private final WishItemService wishItemService;


    @ApiOperation(value="찜목록추가", notes="아이템 번호를 넣으면 찜목록에 추가한다")
    @PostMapping("/api/wishitem/add")
    public boolean wishItemAdd(HttpServletRequest req,@RequestBody Long ItemId){
        Long userId = (Long) req.getSession().getAttribute("userId");
        return wishItemService.createWishItem(userId,ItemId);
    }

    @ApiOperation(value="찜목록제", notes="아이템 번호를 넣으면 찜목록에 제거한다(찜목록에 추가가되어있는 상태여야한다)")
    @PostMapping("/api/wishitem/remove")
    public boolean wishItemRemove(HttpServletRequest req,@RequestBody Long ItemId){
        Long userId = (Long) req.getSession().getAttribute("userId");
        return wishItemService.removeWishItem(userId,ItemId);
    }



}
