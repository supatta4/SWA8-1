class Person {
    private String title;
    private String name;
    private int age;
    public Person(String title, String name, int age){
        this.title = title;
        this.name = name;
        this.age = age;
    }
    public void showDetail(){
        System.out.println("" +title+ "" +name+ "" +age); 
    }
}

class Employee {
    private int salary;
    private Person person;
    public Employee(Person p, int salary){
        this.person = p;
        this.salary = salary;
    }
    public void showDetail(){
        this.person.showDetail();
    }
}

class Client {
    public static void main(String[]args){
        Person john = new Person ("Mr." , "john", 25);
        Employee emp = new Employee (john, 5000);
        emp.showDetail();
    }
}