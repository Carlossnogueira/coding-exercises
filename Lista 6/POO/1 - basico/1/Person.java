class Person{
    private String name;
    private String email;
    private int years;

    public Person(String name, String email, int years) {
        this.name = name;
        this.email = email;
        this.years = years;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public int getYears() {
        return years;
    }
    public void setYears(int years) {
        this.years = years;
    }

    @Override
    public String toString(){
        return "Name: " + this.getName() +
        ", Email: " + this.getEmail() +
        ", Years old: " + this.getYears();
    }
    
}