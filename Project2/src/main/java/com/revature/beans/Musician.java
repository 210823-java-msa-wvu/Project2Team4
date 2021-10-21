package com.revature.beans;

import javax.persistence.*;

@Entity
@Table(name="musicians")
public class Musician {

    // Instance Variables

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer musician_id; // Wrapper Class - making a primitive object-like so that we can work with it (int -> Integer)

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;


    // Constructors
    public Musician() {

    }

    public Musician(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Musician(Integer id, String firstName, String lastName) {
        this.musician_id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getters and Setters - methods to interact with private fields in a class
    public Integer getId() { // author.getId();
        return this.musician_id;
    }

    public void setId(Integer id) { // author.setId(10);
        this.musician_id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    @Override
    public String toString() {
        return "Musician{" +
                "id=" + musician_id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Musician musician = (Musician) o;

        if (musician_id != null ? !musician_id.equals(musician.musician_id) : musician.musician_id != null) return false;
        if (firstName != null ? !firstName.equals(musician.firstName) : musician.firstName != null) return false;
        return lastName != null ? lastName.equals(musician.lastName) : musician.lastName == null;
    }

    @Override
    public int hashCode() {
        int result = musician_id != null ? musician_id.hashCode() : 0;
        result = 31 * result + (firstName != null ? firstName.hashCode() : 0);
        result = 31 * result + (lastName != null ? lastName.hashCode() : 0);
        return result;
    }
}
