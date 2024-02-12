const axios = require('axios');

const clientID = "cdbdc26e987d1cf6c058";
const clientSecret = "8f928bdd4c8cef961aa3b8387ee50d950be4cde3";

const express = require('express');
const app = express();

app.use((req, res, next) => {
    next();
});

app.get("/login/github", async (req, res) => {
    const requestToken = req.query.code;
    console.log('authorization code:', requestToken);

    const tokenResponse = await axios({
        method: 'post',
        url: 'https://github.com/login/oauth/access_token?' +
            `client_id=${clientID}&` +
            `client_secret=${clientSecret}&` +
            `code=${requestToken}`,
        headers: {
            accept: 'application/json'
        }
    });

    const accessToken = tokenResponse.data.access_token;
    console.log(`access token: ${accessToken}`);

    const result = await axios({
        method: 'get',
        url: `https://api.github.com/user`,
        headers: {
            accept: 'application/json',
            Authorization: `token ${accessToken}`
        }
    });
    console.log(result.data);
    const name = result.data.name;

    res.redirect(`http://127.0.0.1:5173/?name=${name}`);
});

app.listen(9091, () => {
    console.log("listening on http://localhost:9091");
});