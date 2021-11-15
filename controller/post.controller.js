const userModel = require('../config/DATABASE');

const createUser = (req,res) =>{
    const name = req.body.name;
    const lastName = req.body.lastname;
    userModel.query(
        "INSERT INTO member (name, lastname) VALUES (?,?)",
        [name, lastName],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("insert data success");
            }
        }
    );
}
module.exports.createUser = createUser;