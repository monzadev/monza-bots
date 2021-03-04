const Discord     = require("discord.js")
const ruleChecker = new Discord.Client()
const roleGiver   = new Discord.Client()
const welcomer    = new Discord.Client()

const config = require("./config.json")
server = null // This bot is for just one specific server, so there is the var which will store it

'use strict'

require(ruleChecker.js)
require(roleGiver.js)
require(welcomer.js)

ruleChecker.login(config.ruleChecker.token)
roleGiver.login(config.roleGiver.token)
welcomer.login(config.welcomer.token)
