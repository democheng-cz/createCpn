const path = require("path")
const fs = require("fs")
const { compile } = require("../utils/compile")

const addCpnAction = async (componentName, dest) => {
	// console.log(process.cwd())

	// 获取当前执行index文件时所处的路径
	let __dirname = process.cwd()
	// 读取jsx文件模板
	const reactTemplate = await compile("react-component", componentName)

	// 读取styled模板
	const styledTemplate = await compile("styled", componentName)

	// 文件夹路径
	let filePath = path.resolve(__dirname, `${dest}/${componentName}`)
	// jsx文件路径
	// let targetPath = path.resolve(__dirname, `${filePath}/${componentName}.jsx`)
	let targetPath = path.resolve(__dirname, `${filePath}/index.jsx`)
	// styled文件路径
	let stylePath = path.resolve(__dirname, `${filePath}/style.js`)

	// 判断该文件夹是否存在
	if (fs.existsSync(filePath)) {
		throw new Error("file has existed")
	}

	// 文件夹不存在, 存在新的文件夹
	fs.mkdir(filePath, { recursive: true }, e => {
		if (e) throw e

		// 创建好新文件夹, 将文件写入
		fs.writeFile(targetPath, reactTemplate, err => {
			if (err) throw err
			else console.log("写入成功~")
		})
		fs.writeFile(stylePath, styledTemplate, err => {
			if (err) throw err
			else console.log("写入成功~")
		})
	})
}

const addTsCpnAction = async (componentName, dest) => {
	// console.log(process.cwd())

	// 获取当前执行index文件时所处的路径
	let __dirname = process.cwd()
	// 读取jsx文件模板
	const reactTemplate = await compile("react-component", componentName)

	// 读取styled模板
	const styledTemplate = await compile("styled", componentName)

	// 文件夹路径
	let filePath = path.resolve(__dirname, `${dest}/${componentName}`)
	// jsx文件路径
	// let targetPath = path.resolve(__dirname, `${filePath}/${componentName}.jsx`)
	let targetPath = path.resolve(__dirname, `${filePath}/index.tsx`)
	// styled文件路径
	let stylePath = path.resolve(__dirname, `${filePath}/style.ts`)

	// 判断该文件夹是否存在
	if (fs.existsSync(filePath)) {
		throw new Error("file has existed")
	}

	// 文件夹不存在, 存在新的文件夹
	fs.mkdir(filePath, { recursive: true }, e => {
		if (e) throw e

		// 创建好新文件夹, 将文件写入
		fs.writeFile(targetPath, reactTemplate, err => {
			if (err) throw err
			else console.log("写入成功~")
		})
		fs.writeFile(stylePath, styledTemplate, err => {
			if (err) throw err
			else console.log("写入成功~")
		})
	})
}

module.exports = {
	addCpnAction,
	addTsCpnAction,
}
