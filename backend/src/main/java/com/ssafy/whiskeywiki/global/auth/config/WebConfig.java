package com.ssafy.whiskeywiki.global.auth.config;

import com.ssafy.whiskeywiki.global.auth.filter.AuthFilter;
import com.ssafy.whiskeywiki.global.auth.provider.JwtProvider;
import com.ssafy.whiskeywiki.domain.user.repository.UserRepository;
import jakarta.servlet.Filter;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer{

    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowedOriginPatterns("*");
    }

    @Bean
    public FilterRegistrationBean verifyUserFilter() {
        FilterRegistrationBean<Filter> filterRegistrationBean = new
                FilterRegistrationBean<>();
        filterRegistrationBean.setFilter(new AuthFilter(jwtProvider, userRepository));
        filterRegistrationBean.setOrder(1);
        filterRegistrationBean.addUrlPatterns("*");   // 필터가 적용될 URL
        return filterRegistrationBean;
    }
}

