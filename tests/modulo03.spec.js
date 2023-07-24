//ampliar o personalizar las funciones de test
expect.extend({
    toBeEqualTwo(received){
        if(received !== 2){
            return {
                pass: false,
                message: () => `Se esperaba un 2 y se recibio ${received}`
            }
        }
        return {
            pass: true
        }
    }
})

test("test del numero 2", () => {
    const respuesta = 2 
    //expect(respuesta).toBe(2)
    expect(respuesta).toBeEqualTwo()
})