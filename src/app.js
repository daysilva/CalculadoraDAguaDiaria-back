import  Express  from 'express';
import cors from 'cors'
import router from './routers.js';

const app = Express()

app.use(cors())
app.use(Express.json())
app.use(router)

app.listen(3000, () => {
    console.log("servidor rodando...");
})

// ESTA E A BRANCH DEVELOP