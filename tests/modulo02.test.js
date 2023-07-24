//set NODE_OPTIONS=--experimental-vm-modules && 

const modulo02 = require("../modulos02")

test("calculando suma de dos enteros", () => {
    expect(modulo02.suma(1,2)).toBe(3)
})
test("calculando suma de dos enteros ver 0.2", () => {
    const result = modulo02.suma(1,2)
    expect(result).toBe(3)
})
test("calculando suma de dos enteros ver 0.21", () => {
    expect(modulo02.suma(2,3)).toBe(5)
    expect(modulo02.suma(-2,5)).toBe(3)
    expect(modulo02.suma(0,0)).toBe(0)
})
test("calculando division de dos enteros ver 0.21", () => {
    expect(modulo02.divid(10,5)).toBe(2)
    expect(modulo02.divid(10,3)).toBeGreaterThanOrEqual(3.33333)
    expect(modulo02.divid(7,5)).toBeDefined();
    expect(() => modulo02.divid(7,0)).toThrow(Error) 
    expect(() => modulo02.divid(0,0)).toThrow()  
})

describe("Pruebas02", () => {
    test ("verificar mi funcion reversar ver 0.1", () => {
        const result = modulo02.reversar("felipe")
        expect(result).toBe("epilef")
    })
    test ("verificar mi funcion reversar ver 0.11", () => {
        const result = modulo02.reversar("")
        expect(result).toBeNull();
        expect(modulo02.reversar()).toBeUndefined(); 
    })
})
describe("Pruebas_Estadisticas", () => {
    describe("Promedio", () => {
        test("funcion promedio un valor", () => {
            expect(modulo02.promedio([1])).toBe(1)
        })
        test("funcion promedio envio de objetos no array", () => {
            expect(modulo02.promedio(1)).toBe(false)
        })
        test("funcion promedio un arreglo vacio", () => {
            expect(modulo02.promedio([])).toBe(0)
        })
        test.skip("funcion promedio pruebas ver 0.1", () => {
            expect(modulo02.promedio(1)).toBe(false)
        })
        test.todo("funcion promedio un arreglo vacio")
    })
});

