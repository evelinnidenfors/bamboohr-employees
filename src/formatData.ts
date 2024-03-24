// export const formatData = (object) => {
interface OutputData {
    id: string;
    first_name: string;
    last_name: string;
    name: string;
    avatar_url: string;
    personal_phone_number: string;
    work_email: string;
    job_title: string;
    department: string;
    employments: Array<{
        manager_id: string | undefined;
        manager_first_name: string | undefined;
        manager_last_name: string | undefined;
        manager: string | undefined;
    }>;
}

interface InputData {
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
    photoUrl: string;
    mobilePhone: string;
    workEmail: string;
    jobTitle: string;
    department: string;
    supervisor: string;
}

export const formatData = (object: {employees: Array<InputData>}): Array<OutputData> => {
    return object.employees.map((a: InputData) => {
      const manager = findManagerIdByName(a.supervisor, object.employees);
      return {
        id: a.id,
        first_name: a.firstName,
        last_name: a.lastName,
        name: a.displayName,
        avatar_url: a.photoUrl,
        personal_phone_number: a.mobilePhone,
        work_email: a.workEmail,
        job_title: a.jobTitle,
        department: a.department,
        employments: [{
          manager_id: manager?.id,
          manager_first_name: manager?.firstName,
          manager_last_name: manager?.lastName,
          manager: manager?.jobTitle,
        }],
      };
    });
  };
  
  const findManagerIdByName = (name: string, employees: Array<InputData>): InputData | undefined => {
    return employees.find((employee) => {
      return employee.displayName == name;
    });
  };
  