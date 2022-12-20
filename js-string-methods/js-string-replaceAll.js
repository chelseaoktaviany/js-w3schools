let text =
  "I heckin' love musics. Musics are very easy to listen. Musics are my passion.";

text = text.replaceAll("Musics", "She");
text = text.replaceAll("musics", "Billie Eillish");
text = text.replaceAll("are", "is");

console.log(text); //the output will be "I heckin' love Billie Eilish. She is very easy to listen. She is my passion"

// the replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// if the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown

let text2 = "I love cats. Cats are very easy to love. Cats are very popular";
text2 = text2.replaceAll(/Cats/g, "Dogs");
text2 = text2.replaceAll(/cats/g, "dogs");

console.log(text2); //the output will be I love dogs. Dogs are very easy to love. Dogs are very popular.
