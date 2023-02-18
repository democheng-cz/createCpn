const program = require("commander")

const { addCpnAction, addTsCpnAction } = require("./actions")
exports.createCommands = () => {
	// 添加组件
	program
		.command("addCpn <componentName> ")
		.description("create react component and style")
		.argument("[dest]")
		.action((componentName, dest) => {
			addCpnAction(componentName, dest || "src/components")
		})

	program
		.command("addTsCpn <componentName> ")
		.description("create react Ts component and style")
		.argument("[dest]")
		.action((componentName, dest) => {
			addTsCpnAction(componentName, dest || "src/components")
		})
}
