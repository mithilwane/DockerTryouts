package com.sb.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonObject;

@RestController
@RequestMapping("/api")
public class DemoController {
	
	@GetMapping("/demoMethod")
	public String demoMethod() {
		JsonObject jsonObject = new JsonObject();
		jsonObject.addProperty("name", "Hello String");
		return jsonObject.toString();
	}
}
