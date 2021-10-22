package com.revature.beans;

public class Usertypes {

    private Integer usertype_id;
    private String user_type;


    public Usertypes(){

        super();
    }


    public Usertypes(Integer usertype_id, String user_type) {
        this.usertype_id = usertype_id;
        this.user_type = user_type;
    }


    public Integer getUsertype_id() {
        return usertype_id;
    }

    public void setUsertype_id(Integer usertype_id) {
        this.usertype_id = usertype_id;
    }

    public String getUser_type() {
        return user_type;
    }

    public void setUser_type(String user_type) {
        this.user_type = user_type;
    }
}

