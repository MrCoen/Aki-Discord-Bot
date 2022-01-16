const { readdirSync } = require("fs")
const ascii = require("ascii-table")
const table = new ascii().setHeading("Command", "Load Status")

module.exports = (client) => {
	readdirSync("./commands/").forEach( dir =>{
		const commands = readdirSync(`./commands/${dir}/`).filter(f => f.endsWith(".js"));


	})
}