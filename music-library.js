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
    this.tracks.forEach((track) => {
      if (track.rating >= 1 && track.rating <= 5) {
        avgRating += track.rating;
        countRatings++;
      }
    });
    return `The overall rating of ${this.name} is ${avgRating / countRatings} out of 5.`;
  }

  get totalDuration() {
    let sumDuration = 0;
    this.tracks.forEach((track) => {
      sumDuration += track.length;
    });
    return `The total duration of ${this.name} is ${sumDuration / 60} minutes and ${sumDuration % 60} seconds.`;
  }
}

class Track {
  constructor(title, artist, rating, length) {
    this.title = title;
    this.artist = artist;
    this.rating = rating;
    this.length = length;
  }
}

const creamOnChrome = new Track('Cream on Chrome', 'Ratatat', 4.75, 255);
const supreme = new Track('Supreme', 'Ratatat', 3.5, 180);
const wildcat = new Track('Wildcat', 'Ratatat', 4.5, 261);
const loudPipes = new Track('Loud Pipes', 'Ratatat', 4, 227);

const programmingMusic = new Playlist('Programming Music');
programmingMusic.addTrack(creamOnChrome);
programmingMusic.addTrack(supreme);
programmingMusic.addTrack(wildcat);
programmingMusic.addTrack(loudPipes);

const virus = new Track('Virus', 'Deltron 3030', 4, 266);
const turbulence = new Track('Turbulence', 'Deltron 3030', 4.25, 213);
const zombies = new Track('Zombies', 'Childish Gambino', 4, 281);
const redbone = new Track('Redbone', 'Childish Gambino', 5, 326);

const chillRap = new Playlist('Chill Rap');
chillRap.addTrack(virus);
chillRap.addTrack(turbulence);
chillRap.addTrack(zombies);
chillRap.addTrack(redbone);

const fiveHundredChannels = new Track('500 Channels', 'Choking Victim', 4, 160);
const timeBomb = new Track('Time Bomb', 'Rancid', 4.25, 144);
const allHisSuits = new Track('All His Suits Are Torn', 'NOFX', 5, 139);
const minorThreat = new Track('Minor Threat', 'Minor Threat', 5, 87);

const punkRock = new Playlist('Punk Rock');
punkRock.addTrack(fiveHundredChannels);
punkRock.addTrack(timeBomb);
punkRock.addTrack(allHisSuits);
punkRock.addTrack(minorThreat);

const mattsLibrary = new Library('Matt\'s Library');
mattsLibrary.addPlaylist(programmingMusic);
mattsLibrary.addPlaylist(chillRap);
mattsLibrary.addPlaylist(punkRock);