const os = require('os')
const freememory = os.freemem()
console.log("Free memory : ",`${freememory/1024/1024/1024}`)
console.log(os.arch())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.platform())
console.log(os.release())
console.log(os.type())
console.log(os.networkInterfaces())