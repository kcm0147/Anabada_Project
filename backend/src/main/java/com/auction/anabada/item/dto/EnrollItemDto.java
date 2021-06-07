package com.auction.anabada.item.dto;

import com.auction.anabada.user.domain.Category;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;
import java.util.UUID;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;


//== 상품 정보 등록용 DTO ==//
@Data
@NoArgsConstructor
@Slf4j
public class EnrollItemDto {

    private ItemInfo itemInfo;
    private MultipartFile imageFile;

     public void makeImagePath(String path) {
        path = path +File.separator + "static" + File.separator + "images"; // 이미지 업로드 폴더 /resources/static/images
        log.info("이미지 저장 경로 : " + path);
        String fileName;
        String newPath = null;
        String absolutePath = System.getProperty("user.dir");;

        if(this.imageFile.isEmpty()) { // 애초에 모든 물품은 사진 등록을 완료해야 함
            log.error("파일이 첨부되지 않았습니다.");
            newPath = path + File.separator + "default.jpg";
        } else { // 파일이 존재할 경우 정상 로직 수행
            log.info("파일이 정상적으로 첨부되었습니다.");
            fileName= imageFile.getOriginalFilename();

            File dir = new File(path);
            File target = new File(absolutePath+path+'/'+fileName);

            if(!dir.exists()){
                dir.mkdirs();
                log.info("디렉토리생성");
            }

            try {
                imageFile.transferTo(target);
                log.info("파일 생성");
                newPath = absolutePath+path+'/'+fileName;
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        log.info("파일이 저장된 경로 : " + newPath);
        this.itemInfo.setImagePath(newPath);
    }
}
