package com.auction.anabada.search.dto;

import com.auction.anabada.search.domain.Search;
import lombok.Data;

@Data
public class SearchDto {

    Long searchId;
    String word;
    Long count;

    public SearchDto(Search search) {
        this.searchId = search.getSearchId();
        this.word = search.getWord();
        this.count = search.getCount();
    }
}
