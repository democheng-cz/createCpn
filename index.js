#!/usr/bin/env node
const program = require("commander")
const { createCommands } = require("./lib/core/create")

program.version(require("./package.json").version)

program
	.command("test")
	.description("this is a test commander")
	.argument("<string>", "this is a argument")
	.option("--first, display just the first substring")
	.action((str, option) => {
		console.log(str)
	})
// program.command("--help")
createCommands()

program.parse()

// 淘宝镜像源 : npm config set registry http://registry.npm.taobao.org/

//官方源 :npm config set registry https://registry.npmjs.org/
