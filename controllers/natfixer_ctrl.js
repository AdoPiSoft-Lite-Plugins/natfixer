var path = require("path")
var core = require('plugin-core')
var util = require("util")
var fs = require("fs")
var read_file = util.promisify(fs.readFile)
var writeFile = util.promisify(fs.writeFile)
var src_script = path.join(__dirname, "../scripts/fixer.sh")
var script = '/usr/bin/natfixer'

exports.getSettings = async (req, res, next) => {
  try{
    var scripts = await read_file(src_script, "utf8")
    res.json({scripts:scripts})
  } catch (e) {
    next(e)
  }
}

exports.updateSettings = async (req, res, next) => {
  try{
    await writeFile(src_script, req.body.scripts)
    var plugin=require("../index.js")
    await plugin.install()
    res.json({})
  } catch (e) {
    next(e)
  }
}
