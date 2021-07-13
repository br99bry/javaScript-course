console.group('Cuadrado')
const ladoCuadrado = 5;
const medida = 'cmts'
console.log('Los lados del cuadrado miden ' + ladoCuadrado + medida)
const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro del cuadrado es ' + perimetroCuadrado + medida)
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('el area del cuadrado es: ' + areaCuadrado + medida+'^2')
console.groupEnd();

console.group('Triangulo')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const base = 4;
const altura = 5.5;
console.log('Los lados del triangulo miden:\nlado 1: ' + ladoTriangulo1 + medida+'\nlado 2: '+ladoTriangulo2+medida+
'\nbase: '+base+medida+'\nbase: ' + base+medida)
const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+base;
console.log('El perimetro del triangulo es ' + perimetroCuadrado + medida)
const areaTriangulo = (base*altura)/2;
console.log('el area del triangulo es: ' + areaTriangulo + medida+'^2')
console.groupEnd()

console.group('Triangulo')
  const radio = 4
  const diametroCirculo = radio * 2
  const PI = Math.PI
  const perimetroCirculo = diametroCirculo * PI;
  const areaCirculo = PI * (radio*radio);
  console.log('radio: ' +radio+medida)
  console.log('diametro: ' +diametroCirculo+medida)
  console.log('PI: ' +PI+medida)
  console.log('perimetro: ' +perimetroCirculo+medida)
  console.log('area: ' +areaCirculo+medida+'^2')
console.groupEnd()
