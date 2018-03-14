// Tipos básicos
const foo: string = 'bar'
const bar: number = 1
const baz: boolean = true
const qux: string[] = ['bar', 'baz', 'qux']

// Null y undefined
let u: undefined = undefined
let n: null = null

let a: string = 'bar'
// no compila: a = null

let b: string | null = 'bar'
// compila b = null

if (b != null) {
  const l = b.length
  console.log(l)
}

// Casts
let valor: any = 'esto es un string'
let l: number = (valor as string).length
console.log(l)

// Funciones
function suma(a: number, b: number = 1): number {
  return a + b
}

const res = suma(2).toFixed(4)
console.log(res)

function concatenar(a: string, b: string | null): string {
  // no compila return a.concat(b)
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

const empleados = personas.filter(p => p.trabajo === 'BBVA')
console.log(empleados)

interface Maja extends Persona {
  saluda(nombre: string): string
}

const personaMaja: Maja = {
  nombre: 'Susana',
  edad: 33,
  saluda(a: string): string {
    return 'Hola ' + a +  ', soy ' + this.nombre
  }
}

type PersonaMaja = Persona & Maja
const personaMaja2: PersonaMaja = {
  nombre: 'Sara',
  edad: 53,
  saluda(a: string): string {
    return 'Hola ' + a +  ', soy ' + this.nombre
  }
}

const saludo = personaMaja.saluda('César')
const saludo2 = personaMaja2.saluda('Susana')
console.log(saludo)
console.log(saludo2)

// Clases
class Animal {
  nombre: string

  constructor(nombre: string) {
    this.nombre = nombre
  }

  mover(distancia: number = 0) {
    console.log('Movido ' + distancia + ' metros.')
  }
}

class Perro extends Animal {
  constructor(nombre: string) {
    super(nombre);
  }

  mover(distancia = 5) {
    console.log(this.nombre + ' se mueve...')
    super.mover(distancia)
  }
}

const perro = new Perro('Tobby')
perro.mover()
