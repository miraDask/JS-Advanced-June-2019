function result(command) {
    let commands = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            let totalVotes = this.upvotes + this.downvotes;
            const numberToAdd = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            let reportUpVotes = totalVotes > 50 ? this.upvotes + numberToAdd : this.upvotes;
            let reportDownVotes = totalVotes > 50 ? this.downvotes + numberToAdd : this.downvotes;
            let totalScore = this.upvotes -  this.downvotes;
            let majority = this.upvotes / totalVotes > 0.66;
            let rating = '';
            if (totalVotes < 10) {
                rating = 'new';
            } else if (totalScore < 0) {
                rating = 'unpopular';
            }else if (majority) {
                rating = 'hot'
            } else if (reportUpVotes > 100 || reportDownVotes > 100) {
                rating = 'controversial';
            }  else {
                rating = 'new';
            }

            return [reportUpVotes, reportDownVotes, totalScore, rating];
        }
    };
    return commands[command]();
}

// tests :

const forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

// Under border case
let answer = result.call(forumPost, 'score');
//var expected = [4, 5, -1, 'new'];
console.log(answer);
// Past border case
result.call(forumPost, 'downvote');
answer = result.call(forumPost, 'score');
//expected = [4, 6, -2, 'unpopular'];
console.log(answer);

result.call(forumPost, 'upvote');
result.call(forumPost, 'upvote');
answer = result.call(forumPost, 'score');
//expected = [6, 6, 0, 'new'];
console.log(answer);


// 38 Upvotes
for (let i = 0; i < 38; i++) {
    result.call(forumPost, 'upvote');
}
answer = result.call(forumPost, 'score');
//expected = [44, 6, 38, 'hot'];
console.log(answer);


// Past obfuscation threshold
result.call(forumPost, 'downvote');
answer = result.call(forumPost, 'score');
//expected = [55, 18, 37, 'hot'];
console.log(answer);



// Bellow hot threshold
forumPost.upvotes = 132;
forumPost.downvotes = 68;

answer = result.call(forumPost, 'score');
//expected = [165, 101, 64, 'controversial'];
console.log(answer);


// Past hot threshold
forumPost.upvotes = 133;

answer = result.call(forumPost, 'score');
//expected = [167, 102, 65, 'hot'];
console.log(answer);




