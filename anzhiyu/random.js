var posts=["posts/36bf892d.html","posts/7e055cf8.html","posts/5d36ff15.html","posts/9350e17.html","posts/22ac2b8a.html","posts/4a17b157.html","posts/f655f862.html","posts/472bdba3.html","posts/bcead7c3.html","posts/b68bb5d7.html","posts/6dcac492.html","posts/a0be425a.html","posts/8d6d198c.html","posts/4a17b156.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}