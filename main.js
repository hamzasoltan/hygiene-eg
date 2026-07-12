/* ---------------------------------------------------------
   Hygiene Egypt | بيانات تجريبية — استبدلها ببيانات شركتك الفعلية
   تطوير حمزة
--------------------------------------------------------- */

/* ================= من نستهدف ================= */
const AUDIENCE = [
  { icon:"bi-basket3-fill", title:"مجازر اللحمة", text:"أنظمة تعقيم أيدي وأحذية عالية الكفاءة تحافظ على معايير السلامة الغذائية داخل خطوط الذبح والتجهيز." },
  { icon:"bi-egg-fried", title:"مصانع غذائية", text:"حلول هايجين متكاملة تقلل مخاطر التلوث وتناسب اشتراطات سلامة الغذاء على طول خط الإنتاج." },
  { icon:"bi-cookie", title:"مصانع الحلويات", text:"غرف ومحطات تعقيم مصممة لبيئات الإنتاج الحساسة، تحافظ على نظافة المنتج من أول خطوة." },
  { icon:"bi-capsule", title:"مصانع الأدوية", text:"أنظمة هايجين مطابقة لأعلى المعايير العالمية للصناعات الدوائية شديدة الحساسية." },
];

function renderAudience(){
  const html = AUDIENCE.map(a => `
    <div class="col-sm-6 col-lg-3">
      <div class="audience-card">
        <div class="audience-ring"><i class="bi ${a.icon}"></i></div>
        <div>
          <h6>${a.title}</h6>
          <p>${a.text}</p>
        </div>
      </div>
    </div>`).join("");
  document.getElementById('audienceGrid').innerHTML = html;
}

/* ================= منتجاتنا ================= */
/* كل منتج بيدور على صورة محلية باسم: images/products/<slug>.jpg
   لو الصورة مش موجودة، بتظهر بلاسهولدر بسيط لحد ما تتضاف الصورة الحقيقية */
