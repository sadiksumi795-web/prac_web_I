"use strict";
// Enum: fixed list of departments
var Department;
(function (Department) {
    Department["CSE"] = "Computer Science";
    Department["ECE"] = "Electronics";
    Department["IT"] = "Information Technology";
})(Department || (Department = {}));
// Generic class: stores and manages records of type T
class RecordManager {
    records = [];
    add(record) {
        this.records.push(record);
    }
    getAll() {
        return this.records;
    }
    find(registerNumber) {
        return this.records.find((record) => record.registerNumber === registerNumber);
    }
}
// Create a manager for Student records
const students = new RecordManager();
students.add({
    registerNumber: 101,
    name: "Arun",
    department: Department.CSE,
    marks: { maths: 85, science: 90, programming: 95 },
});
students.add({
    registerNumber: 102,
    name: "Meena",
    department: Department.IT,
    marks: { maths: 88, science: 82, programming: 91 },
});
// Display all records
console.log("All Students:");
console.log(students.getAll());
// Search by register number
console.log("Student with register number 101:");
console.log(students.find(101));
