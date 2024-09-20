var posts=["2024/09/19/中式教育/","2024/09/19/linux笔记01/","2024/09/19/pug语法/","2024/09/19/hello-word/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };