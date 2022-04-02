const Intern = require("../lib/Intern")

test('Should retrive and display the school that the intern attends', () => {
    const newIntern = new Intern("Nela", 1, "borrowedandblue@gmail.com", "Rutgers")

    expect(newIntern.getSchool()).toBe("Rutgers")
})

test("Should check the employee type then display 'Intern'", () => {
    const newIntern = new Intern("Nela", 1, "borrowedandblue@gmail.com", "nelacrabtree")

    expect(newIntern.getRole()).toBe("Intern")
})
