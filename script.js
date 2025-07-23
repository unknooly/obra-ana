// const q=new Array(10)

// function formSend(){
//     const p=q.filter(x=>x===null||x===undefined)
//     console.log(p,typeof(p),p.length)
//     console.log(`Form's been sent:`,q)
// }

// function handlechange(id){
//     q[id-1]=document.getElementById(`q${id}`).value
// }

document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault()
    const formData=new FormData(this)

    // COM OBJECT:
    const data={}
    formData.forEach((value,key)=>{
        data[key]=value
    })

    // COM ARRAY:
    // const data=[]
    // formData.forEach((value,key)=>{
    //     data.push({
    //         value: Number(value),
    //         result: Number(value)*0.8
    //     })
    // })
    console.log(data)

    const result=document.getElementById("result")
    result.style="display: unset"

    const output=document.getElementById("output")
    output.value=Object.values(data).reduce(
        (ac,x) => !isNaN(Number(x)) ? ac+Number(x) : ac
        ,0
    )
})