const PRODUCTS = [
  {
    id:"p1", slug:"boot-washer-single", badge:false, category:["تعقيم قدم"],
    title:"ماكينة تعقيم البوت الفردي",
    type:"تعقيم قدم",
    tags:["فرش دوارة", "استانلس ستيل"],
  },
  {
    id:"p2", slug:"boot-washer-double", badge:false, category:["تعقيم قدم"],
    title:"ماكينة تعقيم البوت الزوجي",
    type:"تعقيم قدم",
    tags:["فرش دوارة مزدوجة", "استانلس ستيل"],
  },
  {
    id:"p3", slug:"foot-sanitizer-conveyor", badge:true, category:["تعقيم قدم"],
    title:"ماكينة تعقيم القدم",
    type:"تعقيم قدم",
    tags:["استانلس ستيل", "سهلة التنظيف"],
  },
  {
    id:"p4", slug:"shoe-sole-washer", badge:false, category:["تعقيم قدم"],
    title:"ماكينة تعقيم الشوز",
    type:"تعقيم قدم",
    tags:["فرش دوارة", "استانلس ستيل"],
  },
  {
    id:"p5", slug:"sink-double-photocell", badge:true, category:["أحواض"],
    title:"حوض غسيل زوجي فوتوسيل",
    type:"أحواض",
    tags:["استانلس ستيل", "تشغيل فوتوسيل"],
  },
  {
    id:"p6", slug:"sink-single-photocell", badge:false, category:["أحواض"],
    title:"حوض غسيل فردي فوتوسيل",
    type:"أحواض",
    tags:["استانلس ستيل", "تشغيل فوتوسيل"],
  },
  {
    id:"p7", slug:"sink-single-dispenser-dryer", badge:false, category:["أحواض"],
    title:"حوض غسيل فردي و ديسبنسر صابون و مجفف فوتوسيل",
    type:"أحواض",
    tags:["ديسبنسر صابون", "مجفف أيدي", "تشغيل فوتوسيل"],
  },
  {
    id:"p8", slug:"basket-washer-large", badge:false, category:["غسيل باسكت"],
    title:"ماكينة غسيل وتجفيف الباسكيت الحجم الكبير",
    type:"غسيل باسكت",
    tags:["تنظف 550-900 باسكت/ساعة", "استانلس ستيل"],
  },
  {
    id:"p9", slug:"basket-washer-small", badge:true, category:["غسيل باسكت"],
    title:"ماكينة غسيل الباسكيت الحجم الصغير",
    type:"غسيل باسكت",
    tags:["تنظف 250-450 باسكت/ساعة", "استانلس ستيل"],
  },
  {
    id:"p10", slug:"hand-sanitizer-arm", badge:false, category:["تعقيم يد"],
    title:"ماكينة تعقيم اليد",
    type:"تعقيم يد",
    note:"3 أذرع لمنع خروج الموظف دون أن يعقم يديه",
    tags:["3 أذرع مرور", "استانلس ستيل"],
  },
  {
    id:"p11", slug:"hand-foot-sanitizer-brush", badge:false, category:["تعقيم يد","تعقيم قدم"],
    title:"ماكينة تعقيم اليد والأرجل",
    type:"تعقيم يد وتعقيم قدم",
    note:"3 أذرع لمنع خروج الموظف دون أن يعقم يديه، فرش دوارة لغسيل وتجفيف القدم",
    tags:["3 أذرع مرور", "فرش دوارة للقدم"],
  },
  {
    id:"p12", slug:"hand-foot-washer-brush-2", badge:true, category:["تعقيم يد","تعقيم قدم"],
    title:"ماكينة غسيل وتجفيف وتعقيم الأيدي والأرجل",
    type:"تعقيم يد وتعقيم قدم",
    note:"3 أذرع لمنع خروج الموظف دون أن يعقم يديه، فرش دوارة لغسيل وتجفيف القدم",
    tags:["3 أذرع مرور", "فرش دوارة للقدم"],
  },
  {
    id:"p13", slug:"hand-foot-washer-basin", badge:false, category:["تعقيم يد","تعقيم قدم"],
    title:"ماكينة غسيل وتجفيف وتعقيم الأيدي والأرجل",
    type:"تعقيم يد وتعقيم قدم",
    note:"3 أذرع لمنع خروج الموظف دون أن يعقم يديه، حوض به معقم لتعقيم البوت",
    tags:["3 أذرع مرور", "حوض معقم للبوت"],
  },
  {
    id:"p14", slug:"sink-single-knee", badge:false, category:["أحواض"],
    title:"حوض ركبة فردي",
    type:"أحواض",
    tags:["استانلس ستيل", "تشغيل بالركبة"],
  },
  {
    id:"p15", slug:"conveyor-vertical", badge:false, category:["معدات مساعدة"],
    title:"سير نقل منتجات رأسي",
    type:"معدات مساعدة",
    tags:["استانلس ستيل"],
  },
  {
    id:"p16", slug:"conveyor-horizontal", badge:false, category:["معدات مساعدة"],
    title:"سير نقل منتجات أفقي",
    type:"معدات مساعدة",
    tags:["استانلس ستيل"],
  },
  {
    id:"p17", slug:"staff-lockers", badge:false, category:["معدات مساعدة"],
    title:"دواليب عمال",
    type:"معدات مساعدة",
    tags:["استانلس ستيل", "12 خانة بأقفال"],
  },
  {
    id:"p18", slug:"conveyor-stairs", badge:false, category:["معدات مساعدة"],
    title:"سير نقل منتجات سلم",
    type:"معدات مساعدة",
    tags:["استانلس ستيل"],
  },
  {
    id:"p19", slug:"boot-rack", badge:false, category:["معدات مساعدة"],
    title:"حامل البوت",
    type:"معدات مساعدة",
    tags:["استانلس ستيل", "تركيب حائطي"],
  },
  {
    id:"p20", slug:"mask-holder", badge:false, category:["معدات مساعدة"],
    title:"حامل الكمامات",
    type:"معدات مساعدة",
    tags:["استانلس ستيل", "تركيب حائطي"],
  },
  {
    id:"p21", slug:"staff-exit-turnstile", badge:false, category:["معدات مساعدة"],
    title:"ماكينة خروج موظفين",
    type:"معدات مساعدة",
    tags:["استانلس ستيل"],
  },
  {
    id:"p22", slug:"trash-bin-small", badge:false, category:["معدات مساعدة"],
    title:"صندوق زبالة صغير",
    type:"معدات مساعدة",
    images:["trash-bin-small-closed","trash-bin-small-open"],
    tags:["استانلس ستيل", "دواسة قدم"],
  },
  {
    id:"p23", slug:"tank-double-jacket", badge:false, category:["خزانات"],
    title:"خزان دبل جاكيت",
    type:"خزانات",
    tags:["عزل ثلاثي بالصوف الحراري", "استانلس ستيل"],
  },
  {
    id:"p24", slug:"tank-mixer-blender", badge:false, category:["خزانات"],
    title:"خزان تقليب بلندر",
    type:"خزانات",
    tags:["موتور تقليب", "استانلس ستيل"],
  },
];

