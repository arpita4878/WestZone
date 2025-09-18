// swagger.js
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce Multi-Branch Admin Panel API",
      version: "1.0.0",
      description: "API documentation for Ecommerce multi-branch admin panel",
    },
    servers: [
      {
        url: "http://192.168.1.19:5000", // 👈 backend ka IP aur port
      },
    ],
    components: {
      schemas: {
        Promotion: {
          type: "object",
          required: ["title", "promotionType", "discountValue", "applyOn"],
          properties: {
            title: {
              type: "string",
              example: "Flat 10% Off",
            },
            description: {
              type: "string",
              example: "Get 10% discount on all orders",
            },
            promotionType: {
              type: "string",
              enum: ["percentage", "fixedAmount", "buyOneGetOne", "specialCoupon"],
              example: "percentage",
            },
            discountValue: {
              type: "number",
              example: 10,
            },
            couponCode: {
              type: "string",
              example: "NEWYEAR2025",
              nullable: true,
            },
            applyOn: {
              type: "string",
              enum: ["allBranches", "specificBranches", "products", "categories"],
              example: "allBranches",
            },
            branches: {
              type: "array",
              items: { type: "string" },
              example: [],
            },
            products: {
              type: "array",
              items: { type: "string" },
              example: [],
            },
            categories: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  categoryId: { type: "string", example: "64d9e8f2c1a23b9f12ab4567" },
                },
              },
              example: [],
            },
            startDate: {
              type: "string",
              format: "date-time",
              example: "2025-09-15T00:00:00.000Z",
            },
            endDate: {
              type: "string",
              format: "date-time",
              example: "2025-09-30T23:59:59.000Z",
            },
            status: {
              type: "string",
              enum: ["active", "inactive"],
              default: "active",
              example: "active",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
 
};

const swaggerSpec = swaggerJsdoc(options);

export default (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
