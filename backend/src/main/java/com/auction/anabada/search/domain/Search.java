package com.auction.anabada.search.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Entity
@NoArgsConstructor
@Data
public class Search {

    @Id
    @GeneratedValue
    @Column(name = "search_id")
    private Long searchId;

    private String word;
    private Long count;

    public Search(String word, Long count) {
        this.word = word;
        this.count = count;
    }
}
