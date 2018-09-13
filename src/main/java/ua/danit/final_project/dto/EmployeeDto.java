package ua.danit.final_project.dto;

import lombok.Data;
import ua.danit.final_project.entities.Employee;
import java.io.Serializable;


@Data
public class EmployeeDto implements Serializable {

    private Long id; // NOSONAR

    private String position; // NOSONAR

    private String forename; // NOSONAR

    private String surname; // NOSONAR

    private String patronymic; // NOSONAR

    private String phoneNumber; // NOSONAR

    private String info; // NOSONAR

//    public void deleteEmployee(Integer id) {
//        Employee employee = (Employee).load(
//                Employee.class, id);
//        if (null != employee) {
//            deleteEmployee(getId());
//        }
//    }

    public EmployeeDto(Employee employee) {
        this.id = employee.getId();
        this.position = employee.getPosition().getTitle();
        this.forename = employee.getForename();
        this.surname = employee.getSurname();
        this.patronymic = employee.getPatronymic();
        this.phoneNumber = employee.getPhoneNumber();
        this.info = employee.getInfo();
    }
}
