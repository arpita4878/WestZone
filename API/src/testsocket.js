import { io } from "socket.io-client";

const BRANCHES = ["123", "456"];
const DELIVERY_BOYS = ["d1", "d2"];

const socket = io("http://localhost:5000", {
  query: {
    branchId: BRANCHES.join(","),      
    deliveryBoyId: DELIVERY_BOYS.join(",")
  }
});

socket.on("connect", () => {
  console.log("Connected:", socket.id);

  // Join multiple branch rooms manually
  BRANCHES.forEach(branchId => {
    socket.emit("joinBranch", branchId);
  });

  // Join multiple delivery boy rooms manually
  DELIVERY_BOYS.forEach(deliveryBoyId => {
    socket.emit("joinDeliveryBoy", deliveryBoyId);
  });
});

// Listen to branch notifications
socket.on("newOrder", (data) => {
  console.log("New order received:", data);
});

// Listen to delivery assignment notifications
socket.on("deliveryAssigned", (data) => {
  console.log("Delivery assigned:", data);
});


