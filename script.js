const nQuestions=document.getElementById("questoes").getElementsByTagName("li").length

var currentQuestion=0

const toggleElement = (id,show)=>{
    const el=document.getElementById(id)
    el.style.display = (show) ?"block" :"none"
}

const changeInner = (id,text)=>{
    const el=document.getElementById(id)
    el.innerHTML=text
}

document.getElementById("anterior").addEventListener("click",function(e){
    e.preventDefault()
    if(currentQuestion>0){
        if(currentQuestion===1) changeInner("anterior","-")
        if(currentQuestion===nQuestions) changeInner("proxima","Próxima")
        toggleElement(`questao${currentQuestion}`,false)
        toggleElement(`questao${currentQuestion-1}`,true)
        currentQuestion-=1
    }
})

document.getElementById("proxima").addEventListener("click",function(e){
    e.preventDefault()
    if(currentQuestion<nQuestions){
        if(currentQuestion===nQuestions-1) changeInner("proxima","-")
        if(currentQuestion===0) changeInner("anterior","Anterior")
        toggleElement(`questao${currentQuestion}`,false)
        toggleElement(`questao${currentQuestion+1}`,true)
        currentQuestion+=1
    }
})

document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault()

    const formData=new FormData(this)
    const data=[]

    formData.forEach((value,key) => data.push({key,value:Number(value)}))

    if(data.length===nQuestions){
        const result=data.reduce((ac,x)=>ac+x.value,0)
        
        toggleElement("form",false)
        toggleElement("footer",false)
        
        toggleElement(`resposta${
            (result>-1&&result<8) ? 1 :
            (result<15) ? 2 : 3
        }`,true)
    } else{
        alert("Há questões sem respostas")
    }
})