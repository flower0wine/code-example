const axios = require('axios');

// 这是创建的应用程序 ID，该 clientId 已经失效，请更换为你的应用程序 ID
const clientId = "cdbdc26e987d1cf6c057";
// 这是创建的应用程序的密钥
const clientSecret = "8f928bdd4c8cef962aa3b8387ee50d950be4cde3";

const express = require('express');
const app = express();

app.get("/login/github", async (req, res) => {
    // code 是授权码
    const code = req.query.code;
    console.log('authorization code:', code);

    // 获取访问令牌
    const tokenResponse = await axios({
        method: 'post',
        url: 'https://github.com/login/oauth/access_token?' +
            `client_id=${clientId}&` +
            `client_secret=${clientSecret}&` +
            `code=${code}`,
        headers: {
            accept: 'application/json'
        }
    });

    const accessToken = tokenResponse.data.access_token;
    console.log(`access token: ${accessToken}`);

    // 获取用户数据
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

    // 这里重定向前端的首页，前端项目的端口为多少就填多少
    res.redirect(`http://127.0.0.1:5173/?name=${name}`);
});

// 端口如果冲突请修改 9090 为其他端口
app.listen(9090, () => {
    console.log("listening on http://localhost:9090");
});
