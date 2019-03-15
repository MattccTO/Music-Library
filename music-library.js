class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlist = [];
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}
