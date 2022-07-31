const User = require('./modelUser');

exports.update = async (req, res) => {
    const { orderdetails } = req.body

    const update = new User({
        orderdetails: orderdetails
    })
    update.save()

    return res.status(201).json({
        message: 'berhasil',
    })
}