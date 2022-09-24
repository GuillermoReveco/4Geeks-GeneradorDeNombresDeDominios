var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var ext = ['.com', '.net', '.us', '.io'];

for (let index = 0; index < pronoun.length; index++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            console.log(pronoun[index] + adj[a] + noun[n] + '.com');
        }        
    }
}

for (let e = 0; e < ext.length; e++) {
    for (let index = 0; index < pronoun.length; index++) {
        for (let a = 0; a < adj.length; a++) {
            for (let n = 0; n < noun.length; n++) {
                console.log(pronoun[index] + adj[a] + noun[n] + ext[e]);
            }        
        }
    }
}

for (let e = 0; e < ext.length; e++) {
    for (let index = 0; index < pronoun.length; index++) {
        for (let a = 0; a < adj.length; a++) {
            for (let n = 0; n < noun.length; n++) {
                console.log(pronoun[index] + adj[a] + noun[n].substring(0, (noun[n].length - 2)) + '.' + noun[n].substr((noun[n].length - 2)));
            }        
        }
    }
}
