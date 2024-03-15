package com.ft.business.security.jwt;

import com.ft.business.security.UserPrincipal;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.Date;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

@Component
public class JwtProvider {

    private final static Logger logger = LoggerFactory.getLogger(JwtProvider.class);

    @Value("${jwt.secret}")
    String secret;

    @Value("${jwt.expiration}")
    int expiration;

    public String generateToken(Authentication authentication) {
        UserPrincipal usuarioPrincipal = (UserPrincipal) authentication.getPrincipal();

        byte[] decodedKey = Base64.getDecoder().decode(secret);
        SecretKey secretKey = new SecretKeySpec(decodedKey, 0, decodedKey.length, SignatureAlgorithm.HS512.getValue());

        return Jwts.builder().setSubject(usuarioPrincipal.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith( secretKey)
                .compact();
    }

    public String getEmailFromToken(String token) {

        byte[] decodedKey = Base64.getDecoder().decode(secret);
        SecretKey secretKey = new SecretKeySpec(decodedKey, 0, decodedKey.length, SignatureAlgorithm.HS512.getValue());

        return Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token).getBody().getSubject(); 
    }

    public boolean validateToken(String token) {
        try {
            byte[] decodedKey = Base64.getDecoder().decode(secret);
            SecretKey secretKey = new SecretKeySpec(decodedKey, 0, decodedKey.length, SignatureAlgorithm.HS512.getValue());
            Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token);
            return true;
        } catch (MalformedJwtException | UnsupportedJwtException | ExpiredJwtException | IllegalArgumentException e) {
            logger.error("error comprobando el token");
            e.printStackTrace();
        }
        return false;
    }

}
