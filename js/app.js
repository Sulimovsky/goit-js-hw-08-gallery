const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
];

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  btn: document.querySelector('[data-action="close-lightbox"]'),
  lightboxImage: document.querySelector('.lightbox__image'),
};

function createGallery(items) {
  const result = items.map(elem => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${elem.original}"
  >
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
</li>`);

refs.gallery.innerHTML = result.join('');
};
createGallery(galleryItems);


refs.gallery.addEventListener('click', onOpenGalleryModal);
refs.btn.addEventListener('click', onCloseModal);
refs.lightbox.addEventListener('click', onBackDropClick);
window.addEventListener('keydown', _.throttle(onCloseEscModal, 500));

function onOpenGalleryModal(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  refs.lightbox.classList.add('is-open');
  refs.lightboxImage.src = event.target.dataset.source;
  refs.lightboxImage.alt = event.target.alt
};

function onCloseModal() {
  refs.lightbox.classList.remove('is-open');
  clearValueAttributes();
};

function onBackDropClick(event) {
  if (!event.target.classList.contains('lightbox__overlay')) {
    return;
  }

  refs.lightbox.classList.remove('is-open');
  clearValueAttributes();
};

function onCloseEscModal(event) {
  if (event.code === 'Escape') {
    refs.lightbox.classList.remove('is-open');
    clearValueAttributes();
  } else {
    null;
  }
};

function clearValueAttributes() {
  refs.lightboxImage.src = "";
  refs.lightboxImage.alt = "";
};


// refs.gallery.addEventListener('keydown', a); 

// function a(event) {
//   console.log(event);
//   const result = galleryItems.reduce((arr, img) => {
//     arr.push(img.original);
//     return arr;
//   }, []);

//   if (result.includes(event.target.href)) {
//     let index = result.indexOf(event.target.href);
//     index ++;
//     refs.lightboxImage.src = result[index++];
//   }
// };