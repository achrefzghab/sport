const express = require("express"); // import module express
const bodyParser = require("body-parser"); // import module body parser
const mongoose = require("mongoose"); // import module mongooseDB
mongoose.connect('mongodb://127.0.0.1:27017/sportDB'); // connect Express with DB
const app = express(); // création app BE app
// import bcrypt module
const bcrypt = require('bcrypt');
// import jwt module
const jwt = require('jsonwebtoken');
// import session module
const session = require('express-session');

//import axios module
const axios = require('axios');
//import multer module
const multer = require('multer');
//import path module
const path = require('path');





// bodyParser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Security configuration 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );

    next();
});

//session configuration
const secretKey = 'croco24';
app.use(session({
    secret: secretKey,
}));
// shortCutPath ==backend/uploads
app.use('/shortCutPath', express.static(path.join('backend/uploads')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    if (isValid) {
    cb(null, 'backend/uploads')
    }
    },
    filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
    extension;
    cb(null, imgName);
    }
    });






// models Importation 
const Match = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const User = require("./models/user");
//here signup
app.post("/api/users/signup",multer({ storage: storage }).single('img'), (req, res) => {
    console.log("here into BL:sigup", req.body);
    bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
        console.log("here crypted pwd", cryptedPwd);
        req.body.pwd = cryptedPwd;
        req.body.avatar=`http://localhost:3000/shortCutPath/${req.file.filename}`;
        const user = new User(req.body);
        user.save();
        res.json({ message: "signup with succes" });
    });
});




//here into BL:login
app.post("/api/users/login", (req, res) => {
    console.log("here into BL:login", req.body);
    User.findOne({ email: req.body.email }).then((doc) => {
        console.log("here doc", doc);
        if (!doc) {
            res.json({ message: "check your Email" })

        } else {
            //doc exist
            bcrypt.compare(req.body.pwd, doc.pwd).then((pwdResult) => {
                console.log("here pwdResult", pwdResult)
                if (!pwdResult) {
                    res.json({ message: "check your pwd" })

                } else {
                    let userToSend = {
                        role: doc.role,
                        firstName: doc.firstName,
                        lastName: doc.lastName,
                        tel: doc.tel,
                        avatar:doc.avatar
                    };
                    //Encoder userToSend
                    const token = jwt.sign(userToSend, secretKey, {
                        expiresIn:
                            '1h'
                    });
                    res.json({ message: "Welcome", user: token })

                }
            })

        }
    })
})


// here traitment logique ADD Matche
app.post("/matches", (req, res) => {
    console.log("rani wsolt");
    let matchObj = new Match(req.body);
    matchObj.save();
    res.json({ message: 'match added' })

});

//here traitment logique GET All Matches
app.get("/matches", (req, res) => {
    Match.find().then((docs) => {
        console.log('here Docs', docs);
        res.json({ matches: docs })
    });
});

//here traitment logique Get match  by Id 
app.get("/matches/:id", (req, res) => {
    Match.findById(req.params.id).then((doc) => {
        console.log('here doc', doc);
        res.json({ match: doc })

    });

});

//here traitment logique delete matches
app.delete("/matches/:id", (req, res) => {
    console.log(('deleted', req.params.id));
    Match.deleteOne({ _id: req.params.id }).then((deleteResponse) => {
        console.log('here response after delete', deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: "success" })
        } else {
            res.json({ message: "Error" })
        }
    })
});

//here traitment logique update matche
app.put("/matches", (req, res) => {
    console.log("here into Buisniss Logique : edit match");
    Match.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
        console.log('here response', updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ message: "Edited" })
        } else {
            res.json({ message: "Error" })
        }
    })
    res.json({ message: 'Edited successfully' })
});

// here traitment logique add Player
app.post("/api/Players", (req, res) => {
    Team.findById(req.body.tId).then((team) => {
        if (!team) {
            res.json({ msg: "team not found" });
        } else {
            let player = new Player({
                name: req.body.name,
                age: req.body.age,
                nbr: req.body.nbr,
                position: req.body.position,
                teamId: team._id
            });
            player.save((err, doc) => {
                if (err) {
                    res.json({ msg: "player not saved" })
                } else {
                    team.playersId.push(doc);
                    team.save();
                    res.json({ msg: "player saved with success" })
                }
            });
        }
    })

});
//here traitment logique GET All Players
app.get("/api/Players", (req, res) => {
    Player.find().then((docs) => {
        console.log('here Docs', docs);
        res.json({ players: docs })
    });
});

//here traitment logique get player by Id 
app.get("/api/players/:id", (req, res) => {
    let player = players.find((item) => item.id == req.params.id)
    res.json({ player: player })
});

//here traitment logique delete Players
app.delete("/api/players/:id", (req, res) => {
    Match.deleteOne({ _id: req.params.id }).then((deleteResponse) => {
        console.log('here response after delete', deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: "success" })
        } else {
            res.json({ message: "Error" })
        }
    })


});
// here traitment logique ADD Team
app.post("/api/teams", (req, res) => {
    let teamObj = new Team(req.body);
    teamObj.save();
    res.json({ message: 'team added' })
});
// her

//here traitment logique GET All Teams
app.get("/api/teams", (req, res) => {
    Team.find().then((docs) => {
        res.json({ team: docs })
    })

});

//here traitment logique by Id 
app.get("/api/team/:id", (req, res) => {
    let match = teams.find((item) => item.id == req.params.id)
    res.json({ team: team })
});

//here traitment logique delete matches
app.delete("/api/teams/:id", (req, res) => {
    let pos = teams.findIndex((item) => item.id == req.params.id)
    teams.splice(pos, 1);
    res.json({ message: 'teams deleted' })
});

//here traitment logique update teams
app.put("teams", (req, res) => { });
// here add users 
app.post("/users", (req, res) => {
    console.log("rani wsolt", req.body);
    bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
        console.log('crypted pwd', cryptedPwd);
        req.body.pwd = cryptedPwd;
        let userObj = new User(req.body);
        userObj.save();
        res.json({ message: 'user added' })
    })


});

//Here into BL :Get All Teams
app.get("/api/teamsPlayers", (req, res) => {
    console.log("Here into BL :Get all Teams with Players");
    Team.find().populate("playersId").then((teamDocs) => {
        console.log("Here team docs", teamDocs);
        res.json({ teams: teamDocs })
    })
})

app.get("/api/Playersteam", (req, res) => {
    console.log("Here into BL :Get all Player with Teams");
    Player.find().populate("teamId").then((playerDocs) => {
        console.log("Here player docs", playerDocs);
        res.json({ players: playerDocs })
    })
})


//Here into bl :search weather
app.post("/api/weather", (req, res) => {
    console.log('here obj', req.body);
    let key = "60ac1eff263351c872cdbd5e50622160";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`
    axios.get(apiUrl).then(
        (apiResponse) => {
            console.log('here response from API', apiResponse.data);
            let weatherResponse = {
                temp: apiResponse.data.main.temp,
                humidity: apiResponse.data.main.humidity,
                pressure: apiResponse.data.main.pressure,
                speed: apiResponse.data.wind.speed,
                description: apiResponse.data.weather[0].description,
            }
            res.json({ apiRes: weatherResponse })
        })
});

module.exports = app; // make app exportable