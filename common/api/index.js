//批量导出文件
const requireApi = require.context(
	'.', // api目录的相对路径
	false, //是否查询子目录
	/.js$/ //查询文件的一个后缀
)

let module = {}
requireApi.keys().forEach((key,index)=>{
	console.log(key);
	if(key === './index.js') return
	Object.assign(module,requireApi(key))
})
export default module