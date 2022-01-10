const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    let Nela;

    beforeEach(() => {
        Nela = new Engineer("Nela", 1, "borrowedandblue@gmail.com", "ChristinaHC")
    });

    describe("Create new Engineer object", () => {

        it("Should create a new Engineer object", () => {

            expect(Nela.name).toBe("Nela")
            expect(Nela.id).toBe(1)
            expect(Nela.email).toBe("borrowedandblue@gmail.com")
            expect(Nela.github).toBe("ChristinaHC")
        });

        it("Should get Engineer github username", () => {

            expect(Nela.getGithub()).toBe("ChristinaHC")
        });

        it("Should get Engineer role", () => {
            expect(Nela.getRole()).toBe("Engineer")
        });
    });
});