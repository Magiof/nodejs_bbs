const express = require("express");
const connect = require("./schemas");
const app = express();
const port = 3000;

connect()

const articleRouter = require("./routes/articles");

const requestMiddlewawre = (req, res, next) => {
    console.log("Request URL:", req.originalUrl, " - ", new Date());
    next();
};
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
})

app.use(express.json()) //바디로 들어오는 json데이터를 사용할 수 있게해주는 미들웨어
app.use(express.urlencoded({ extended: true })); 
app.use(requestMiddlewawre);

app.use("/blog", [articleRouter]);


app.listen(port,() =>{
    console.log(port, "포트로 서버가 켜졌어요!");
});