function renderProductCard(p){
  const hasCarousel = Array.isArray(p.images) && p.images.length > 1;
  const carouselId = `pcar-${p.id}`;

  const mediaHTML = hasCarousel ? `
        <div id="${carouselId}" class="carousel slide product-carousel" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${p.images.map((slug,i)=>`
            <div class="carousel-item ${i===0?'active':''}">
              <div class="slide-inner">
                <img src="images/products/${slug}.jpg" alt="${p.title}" class="prod-img" data-name="${p.title}">
              </div>
            </div>`).join("")}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
          <div class="carousel-indicators">
            ${p.images.map((_,i)=>`<button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${i}" class="${i===0?'active':''}"></button>`).join("")}
          </div>
        </div>`
    : `<img src="images/products/${p.slug}.jpg" alt="${p.title}" class="prod-img" data-name="${p.title}">`;

  return `
  <div class="col-sm-6 col-lg-4">
    <div class="product-card" data-category="${p.category.join(',')}" data-bestseller="${p.badge}">
      <div class="card-media">
        ${p.badge ? '<span class="badge-best">الأكثر طلبًا</span>' : ''}
        <span class="badge-form">${p.type}</span>
        ${mediaHTML}
      </div>

      <div class="card-body-store">
        <div class="prod-title">${p.title}</div>
        ${p.note ? `<div class="prod-note">${p.note}</div>` : ''}
        <div class="prod-tags">
          ${p.tags.map(t=>`<span class="tag-pill">${t}</span>`).join("")}
        </div>
        <button class="btn-quote" onclick="requestQuote('${p.title.replace(/'/g,"")}')">
          <i class="bi bi-chat-dots-fill ms-1"></i> اطلب عرض سعر
        </button>
      </div>
    </div>
  </div>`;
}

function renderProducts(){
  document.getElementById('productGrid').innerHTML = PRODUCTS.map(renderProductCard).join("");

  document.querySelectorAll('.prod-img').forEach(img=>{
    img.addEventListener('error', ()=>{
      const placeholder = document.createElement('div');
      placeholder.className = 'photo-placeholder';
      placeholder.innerHTML = `<i class="bi bi-image"></i><span>${img.dataset.name}</span>`;
      img.replaceWith(placeholder);
    }, { once:true });
  });
}

let currentQuoteProduct = "";

function requestQuote(productName){
  currentQuoteProduct = productName;
  document.getElementById('quoteProductName').innerHTML = `<i class="bi bi-box-seam"></i> ${productName}`;

  const form = document.getElementById('quoteForm');
  form.reset();
  const submitBtn = document.getElementById('quoteSubmitBtn');
  submitBtn.disabled = true;

  new bootstrap.Modal(document.getElementById('quoteModal')).show();
}

function sendQuoteToWhatsapp(){
  const inputs = document.querySelectorAll('#quoteForm input, #quoteForm select, #quoteForm textarea');
  const [name, phone, org, activity, location, message] = inputs;
  const text = `\`مـرحـبـاً شـركـة هـايـجـيـن إيـجـبـت\`

> احناج عرض سعر لـ ${currentQuoteProduct}

*الاسم : ${name.value || '—'}*

*رقم الهاتف : ${phone.value || '—'}*

*الجهة : ${org.value || '—'}*

*النشاط : ${activity.value || '—'}*

*موقع المصنع : ${location.value || '—'}*

*الرسالة : ${message.value || '—'}*`;
  window.open(`https://wa.me/201007405642?text=${encodeURIComponent(text)}`, '_blank');
}

