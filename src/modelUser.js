const mongoose = require('mongoose');

// const userSchema =  new mongoose.Schema({
//     order_id: {
//         type: mongoose.Schema.Types.ObjectId, ref: "Makanan"
//     },
//     pembeli: {
//         type: String
//     },
//     orderdetails: {
//         type: String
//     },

//     // pembeli: String,
//     // order_id:{type: mongoose.Schema.Types.ObjectId, ref: `${makanan}`}
// })

// module.exports = mongoose.model('User', userSchema);

const userSchema =  new mongoose.Schema({
    order_id: {
        type: String
    },
    pembeli: {
        type: String
    },
    orderdetails: {
        type: String
    },

    // pembeli: String,
    makanans:{type: mongoose.Schema.Types.ObjectId, ref: "Makanan"}
})

const useSchema = new mongoose.Schema({
  nama: String,
  users:{type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

module.exports = mongoose.model('User', userSchema); 
module.exports = mongoose.model('Makanan', useSchema);