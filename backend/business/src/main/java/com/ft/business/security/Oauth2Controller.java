package com.ft.business.security;

import com.ft.business.entity.Business;
import com.ft.business.service.BusinessService;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


import java.io.IOException;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/oauth")
public class Oauth2Controller {

    @Value("${google.clientId}")
    private String googleClientId;

    @PostMapping("/google")
    public ResponseEntity<?> googleLogin(@RequestBody TokenDto tokenDto) throws IOException {
        final NetHttpTransport netHttpTransport = new NetHttpTransport();
        final JsonFactory jsonFactory = new GsonFactory();

        final GoogleIdTokenVerifier.Builder verifier = new GoogleIdTokenVerifier.Builder(netHttpTransport,jsonFactory).setAudience(Collections.singletonList(googleClientId));
        final GoogleIdToken googleIdToken = GoogleIdToken.parse(verifier.getJsonFactory(),tokenDto.getValue());
        final GoogleIdToken.Payload googlePayload = googleIdToken.getPayload();
        return new ResponseEntity<>(googlePayload, HttpStatus.OK);
    }

    @Autowired
    private BusinessService businessService;


    @GetMapping("/")
    public ResponseEntity<List<Business>> getRoles(){
        return ResponseEntity.ok(this.businessService.findAll());
    }
}
