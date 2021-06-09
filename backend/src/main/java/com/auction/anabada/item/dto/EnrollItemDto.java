package com.auction.anabada.item.dto;

import com.auction.anabada.user.domain.Category;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;


//== 상품 정보 등록용 DTO ==//
@Data
@NoArgsConstructor
@Slf4j
public class EnrollItemDto {

    private String itemName;
    @Enumerated(EnumType.STRING)
    private Category category;
    private Long lowerBoundPrice;
    private String auctionStartDate;
    private String auctionEndDate;
    private String description;
    private String imagePath;
    private MultipartFile imageFile;

     public void makeImagePath(String path) {
        path = path +File.separator + "static" + File.separator + "images"; // 이미지 업로드 폴더 /resources/static/images
        log.info("이미지 저장 경로 : " + path);
        String fileName;
        String filePath;
        String absolutePath = System.getProperty("user.dir");;

        if(this.imageFile.isEmpty()) { // 애초에 모든 물품은 사진 등록을 완료해야 함
            log.error("파일이 첨부되지 않았습니다.");
            fileName ="default.jpg";
        } else { // 파일이 존재할 경우 정상 로직 수행
            log.info("파일이 정상적으로 첨부되었습니다.");
            fileName=System.nanoTime()+imageFile.getOriginalFilename();
            filePath= absolutePath+path+'/'+fileName;

            File dir = new File(absolutePath+path);
            File target = new File(filePath);
            log.info(filePath);

            if(!dir.exists()){
                dir.mkdirs();
                log.info("디렉토리생성");
            }

            try {
                imageFile.transferTo(target);
                log.info("파일 생성");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        log.info("파일이 저장된 경로 : " + fileName);
        this.setImagePath(fileName);
    }

}
