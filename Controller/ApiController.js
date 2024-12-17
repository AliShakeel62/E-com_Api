const Apimodel = require("../Model/Apimodel")
const ApiController = {
    getbyid: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await Apimodel.findById(id);
            res.status(200).send({
                isSuccessful: true, 
                data : result , 
                message : "data id is Successful come"
            });
        }catch(error){
            res.status(500).send({
                isSuccessful:false,
              data:null,
              message:`data not found ${error}`
        })
    } 
},}
module.exports = ApiController ; 