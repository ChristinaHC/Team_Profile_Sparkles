const Manager = require('../lib/Manager');

test("Should retrieve and display office number of Manager", () => {
    const newManager = new Manager("Nela", 1, "borrowedandblue@gmail.com", 10)

    expect(newManager.getOfficeNumber()).toBe(10)
})

test("Should check employee type and display 'Manager'", () => {
    const newManager = new Manager("Nela", 1, "borrowedandblue@gmail.com", 10)

    expect(newManager.getRole()).toBe("Manager")
})