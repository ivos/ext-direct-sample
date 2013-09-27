package com.github.ivos.extdirect;

import org.springframework.stereotype.Service;

import ch.ralscha.extdirectspring.annotation.ExtDirectMethod;
import ch.ralscha.extdirectspring.annotation.ExtDirectMethodType;

@Service
public class GreetingService {

    @ExtDirectMethod(ExtDirectMethodType.SIMPLE_NAMED)
    public String sayHello(User user) {
        System.out.println("Got from client: " + user);
        return "Hello, " + user.getFullName() + "!";
    }

}
