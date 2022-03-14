

const mongoose = reqire ("mongoose")
const express = require ("expresss")

const app = express()

app.use(express.json())

const  connect = ()=>{
    mongoose.connect("mongodb+srv://gurubilli:gurubilli@cluster0.dlpod.mongodb.net/bankDatabase?retryWrites=true&w=majority")
}

const userSchema = new mongoose.Schema({

    firstName :{type:String,required:true},
   middleName : {type:String,required:true},

age : {type:Number,required:true},
 email : {type:String,required:true},
 address : {type:String,required:true},
 gender : {type:String,required:true},

},
{
timeStamps:true,

}
)
const User = mongoose.model("user",userSchema)

const branchSchema = new mongoose.Schema({
     name :{type:string,reuired:true},
     address:{type:string,reuired:true},
     IFSC :{type:string,reuired:true},
     MICR:{type:Number,reuired:true},
},
{
    timeStamps:true
}
)

const BranchDetail = mongoose.model("branch",branchSchema)

const masterschema =new mongoose.Schema({


    balance :{type:Number,required:true},
    
},{
timeStamps:true

})

const MasterAccount = mongoose.model("masteraccountno",masterschema)



const savingsSchema = new mongoose.Schema({
    account_number :{type:Number,required:true},
    balance:{type:Number,required:true},
    intrestRate :{type:Number,required:true},
},
{
    timeStamps:true

})

const SavingsAccount = mongoose.model("savingsaccount",savingsSchema)



const fixedSchema = new mongoose.Schema({
    account_number :{type:Number,required:true},
    balance:{type:Number,required:true},
    intrestRate :{type:Number,required:true},
    startDate :{type:Date,required:true},
    maturityDate:{type:Date,required:true},
},
    {
timeStamps:true
    }
)

const FixedAccount = mongoose.model("fixedaccount",fixedSchema)


app.get("/masteraccountno",function async(req,res){
    try{
    const masteraccount = MasterAccount.find().lean.exec()
    res.send  ({staus:200,masteraccount})
    }catch(err){
        res.send({err})
    }

})

app.post("/savingsaccount",function async(req,res){
    try{
        const savingsaccount  = SavingsAccount.create()
        res.send({staus:201,savingsaccount})
    }catch(err){
        res.send({err})
    }
})



app.post("/fixedaccount",function async(req,res){
    try{
        const fixedaccont  = FixedAccount.create()
        res.send({staus:201,fixedaccont})
    }catch(err){
        res.send({err})
    }
})

app.get(5000,async()=>{
    try{
    console.log("listening me")
    }catch(err){
        console.log(err)
    }
})








