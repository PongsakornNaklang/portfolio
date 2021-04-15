let ghpages = require('gh-pages');
let moment = require('moment');
ghpages.publish('out', {
    branch: 'for-git-page',
    dotfiles: true,
    message: `🚀 Deploy [${moment().format('DD/MM/YY')}]`,
}, () => {
    console.log('yayyy');
});