package router

import (
	"github.com/gorilla/mux"
	"go-todo/middleware"
)

func Router() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/api/tasks", middleware.GetAllTasks).Methods("GET")
	router.HandleFunc("/api/tasks", middleware.CreateTask).Methods("POST")
	router.HandleFunc("/api/tasks/{id}", middleware.TaskComplete).Methods("PUT")
	router.HandleFunc("/api/undoTask/{id}", middleware.UndoTask).Methods("PUT")
	router.HandleFunc("/api/tasks/{id}", middleware.DeleteTask).Methods("DELETE")
	router.HandleFunc("/api/deleteAllTasks", middleware.DeleteAllTasks).Methods("DELETE")
	router.HandleFunc("/api/tasks", middleware.PreflightHandler).Methods("OPTIONS")
	router.HandleFunc("/api/tasks/{id}", middleware.PreflightHandler).Methods("OPTIONS")
	return router

}
