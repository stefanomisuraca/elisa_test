import makeQuery from "../db/index.js";


async function userGet(req, res){
    let sql = "SELECT * FROM users";
    let result = await makeQuery(sql);
    console.log(result);
    res.send(JSON.stringify(result));
}

export default userGet;