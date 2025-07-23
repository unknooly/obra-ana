const q=new Array(10)

function formSend(){
    const p=q.filter(x=>x===null||x===undefined)
    console.log(p,typeof(p),p.length)
    console.log(`Form's been sent:`,q)
}

function handlechange(id){
    q[id-1]=document.getElementById(`q${id}`).value
}