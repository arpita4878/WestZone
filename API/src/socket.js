import { Server } from "socket.io";

let io;

export function initSocket(httpServer) {
  io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  // expose globally if you want to emit from controllers
  global._io = io;

  io.on("connection", (socket) => {
    console.log(" New client connected:", socket.id);

    // Extract query params
    const { branchId, deliveryBoyId } = socket.handshake.query;

    if (branchId) {
      const room = String(branchId);
      socket.join(room);
      console.log(`Branch ${room} auto-joined via socket ${socket.id}`);
      socket.emit("joinedBranch", { room });
    }

    if (deliveryBoyId) {
      const room = `delivery_${deliveryBoyId}`;
      socket.join(room);
      console.log(`Delivery Boy ${room} auto-joined via socket ${socket.id}`);
      socket.emit("joinedDeliveryBoy", { room });
    }

    
    socket.on("joinBranch", (branchId) => {
      const room = String(branchId);
      socket.join(room);
      console.log(` Branch ${room} joined via socket ${socket.id}`);
      socket.emit("joinedBranch", { room });
    });

    socket.on("joinDeliveryBoy", (deliveryBoyId) => {
      const room = `delivery_${deliveryBoyId}`;
      socket.join(room);
      console.log(` Delivery Boy ${room} joined via socket ${socket.id}`);
      socket.emit("joinedDeliveryBoy", { room });
    });

    socket.on("disconnect", () => {
      console.log(" Client disconnected:", socket.id);
    });
  });

  console.log(" Socket.IO initialized");
}

export function getIO() {
  if (!io) throw new Error("Socket.io not initialized");
  return io;
}

// Optional helper: emit event to a branch
export function emitToBranch(branchId, event, payload) {
  if (!io) throw new Error("Socket.io not initialized");
  io.to(String(branchId)).emit(event, payload);
}
