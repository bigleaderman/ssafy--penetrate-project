const HOST = 'http://localhost:8000/'

const MOVIES = 'movies/'
// const RECOMMENDATION = 'recommendation/'
const COMMUNITIES = 'communitys/'
const ACCOUNTS = 'accounts/'


export default {
  movies: {
    home: () => HOST + MOVIES + 'home/'
  },
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
  },
  communities: {
    reviews: () => HOST + COMMUNITIES + 'review/',
    review: reviewPk => HOST + COMMUNITIES + 'review/' + `${reviewPk}/`,
    commentCreate: (reviewPk) => HOST + COMMUNITIES + 'review/' + `${reviewPk}/` + 'comment/',
    commentChange: (articlePk, commentPk) => HOST + COMMUNITIES + 'review/' + `${articlePk}/` + 'comment/' + `${commentPk}/`
    // likeArticle: articlePk => HOST + ARTICLES + `${articlePk}/` + 'like/',
    // comments: articlePk => HOST + ARTICLES + `${articlePk}/` + COMMENTS,
    // comment: (articlePk, commentPk) =>
    //   HOST + ARTICLES + `${articlePk}/` + COMMENTS + `${commentPk}/`,
  },
}
