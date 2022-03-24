
function calcular(){
  let nome = prompt ("Qual è o nome do aluno?")
  let numero1 =  Number (prompt (`Qual è a primeira nota de ${nome}?`))
  let numero2 = Number (prompt (`Qual è a segunda nota de ${nome}?`))
  let media= (numero1+numero2)/2

 let res =document.getElementById("resultado")
  res.innerHTML =`<p> calculando a mèdia final de ${nome} <p/> `
  res.innerHTML +=`<p> As notas obtidas foram ${numero1} e ${numero2}. <p/> `
  res.innerHTML +=`<p>A Mèdia final serà ${media} <p/> `
  
}




 