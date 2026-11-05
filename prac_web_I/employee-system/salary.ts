import type { Employee } from "./employee.js";

export function calculateSalary(employee: Employee): number {
  const hra = employee.basicSalary * 0.20;
  const allowance = employee.basicSalary * 0.10;
  const deduction = employee.basicSalary * 0.05;

  return employee.basicSalary + hra + allowance - deduction;
}