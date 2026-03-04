package com.brajesh.devsync;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //RestController is used for --> {Marks class as API controller}
public class HelloController {
    @GetMapping("/hello")  //getMapping is used for --> {Defines GET endpoint}
    public String sayHello(){
        return "Hello Devsync";
    }
}
