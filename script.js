const response = (text,hideForm)=>{
    document.getElementById("output").innerHTML=text
    document.getElementById("result").style="display:unset;"
    if(hideForm==="hideForm") document.getElementById("form").style="display:none;"
}

document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault()

    const qtdPerguntas=document.getElementById("questoes").getElementsByTagName("li").length
    const formData=new FormData(this)
    const data=[]

    formData.forEach((value,key) => data.push({key,value:Number(value)}))

    if(data.length<qtdPerguntas){ // valida qtd respostas
        response(`pendente, pois ${data.length*100/qtdPerguntas}% das perguntas foram respondidas`,"keepForm")
    } else{
        const result=data.reduce((ac,x)=>ac+x.value,0)
        response(`${result}<br>`+data.reduce((ac,x,i)=>ac+`${i+1}ª resposta: ${x.value}<br>`,""),"hideForm")
        document.getElementById(`resposta${ // diferentes resultados
            (result>-1&&result<8) ? 1 :
            (result<15) ? 2 : 3
        }`).style="display:unset;"
    }
})