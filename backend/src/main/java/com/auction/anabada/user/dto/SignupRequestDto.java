package com.auction.anabada.user.dto;

import com.auction.anabada.user.domain.Category;
import lombok.Data;

@Data
public class SignupRequestDto {
    private String name;
    private String phoneNum;
    private String nickName;
    private String accountId;
    private String password;
    private String address;
    private Category interest;

    public SignupRequestDto(String name, String phoneNum, String nickName,
        String accountId, String password,String address,Category interest) {
        this.name = name;
        this.phoneNum = phoneNum;
        this.nickName = nickName;
        this.accountId = accountId;
        this.password = password;
        this.address=address;
        this.interest=interest;
    }
}
