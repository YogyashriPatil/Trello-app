// username password
// organization
// /boards
// issues
import express from "express";
import jwt from "jsonwebtoken";
import { authMiddleware } from "./middleware.js";
const USER_ID=1;
const ORGANIZATION_ID=1;
const BOARD_ID=1;
const ISSUE_ID=1;

const USERS=[];
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
app.use(express.json());
app.post("/signup",(req,res) => {
    const username=req.body.username;
    const password=req.body.password;

    const userExists = USERS.find(u=> u.username === username)
    if(userExists){
        res.status(411).json({
            message:"user with the name already register "
        })
        return;
    }
    USERS.push({
        username,
        password,
        id:USERS.length+1
    })
    res.jsonp({
        message:"user created successfully"
    })
})
app.post("/signin",(req,res) => {
    const username=req.body.username;
    const password=req.body.password;

    const userExists = USERS.find(u=> u.username === username && u.password === password)
    if(!userExists){
        res.status(411).json({
            message:"user with the name and password not found"
        })
        return;
    }
    const token= jwt.sign({id:userExists.id},"secret")
    res.jsonp({
        token
    })
})

// Authencated route- middleware
app.post("/organization",authMiddleware,(req,res) => {
    const userId=req.id;
    ORGANIZATIONS.push({
        id:ORGANIZATIONS.length+1,
        title:req.body.title,
        description:req.body.description,
        admin:userId,
        members:[]
    })
    res.jsonp({
        message:"organization created successfully"
        id:ORGANIZATIONS.length-1;
    })
})
app.post("/add-member-to-organization",authMiddleware,(req,res) => {
    const userId=req.id;
    const organizationId=req.body.organizationId;
    const memberId=req.body.memberId;
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
app.listen(3000,(req,res) => {
    console.log("server is running on port 3000")
})