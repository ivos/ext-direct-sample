package com.github.ivos.extdirect.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import ch.ralscha.extdirectspring.generator.IncludeValidation;
import ch.ralscha.extdirectspring.generator.ModelGenerator;
import ch.ralscha.extdirectspring.generator.OutputFormat;

import com.github.ivos.extdirect.model.Greeting;
import com.github.ivos.extdirect.model.User;

@Controller
public class ModelController {

    @RequestMapping("/app/model/User.js")
    public void user(HttpServletRequest request, HttpServletResponse response) throws IOException {
        writeModel(request, response, User.class);
    }

    @RequestMapping("/app/model/Greeting.js")
    public void greeting(HttpServletRequest request, HttpServletResponse response) throws IOException {
        writeModel(request, response, Greeting.class);
    }

    private void writeModel(HttpServletRequest request, HttpServletResponse response, Class<?> clazz)
            throws IOException {
        ModelGenerator.writeModel(request, response, clazz, OutputFormat.EXTJS4, IncludeValidation.BUILTIN, false);
    }

}
