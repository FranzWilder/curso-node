
import express  from "express";
import  fileURLToPath  from 'url';
import dirname from "path"
import hbs from "hbs";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath.fileURLToPath(import.meta.url);
const __dirname = dirname.dirname(__filename);

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static('public'));

app.get('/', (req,res) =>{
    res.render('home',{
        nombre : 'Franz Wilder',
        titulo : 'home'
    });
})

app.get('/elements', (req,res) =>{
    res.render('home',{
        nombre : 'Franz Wilder',
        titulo : 'home'
    });
})

app.get('/generic', (req,res) =>{
    res.render('home',{
        nombre : 'Franz Wilder',
        titulo : 'home'
    });
})


.listen(8081)



