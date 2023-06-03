package com.springboot.storeServer.controller;

import com.springboot.storeServer.model.Item;
import com.springboot.storeServer.repository.ItemRepository;
import com.springboot.storeServer.resource.ItemRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class ItemController {

    private final ItemRepository itemRepository;

    public ItemController(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @GetMapping("/api/store/item")
    public ResponseEntity<List<Item>> getAllItems() {

        return ResponseEntity.ok(this.itemRepository.findAll());
    }

    @PostMapping("/api/store/item")
    public ResponseEntity<Item> createItem(@RequestBody ItemRequest itemRequest) {

        Item item = new Item();
        item.setTitle(itemRequest.getTitle());
        item.setInfo(itemRequest.getInfo());
        item.setSelectedFile(itemRequest.getSelectedFile());
        item.setPrice(itemRequest.getPrice());

        return ResponseEntity.status(201).body(this.itemRepository.save(item));
    }

    @PutMapping("/api/store/item/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable String id, @RequestBody ItemRequest itemRequest) {

        Optional<Item> optionalItem = itemRepository.findById(id);
        if (!optionalItem.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        Item item = optionalItem.get();
        item.setTitle(itemRequest.getTitle());
        item.setInfo(itemRequest.getInfo());
//        item.setSelectedFile(itemRequest.getSelectedFile());
        item.setPrice(itemRequest.getPrice());

        return ResponseEntity.status(201).body(this.itemRepository.save(item));
    }

    @GetMapping("/api/store/item/{id}")
    public ResponseEntity getItemById(@PathVariable String id) {

        Optional<Item> item = this.itemRepository.findById(id);

        if(item.isPresent()) {
            return ResponseEntity.ok(item.get());
        } else {
            return ResponseEntity.ok("The item with id: " + id + " was not found.");
        }
    }

    @DeleteMapping("/api/store/item/{id}")
    public ResponseEntity deleteItemById(@PathVariable String id) {

        Optional<Item> item = this.itemRepository.findById(id);

        if(item.isPresent()) {
            this.itemRepository.deleteById(id);
            return ResponseEntity.ok("Success.");
        } else {
            return ResponseEntity.ok("The item with id: " + id + " was not found.");
        }
    }
}