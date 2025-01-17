package com.ssafy.whiskeywiki.domain.whiskey.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

public class WhiskeyDTO {
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class WhiskeySimpleInfo{
        private int whiskeyId;
        private String whiskeyNameKr;
        private String whiskeyNameEn;
        private String whiskeyFlavor;
        private double abv;
        private int price;
        private double starRating;
        private double starOriginRating;
    }

    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class WhiskeyDetailInfo{
        private String whiskeyNameKr;
        private String whiskeyNameEn;
        private String detail;
        private String whiskeyFlavor;
        private double abv;
        private int price;
    }

    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class WhiskeyNameData{
        private String whiskeyNameKr;
        private String whiskeyNameEn;
    }

    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class WhiskeyStaticsData {
        private double maleLikePer;
        private double femaleLikePer;
        private double twentiesLikePer;
        private double thirtiesLikePer;
        private double fortiesLikePer;
        private double fiftiesLikePer;
        private double sixtiesLikePer;
    }

    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class CheckWhiskeyStatus{
        private Boolean isEmpty;
    }

    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class DetectionWhiskeyList{
        private List<String> whiskeyReqList;
    }

    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class DetectionWhiskeyInfoData{
        private List<WhiskeySummaryInfo> whiskeyResList  = new ArrayList<>();
    }

    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class WhiskeySummaryInfo{
        private String nameKr;
        private String nameEn;
        Boolean isOwn;
    }
}
