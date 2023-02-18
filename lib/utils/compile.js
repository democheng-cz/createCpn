const path = require("path")

const fs = require("fs")
const ejs = require("ejs")

function compile(templateName, componentName) {
	return new Promise((resolve, reject) => {
		let nameArr = componentName.split("-")
		nameArr = nameArr.map(s => {
			let firstS = s.charAt(0).toUpperCase()
			let sArr = s.split("")
			sArr.splice(0, 1, firstS)
			return sArr.join("")
		})

		let data = {
			data: {
				name: nameArr.join(""),
				styleName: nameArr.join("") + "Wrapper",
			},
		}
		const templatePosition = `../templates/${templateName}.ejs`
		let templatePath = path.resolve(__dirname, templatePosition)

		fs.readFile(templatePath, { encoding: "utf8" }, (err, value) => {
			if (err) reject(err)
			let templateFn = ejs.compile(value)
			let template = templateFn(data)
			resolve(template)
		})
	})
}

exports.compile = compile
