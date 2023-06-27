import {
  saveTask,
  onGetPost,
  deletePost,
  getPost,
  updatePost,
} from '../lib/config/firebaseConfig';

function post(navigateTo) {
  let edtiStatus = false;
  let id = '';
  const pagePost = document.createElement('main');
  const body = document.getElementById('body');
  const postHeader = document.createElement('header');
  const imgHeader = document.createElement('img');
  const iconsHeader = document.createElement('div');
  const iconplus = document.createElement('i');
  const iconsearch = document.createElement('i');
  const iconcomment = document.createElement('i');
  const sectionPost = document.createElement('section');
  const iconsecret = document.createElement('i');
  const openPostModal = document.createElement('p');
  const divcreatePostModal = document.createElement('div');
  const createPostModal = document.createElement('dialog');
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

  pagePost.classList.add('page_post');
  postHeader.classList.add('post_header');
  iconsHeader.classList.add('icons_header');
  iconplus.className = 'fa fa-plus';
  iconsearch.className = 'fa fa-search';
  iconcomment.className = 'fa fa-comment-dots';
  sectionPost.classList.add('section_create_post');
  iconsecret.className = 'fa fa-user-secret';
  openPostModal.classList.add('open_post_modal');
  divcreatePostModal.classList.add('divCreatePostModal');
  createPostModal.classList.add('create_post_modal');
  headerModal.classList.add('header_modal');
  icontimes.className = 'fa fa-times';
  infoModal.classList.add('user_info_modal');
  iconsecret2.className = 'fa fa-user-secret';
  postModal.classList.add('post_modal');
  btnModal.classList.add('btn_post_modal');
  tematicSection.classList.add('section_tematic');
  containerPosts.classList.add('containerPosts');

  imgHeader.setAttribute('src', 'images/logoOne.png');
  imgHeader.setAttribute('alt', 'Logo_whatUp');
  inputModal.setAttribute('type', 'text');
  inputModal.setAttribute('placeholder', 'Share your thoughts?');
  inputModal.setAttribute('id', 'task-description');
  formPostModal.setAttribute('id', 'task-form');
  btnModal.setAttribute('id', 'btn_save_task');

  openPostModal.textContent = 'Share your thoughts';
  titleModal.textContent = 'Create post';
  userModal.textContent = 'Zeltzin Rom ';
  btnModal.textContent = 'Publicar';
  sport.textContent = 'Sports';
  policy.textContent = 'Policy';
  movies.textContent = 'Movies';
  music.textContent = 'Music';
  books.textContent = 'Books';

  pagePost.append(postHeader, sectionPost, divcreatePostModal, tematicSection, containerPosts);
  divcreatePostModal.append(createPostModal);
  postHeader.append(imgHeader, iconsHeader);
  iconsHeader.append(iconplus, iconsearch, iconcomment);
  sectionPost.append(iconsecret, openPostModal);
  createPostModal.append(formPostModal);
  formPostModal.append(headerModal, infoModal, postModal);
  headerModal.append(titleModal, icontimes);
  infoModal.append(iconsecret2, userModal);
  postModal.append(inputModal, btnModal);
  tematicSection.append(sport, policy, movies, music, books);

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

    if (!edtiStatus) {
      saveTask(description.value);
    } else {
      updatePost(id, {
        description: description.value,
      });

      edtiStatus = false;
    }

    divcreatePostModal.style.display = 'none';
    formPostModal.reset();
  });

  window.addEventListener('DOMContentLoaded', async () => {
    onGetPost((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const posts = doc.data();

        const postPublished = document.createElement('article');
        const headerPublished = document.createElement('div');
        const iconsecret3 = document.createElement('i');
        const userPublished = document.createElement('h2');
        const iconelipsis = document.createElement('i');
        const closeModal = document.createElement('i');
        const closeModal2 = document.createElement('i');
        const modalOptions = document.createElement('div');
        const modalDelete = document.createElement('p');
        const modalEdit = document.createElement('p');
        const deleteM = document.createElement('div');
        const modalSure = document.createElement('p');
        const modalYes = document.createElement('p');
        const mainPost = document.createElement('div');
        const reactionCount = document.createElement('div');
        const reactions = document.createElement('div');
        const iconheart = document.createElement('i');
        const iconcoment = document.createElement('i');
        const createComent = document.createElement('div');
        const inputCreateComent = document.createElement('input');
        const iconplay = document.createElement('i');

        closeModal.className = 'fa fa-times';
        closeModal2.className = 'fa fa-times';
        modalYes.classList.add('modalYes');
        modalEdit.classList.add('modalEdit');
        postPublished.classList.add('post_published');
        headerPublished.classList.add('header_published');
        iconsecret3.className = 'fa fa-user-secret';
        modalOptions.classList.add('modalOptions');
        deleteM.classList.add('deleteM');
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
        modalYes.setAttribute('data-id', doc.id);
        modalEdit.setAttribute('data-id', doc.id);

        userPublished.textContent = 'Zeltzin Rom';
        reactionCount.textContent = '1 like';
        iconheart.textContent = ' Me gusta';
        iconcoment.textContent = ' Comentar';
        mainPost.textContent = posts.description;
        modalDelete.textContent = 'Delete';
        modalEdit.textContent = 'Edit';
        modalSure.textContent = 'You are sure?';
        modalYes.textContent = 'Yes';

        postPublished.append(headerPublished, mainPost, reactionCount, reactions, createComent);
        headerPublished.append(iconsecret3, userPublished, modalOptions, deleteM, iconelipsis);
        modalOptions.append(modalDelete, modalEdit, closeModal);
        deleteM.append(modalSure, modalYes, closeModal2);
        reactions.append(iconheart, iconcoment);
        createComent.append(inputCreateComent, iconplay);
        containerPosts.append(postPublished);

        iconelipsis.addEventListener('click', () => {
          modalOptions.style.display = 'flex';
          iconelipsis.style.display = 'none';
        });

        closeModal.addEventListener('click', () => {
          modalOptions.style.display = 'none';
          iconelipsis.style.display = 'flex';
          modalDelete.textContent = 'Delete';
          modalEdit.textContent = 'Edit';
        });

        modalDelete.addEventListener('click', () => {
          modalOptions.style.display = 'none';
          deleteM.style.display = 'flex';
        });

        const btnDelete = document.querySelectorAll('.modalYes');
        btnDelete.forEach((btn) => {
          btn.addEventListener('click', ({ target: { dataset } }) => {
            deletePost(dataset.id);
            deleteM.style.display = 'none';
            iconelipsis.style.display = 'flex';
          });
        });

        closeModal2.addEventListener('click', () => {
          deleteM.style.display = 'none';
          iconelipsis.style.display = 'flex';
        });

        const btnEdit = document.querySelectorAll('.modalEdit');
        btnEdit.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            // console.log(e.target.dataset.id);
            const docu = await getPost(e.target.dataset.id);
            const postDocu = docu.data();

            formPostModal['task-description'].value = postDocu.description;

            edtiStatus = true;
            id = e.target.dataset.id;
            btnModal.textContent = 'Update';
          });
        });
        modalEdit.addEventListener('click', () => {
          modalOptions.style.display = 'none';
          iconelipsis.style.display = 'flex';
          modalDelete.textContent = 'Delete';
          modalEdit.textContent = 'Edit';
          createPostModal.style.display = 'flex';
        });
      });
    });
    pagePost.append(containerPosts);
  });

  return pagePost;
}

export default post;
