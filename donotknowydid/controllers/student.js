const Student = require('../models/student.js')

exports.createStudent = (req,res)=>{
    const {
        studentName,
        studentAge,
        studentId } = req.body
    if(!studentName ||!studentAge || !studentId){
        return res.status(400).json({error:"all fileds are required"})
    }
    Student.findOne({studentId:req.body.studentId}).then((stud) => {
        if(stud) return res.status(400).json({error:"user already exists"})
        const newStudent = new Student({
            studentName:studentName,
            studentAge:studentAge,
            studentId:studentId 
        })
        newStudent.save().then(data=>{
            return res.status(200).json({message:"sucessfully created new student",data})
        }).catch(err=>{
            return res.status(401).json({error:err.message})
        }) 
    }).catch((err) =>{return res.status(500).json(err.message)})
}


exports.getAllStudents = (req,res)=>{
    Student.find({}).exec((error,stud)=>{
        if(error)return res.status(404).json({error});
        if(stud){
            return res.status(200).json({stud})
        }
    })
}

exports.getById = (req,res)=>{
    const id = req.params.id
    Student.findById({_id:id}).exec((error,stud)=>{
        if(error)return res.status(404).json({error});
        if(stud){
            return res.status(200).json({stud})
        }
    })
}