/* فلترة المنتجات حسب الفئة */
document.addEventListener('click', (e)=>{
  const chip = e.target.closest('.chip');
  if(!chip) return;
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
  chip.classList.add('active');
  const cat = chip.textContent.trim();
  document.querySelectorAll('#productGrid > div').forEach(card=>{
    const productCard = card.querySelector('.product-card');
    const cardCats = productCard.dataset.category.split(',');
    const isBestseller = productCard.dataset.bestseller === 'true';
    let show;
    if(cat === 'الكل') show = true;
    else if(cat === 'الأكثر طلبًا') show = isBestseller;
    else show = cardCats.includes(cat);
    card.style.display = show ? '' : 'none';
  });
});

/* ================= سابقة أعمالنا ================= */
/* حط شعارات العملاء داخل images/clients/ بأسماء أرقام بسيطة: 1.png, 2.png, 3.png ... حتى 80.png (خلفية شفافة أفضل حاجة) */
/* أهم 12 شركة أول 12 خانة، وبعدين باقي الـ48 شركة. الاسم بيظهر كـ alt للصورة ولو مفيش لوجو */
const CLIENT_NAMES = [
  // أهم 12 شركة
  "نستلة", "كوكاكولا", "مصر للطيران", "دومتي", "فارم فريتس", "بستانا",
  "فراي داي", "كوكي", "أطياب", "لينو", "فيتراك", "القبيصي للعصائر الفرش",
  // باقي الشركات - مصر
  "راية للصناعات الغذائية", "الكحيا للعبوات الغذائية",
  "Pet للتعبئة والتغليف", "الأزهر لصناعة اللحوم", "الدمياطي لمنتجات الألبان",
  "مجزر وادينا للحوم السوداني", "مجزر البشاير للحوم البرازيلي", "الرضوى للصناعات الغذائية",
  "ريو فودز للصناعات الغذائية", "الناصر للصناعات الغذائية", "جلوبال للمياه المعدنية",
  "الفراشة لمواد التعبئة والتغليف", "روتو هوس لمواد التعبئة والتغليف", "مجزر الرواد للدواجن",
  "U-GO للعصائر والمشروبات الغازية", "مينا بلاست للبلاستيكات الطبية", "كمارا للصناعات الغذائية",
  "الشمعدان للصناعات الغذائية", "فرش فارم لصناعة منتجات اللحوم", "ميدترانيو الصناعة بدمياط",
  // السعودية
  "حلوة للمياه المعدنية بالجوف", "غداف للمياه بتبوك", "واحة حائل للمياه بحائل",
  "قهوة بيشة بجدة", "أجبان المصيف", "جود للمياه بالرياض",
  "مجزر فنار المشاعر بمكة", "مجزر أضواء المشاعر بمكة", "حبة القمح بالرياض",
  "الزهرة الذهبية بالرياض", "خطوة جمل للتجارة بالرياض", "مطاعم شاورما بأبها",
  "الأغذية الحديثة بالرياض", "الطبيعة بأبها",
  // إضافات
  "جريني للصناعات الغذائية", "الهبة للصناعات الغذائية", "كوكي النوبرية",
  "كوكاكولا 6 أكتوبر", "مجزر قاصد كريم", "العالمية للصناعات الغذائية",
  "فروزن باك", "الصعيدي", "العلوي", "حتحوت", "لاروز", "الصردي", "بريد فاست", "أصالة",
];

