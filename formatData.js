export const formatData = (object) => {
  return object.employees.map((a) => {
    const manager = findManagerIdByName(a.supervisor, object.employees);
    return {
      id: a.id,
      first_name: a.firstName,
      last_name: a.lastName,
      job_title: a.jobTitle,
      department: a.department,
      email: a.workEmail,
      employments: {
        manager_id: manager?.id,
        manager_first_name: manager?.firstName,
        manager_last_name: manager?.lastName,
        manager: manager?.jobTitle,
      },
    };
  });
};

const findManagerIdByName = (name, employees) => {
  return employees.find((employee) => {
    return employee.displayName == name;
  });
};
