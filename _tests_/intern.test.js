const Intern = require("../lib/intern");

describe("Intern", () => {
    let Nela;

    beforeEach(() => {
        Nela = new Intern("Nela", 1, "borrowedandblue@gmail.com", "Rutgers University")
    });

    describe("Create new Intern object", () => {

        it("Should create a new Intern object", () => {

            expect(Nela.name).toBe("Nela")
            expect(Nela.id).toBe(1)
            expect(Nela.email).toBe("borrowedandblue@gmail.com")
            expect(Nela.school).toBe("Rutgers University")
        });

        it("Should get Intern's school", () => {
            expect(Nela.getSchool()).toBe("Rutgers University")
        });

        it("Should get Intern's role", () => {
            expect(Nela.getRole()).toBe("Intern")
        });
    });
});

