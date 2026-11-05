export function createEmployee(id, name, department, basicSalary) {
    if (id <= 0) {
        throw new Error("Employee ID must be greater than 0.");
    }
    if (!name.trim() || !department.trim()) {
        throw new Error("Name and department cannot be empty.");
    }
    if (basicSalary < 0 || !Number.isFinite(basicSalary)) {
        throw new Error("Salary must be a valid positive number.");
    }
    return { id, name, department, basicSalary };
}
