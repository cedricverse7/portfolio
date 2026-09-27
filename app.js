const page = document.body.dataset.page || 'accueil';
const routes = [
  ['accueil','Accueil','index.html'],
  ['video','Montage vidéo','montage-video.html'],
  ['graphisme','Graphisme','graphisme.html'],
  ['web','Développement web','developpement-web.html'],
  ['contact','Contact','contact.html']
];
const assets = path => `assets/${path}`;
function media(file,type='image',extra='') {
  const element = type === 'video'
    ? `<video src="${assets(file)}" preload="metadata" controls playsinline aria-label="${extra || file}"></video>`
    : `<img src="${assets(file)}" alt="${extra || file}" loading="lazy">`;
  return `<div class="media-frame ${type === 'video' ? 'video-frame' : ''}">${element}<div class="placeholder" aria-hidden="true"><span class="symbol">${type === 'video' ? '▶' : '▧'}</span><span>${type === 'video' ? 'Vidéo à ajouter' : 'Image à ajouter'}</span><small>${file}</small></div></div>`;
}
function header(){return `<header class="site-header"><div class="shell header-inner"><a class="brand" href="index.html" aria-label="Cédric WRT, accueil">CÉDRIC<span>.</span>WRT</a><button class="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="main-nav">Menu</button><nav class="nav" id="main-nav" aria-label="Navigation principale">${routes.map(([key,title,url])=>`<a href="${url}" ${page===key?'aria-current="page"':''}>${title}</a>`).join('')}</nav></div></header>`}
function footer(){return `<footer class="footer"><div class="shell footer-inner"><div><a class="brand" href="index.html">CÉDRIC<span>.</span>WRT</a><p>Montage vidéo · Graphisme · Développement web</p></div><div class="footer-links"><a href="mailto:cedric.procontact@proton.me">cedric.procontact@proton.me</a><a href="https://www.instagram.com/cedric.wrt/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div></div></footer>`}
function intro(label,title,copy){return `<section class="shell page-intro"><span class="eyebrow">${label}</span><h1>${title}</h1><p class="lead">${copy}</p></section>`}
const home = `<main><section class="shell home-hero"><span class="eyebrow">Portfolio / Cédric WRT</span><h1>Mes différentes<br> <em>compétences.</em></h1><p class="lead">Je travaille sur l'image, la vidéo et le web. Découvrez les trois domaines de mon portfolio et les projets que j'y présenterai.</p></section><section class="shell" aria-label="Domaines"><div class="section-kicker">Explorer le portfolio</div><div class="tiles">${[
  ['01','Montage<br>vidéo','montage-video.html','accueil-montage.jpg'],
  ['02','Graphisme','graphisme.html','accueil-graphisme.jpg'],
  ['03','Développement<br>web','developpement-web.html','accueil-web.jpg']
].map(([n,t,url,file])=>`<a class="tile" href="${url}"><div class="tile-preview"><img src="${assets(file)}" alt="" loading="lazy"></div><span class="count">${n} / 03</span><span class="tile-footer"><h2>${t}</h2><span class="arrow" aria-hidden="true">↗</span></span></a>`).join('')}</div><div class="closing"><h2>Un projet en tête ? Écrivez-moi pour en discuter et voir ce qu'on peut créer ensemble.</h2><a class="text-link" href="contact.html">Me contacter ↗</a></div></section></main>`;
const videoItems = [
  ['Vidéo storytelling',`Dans ce type de montage, le but est surtout de faire avancer l'histoire sans perdre le spectateur. Je travaille le rythme, les silences, la musique et les coupes pour mettre en avant les passages importants et donner envie de regarder jusqu'au bout.`,'video-storytelling.mp4'],
  ['Montage simple','Je peux faire des montages plus simples, bien moins coûteux en terme de temps et de coût pour le client','montage-simple.mp4'],
  ['Publicité complète',`Je peux créer une publicité de toutes pièces, (texte, voix, montage)`,'publicite-complete.mp4']
];
const webItems = [
  ['Page de boutique','Sillage est un exemple de site internet adapté aux boutiques physiques. Permettant un contact facile et une mise en avant du produit','site-01.jpg','https://cedricverse7.github.io/landingpage/'],
  ['Page de restaurant','Nox. est un exemple de site internet plus adapté aux restaurants (incluant une page "menu").','site-02.jpg','https://votre-site-02.fr'],
  ['Tycoon Clicker','Milk Tycoon est un exemple de site de type "mini-jeu", je peux faire un petit jeu basé sur votre marque, tout en mettant en avant vos produits. Maintenir des joueurs dans votre univers est très efficace pour les convertir en clients.','site-03.jpg','https://cedricverse7.github.io/tycoontemplate/']
];
function rows(items,isWeb=false){return `<div class="shell work-list">${items.map((item,i)=>{const [title,copy,file,url]=item;const portrait=!isWeb&&title==='Publicité complète';let visual=media(file,isWeb?'image':'video',title);if(isWeb) visual=`<a class="media-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir ${title} dans un nouvel onglet">${visual}<span class="external-badge">Voir le site ↗</span></a>`;return `<article class="work-row ${i%2?'reverse':''} ${portrait?'portrait-video':''}">${visual}<div class="work-copy"><span class="index">0${i+1} / 0${items.length}</span><h2>${title}</h2><p>${copy}</p>${isWeb?`<a class="text-link" href="${url}" target="_blank" rel="noopener noreferrer">Visiter le site ↗</a>`:''}</div></article>`}).join('')}</div>`}
const video = `<main>${intro('01 / Montage vidéo','Montage Vidéo','Je maîtrise une large gamme de logiciels de montage vidéo et j’adapte mon travail au ton, au format et au public de chaque projet.')}${rows(videoItems)}</main>`;
const web = `<main>${intro('03 / Développement web','Développement Web','Une sélection de projets web. Cliquez sur une image pour ouvrir le site correspondant.')}${rows(webItems,true)}</main>`;
function gallery(title,description,slides,id,type='image') {return `<section class="gallery-section shell"><div class="section-heading"><h2>${title}</h2>${description?`<p>${description}</p>`:''}</div><div class="carousel" data-gallery="${id}" data-kind="${type}"><div class="slide-visual media-frame"></div><div class="carousel-bottom"><p class="slide-caption" aria-live="polite"></p><div class="carousel-controls"><button type="button" class="prev" aria-label="Image ou vidéo précédente">←</button><span class="counter" aria-live="polite"></span><button type="button" class="next" aria-label="Image ou vidéo suivante">→</button></div></div></div></section>`}
const graphics = `<main>${intro('02 / Graphisme','Graphisme','Miniatures, identités visuelles, menus et animations publicitaires : des formats différents, avec la même attention portée à la lisibilité et au détail.')}${gallery('Miniatures','Parcourez les visuels avec les flèches.','Miniatures','thumbnails')}<section class="gallery-section shell"><div class="section-heading"><h2>Logos</h2><p>Un aperçu des identités visuelles réunies sur une même planche.</p></div><div class="logo-board">${media('board-logos.jpg','image','Planche de logos')}</div></section><section class="gallery-section shell"><div class="section-heading"><h2>Menus de restaurants</h2><p>Deux exemples de menus pensés pour être clairs et faciles à parcourir.</p></div><div class="two-up"><div>${media('menu-restaurant-01.png','image','Premier menu de restaurant')}<p class="card-caption">Menu 01</p></div><div>${media('menu-restaurant-02.png','image','Deuxième menu de restaurant')}<p class="card-caption">Menu 02</p></div></div></section>${gallery('Animations publicitaires','Des animations simples pour votre marque.','Animations','ads','video')}</main>`;
const contact = `<main>${intro('Contact','Contactez<br><em>moi.</em>','Pour une vidéo, un visuel ou un site web, vous pouvez me joindre directement par e-mail ou sur Instagram.')}<section class="shell contact-block"><h2>Expliquez-moi votre idée,<br>votre format et vos délais.</h2><div class="contact-links"><a href="mailto:cedric.procontact@proton.me"><span>E-mail</span>cedric.procontact@proton.me ↗</a><a href="https://www.instagram.com/cedric.wrt/" target="_blank" rel="noopener noreferrer"><span>Instagram</span>@cedric.wrt ↗</a></div></section></main>`;
const content = {accueil:home,video,graphisme:graphics,web,contact};
document.getElementById('app').innerHTML = header()+(content[page]||home)+footer();

