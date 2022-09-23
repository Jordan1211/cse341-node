const express = require('express')
const mongodb = require('./database/db');
const strangeRoute = require("./routes/professional");
const bodyparser = require('body-parser');

const port = process.env.PORT || 8080
const app = express()

// app.get("/professional", (req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.json({professionalName: "Dr. Strange", 
//     base64Image: "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
//     nameLink: {
//         firstName: "Stephen",
//         url: "https://marvel.fandom.com/wiki/Stephen_Strange_(Earth-616)?so=search",
//     },
//     primaryDescription: "<br>Primary desc placeholder",
//     linkTitleText: "Link Title Text goes here",
//     linkedInLink: {
//         text: "Link to linkedin",
//         link: "https://www.linkedin.com/",
//     },
//     githubLink: {
//         text: "Link to GitHub",
//         link: "https://github.com/"
//     },
//     workDescription1: "Master of the Mystical Arts",
//     workDescription2: "Sorcerer Supreme"
    
//     });
    
// });



app
  .use(bodyparser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/professional", strangeRoute);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
