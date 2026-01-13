const swaggerJsDoc= require("swagger-jsdoc");

const PORT= process.env.PORT||800;

const options ={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Inventory API",
            version:"1.0.0",
            description:"API documentation for Inventory Backend"
        },
        servers:[
            {
                url:`http://localhost:${PORT}`
            }
        ],
        components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }

    },
    apis: ["./routes/*.js"]
};

module.exports=swaggerJsDoc(options);