const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');document.querySelector('.nav').classList.toggle('open',open)});

function activateMedia(root){root.querySelectorAll('img').forEach(img=>{if(img.complete && img.naturalWidth) img.classList.add('loaded');else img.addEventListener('load',()=>img.classList.add('loaded'),{once:true})});root.querySelectorAll('video').forEach(v=>v.addEventListener('loadedmetadata',()=>v.classList.add('loaded'),{once:true}))}
activateMedia(document);
const slideSets = {
  thumbnails:[['miniature-01.jpg','Miniature 01'],['miniature-02.jpg','Miniature 02'],['miniature-03.jpg','Miniature 03']],
  ads:[['animation-publicitaire-01.mp4','Animation publicitaire 01'],['animation-publicitaire-02.mp4','Animation publicitaire 02'],['animation-publicitaire-03.mp4','Animation publicitaire 03']]
};
document.querySelectorAll('[data-gallery]').forEach(galleryEl=>{
  const slides=slideSets[galleryEl.dataset.gallery],kind=galleryEl.dataset.kind;let current=0;
  function render(){const [file,caption]=slides[current], frame=galleryEl.querySelector('.slide-visual');frame.querySelector('video')?.pause();frame.innerHTML=kind==='video'?`<video src="${assets(file)}" preload="metadata" controls playsinline aria-label="${caption}"></video><div class="placeholder" aria-hidden="true"><span class="symbol">▶</span>Vidéo à ajouter<small>${file}</small></div>`:`<img src="${assets(file)}" alt="${caption}"><div class="placeholder" aria-hidden="true"><span class="symbol">▧</span>Image à ajouter<small>${file}</small></div>`;activateMedia(frame);galleryEl.querySelector('.slide-caption').textContent=caption;galleryEl.querySelector('.counter').textContent=`${String(current+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`}
  galleryEl.querySelector('.prev').addEventListener('click',()=>{current=(current-1+slides.length)%slides.length;render()});
  galleryEl.querySelector('.next').addEventListener('click',()=>{current=(current+1)%slides.length;render()});
  galleryEl.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();current=(current+(event.key==='ArrowRight'?1:-1)+slides.length)%slides.length;render()}});
  render();
});
