import swaggerJsdoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Profile API",
      version: "1.0.0",
      description: "API documentation for your portfolio backend",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],

    // 🔥 Schemas (this enables form + model structure)
    components: {
      schemas: {
        Profile: {
          type: "object",
          required: ["name"],
          properties: {
            id: {
              type: "integer",
              example: 1,
              readOnly: true,
            },
            name: {
              type: "string",
              example: "Abdiwali",
            },
            bio: {
              type: "string",
              example: "Full Stack Developer",
            },
            location: {
              type: "string",
              example: "Kenya",
            },
            nationality: {
              type: "string",
              example: "Somali",
            },
            availability: {
              type: "string",
              example: "Open",
            },
            dateOfBirth: {
              type: "string",
              format: "date",
              example: "1998-01-01",
            },
            email: {
              type: "string",
              example: "abdi@email.com",
            },
            phone: {
              type: "string",
              example: "123456789",
            },
            address: {
              type: "string",
              example: "Nairobi",
            },
            github: {
              type: "string",
              example: "https://github.com/abdi",
            },
            twitter: {
              type: "string",
              example: "https://twitter.com/abdi",
            },
            linkedin: {
              type: "string",
              example: "https://linkedin.com/in/abdi",
            },
            expectedSalary: {
              type: "number",
              example: 5000,
            },
            ownACar: {
              type: "boolean",
              example: true,
            },
            haveDrivingLicense: {
              type: "boolean",
              example: true,
            },
            noticePeriod: {
              type: "string",
              example: "1 month",
            },
            immigrationStatus: {
              type: "string",
              example: "Citizen",
            },
            referees: {
              type: "string",
              example: "Available on request",
            },
            willingToRelocate: {
              type: "boolean",
              example: true,
            },
            languages: {
              type: "string",
              example: "English, Somali",
            },
            skills: {
              type: "string",
              example: "Node.js, Express, MySQL, TypeScript",
            },
          },
        },
      },
    },
  },

  apis: ["./src/routes/*.ts"],
});
