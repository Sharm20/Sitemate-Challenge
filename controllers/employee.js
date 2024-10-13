const Employee = require("../models/employee");
// import toast, {Toaster} from 'react-hot'

//validation
const isEmpty = (field, message) => {
  if (!field) {
    return message;
  }
};

// post

const createEmployee = async (req, res) => {
  const {
    firstName,
    lastName,
    dob,
    employment_status,
    sex,
    address,
    contact_num,
  } = req.body;

  // isEmpty(firstName, "Please input first name").then(res.status(400).json());
  // isEmpty(firstName, "Please input first name");
  // isEmpty(firstName, "Please input first name");
  // isEmpty(firstName, "Please input first name");
  try {
    if (!firstName) {
      return res.status(400).json({ message: "Please input first name." });
    } else if (!lastName) {
      return res.status(400).json({ message: "Please input last name." });
    }
    // else if (!dob) {
    //   return res.status(400).json({ message: "Please input date of birth." });
    // } else if (!contact_num) {
    //   return res.status(400).json({ message: "Please input contact number." });
    // }

    console.log("request body: ", req.body);
    const employee = await Employee.create({
      firstName,
      lastName,
      dob,
      employment_status,
      sex,
      address,
      contact_num,
    });

    const employeeExists = await Employee.findOne({ firstName, lastName });

    // if (employeeExists) {
    //   return res
    //     .status(400)
    //     .json({ message: "Employee with the same name already exists." });
    // }

    return res.status(201).json({
      message: `Employee named ${firstName + " " + lastName} added.`,
      employee: employee,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

//get

const getEmployees = (req, res) => {
  return res.status(200).json({ message: "this route is ok" });
};

module.exports = { createEmployee, getEmployees };
