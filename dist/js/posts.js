let recent = document.querySelector('#recentBlog');

let past = document.querySelector("#pastBlogs");

let post = [{
    id: 1,
    title: 'The difference between a Roth and a Traditional IRA',
    tag: 'Accumilation',
    color: 'green',
    date: 'Dec 20 2018',
    body: 'This is the most recent post',
    src: 'dist/img/img1.jpeg'
  },
  {
    id: 2,
    title: 'Second Post',
    tag: 'Millenial',
    color: 'gold',
    date: 'Dec 20 2018',
    body: 'This is post one ergelk pgef ppker te[pksdhf flha hello my name is david salzasr hello my name is david salazar heloo my bame is david salzaat asgelffakjgskfkjf afhlkerfgtervte yeyeth etyet geeg eer terte trerte ',
    src: 'dist/img/img2.jpeg'
  },
  {
    id: 3,
    title: 'Third Post',
    tag: 'Millenial',
    color: 'gold',
    date: 'Dec 16 2018',
    body: 'This is post one ergelk pgef ppker te[pksdhf flha hello my name is david salzasr hello my name is david salazar heloo my bame is david salzaat asgelffakjgskfkjf afhlke',
    src: 'dist/img/img3.jpeg'
  },
  {
    id: 4,
    title: 'Fourth Post',
    tag: 'Millenial',
    color: 'gold',
    date: 'Dec 16 2018',
    body: 'This is post two',
    src: 'dist/img/img1.jpeg'
  },
  {
    id: 5,
    title: 'Fifth Post',
    tag: 'Retirement',
    color: 'blue',
    date: 'Dec 16 2018',
    body: 'This is post three',
    src: 'dist/img/img2.jpeg'
  },
  {
    id: 6,
    title: 'Sixth Post',
    tag: 'Retirement',
    color: 'blue',
    date: 'Dec 16 2018',
    body: 'This is post three',
    src: 'dist/img/img3.jpeg'
  }
];

function recentPost() {
  recent.innerHTML = `
  <div class="blog-header">
                <div class="blog-cover">
                  <img src="${post[0].src}" alt="" />
                </div>
              </div>
              <div class="blog-body">
                <div class="blog-title">
                  <h1><a href="">${post[0].title}</a></h1>
                </div>
                
                <div class="blog-tag">
                  <ul>
                    <li><a href="" class="mil">${post[0].tag}</a></li>
                    <li>
                      <a href=""><i class="fas fa-book-reader"></i></i> Read Article</a>
                    </li>
                  </ul>
                </div>
                <hr />
                <div class="blog-footer">
                  <ul>
                    <li class="published-date">
                      <i class="far fa-calendar-alt"></i> ${post[0].date}
                    </li>
                    <li class="author">
                      <i class="fas fa-edit"></i> David Salazar
                    </li>
                    <li class="like">
                      <a href=""> <i class="far fa-thumbs-up fa-2x"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
  `
}

recentPost();

function allPost() {
  let output = ' ';

  for (let i = 1; i < post.length; i++) {
    output += `
    <div class="pastBlogs">
    <img src="${post[i].src}" alt="">
              <div class="past-title">
                <h3>
                  <a href="">${post[i].title}</a>
                </h3>
                <hr />
              </div>
              <div class="card-info"><a href="">Read More</a></div>
              <div class="utility-info">
                <ul class="utility-list">
                  <li class="like">
                    <a href=""> <i class="far fa-thumbs-up "></i></a>
                  </li>
                  <li class="date">
                    <i class="far fa-calendar-alt"></i> ${post[i].date}
                  </li>
                  <li><p class="retire">${post[i].tag}</p></li>
                </ul>
              </div>
              </div>
    `;
    past.innerHTML = output;
  }
}
allPost();