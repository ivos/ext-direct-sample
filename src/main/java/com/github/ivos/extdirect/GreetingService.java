package com.github.ivos.extdirect;

import org.springframework.stereotype.Service;

import ch.ralscha.extdirectspring.annotation.ExtDirectMethod;
import ch.ralscha.extdirectspring.annotation.ExtDirectMethodType;

/**
 * @author Ivo Maixner <ivo.maixner@gmail.com>
 */
@Service
public class GreetingService {

    @ExtDirectMethod(ExtDirectMethodType.SIMPLE_NAMED)
    public String sayHello(String name) {
        return "Hello, " + name + "!";
    }

}
