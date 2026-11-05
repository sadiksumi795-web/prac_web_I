import { createEmployee } from "./employee";
import { calculateSalary } from "./salary";

try {
  const employee = createEmployee(101, "Anu", "IT", 30000);

  console.log("Employee Details:", employee);
  console.log("Monthly Salary: ₹" + calculateSalary(employee).toFixed(2));
} catch (error) {
  console.error(
    "Error:",
    error instanceof Error ? error.message : "Invalid employee data."
  );
}