import mysql from 'mysql'

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'dbpass',
    database : 'test_db',
    port     : '3309'
});

function makeQuery(sql) {
    return new Promise(function(resolve, reject){
        connection.query(
            sql, 
            function(err, rows){                                                
                if(rows === undefined){
                    reject(new Error("Error rows is undefined"));
                }else{
                    resolve(rows);
                }
            }
        )}
    )
}


export default makeQuery;