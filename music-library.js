class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  get overallRating() {
    let avgRating = 0;
    let countRatings = 0;
    this.tracks.forEach(track) {
      if (track.rating >= 1 && track.rating <=5) {
        avgRating += track.rating;
        countRatings++
      }
    }
    return `The overall rating of ${this.name} is ${avgRating / countRatings} out of 5.`
  }

  get totalDuration() {
    let sumDuration = 0;
    this.tracks.forEach(track) {
      sumDuration =+ track.length;
    }
    return `The total duration of ${this.name} is ${sumDuration / 60} minutes and ${sumDuration % 60} seconds.`
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}
