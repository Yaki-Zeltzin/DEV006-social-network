import { saveTask, getTask, onGetPost } from '../lib/config/firebaseConfig';

function post(navigateTo) {
  const body = document.getElementById('body');
  const pagePost = document.createElement('main');
  const postHeader = document.createElement('header');
  const imgHeader = document.createElement('img');
  const iconsHeader = document.createElement('div');
  const iconplus = document.createElement('i');
  const iconsearch = document.createElement('i');
  const iconcomment = document.createElement('i');
  const sectionPost = document.createElement('section');
  const iconsecret = document.createElement('i');
  const openPostModal = document.createElement('p');
  const createPostModal = document.createElement('article');
  const formPostModal = document.createElement('form');
  const headerModal = document.createElement('div');
  const titleModal = document.createElement('h1');
  const icontimes = document.createElement('i');
  const infoModal = document.createElement('div');
  const iconsecret2 = document.createElement('i');
  const userModal = document.createElement('h2');
  const postModal = document.createElement('div');
  const inputModal = document.createElement('input');
  const btnModal = document.createElement('button');
  const tematicSection = document.createElement('section');
  const sport = document.createElement('p');
  const policy = document.createElement('p');
  const movies = document.createElement('p');
  const music = document.createElement('p');
  const books = document.createElement('p');
  const containerPosts = document.createElement('section');
//   let postPublished = document.createElement('article');
//   const headerPublished = document.createElement('div');
//   const iconsecret3 = document.createElement('i');
//   const userPublished = document.createElement('h2');
//   const iconelipsis = document.createElement('i');
//   let mainPost = document.createElement('div');
//   const reactionCount = document.createElement('div');
//   const reactions = document.createElement('div');
//   const iconheart = document.createElement('i');
//   const iconcoment = document.createElement('i');
//   const createComent = document.createElement('div');
//   const inputCreateComent = document.createElement('input');
//   const iconplay = document.createElement('i');

  pagePost.classList.add('page_post');
  postHeader.classList.add('post_header');
  iconsHeader.classList.add('icons_header');
  iconplus.className = 'fa fa-plus';
  iconsearch.className = 'fa fa-search';
  iconcomment.className = 'fa fa-comment-dots';
  sectionPost.classList.add('section_create_post');
  iconsecret.className = 'fa fa-user-secret';
  openPostModal.classList.add('open_post_modal');
  createPostModal.classList.add('create_post_modal');
  headerModal.classList.add('header_modal');
  icontimes.className = 'fa fa-times';
  infoModal.classList.add('user_info_modal');
  iconsecret2.className = 'fa fa-user-secret';
  postModal.classList.add('post_modal');
  btnModal.classList.add('btn_post_modal');
  tematicSection.classList.add('section_tematic');
  containerPosts.classList.add('containerPosts');
//   postPublished.classList.add('post_published');
//   headerPublished.classList.add('header_published');
//   iconsecret3.className = 'fa fa-user-secret';
//   iconelipsis.className = 'fas fa-ellipsis-h';
//   mainPost.classList.add('main_post');
//   reactionCount.classList.add('reaction_count');
//   reactions.classList.add('reactions');
//   iconheart.className = 'fa fa-heart';
//   iconcoment.className = 'fa fa-comment-dots';
//   createComent.classList.add('create_comment');
//   iconplay.className = 'fas fa-play';

  imgHeader.setAttribute('src', 'images/logoOne.png');
  imgHeader.setAttribute('alt', 'Logo_whatUp');
  inputModal.setAttribute('type', 'text');
  inputModal.setAttribute('placeholder', 'Share your thoughts?');
  inputModal.setAttribute('id', 'task-description');
  formPostModal.setAttribute('id', 'task-form');
//   inputCreateComent.setAttribute('type', 'text');
//   inputCreateComent.setAttribute('placeholder', 'Write a comment');
//   inputCreateComent.setAttribute('id', 'task-description');
//   btnModal.setAttribute('id', 'btn-task-save');

  openPostModal.textContent = 'Share your thoughts';
  titleModal.textContent = 'Create post';
  userModal.textContent = 'Zeltzin Rom ';
  btnModal.textContent = 'Publicar';
  sport.textContent = 'Sports';
  policy.textContent = 'Policy';
  movies.textContent = 'Movies';
  music.textContent = 'Music';
  books.textContent = 'Books';
//   userPublished.textContent = 'Zeltzin Rom';
//   reactionCount.textContent = '1 like';
//   iconheart.textContent = ' Me gusta';
//   iconcoment.textContent = ' Comentar';

  pagePost.append(postHeader, sectionPost, createPostModal, tematicSection, containerPosts);
  postHeader.append(imgHeader, iconsHeader);
  iconsHeader.append(iconplus, iconsearch, iconcomment);
  sectionPost.append(iconsecret, openPostModal);
  createPostModal.append(formPostModal);
  formPostModal.append(headerModal, infoModal, postModal);
  headerModal.append(titleModal, icontimes);
  infoModal.append(iconsecret2, userModal);
  postModal.append(inputModal, btnModal);
  tematicSection.append(sport, policy, movies, music, books);
//   containerPosts.append(postPublished);
//   postPublished.append(headerPublished, mainPost, reactionCount, reactions, createComent);
//   headerPublished.append(iconsecret3, userPublished, iconelipsis);
//   reactions.append(iconheart, iconcoment);
//   createComent.append(inputCreateComent, iconplay);

  openPostModal.addEventListener('click', () => {
    createPostModal.style.display = 'flex';
    body.style.background = 'red';
  });

  icontimes.addEventListener('click', () => {
    createPostModal.style.display = 'none';
  });

  formPostModal.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = formPostModal['task-description'];
    saveTask(description.value);

    formPostModal.reset();
  });

  window.addEventListener('DOMContentLoaded', async () => {
   
    onGetPost((querySnapshot) => {

    

    querySnapshot.forEach((doc) => {
      const posts = doc.data();
      //let listPosts = document.createElement('p');
      //listPosts.classList.add('post_published');
      //listPosts.textContent = posts.description;
      //pagePost.append(listPosts)

      const postPublished = document.createElement('article');
      const headerPublished = document.createElement('div');
      const iconsecret3 = document.createElement('i');
      const userPublished = document.createElement('h2');
      const iconelipsis = document.createElement('i');
      const mainPost = document.createElement('div');
      const reactionCount = document.createElement('div');
      const reactions = document.createElement('div');
      const iconheart = document.createElement('i');
      const iconcoment = document.createElement('i');
      const createComent = document.createElement('div');
      const inputCreateComent = document.createElement('input');
      const iconplay = document.createElement('i');


      postPublished.classList.add('post_published');
  headerPublished.classList.add('header_published');
  iconsecret3.className = 'fa fa-user-secret';
  iconelipsis.className = 'fas fa-ellipsis-h';
  mainPost.classList.add('main_post');
  reactionCount.classList.add('reaction_count');
  reactions.classList.add('reactions');
  iconheart.className = 'fa fa-heart';
  iconcoment.className = 'fa fa-comment-dots';
  createComent.classList.add('create_comment');
  iconplay.className = 'fas fa-play';


  inputCreateComent.setAttribute('type', 'text');
  inputCreateComent.setAttribute('placeholder', 'Write a comment');
  inputCreateComent.setAttribute('id', 'task-description');
  btnModal.setAttribute('id', 'btn-task-save');


  userPublished.textContent = 'Zeltzin Rom';
  reactionCount.textContent = '1 like';
  iconheart.textContent = ' Me gusta';
  iconcoment.textContent = ' Comentar';
mainPost.textContent = posts.description;

      postPublished.append(headerPublished, mainPost, reactionCount, reactions, createComent);
      headerPublished.append(iconsecret3, userPublished, iconelipsis);
      reactions.append(iconheart, iconcoment);
      createComent.append(inputCreateComent, iconplay);
      containerPosts.append(postPublished);
    });
    pagePost.append(containerPosts);
  });
});
  
  return pagePost;
}

export default post;
