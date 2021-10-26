let mang = []
while(true){
let n = prompt()
if(n == -1){
break
}
mang.push(n)
}
function unique(mang) {
  let newMang = []
  for (let i = 0; i < mang.length; i++) {
    if (newMang.indexOf(mang[i]) === -1) {
      newMang.push(mang[i])
    }
  }
  return newMang
}
unique(mang)