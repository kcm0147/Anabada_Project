package com.auction.anabada.user.api;

import com.auction.anabada.buyItem.dto.BidsDto;
import com.auction.anabada.item.domain.Item;
import com.auction.anabada.user.domain.User;
import com.auction.anabada.user.dto.LoginRequestDto;
import com.auction.anabada.user.dto.SignupRequestDto;
import com.auction.anabada.user.dto.UserDto;
import com.auction.anabada.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserApiController {

    private final UserService userService;

    @GetMapping("/api/user/all")
    public List<UserDto> showAll(){
        List<UserDto> users = userService.findAll().stream()
            .map(o -> new UserDto(o))
            .collect(Collectors.toList());
        return users;
    }

    @GetMapping("/api/user/checkSession")
    public Long checkSession(HttpServletRequest req){
        Object userId = req.getSession().getAttribute("userId");
        return (Long)userId;
    }

    @PostMapping("/api/user/login")
    public UserDto signIn(@RequestBody @Valid LoginRequestDto req, HttpServletRequest servletRequest){
        return userService.login(req, servletRequest.getSession());
    }

    @PostMapping("/api/user/signup")
    public UserDto signUp(@RequestBody @Valid SignupRequestDto req, Errors errors){

        if(errors.hasErrors()){
            return null;
        }

        User user = User.builder()
            .name(req.getName())
            .phoneNum(req.getPhoneNum())
            .nickName(req.getNickName())
            .accountId(req.getAccountId())
            .password(req.getPassword())
            .address(req.getAddress())
            .interest(req.getInterest())
            .build();


        return userService.signUp(user);
    }

    @ApiOperation(value="회원정보 조회", notes="회원의 개인 정보를 조회한다.")
    @GetMapping("/api/user/info")
    public UserDto getUserInfo(HttpServletRequest req){
        Long userId = (Long)req.getSession().getAttribute("userId");
        User user = userService.findById(userId);
        UserDto userDto = new UserDto(user);
        return userDto;
    }

    @ApiOperation(value="입찰내역 확인", notes="회원이 입찰한 내역을 조회한다.")
    @GetMapping("/api/user/bids")
    public List<BidsDto> getCurrentBidDto(HttpServletRequest req){
        Long userId = (Long)req.getSession().getAttribute("userId");
        User user = userService.findById(userId);

        List<BidsDto> itemDtoList = new ArrayList<>();
        user.getBuyItems().forEach(o -> {
            Item item = o.getItem();
            BidsDto bidsDto = BidsDto.builder()
                .interestCnt(item.getInterestCnt())
                .itemId(item.getItemId())
                .itemName(item.getItemName())
                .category(item.getCategory())
                .lowerBoundPrice(item.getLowerBoundPrice())
                .currentPrice(item.getCurrentPrice())
                .auctionStartDate(item.getAuctionStartDate())
                .auctionEndDate(item.getAuctionEndDate())
                .itemImage(item.getItemImage())
                .build();

            itemDtoList.add(bidsDto);
        });
        return itemDtoList;
    }
}
