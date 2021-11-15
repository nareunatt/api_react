const userModel = require('../config/DATABASE');

const updateUser = (req,res) =>{
    const id = req.params.id;
    const name = req.body.name;
    const lastName = req.body.lastname;
    userModel.query(
        "UPDATE member SET name =?,lastname=? WHERE id =?",
        [name, lastName,id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Update data success");
            }
        }
    );
}
module.exports.updateUser = updateUser;