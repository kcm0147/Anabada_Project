package com.auction.anabada.search.service;

import com.auction.anabada.search.domain.Search;
import com.auction.anabada.search.repository.SearchRepository;
import com.auction.anabada.user.domain.Category;
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

    public void addNameSearch(String itemName) {
        searchRepository.addSearch(itemName);
    }
}