const CLIENTS = CLIENT_NAMES.map((name, i) => ({ slug: String(i + 1), name }));
const CLIENTS_INITIAL_COUNT = 12;

function clientTileHTML(c){
  return `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="client-tile">
        <img src="images/clients/${c.slug}.png" alt="${c.name}" data-name="${c.name}">
      </div>
    </div>`;
}

function attachClientImgFallback(scope){
  scope.querySelectorAll('.client-tile img').forEach(img=>{
    img.addEventListener('error', ()=>{
      const placeholder = document.createElement('div');
      placeholder.className = 'client-placeholder';
      placeholder.innerHTML = `<i class="bi bi-building"></i><span>${img.dataset.name}</span>`;
      img.replaceWith(placeholder);
    }, { once:true });
  });
}

function renderClients(){
  const grid = document.getElementById('clientsGrid');
  const moreWrap = document.getElementById('clientsMoreWrap');
  const moreBtn = document.getElementById('clientsMoreBtn');

  grid.innerHTML = CLIENTS.slice(0, CLIENTS_INITIAL_COUNT).map(clientTileHTML).join("");
  attachClientImgFallback(grid);

  if(CLIENTS.length <= CLIENTS_INITIAL_COUNT){
    moreWrap?.remove();
    return;
  }

  moreBtn.addEventListener('click', ()=>{
    grid.insertAdjacentHTML('beforeend', CLIENTS.slice(CLIENTS_INITIAL_COUNT).map(clientTileHTML).join(""));
    attachClientImgFallback(grid);
    moreWrap.remove();
  });
}

/* ================= معرض أعمالنا ================= */
/* كل الصور والفيديوهات في مجلد واحد: images/gallery/
   سمّي كل ملف بالشكل: <slug>-1.jpg, <slug>-2.mp4 ... */
const GALLERY = [
  { slug:"production-line", icon:"bi-gear-wide-connected", emoji:"🍦", label:"تجهيز غرفة التعقيم بمصنع فراي داي", media:[
    { type:"image", src:"images/gallery/1.jpg" },
    { type:"image", src:"images/gallery/2.jpg" },
    { type:"video", src:"images/gallery/3.mp4" },
    { type:"video", src:"images/gallery/4.mp4" },
  ] },
  { slug:"packaging", icon:"bi-box-seam", emoji:"📄", label:"تجهيز غرفة التعقيم بمصنع الوطنية", media:[
    { type:"video", src:"images/gallery/5.mp4" },
  ] },
  { slug:"quality-lab", icon:"bi-clipboard2-pulse", emoji:"🥩", label:"تجهيز غرفة التعقيم بمجزر قاصد كريم", media:[
    { type:"video", src:"images/gallery/6.mp4" },
  ] },
  { slug:"raw-materials", icon:"bi-boxes", emoji:"🍫", label:"تجهيز غرفة التعقيم بمصنع رويال", media:[
    { type:"video", src:"images/gallery/7.mp4" },
    { type:"image", src:"images/gallery/8.jpg" },
    { type:"image", src:"images/gallery/9.jpg" },
  ] },
  { slug:"distribution", icon:"bi-truck-front", emoji:"🍪", label:"تجهيز غرفة التعقيم بمصنع لينو", media:[
    { type:"image", src:"images/gallery/10.jpg" },
  ] },
  { slug:"team", icon:"bi-egg-fried", label:"تجهيز غرفة التعقيم بمصنع ريو فودز", media:[
    { type:"video", src:"images/gallery/11.mp4" },
  ] },
];

function renderGallery(){
  const html = GALLERY.map((g,i) => `
    <div class="col-sm-6 col-lg-4">
      <div class="gallery-tile" onclick="openGallery(${i})">
        <div class="g-visual">${g.emoji ? `<span class="g-emoji">${g.emoji}</span>` : `<i class="bi ${g.icon}"></i>`}</div>
        <div class="g-label">${g.label}</div>
      </div>
    </div>`).join("");
  document.getElementById('galleryGrid').innerHTML = html;
}

