const Employee = require("../lib/employee");

test("input a name", () => {
        const newEmployee = new Employee("Nela", 1, "borrowedandblue@gmail.com")
        expect(newEmployee.name).toBe("Nela")
    })

    test("input an id", () => {
        const newEmployee = new Employee("Nela", 1, "borrowedandblue@gmail.com");    
        expect(newEmployee.id).toBe(1)
    })
    
    test("input an email", () => {
        const newEmployee = new Employee("Nela", 1, "borrowedandblue@gmail.com");
    
        expect(newEmployee.email).toBe("borrowedandblue@gmail.com")
    })
    
    test("test for getName", () => {
        const newEmployee = new Employee("Nela", 1, "borrowedandblue@gmail.com");
    
        expect(newEmployee.getName()).toBe("Nela")
    })
    
    test("test for getId", () => {
        const newEmployee = new Employee("Nela", 1, "borrowedandblue@gmail.com");
    
        expect(newEmployee.getId()).toBe(1)
    })
    
    test("test for getEmail", () => {
        const newEmployee = new Employee("Nela", 1, "borrowedandblue@gmail.com");
    
        expect(newEmployee.getEmail()).toBe("borrowedandblue@gmail.com")
    })
    
    test("test for getRole", () => {
        const newEmployee = new Employee("Nela", 1, "borrowedandblue@gmail.com");
    
        expect(newEmployee.getRole()).toBe("Employee")
    })