const Engineer = require("../lib/Engineer");

test("Should retrieve and engeineers GitHub", () => {
    const newEngineer = new Engineer("Nela", 1, "borrowedandblue@gmail.com", "nelacrabtree")

    expect(newEngineer.getGitHub()).toBe("nelacrabtree")
})

test("Should check the employee type from user input and then display 'Engineer'", () => {
    const newEngineer = new Engineer("Nela", 1, "borrowedandblue@gmail.com", "nelacrabtree")

    expect(newEngineer.getRole()).toBe("Engineer")
})