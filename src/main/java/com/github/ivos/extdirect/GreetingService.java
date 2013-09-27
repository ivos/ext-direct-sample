package com.github.ivos.extdirect;

import org.springframework.stereotype.Service;

import ch.ralscha.extdirectspring.annotation.ExtDirectMethod;
import ch.ralscha.extdirectspring.annotation.ExtDirectMethodType;

@Service
public class GreetingService {

    @ExtDirectMethod(ExtDirectMethodType.SIMPLE_NAMED)
    public Greeting sayHello(User user) {
        System.out.println();
        System.out.println("Got from client: " + user);
        Greeting greeting = new Greeting();
        greeting.setText("Hello, " + user.getFullName() + "!");
        greeting.setUser(user);
        System.out.println("Returning to client: " + greeting);
        return greeting;
    }

}
