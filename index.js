var mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ryanair',
  password : 'nmWsfm!q0_UtrD[c',
  database : 'ryanair'
});

const prompt = require('prompt-sync')({sigint: true});

let WhatToDo = prompt("What do you want to do   | 1=SELECT | 2=INSERT | 3=UPDATE | 4=DELETE | : ");

async function Select(what){
    connection.query(`SELECT ${what} FROM ${where}`, function(error, results, fields) 
    { 
        if (error) throw error; 
        console.log('The solution is: ', results);s
    });
}

async function Insert(where, values){
    connection.query(`INSERT INTO users (${where}) VALUES ("${values}")`, function(error, results, fields) 
    { 
        if (error) throw error; 
        console.log('The solution is: ', results);
    });
}

async function Update(values, where){
    connection.query(`UPDATE users SET ${values} WHERE ${where})` ,function(error, results, fields)
    {
        if (error) throw error; 
        console.log('The solution is: ', results);
    })
}

async function Delete(what){
    connection.query(`DELETE FROM users WHERE ${what}` ,function(error, results, fields) 
    { 
        if (error) throw error; 
        console.log('The solution is: ', results);
    });
}



switch(parseInt(WhatToDo))
{
case(1):
    var where = prompt("Which table?");
    var what = prompt("What column to SELECT: ");
    if(what == '')
    {
        what = '*';
    }
    Select(what, where);
break;

case(2):
    var where = prompt("which COLUMN do you want to INSERT INTO : ");
    var values = prompt("what data do you want to INSERT : ")
    Insert(where, values);
break;

case(3):
    var values = prompt("What VALUES do you want UPDATE : ");
    var where = prompt("What do you want to be AFFECTED : ")
    Update(WhatToDo);
break;

case(4):
    var what = prompt("What do you want to DELETE : ");
    Delete(what);
break;

}