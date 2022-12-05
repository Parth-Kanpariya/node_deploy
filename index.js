import express from 'express';

const app = express();
const port = 9000;

app.get("/",(req, resp)=>{
    resp.send("Hello dear");
})

app.listen(port, ()=>{
    console.log("starting");
});