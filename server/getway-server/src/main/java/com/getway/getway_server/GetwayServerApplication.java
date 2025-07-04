package com.getway.getway_server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
	
@SpringBootApplication
@EnableDiscoveryClient
public class GetwayServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(GetwayServerApplication.class, args);
	}

}
