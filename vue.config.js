module.exports = {
    indexPath: process.env.NODE_ENV === 'production' ? '../index.html' : 'index.html',
    publicPath: process.env.NODE_ENV === 'production' ? 'https://shershen08.github.io/vue-starters-directory/dist' : '/' 
  }
  