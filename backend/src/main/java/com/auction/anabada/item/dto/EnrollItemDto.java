package com.auction.anabada.item.dto;

import com.auction.anabada.user.domain.Category;
import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.UUID;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;


//== 상품 등록용 DTO ==//
@Data
@NoArgsConstructor
@Slf4j
public class EnrollItemDto {

    private String itemName;
    private Category category;
    private Long lowerBoundPrice;
    private String auctionStartDate;
    private String auctionEndDate;
    private String description;
    private MultipartFile imageFile;
    private String imagePath;

    public void makeImagePath(String path) {
        path = path + File.separator + "static" + File.separator + "images"; // 이미지 업로드 폴더 /resources/static/images
        log.info("이미지 저장 경로 : " + path);
        String fileName = UUID.randomUUID() + "";
        String newPath = null;

        if(imageFile.isEmpty()) { // 애초에 모든 물품은 사진 등록을 완료해야 함
            // 여기로 들어오면 안됌
            log.error("파일이 첨부되지 않았습니다.");
            newPath = path + File.separator + "default.jpg";
        } else { // 파일이 존재할 경우 정상 로직 수행
            log.info("파일이 정상적으로 첨부되었습니다.");
            File target = new File(path, fileName);
            try {
                FileCopyUtils.copy(imageFile.getBytes(), target);
                newPath = path + File.separator + fileName;
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        log.info("파일이 저장된 경로 : " + newPath);
        this.imagePath = newPath;
    }
}
