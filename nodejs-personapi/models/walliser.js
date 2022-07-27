/*
  Eine Hunderasse hat:
  - name
  - herkunft
  - ohren
  - groesse
  - klassifikation
  - augen
  - charakter
  - farbe
*/
class Dogbreed {
    constructor(id, name, origin, ears, size, classification, eyes, character, color) {
        this.id = id
        this.name = name
        this.origin = origin
        this.ears = ears
        this.size = size
        this.classification = classification
        this.eyes = eyes
        this.character = character
        this.color = color
    }
}

module.exports = Dogbreed