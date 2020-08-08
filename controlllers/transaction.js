const Transaction = require('../models/transaction');
//@description  Get all the transactions
//@route  /api/v1/transactions
//@access  Public


exports.getTransactions = async (req, res, next) =>{
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: 'Server Error'
        })
    }
};

//@description  Post all the transactions
//@route  /api/v1/transactions
//@access  Public


exports.addTransactions = async (req, res, next) =>{
    try {
        const {text, amount} = req.body;
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (error) {
        if(error.name ==='ValidationError'){
            const message = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success:false,
                error:message
            });
        }
        else{
            return res.status(500).json({
                success:false,
                error: 'Server Error'
            })
        }
        console.log(error);
        
    }
};

//@description  delete the transactions
//@route  /api/v1/transactions
//@access  Public


exports.deleteTransactions = async (req, res, next) =>{
    try {
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction){
            return res.status(404).json({
                success:false,
                error:"No transaction found"
            });

        
        }

        await transaction.remove();
        return res.status(200).json(
            {
                success: true,
                data:{}
            }
        )
    } catch (error) {
        return res.status(500).json({
            success:false,
            error: 'Server Error'
        })
    }
};