package com.github.ivos.extdirect.model;

import ch.ralscha.extdirectspring.generator.ModelAssociation;
import ch.ralscha.extdirectspring.generator.ModelAssociationType;

public class Greeting {

    private String text;

    @ModelAssociation(ModelAssociationType.HAS_ONE)
    private User user;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Greeting [text=" + text + ", user=" + user + "]";
    }

}
