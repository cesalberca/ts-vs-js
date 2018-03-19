// Tipos básicos
const foo: string = 'bar'
const bar: number = 1
const baz: boolean = true
const qux: string[] = ['bar', 'baz', 'qux']

// Null
let n: null = null

let a: string = 'bar'
// no compila: a = null
let b: string | null = 'bar'
// compila: b = null

if (b != null) {
  const l = b.length
  console.log(l)
}

// Funciones
function suma(a: number, b: number = 1): number {
  return a + b
}

const resultado = suma(2).toFixed(4)
console.log(resultado)

function concatenar(a: string, b: string | null): string {
  if (b != null) {
    return a.concat(b)
  }

  return a
}

const x = concatenar('Hola', null)
const y = concatenar('Hola ', 'mundo')

console.log(x)
console.log(y)

// Interfaces
interface Persona {
  nombre: string
  edad: number
  trabajo?: string
}

const personas: Persona[] = [{ edad: 42, nombre: 'Paco', trabajo: 'BBVA' }, { edad: 32, nombre: 'Pablo' }]
const edades = personas.reduce((a, b) => a + b.edad, 0)
console.log(edades)

interface Maja {
  saluda(nombre: string): string
}

type PersonaMaja = Persona & Maja
const personaMaja: PersonaMaja = {
  edad: 54,
  nombre: 'Sara',
  saluda(a: string): string {
    return 'hola ' + a + ', soy ' + this.nombre
  }
}

const saludo = personaMaja.saluda('Susana')
console.log(saludo)

// Clases
class Animal {
  nombre: string

  constructor(nombre: string) {
    this.nombre = nombre
  }

  mover(distancia: number) {
    console.log('Movido ' + distancia + ' metros')
  }
}

class Perro extends Animal {
  constructor(nombre: string) {
    super(nombre)
  }

  mover(distancia = 5) {
    console.log(this.nombre + ' se mueve...')
    super.mover(distancia)
  }
}

const perro = new Perro('Tobby')
perro.mover()
