package com.auction.anabada.user.api;

import com.auction.anabada.user.domain.User;
import com.auction.anabada.user.dto.LoginRequestDto;
import com.auction.anabada.user.dto.SignupRequestDto;
import com.auction.anabada.user.dto.UserDto;
import com.auction.anabada.user.service.UserService;
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
    public long checkSession(HttpServletRequest req){
        Object userId = req.getSession().getAttribute("userId");
        return (long)userId;
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


}
