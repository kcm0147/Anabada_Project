package com.auction.anabada.user.api;

import com.auction.anabada.biddetail.domain.BidDetail;
import com.auction.anabada.biddetail.dto.DetailBidsDto;
import com.auction.anabada.biddetail.dto.SimpleBidsDto;
import com.auction.anabada.biddetail.service.BidService;
import com.auction.anabada.item.domain.Item;
import com.auction.anabada.user.domain.User;
import com.auction.anabada.user.dto.LoginRequestDto;
import com.auction.anabada.user.dto.SignupRequestDto;
import com.auction.anabada.user.dto.UserDto;
import com.auction.anabada.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import java.time.format.DateTimeFormatter;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserApiController {

    private final UserService userService;
    private final BidService bidService;

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

    @ApiOperation(value="입찰내역 확인", notes="회원이 입찰한 내역을 아이템당 마지막 내역 조회")
    @GetMapping("/api/user/simplebids")
    public List<SimpleBidsDto> getCurrentSimpleBidDto(HttpServletRequest req){
        Long userId = (Long)req.getSession().getAttribute("userId");
        User user = userService.findById(userId);

        List<SimpleBidsDto> itemDtoList = new ArrayList<>();
        user.getBuyItems().forEach(o -> {
            Item item = o.getItem();
            BidDetail lastBidDetail = o.getBidDetails().get(o.getBidDetails().size()-1);
            String lastTime=lastBidDetail.getBidTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
            SimpleBidsDto bidsDto = SimpleBidsDto.builder()
                .itemId(item.getItemId())
                .buyItemId(o.getBuyItemId())
                .itemName(item.getItemName())
                .category(item.getCategory())
                .itemImage(item.getItemImage())
                .lastPrice(lastBidDetail.getBidCost())
                .lastAuctionDate(lastTime)
                .result(lastBidDetail.getResult())
                .build();

            itemDtoList.add(bidsDto);
        });
        return itemDtoList;
    }

    @ApiOperation(value="입찰 세부내역확", notes="회원이 입찰한 아이템에 대한 세부 내역 조회(buyItemId)")
    @GetMapping("/api/user/{buyItemId}")
    public List<DetailBidsDto> getCurrentDetailBidDto(HttpServletRequest req,@RequestParam("buyItemId") Long buyItemId) {

        Long userId = (Long) req.getSession().getAttribute("userId");
        User user = userService.findById(userId);

        List<DetailBidsDto> bidDetails = bidService.findBidDetails(userId, buyItemId);

        if (bidDetails != null)
            return bidDetails;
        else
            return null;
    }

    //== 비밀번호 변경 기능 ==//
    @ApiOperation(value="비밀번호 변경", notes = "새로운 비밀번호로 변경할 수 있다.")
    @PostMapping("/api/user/profile/password")
    public void changePassowrd(HttpServletRequest req, @RequestBody @Valid String newPassword){
        Long userId = (Long) req.getSession().getAttribute("userId");
        userService.changePassword(userId, newPassword);
    }
}
