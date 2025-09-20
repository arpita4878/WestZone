import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API Documentation",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
    ],
  },
 apis: [
    "./Swagger/*Swagger.js" 
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
