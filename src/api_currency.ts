import express, { Request, Response } from 'express';


const app = express();
app.use(express.json())

app.get("/currencies", async function(request: Request, response: Response){
    response.json({usd:3})
    //response.json({usd:3 + Math.random()})
});

app.listen(3001);