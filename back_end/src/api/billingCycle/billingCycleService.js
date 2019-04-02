const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get','post','put','delete'])

BillingCycle.updateOptions({new:true, runValidators:true})
//Chama o middleware errorhandler
BillingCycle.after('post', errorHandler).after('put', errorHandler)



BillingCycle.route('count', (req, res, next)=>{
    BillingCycle.count((error, value)=> {
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value}) 
        }
    })
})
//Agrupamento de crédito e débitos
BillingCycle.route('summary', (req, res, next) => {
  
	BillingCycle.aggregate([
        {
            $project:{
            credit: {$sum : "$credits.value"},
            debt: {$sum : "$debts.value"}
        }
        },
		{
        $group: {
            _id: null,
            credit: {
                $sum: "$credit"
            },
            debt: {
                $sum:"$debt"
            }
        }   
    },
	{
        $project:{
            _id:0, //Não traz o id
            credit: 1, // traz crédito
            debt: 1, // traz débito 
        }
    }
    ], function (error, result) {
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json(result[0] || {credit: 0, debt: 0})
        }
    });
})
module.exports = BillingCycle