 

 const numeros = [
    {
       n: 1,
    },
    {
        n: 2,
     },
     {
        n: 3,
     },
     {
        n: 4,
     },
     {
        n: 5,
     },
     {
        n: 6,
     },
     {
        n: 7,
     },
     {
        n: 8,
     },

 ]
 
 //verificando quais numeros sao pares 
 const numerosPares = numeros.filter(item => item.n % 2 === 0) 
 console.log(numerosPares)

  //verificando quais numeros sao impares 
  const numerosImpares = numeros.filter(item => item.n % 2 !== 0) 
  console.log(numerosImpares)
 