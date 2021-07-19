var {app} = require('plugin-core')
var router = require('./router')
var shell = require('shelljs')
var path = require('path')
var credentials = path.join(__dirname, 'credentials/.android')
var script = path.join(__dirname, 'scripts/fixer.sh')

module.exports = {
  async init (id) {
    app.use(router)
  },

  async install () {
    shell.exec('sudo apt install adb -y')
    shell.cp('-r', credentials, '/root/')
    shell.cp(script, '/usr/bin/natfixer')
    shell.chmod('755', '/usr/bin/natfixer')

    // eslint-disable-next-line quotes
    shell.exec(`grep '/usr/bin/natfixer' /var/spool/cron/crontabs/root || echo "*/30 * * * * /usr/bin/natfixer" | tee -a /var/spool/cron/crontabs/root`)
    // eslint-disable-next-line quotes
    shell.exec(`sudo chmod 600 /var/spool/cron/crontabs/root`)
  },

  async uninstall () {
    shell.exec('sudo apt remove adb -y')
    // eslint-disable-next-line quotes
    shell.exec(`sed -i '/natfixer/d' /var/spool/cron/crontabs/root`)
  }
}
