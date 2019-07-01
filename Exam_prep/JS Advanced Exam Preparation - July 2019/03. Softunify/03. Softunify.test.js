const SoftUniFy = require('./03. Softunify');
const assert = require('chai').assert;

describe('SoftUniFy tests', () => {

    it('constructor creates empty song collection', () => {
        let softunify = new SoftUniFy();
       assert.deepEqual(softunify.allSongs, {}, 'allSongs is not empty object')
    })

    describe('downloadSong method', () => {
        it('add new song from new artist correctly', () => {
           let softunify = new SoftUniFy();
              
            softunify.downloadSong('Me', 'my song', 'la-la-la');
            const expected = {'Me':{rate: 0, votes: 0, songs: ['my song - la-la-la']}};
            const result = softunify.allSongs;
            assert.equal(JSON.stringify(result), JSON.stringify(expected))
        })

        it('add new song from existed artist correctly', () => {
        let softunify = new SoftUniFy();
            
            softunify.downloadSong('Me', 'my song', 'la-la-la');
            softunify.downloadSong('Me', 'song2', 'la-la-la');

            const expected = {'Me':{rate: 0, votes: 0, songs: ['my song - la-la-la', 'song2 - la-la-la']}};
            const result = softunify.allSongs;
            assert.equal(JSON.stringify(result), JSON.stringify(expected))
        })
    })

    describe('playSong', () => {
        it('should return correct message if there is not such song as passed song-arg', () => {
           let softunify = new SoftUniFy();

           let result = softunify.playSong('song');
           let expected = `You have not downloaded a song song yet. Use SoftUniFy's function downloadSong() to change that!`;
           assert.equal(result,expected);
        })

        it('should return correct message if there is such song as passed song-arg', () => {
            let softunify = new SoftUniFy();
            softunify.downloadSong('Me', 'my song', 'la-la-la');
            softunify.downloadSong('Me', 'song2', 'la-la-la');
            let result = softunify.playSong('song');
            let expected = `You have not downloaded a song song yet. Use SoftUniFy's function downloadSong() to change that!`;
            assert.equal(result,expected);
         })
    })

    describe('rateArtist', () => {
        it('should return correct result', () => {
           let softunify = new SoftUniFy();

           let result = softunify.rateArtist('artist');
           let expected = 'The artist is not on your artist list.';
           assert.equal(result,expected);
        })
    })
})