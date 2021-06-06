package com.auction.anabada.user.api;

import com.auction.anabada.biddetail.dto.DetailBidsDto;
import com.auction.anabada.biddetail.dto.SimpleBidsDto;
import com.auction.anabada.biddetail.service.BidService;
import com.auction.anabada.item.dto.ItemDto;
import com.auction.anabada.user.domain.User;
import com.auction.anabada.user.dto.LoginRequestDto;
import com.auction.anabada.user.dto.SignupRequestDto;
import com.auction.anabada.user.dto.UserDto;
import com.auction.anabada.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import java.util.List;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
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

        return bidService.findSimpleBids(userId);
    }

    @ApiOperation(value="입찰 세부내역확인", notes="회원이 입찰한 아이템에 대한 세부 내역 조회(buyItemId)")
    @GetMapping("/api/user/{buyItemId}")
    public List<DetailBidsDto> getCurrentDetailBidDto(HttpServletRequest req,@RequestParam("buyItemId") Long buyItemId) {

        Long userId = (Long) req.getSession().getAttribute("userId");

        List<DetailBidsDto> bidDetails = bidService.findBidDetails(userId, buyItemId);

        if (bidDetails != null)
            return bidDetails;
        else
            return null;
    }

    @ApiOperation(value="개인별 등록 경매물품 조회", notes="자신이 등록한 모든 물품을 조회할 수 있다.")
    @GetMapping("/api/user/enrolledItems")
    public List<ItemDto> getEnrolledItems(HttpServletRequest req){
        Long userId = (Long) req.getSession().getAttribute("userId");
        return userService.getEnrolledItems(userId);
    }

    @ApiOperation(value="개인별 위시 리스트 조회", notes="자신이 찜해놓은 물품을  조회할 수 있다.")
    @GetMapping("/api/user/wishItems")
    public List<ItemDto> getWishItems(HttpServletRequest req){
        Long userId = (Long) req.getSession().getAttribute("userId");
        return userService.getWishItems(userId);
    }


    //== 유저 개인정보 변경 기능 ==//
    @ApiOperation(value="비밀번호 변경", notes = "새로운 비밀번호로 변경할 수 있다.")
    @PostMapping("/api/user/profile/password")
    public boolean changePassowrd(HttpServletRequest req, @RequestBody @Valid String newPassword){
        Long userId = (Long) req.getSession().getAttribute("userId");
        return userService.changePassword(userId, newPassword);
    }

    @ApiOperation(value="프로필 변경", notes = "새로운 프로필 이미지로 변경할 수 있다.")
    @PostMapping("/api/user/profile/image")
    public boolean changeProfileImage(HttpServletRequest req, @RequestBody @Valid String newImage){
        Long userId = (Long) req.getSession().getAttribute("userId");
        return userService.changeProfileImage(userId, newImage);
    }

    @ApiOperation(value="주소 변경", notes = "새로운 주소로 변경할 수 있다.")
    @PostMapping("/api/user/profile/address")
    public boolean changeAddress(HttpServletRequest req, @RequestBody @Valid String newAddress){
        Long userId = (Long) req.getSession().getAttribute("userId");
        return userService.changeAddress(userId, newAddress);
    }
  
   @ApiOperation(value="ID 중복확인 체크", notes="회원가입시 중복로그인 체크")
    @PostMapping("/api/user/idcheck")
    public boolean idCheck(@RequestBody @Valid String accountId){
        return userService.idCheck(accountId);
    }

}