function galleryMediaItemHTML(item){
  if(item.type === 'video'){
    return `<div class="gmodal-item"><video src="${item.src}" controls muted playsinline></video></div>`;
  }
  return `<div class="gmodal-item"><img src="${item.src}" alt="" onclick="openImgLightbox('${item.src}')"></div>`;
}

function openGallery(i){
  const g = GALLERY[i];
  const hasMedia = g.media && g.media.length > 0;

  const body = hasMedia ? `
    <div class="gmodal-header">
      ${g.emoji ? `<span class="g-emoji-sm">${g.emoji}</span>` : `<i class="bi ${g.icon}"></i>`}<span>${g.label}</span>
    </div>
    <div class="gmodal-grid">
      ${g.media.map(galleryMediaItemHTML).join("")}
    </div>`
    : `
    <div class="gmodal-empty">
      ${g.emoji ? `<span class="g-emoji-lg">${g.emoji}</span>` : `<i class="bi ${g.icon}"></i>`}
      <h6>${g.label}</h6>
      <p>الصور والفيديوهات الخاصة بهذا القسم هتتضاف قريبًا</p>
    </div>`;

  document.getElementById('galleryModalBody').innerHTML = body;
  new bootstrap.Modal(document.getElementById('galleryModal')).show();

  /* الفيديوهات تفضل مكتومة الصوت دايمًا حتى لو حد حاول يفك الكتم من الكنترولز */
  document.querySelectorAll('#galleryModalBody video').forEach(v=>{
    v.muted = true;
    v.addEventListener('volumechange', ()=>{ v.muted = true; });
  });
}

function openImgLightbox(src){
  document.getElementById('imgLightboxImg').src = src;
  document.getElementById('imgLightbox').classList.add('show');
}

function closeImgLightbox(){
  document.getElementById('imgLightbox').classList.remove('show');
}

/* ================= اتصل بنا ================= */
function sendToWhatsapp(){
  const inputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
  const [name, phone, org, activity, location, message] = inputs;
  const text = `\`مـرحـبـاً شـركـة هـايـجـيـن إيـجـبـت\`

*الاسم : ${name.value || '—'}*

*رقم الهاتف : ${phone.value || '—'}*

*الجهة : ${org.value || '—'}*

*النشاط : ${activity.value || '—'}*

*موقع المصنع : ${location.value || '—'}*

*الرسالة : ${message.value || '—'}*`;
  window.open(`https://wa.me/201007405642?text=${encodeURIComponent(text)}`, '_blank');
}

/* تفعيل/تعطيل زرار الإرسال حسب اكتمال كل حقول الفورم */
function initFormValidation(formId, buttonId){
  const form = document.getElementById(formId);
  const submitBtn = document.getElementById(buttonId);
  if(!form || !submitBtn) return;
  const fields = form.querySelectorAll('input, select, textarea');

  function updateButtonState(){
    let allFilled = true;
    fields.forEach(f=>{
      if(!f.value || !f.value.trim()) allFilled = false;
    });
    submitBtn.disabled = !allFilled;
  }

  fields.forEach(f=>{
    f.addEventListener('input', updateButtonState);
    f.addEventListener('change', updateButtonState);
  });

  updateButtonState();
  return updateButtonState;
}

function initContactFormValidation(){
  initFormValidation('contactForm', 'submitBtn');
  const quoteUpdate = initFormValidation('quoteForm', 'quoteSubmitBtn');
  /* إعادة الفحص كل ما المودال يتفتح، عشان الفورم بعد الـ reset يبان الزرار مقفول */
  document.getElementById('quoteModal')?.addEventListener('shown.bs.modal', quoteUpdate);
}

/* إغلاق قائمة الموبايل عند اختيار رابط */
document.querySelectorAll('.nav-link-store').forEach(link=>{
  link.addEventListener('click', ()=>{
    const nav = document.getElementById('navMain');
    if(nav.classList.contains('show')){
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});

renderAudience();
renderProducts();
renderClients();
renderGallery();
initContactFormValidation();
