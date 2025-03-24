require('dotenv').config()

const { json } = require('express')
const conectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async()=>{
    try {
        await conectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)

        console.log('Sucess!!');
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}

start()