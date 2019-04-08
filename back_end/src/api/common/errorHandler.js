const _ = require('lodash')
//Middleware para tratamento de erros
module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors){
        const errors = parseErros(bundle.errors)
        res.status(500).json({errors})
    }else{
        next()
    }
}

const parseErros = (nodeRestfulErrors) => {
    const errors = []
    _.forIn (nodeRestfulErrors, error => errors.push(error.message))
    return errors 
}