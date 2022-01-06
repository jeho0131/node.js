const morgan = require('morgan');
const url = require('url');
const uuidAPIKey = require('uuid-apikey');

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const key = {
    apiKey: 'JX3WJS6-M2XMBSS-QHH7DHY-QY1M171',
    uuid: '9747c964-a0bb-45e7-bc62-76c7bf83409c'
}

let boardList = [];
let numOfBoard = 0;

app.get('/', (req, res) => {
    res.send('This is api.js');
});

app.get('/board', (req, res) => {
    res.send(boardList);
});

app.post('/board', (req, res) => {
    const board = {
        "id" : ++numOfBoard,
        "user_id": req.body.user_id,
        "date" : new Date(),
        "title" : req.body.content
    };
    boardList.push(board);
    res.redirect('/board');
});

app.put('/board/:id', (req,res) => {
    const findItem = boardList.find((item) => {
        return item.id == +req.params.id
    });

    const idx = boardList.indexOf(findItem);
    boardList.splice(idx, 1);

    const board = {
        "id" : +req.params.id,
        "user_id" : req.params.user_id,
        "date" : new Date(),
        "title" : req.body.title,
        "content" : req.body.content
    };

    boardList.push(board);
    res.redirect('/board')
});

app.delete('/board/:id', (req,res) => {
    const findItem = boardList.find((item) => {
        return item.id == +req.params.id
    });
    const idx = boardList.indexOf(findItem);
    boardList.splice(idx, 1);

    res.redirect('/board');
});

app.get('/board/:apikey/:type', (req,res) => {
    let {type,apikey} = req.params;
    const queryData = url.parse(req.url, true).query;

    if(uuidAPIKey.isAPIKey(apikey) && uuidAPIKey.check(apikey, key.uuid)) {
        if (type === 'search') {
            const keyword = queryData.keyword;
            const result = boardList.filter((e) => {
                return e.title.includes(keyword)
            })
            res.send(result);
        }
        else if (type === 'user') {
            const user_id = queryData.user_id;
            const result = boardList.filter((e) => {
                return e.user_id === user_id;
            });
            res.send(result);
        }
        else {
            res.send('Wrong URL');
        }
    } else {
        res.send('Wrong API Key');
    }
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중..')
});