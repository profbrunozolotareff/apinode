function adiciona(){
    let c1 = document.getElementById("ch1").checked 
    let c2 = document.getElementById("ch2").checked 
    

    var pd = []

    let p1 = {id:1,produto:"sabonete",valor:12.50}
    let p2 = {id:2,produto:"pasta",valor:3.50}

    if(c1 == true){
       // alert(c1)
         pd.push(p1)
        // alert(pd[0].id + ":"+ pd[0].produto + ":" + pd[0].valor)
    } 
    
    if(c2 == true) {
       // alert(c2)
        pd.push(p2)
       // alert(pd[1].id + ":"+ pd[1].produto + ":" + pd[1].valor)
    } 

    for(let i=0;i<3;i++){
       // alert(pd[i].produto + ":"+ pd[i].valor)

        const compra = pd[i]

        const json = JSON.stringify(compra)

        alert(json)

        localStorage.setItem("compra", json)

    }

    
      //  alert(c1)
      //  alert(c2)

}

function gravar(){

}