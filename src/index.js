// Tipos básicos
const foo = 'bar'
const bar = 1
const baz = true
const qux = ['bar', 'baz', 'qux']

// Null y undefined
let u = undefined
let n = null

let a = 'bar'
a = null

let b = 'bar'
b = null

if (b != null) {
  const l = b.length
  console.log(l)
}

// Casts
let valor = 'esto es un string'
let l = valor.length
console.log(l)

// Funciones
function suma(a, b = 1) {
    return a + b
}

const res = suma(2).toFixed(4)
console.log(res)

const personas = [{ edad: 42, nombre: 'Paco', trabajo: 'BBVA' }, { edad: 32, nombre: 'Pablo' }]
const edades = personas.reduce((a, b) => a + b.edad, 0)
console.log(edades)

const empleados = personas.filter(p => p.trabajo === 'BBVA')
empleados

const personaMaja = {
  nombre: 'Sara',
  edad: 53,
  saluda(a) {
      return 'Hola ' + a + ', soy ' + this.nombre
  }
}

const saludo = personaMaja.saluda('César')
console.log(saludo)

// Clases
class Animal {
  constructor(nombre) {
    this.nombre = nombre
  }

  mover(distancia = 0) {
    console.log('Movido ' + distancia + ' metros.')
  }
}

class Perro extends Animal {
  constructor(nombre) {
    super(nombre)
  }

  mover(distancia = 5) {
    console.log(this.nombre + ' se mueve...')
    super.mover(distancia)
  }
}

const perro = new Perro('Tobby')
perro.mover()
