var ContactModel = require('../services').Contact;

exports.list = async (req, res, next) => {
    let query = {}
    query.pageNum = Number(req.query.page) || 1
    query.pageSize = Number(req.query.num) || 10
    const ret = await ContactModel.queryAll(query)
    let total = await ContactModel.queryTotal()

    total = total[0][0].totalCount;

    res.json({
        status: 'success',
        data: ret,
        total
    })
}

exports.create = async (req, res, next) => {
    let params = req.body

    ContactModel.createContact(params)

    res.json({
        status: 'success',
        data: params,
    })
}

exports.deleteById = async (req, res, next) => {
    let params = req.body

    ContactModel.delContactById(params)

    res.json({
        status: 'success',
        data: params,
    })
}