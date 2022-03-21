var ghpages = require('gh-pages');

ghpages.publish('build', {
  remote: 'my',
  repo: 'git@github.com:wangchungeng/walletconnect-example.git',
}, function(err) {
  console.log('deploy:', err)
});