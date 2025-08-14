// background
const image=Math.round(Math.random()*9+1)
document.getElementById("body").style=`background-image: url(./assets/image-${image}.jpg);`

const nQuestions=document.getElementById("questoes").getElementsByTagName("div").length

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
        if(currentQuestion===nQuestions){
            toggleElement("result",false)
            toggleElement("proxima",true)
        }
        toggleElement(`questao${currentQuestion}`,false)
        toggleElement(`questao${currentQuestion-1}`,true)
        currentQuestion-=1
    }
})

document.getElementById("proxima").addEventListener("click",function(e){
    e.preventDefault()
    if(currentQuestion<nQuestions){
        if(currentQuestion===nQuestions-1){
            toggleElement("proxima",false)
            toggleElement("result",true)
        }
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