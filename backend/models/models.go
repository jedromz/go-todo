package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type ToDoList struct {
	ID     primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	Title  string             `json:"title" bson:"title,omitempty"`
	Status bool               `json:"status" bson:"status,omitempty"`
}
