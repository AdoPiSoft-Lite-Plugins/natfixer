var core = require('plugin-core')
var {router, middlewares} = core
var {express, bodyParser} = middlewares
var natfixer_ctrl = require('./controllers/natfixer_ctrl.js')

router.get('/natfixer-config', natfixer_ctrl.getSettings)
router.post('/natfixer-config', express.urlencoded({extended: true}), bodyParser.json(), core.middlewares.auth, natfixer_ctrl.updateSettings)
module.exports = router
