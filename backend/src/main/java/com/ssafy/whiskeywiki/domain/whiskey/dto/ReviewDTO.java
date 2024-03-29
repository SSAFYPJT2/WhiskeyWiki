package com.ssafy.whiskeywiki.domain.whiskey.dto;

import com.ssafy.whiskeywiki.domain.whiskey.domain.StarRating;
import com.ssafy.whiskeywiki.global.util.BaseTimeEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

public class ReviewDTO {
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class ReviewData {
        private String nickname;
        private int reviewRating;
        private String content;
        private String gender;
        private int age;
        private LocalDateTime createdDate;
    }

    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class ReviewRequest{
        private int whiskeyId;
        private int reviewRating;
        private String content;
    }
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class isRegistered{
        private boolean checkRegister;
    }

}