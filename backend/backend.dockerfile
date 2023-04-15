# Use an official Golang runtime as a parent image
FROM golang:latest

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Build the Go app
RUN go build -o server ./cmd/server

# Expose port 8080
EXPOSE 9000

# Define the command to run the executable
CMD ["./server"]
