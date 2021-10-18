package com.revature.beans;

public class Songs {

    private Integer song_id;
    private String song_name;
    private Integer likes;
    private Integer dislikes;
    private Integer musician_id;
    private String url;

public Songs(){

    super();
}


    public Songs(Integer song_id, String song_name, Integer likes, Integer dislikes, Integer musician_id, String url) {
        this.song_id = song_id;
        this.song_name = song_name;
        this.likes = likes;
        this.dislikes = dislikes;
        this.musician_id = musician_id;
        this.url = url;
    }

    public Integer getSong_id() {
        return song_id;
    }

    public void setSong_id(Integer song_id) {
        this.song_id = song_id;
    }

    public String getSong_name() {
        return song_name;
    }

    public void setSong_name(String song_name) {
        this.song_name = song_name;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public Integer getDislikes() {
        return dislikes;
    }

    public void setDislikes(Integer dislikes) {
        this.dislikes = dislikes;
    }

    public Integer getMusician_id() {
        return musician_id;
    }

    public void setMusician_id(Integer musician_id) {
        this.musician_id = musician_id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
