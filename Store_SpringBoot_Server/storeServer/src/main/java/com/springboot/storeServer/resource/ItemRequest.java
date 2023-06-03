package com.springboot.storeServer.resource;

import lombok.Data;

@Data
public class ItemRequest {
    private String title;

    private String info;

    private String selectedFile;

    private Integer price;

    public ItemRequest() {
    }

    public ItemRequest(String title, String info, String selectedFile, Integer price) {
        this.title = title;
        this.info = info;
        this.selectedFile = selectedFile;
        this.price = price;
    }
}
