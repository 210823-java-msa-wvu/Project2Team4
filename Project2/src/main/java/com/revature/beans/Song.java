package com.revature.beans;

import javax.persistence.*;

@Entity
@Table(name="songs")
public class Song {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    private String title;

    @ManyToOne
    @JoinColumn(name = "song_id", insertable = false)
    private Musician musician;

    public Song() {
    }

    public Song(String title, Musician musician) {
        this.title = title;
        this.musician = musician;
    }

    public Song(Integer id, String title, Musician musician) {
        this.id = id;
        this.title = title;
        this.musician = musician;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Musician getAuthor() {
        return musician;
    }

    public void setAuthor(Musician musician) {
        this.musician = musician;
    }

    @Override
    public String toString() {
        return "Song{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author=" + musician +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Song song = (Song) o;

        if (id != null ? !id.equals(song.id) : song.id != null) return false;
        if (title != null ? !title.equals(song.title) : song.title != null) return false;
        return musician != null ? musician.equals(song.musician) : song.musician == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (musician != null ? musician.hashCode() : 0);
        return result;
    }
}
