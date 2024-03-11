package com.ft.business.security.jwt;

import com.ft.business.security.UserDetailsServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class JwtTokenFilter extends OncePerRequestFilter {

    private final static Logger logger = LoggerFactory.getLogger(JwtTokenFilter.class);

    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    UserDetailsServiceImpl userDetailsServiceImpl;

    @SuppressWarnings("rawtypes")
    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws ServletException, IOException {

        String token = getToken(req);
        ResponseEntity<Map> googleToken = this.getGoogleUserInfo(token);

        if (googleToken.getStatusCode() == HttpStatusCode.valueOf(HttpStatus.OK.value())) {
            UserDetails userDetails = userDetailsServiceImpl.loadUserByUsername(null);
            UsernamePasswordAuthenticationToken auth =
                    new UsernamePasswordAuthenticationToken(googleToken, null, userDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(auth);
        } else {
            logger.error("Failure on validate token!");
        }

        chain.doFilter(req, res);
    }

    private String getToken(HttpServletRequest req){
        String authReq = req.getHeader("Authorization");
        if(authReq != null && authReq.startsWith("Bearer "))
            return authReq.replace("Bearer ", "");
        return null;
    }

    @SuppressWarnings("rawtypes")
    private ResponseEntity<Map>  getGoogleUserInfo(String acessToken){
        String googleUserInfoUrl = "https://www.googleapis.com/oauth2/v1/userinfo?access_token="+acessToken;

        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();

        headers.setContentType(MediaType.APPLICATION_JSON);
        Map<String, String> params = new HashMap<>();

        HttpEntity<Map<String, String>> request = new HttpEntity<>(params, headers);
        ResponseEntity<Map> response = restTemplate.getForEntity(googleUserInfoUrl,Map.class, request);
        return response;

    }
}
