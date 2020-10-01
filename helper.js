
let database = [];



class helper{

    async savebook(req,res){
        let newId;
        if(database.length===0)
        newId = 1;
        else
        newId = database[database.length - 1].id +1;

        // return database.length
        let newPost = {
            id:newId,
            book:req.body.book,
            createdDate:new Date,
            updatedDate:new Date
        }
     await   database.push(newPost)
        // res.send(newPost)
        return res.status(201).json(`${req.body.book} has been added to the book database`)

    }
    async getbooks(req,res){
        if(database.length===0)
        return   res.status(202).json('there is no book saved')
        else
        return res.status(202).json(database)
    }
    async getbook(req,res){
        if(database.length===0)
        return   res.status(202).json('there is no book saved')
      let exist =   database.find(eachData=>eachData.id==req.params.id)
      if(!exist){
        return res.status(404).json('book with that id does not exist')
      }
           return res.status(404).json(exist)
    }
    async editbook(req,res){
        if(database.length===0)
        return   res.status(202).json('there is no book saved')
        // check if it exist 
      let exist =   database.find(eachData=>eachData.id==req.params.id);
      if(!exist){
        return res.status(404).json('book with that id does not exist')
      }
      let id =   database.findIndex(eachData=>eachData.id==req.params.id)
    database[id]={
            id:exist.id,
            book:req.body.book,
            createdDate:exist.createdDate,
            updatedDate:new Date
    }
      return   res.status(202).json(`book with id ${req.params.id} has been updated succesfully`)



    }
    async deletebook(req,res){
        if(database.length===0)
        return   res.status(202).json('there is no book saved')
      let exist =   database.find(eachData=>eachData.id==req.params.id)
      if(!exist){
        return res.status(404).json('book with that id does not exist')
      }
      let newDatabase =   database.filter(eachData=>eachData.id!=req.params.id)
    //   console.log(id)
      database = newDatabase;
      return res.status(201).json(`book has been successfully deleted`)

    }
}

module.exports = new helper();