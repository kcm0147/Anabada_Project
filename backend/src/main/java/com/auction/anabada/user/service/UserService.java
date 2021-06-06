package com.auction.anabada.user.service;

import com.auction.anabada.item.dto.ItemDto;
import com.auction.anabada.user.domain.User;
import com.auction.anabada.user.dto.LoginRequestDto;
import com.auction.anabada.user.dto.UserDto;
import com.auction.anabada.user.repository.UserRepository;
import java.util.List;
import java.util.stream.Collectors;
import javax.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


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

    public boolean idCheck(String accountId){
        List<User> byAccountId = userRepository.findByAccountId(accountId);
        if(byAccountId.isEmpty()){
            return true;
        }
        return false;
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

    @Transactional
    public boolean changePassword(Long id, String newPassword) {
        User user = userRepository.findById(id);
        user.changePassword(newPassword);
        return true;
    }

    @Transactional
    public boolean changeProfileImage(Long id, String newProfileImg) {
        User user = userRepository.findById(id);
        user.changeProfileImage(newProfileImg);
        return true;
    }

    @Transactional
    public boolean changeAddress(Long id, String newAddress) {
        User user = userRepository.findById(id);
        user.changeAddress(newAddress);
        return true;
    }

    @Transactional
    public List<ItemDto> getEnrolledItems(Long userId) {
        User user = userRepository.findById(userId);
        return user.getSaleItems().stream()
            .map(o -> new ItemDto(o.getItem()))
            .collect(Collectors.toList());
    }
}

