const Employee = require("../lib/employee");

describe("Employee", () => {
    let Nela;

    beforeEach(() => {
        Nela = new Employee("Nela", 1, "borrowedandblue@gmail.com")
    });

    describe("Create new employee object", () => {

        it("Should create a new employee object", () => {
            expect(Nela.name).toBe("Nela");
            expect(Nela.id).toBe(1);
            expect(Nela.email).toBe("borrowedandblue@gmail.com");
        });

        it("Should get employee name", () => {
            expect(Nela.getName()).toBe("Nela");
        });

        it("Should get employee ID number", () => {
            expect(Nela.getId()).toBe(1)
        });
        
        it("Should get employee email address", () => {
            expect(Nela.getEmail()).toBe("borrowedandblue@gmail.com")
        });

        it("Should get employee role", () => {
            expect(Nela.getRole()).toBe("Employee")
        });
    });
});