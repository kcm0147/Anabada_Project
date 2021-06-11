package com.auction.anabada.search.service;

import com.auction.anabada.search.domain.Search;
import com.auction.anabada.search.repository.SearchRepository;
import com.auction.anabada.item.domain.Category;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SearchService {

    private final SearchRepository searchRepository;

    public List<Search> getTop8SearchWord(){
        return searchRepository.findTop8SearchCount();
    }

    public void addCategorySearch(List<Category> categories) {
        for(Category c: categories){
            searchRepository.addSearch(c.name());
        }
    }

    public boolean addNameSearch(String itemName) {
        String trimmed = itemName.trim();

        //== 글자가 포함되지 않은 검색어 처리 ==//
        if(trimmed.equals("")){
            return false;
        }
        return searchRepository.addSearch(trimmed);
    }
}
