const Manager = require("../lib/manager");

describe("Manager", () => {
    let Nela;

    beforeEach(() => {
        Nela = new Manager("Nela", 1, "borrowedandblue@gmail.com", 123)
    });

    describe("Create new Manager object", () => {

        it("Should create a new Manager object", () => {

            expect(Nela.name).toBe("Nela")
            expect(Nela.id).toBe(1)
            expect(Nela.email).toBe("borrowedandblue@gmail.com")
            expect(Nela.officeNumber).toBe(123)
        });

        it("Should get Manager role", () => {
            expect(Nela.getRole()).toBe("Manager")
        });
    });
});