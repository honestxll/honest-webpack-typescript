let name2 = 'lison'
// name2 = 123

let arr5 = [1, 'a']
// arr5 = [false]

window.onmousedown = (e: any) => {
  console.log(e)
}

interface InfoInterface {
  name: string
}

let infos: InfoInterface
const infos1 = { name: 'lison' }
const infos2 = { age: 18 }
infos = infos1
// infos = infos2
