let mang = []
while(true){
let n = prompt()
if(n == -1){
break
}
mang.push(n)
}
function daoNguoc (s) {
let o = '';
for (let i = s.length - 1; i >= 0; i--)
o += s[i];
return o;
}
let str_input = mang.join('')
daoNguoc(str_input)