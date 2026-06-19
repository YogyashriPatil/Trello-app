// username password
// organization
// /boards
// issues
import express from "express";
const USER_ID=1;
const USERS=[
    {
        id:1,
        username:"admin",
        password:"admin"
    },
    {
        id:2,
        username:'yogi',
        password:'yogi'
    }
];
const ORGANIZATIONS=[{
    id:1,
    title:"org1",
    description:"organization 1",
    admin:1,
    members:[2]
},
    {
        id:2,
        title:"org2",
        description:"organization 2",
        admin:2,
        members:[1]
    }
]
const BOARDS=[{
    id:1,
    title:"board1",
    organizationId:1
}]
const ISSUES=[{
    id:1,
    title:"Add dark mode",
    boardId:1
},{
    id:2,
    title:"Add light mode",
    boardis:1
}]

const app=express();

app.post("/signup",(req,res) => {
    const username=req.body.username;
    const password=req.body.password;

    const userExists = USERS.find(u=> u.username === username)
    if(userExists){
        res.status(411).json({
            message:"user with the "
        })
    }
})
app.post("/signin",(req,res) => {
    
})
app.post("/organization",(req,res) => {
    
})
app.post("/add-member-to-organization",(req,res) => {
    
})
app.post("/board",(req,res) => {
    
})
app.post("/issue",(req,res) => {
    
})
app.get("/boards",(req,res)=>{

})
app.get("/issue",(req,res)=>{

})
app.get("/members",(req,res)=>{

})
app.put("/issues",(req,res)=>{

})
app.delete("/members",(req,res) => {

})
app.listen(3000)