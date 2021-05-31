package com.auction.anabada.user.service;

import com.auction.anabada.user.domain.User;
import com.auction.anabada.user.dto.LoginRequestDto;
import com.auction.anabada.user.dto.UserDto;
import com.auction.anabada.user.repository.UserRepository;
import java.util.List;
import javax.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void save(User user) {userRepository.save(user); }

    public User findById(Long id) {
        return userRepository.findById(id);
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public UserDto signUp(User user) {
        List<User> accountIdCheck = userRepository.findByAccountId(user.getAccountId());

        /* Check duplicate accountId */
        if(accountIdCheck.size() > 0){
            return null;
        }

        userRepository.save(user);

        return new UserDto(user);
    }

    public UserDto login(LoginRequestDto req,  HttpSession session) {
        List<User> byAccountId = userRepository.findByAccountId(req.getAccountId());

        if(byAccountId.isEmpty()){
            return null;
        }

        User account=byAccountId.get(0);

        if(!account.getPassword().equals(req.getPassword())){
            return null;
        }

        session.setAttribute("userId", account.getUserId());

        return new UserDto(account);
    }

}

