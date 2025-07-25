const response = (text,hideForm)=>{
    document.getElementById("output").innerHTML=text
    document.getElementById("result").style.display="unset"
    if(hideForm==="hideForm") document.getElementById("form").style.display="none"
}

const qtdPerguntas=document.getElementById("questoes").getElementsByTagName("li").length

var currentQuestion=0

const toggleQuestion = (id,show)=>{
    const el=document.getElementById(id)
    el.style.display = (show) ?"unset" :"none"
}

document.getElementById("anterior").addEventListener("click",function(e){
    e.preventDefault()
    if(currentQuestion>0){
        // if(currentQuestion===1) toggleQuestion("anterior",false);
        // if(currentQuestion===qtdPerguntas) toggleQuestion("proxima",true);
        if(currentQuestion===1) document.getElementById("anterior").innerHTML="-"
        if(currentQuestion===qtdPerguntas) document.getElementById("proxima").innerHTML="Próxima"

        toggleQuestion(`questao${currentQuestion}`,false)
        toggleQuestion(`questao${currentQuestion-1}`,true)
        currentQuestion-=1
    }
})

document.getElementById("proxima").addEventListener("click",function(e){
    e.preventDefault()
    if(currentQuestion<qtdPerguntas){
        // if(currentQuestion===qtdPerguntas-1) toggleQuestion("proxima",false);
        // if(currentQuestion===0) toggleQuestion("anterior",true);
        if(currentQuestion===qtdPerguntas-1) document.getElementById("proxima").innerHTML="-"
        if(currentQuestion===0) document.getElementById("anterior").innerHTML="Anterior"
        toggleQuestion(`questao${currentQuestion}`,false)
        toggleQuestion(`questao${currentQuestion+1}`,true)
        currentQuestion+=1
    }
})

document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault()

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
        }`).style.display="unset"
    }
})