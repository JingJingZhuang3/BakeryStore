package com.springboot.storeServer.repository;


import com.springboot.storeServer.model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

//@Repository
public interface ItemRepository extends MongoRepository<Item, String> {
//    Item findByIdItem (String idItem);
}
