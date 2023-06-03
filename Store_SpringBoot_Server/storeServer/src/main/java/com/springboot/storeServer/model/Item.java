package com.springboot.storeServer.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("items")
@Data //getter and setter
public class Item {
    @Id
    private String id;
    private String title;
    private String info;
    private String selectedFile;
    private Integer price;

    public Item(){}

    public Item(String title, String info, String selectedFile, Integer price){
        this.title = title;
        this.info = info;
        this.selectedFile = selectedFile;
        this.price = price;
    }
}
