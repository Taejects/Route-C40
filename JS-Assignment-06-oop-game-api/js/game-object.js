export class GameObject {
  constructor(singleGame) {
    this.featureImage = singleGame.thumbnail;
    this.title = singleGame.title;
    this.price = "Free";
    this.platform = singleGame.platform;
    this.genre = singleGame.genre;
    this.short_description = singleGame.short_description;
    this.id = singleGame.id;
    this.url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id${this.id}`;
  }
}
