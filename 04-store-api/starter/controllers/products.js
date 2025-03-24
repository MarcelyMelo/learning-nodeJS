const Product = require('../models/product')

const getAllProductsStatic = async(req, res) =>{

    const products = await Product.find({})
    res.status(200).json({ products })
}
const getAllProducts = async(req, res) =>{
    const { featured, company, name, sort, fields, numericFilters } = req.query
    const queryObject = {}
    if (featured){
        queryObject.featured = featured === 'true'? true : false
    }
    if (company){
        queryObject.company = company
    }
    if (name){
        queryObject.name = { $regex:name, $options:'i'}
    }

    if(numericFilters){
        const operatorMap = {
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte',
        }
        const regEx = /\b(<|>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(regEx, (match)=>`-${operatorMap[match]}-`)
        
        const options = ['price', 'rating']
        filters = filters.split(',').forEach((element) => {
            const [field, operator, value] = element.split('-')
            if (options.includes(field)){
                queryObject[field] = {[operator]:Number(value)}
            }
        });
        console.log(filters);
    }
    console.log(queryObject);
    






    let result = Product.find(queryObject)
    if (sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
    else{
        result = result.sort('createAt')
    }
    
    if (fields){
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }
    actualPage = Number(req.query.page) || 1
    actualLimit = Number(req.query.limit) || 10
    const skip = (actualPage - 1) * actualLimit 
    // ex: 23 itens
    // 4 paginas com 7 itens por pagina
    // 7 7 7 2

    result = result.skip(skip).limit(actualLimit)

    const products = await result
    res.status(200).json({nbHits:products.length, products})
}

  
module.exports = {
    getAllProducts,
    getAllProductsStatic,
}