package com.revature.beans;

public class Followers {

    private Integer followers_id;
    private Integer user_id;
    private Integer musicians_id;


    public Followers(){

        super();
    }



    public Followers(Integer followers_id, Integer user_id, Integer musicians_id) {
        this.followers_id = followers_id;
        this.user_id = user_id;
        this.musicians_id = musicians_id;
    }


    public Integer getFollowers_id() {
        return followers_id;
    }

    public void setFollowers_id(Integer followers_id) {
        this.followers_id = followers_id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public Integer getMusicians_id() {
        return musicians_id;
    }

    public void setMusicians_id(Integer musicians_id) {
        this.musicians_id = musicians_id;
    }
}
