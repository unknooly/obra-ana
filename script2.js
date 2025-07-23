document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault()
    
    const formData=new FormData(this)
    
    data={}
    formData.forEach((value,key)=>data[key]=value)

    const output=document.getElementById("output")
    const result=document.getElementById("result")

    // se a questão 3 não tiver ao menos 1 opção marcada
    const check=document.querySelectorAll('input[name*="elementos"]') // selector parece funcionar assim como CSS
    let marcacoes=0
    check.forEach(x=>{ if(x.checked) marcacoes+=1 });
    if(marcacoes===0){
        output.innerHTML="a questão 3 não possui ao menos 1 opção selecionada"
        result.style="display: unset;"
    }
    else{
        // se não tiverem respostas o suficiente
        if(Object.keys(data).length<8){ // programar esse nº 8
            output.innerHTML="alguma questão não foi respondida, verifique novamente"
        } else{
            output.innerHTML=Object.values(data).reduce((ac,x)=>ac+`<div>${x}</div>`,"")
        }
        result.style="display: unset;"
    }
    
    console.log(`Quantidade de questões respondidas: ${Object.keys(data).length}`)
})