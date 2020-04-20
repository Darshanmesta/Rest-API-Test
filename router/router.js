const express=require('express')
const appRouter=express.Router()
const control=require('../controller/controller')

appRouter.route('/').get(control.home)
appRouter.route('/').post(control.newProduct)
appRouter.route('/:id').get(control.edit)
appRouter.route('/:id').patch(control.update)
appRouter.route('/:id').delete(control.delete)

module.exports=appRouter;