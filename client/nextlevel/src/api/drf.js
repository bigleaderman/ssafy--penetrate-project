const HOST = 'http://localhost:8000/api/v1/'

// const MOVIES = 'movies/'
// const RECOMMENDATION = 'recommendation/'
const COMMUNITIES = 'communities/'
// const ACCOUNTS = 'account/'


export default {
  // accounts: {
  //   login: () => HOST + ACCOUNTS + 'login/',
  //   logout: () => HOST + ACCOUNTS + 'logout/',
  //   signup: () => HOST + ACCOUNTS + 'signup/',
  //   // Token 으로 현재 user 판단
  //   currentUserInfo: () => HOST + ACCOUNTS + 'user/',
  //   // username으로 프로필 제공
  //   profile: username => HOST + ACCOUNTS + 'profile/' + username,
  // },
  communities: {
    reviews : () => HOST + COMMUNITIES + 'review/',
    review : reviewPk => HOST + COMMUNITIES + `${reviewPk}/`,
    commentCreate : (articlePk)  => HOST + COMMUNITIES + 'review/' + `${articlePk}/` +'comment/',
    commentChange : (articlePk, commentPk)  => HOST + COMMUNITIES + 'review/' + `${articlePk}/` +'comment/' + `${commentPk}/`
    // likeArticle: articlePk => HOST + ARTICLES + `${articlePk}/` + 'like/',
    // comments: articlePk => HOST + ARTICLES + `${articlePk}/` + COMMENTS,
    // comment: (articlePk, commentPk) =>
    //   HOST + ARTICLES + `${articlePk}/` + COMMENTS + `${commentPk}/`,
  },
}
