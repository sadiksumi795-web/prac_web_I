// Enum: fixed list of departments
enum Department {
  CSE = "Computer Science",
  ECE = "Electronics",
  IT = "Information Technology",
}

// Type alias: marks for three subjects
type Marks = {
  maths: number;
  science: number;
  programming: number;
};

// Interface: structure of a student record
interface Student {
  registerNumber: number;
  name: string;
  department: Department;
  marks: Marks;
}

// Generic class: stores and manages records of type T
class RecordManager<T extends { registerNumber: number }> {
  private records: T[] = [];

  add(record: T): void {
    this.records.push(record);
  }

  getAll(): T[] {
    return this.records;
  }

  find(registerNumber: number): T | undefined {
    return this.records.find(
      (record) => record.registerNumber === registerNumber
    );
  }
}

// Create a manager for Student records
const students = new RecordManager<Student>();

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