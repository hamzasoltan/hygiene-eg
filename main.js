/* ---------------------------------------------------------
   Hygiene Egypt | بيانات تجريبية — استبدلها ببيانات شركتك الفعلية
   تطوير حمزة
--------------------------------------------------------- */

let CURRENT_LANG = 'ar';

/* ================= من نستهدف ================= */
const AUDIENCE = [
  { icon:"bi-basket3-fill",
    title:"مجازر اللحمة", text:"أنظمة تعقيم أيدي وأحذية عالية الكفاءة تحافظ على معايير السلامة الغذائية داخل خطوط الذبح والتجهيز.",
    title_en:"Meat Slaughterhouses", text_en:"High-efficiency hand and boot sanitizing systems that maintain food safety standards throughout slaughter and processing lines." },
  { icon:"bi-egg-fried",
    title:"مصانع غذائية", text:"حلول هايجين متكاملة تقلل مخاطر التلوث وتناسب اشتراطات سلامة الغذاء على طول خط الإنتاج.",
    title_en:"Food Factories", text_en:"Complete hygiene solutions that reduce contamination risks and meet food safety requirements along the entire production line." },
  { icon:"bi-cookie",
    title:"مصانع الحلويات", text:"غرف ومحطات تعقيم مصممة لبيئات الإنتاج الحساسة، تحافظ على نظافة المنتج من أول خطوة.",
    title_en:"Confectionery Factories", text_en:"Sanitizing rooms and stations designed for sensitive production environments, keeping the product clean from the very first step." },
  { icon:"bi-capsule",
    title:"مصانع الأدوية", text:"أنظمة هايجين مطابقة لأعلى المعايير العالمية للصناعات الدوائية شديدة الحساسية.",
    title_en:"Pharmaceutical Factories", text_en:"Hygiene systems that meet the highest global standards for the highly sensitive pharmaceutical industry." },
];

function renderAudience(){
  const html = AUDIENCE.map(a => `
    <div class="col-sm-6 col-lg-3">
      <div class="audience-card">
        <div class="audience-ring"><i class="bi ${a.icon}"></i></div>
        <div>
          <h6>${CURRENT_LANG === 'en' ? a.title_en : a.title}</h6>
          <p>${CURRENT_LANG === 'en' ? a.text_en : a.text}</p>
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
    title:"ماكينة تعقيم البوت الفردي", title_en:"Single Boot Sanitizing Machine",
    type:"تعقيم قدم", type_en:"Foot Sanitizing",
    tags:["فرش دوارة", "استانلس ستيل"], tags_en:["Rotating brushes", "Stainless steel"],
  },
  {
    id:"p2", slug:"boot-washer-double", badge:false, category:["تعقيم قدم"],
    title:"ماكينة تعقيم البوت الزوجي", title_en:"Double Boot Sanitizing Machine",
    type:"تعقيم قدم", type_en:"Foot Sanitizing",
    tags:["فرش دوارة مزدوجة", "استانلس ستيل"], tags_en:["Dual rotating brushes", "Stainless steel"],
  },
  {
    id:"p3", slug:"foot-sanitizer-conveyor", badge:true, category:["تعقيم قدم"],
    title:"ماكينة تعقيم القدم", title_en:"Foot Sanitizing Machine",
    type:"تعقيم قدم", type_en:"Foot Sanitizing",
    tags:["استانلس ستيل", "سهلة التنظيف"], tags_en:["Stainless steel", "Easy to clean"],
  },
  {
    id:"p4", slug:"shoe-sole-washer", badge:false, category:["تعقيم قدم"],
    title:"ماكينة تعقيم الشوز", title_en:"Shoe Sanitizing Machine",
    type:"تعقيم قدم", type_en:"Foot Sanitizing",
    tags:["فرش دوارة", "استانلس ستيل"], tags_en:["Rotating brushes", "Stainless steel"],
  },
  {
    id:"p5", slug:"sink-double-photocell", badge:true, category:["أحواض"],
    title:"حوض غسيل زوجي فوتوسيل", title_en:"Double Photocell Sink",
    type:"أحواض", type_en:"Sinks",
    tags:["استانلس ستيل", "تشغيل فوتوسيل"], tags_en:["Stainless steel", "Photocell operated"],
  },
  {
    id:"p6", slug:"sink-single-photocell", badge:false, category:["أحواض"],
    title:"حوض غسيل فردي فوتوسيل", title_en:"Single Photocell Sink",
    type:"أحواض", type_en:"Sinks",
    tags:["استانلس ستيل", "تشغيل فوتوسيل"], tags_en:["Stainless steel", "Photocell operated"],
  },
  {
    id:"p7", slug:"sink-single-dispenser-dryer", badge:false, category:["أحواض"],
    title:"حوض غسيل فردي و ديسبنسر صابون و مجفف فوتوسيل", title_en:"Single Sink with Soap Dispenser & Dryer",
    type:"أحواض", type_en:"Sinks",
    tags:["ديسبنسر صابون", "مجفف أيدي", "تشغيل فوتوسيل"], tags_en:["Soap dispenser", "Hand dryer", "Photocell operated"],
  },
  {
    id:"p8", slug:"basket-washer-large", badge:false, category:["غسيل باسكت"],
    title:"ماكينة غسيل وتجفيف الباسكيت الحجم الكبير", title_en:"Large Basket Washer & Dryer",
    type:"غسيل باسكت", type_en:"Basket Washing",
    tags:["تنظف 550-900 باسكت/ساعة", "استانلس ستيل"], tags_en:["Cleans 550-900 baskets/hour", "Stainless steel"],
  },
  {
    id:"p9", slug:"basket-washer-small", badge:true, category:["غسيل باسكت"],
    title:"ماكينة غسيل الباسكيت الحجم الصغير", title_en:"Small Basket Washer",
    type:"غسيل باسكت", type_en:"Basket Washing",
    tags:["تنظف 250-450 باسكت/ساعة", "استانلس ستيل"], tags_en:["Cleans 250-450 baskets/hour", "Stainless steel"],
  },
  {
    id:"p25", slug:"basket-washer-sana-open", images:["basket-washer-sana-open", "basket-washer-sana-closed"], badge:false, category:["غسيل باسكت"],
    title:"ماكينة غسيل الباسكت – سانا فودز", title_en:"Sana Foods Basket Washing Machine",
    type:"غسيل باسكت", type_en:"Basket Washing",
    tags:["تصميم استانلس ستيل", "نظام غسيل الباسكت"], tags_en:["Stainless steel construction", "Basket washing system"],
  },
  {
    id:"p10", slug:"hand-sanitizer-arm", badge:false, category:["تعقيم يد"],
    title:"ماكينة تعقيم اليد", title_en:"Hand Sanitizing Machine",
    type:"تعقيم يد", type_en:"Hand Sanitizing",
    note:"3 أذرع لمنع خروج الموظف دون أن يعقم يديه", note_en:"3-arm barrier prevents staff from exiting without sanitizing their hands",
    tags:["3 أذرع مرور", "استانلس ستيل"], tags_en:["3-arm barrier", "Stainless steel"],
  },
  {
    id:"p11", slug:"hand-foot-sanitizer-brush", badge:false, category:["تعقيم يد","تعقيم قدم"],
    title:"ماكينة تعقيم اليد والأرجل", title_en:"Hand & Foot Sanitizing Machine",
    type:"تعقيم يد وتعقيم قدم", type_en:"Hand & Foot Sanitizing",
    note:"3 أذرع لمنع خروج الموظف دون أن يعقم يديه، فرش دوارة لغسيل وتجفيف القدم", note_en:"3-arm barrier prevents staff exit without sanitizing hands; rotating brushes wash and dry feet",
    tags:["3 أذرع مرور", "فرش دوارة للقدم"], tags_en:["3-arm barrier", "Rotating foot brushes"],
  },
  {
    id:"p12", slug:"hand-foot-washer-brush-2", badge:true, category:["تعقيم يد","تعقيم قدم"],
    title:"ماكينة غسيل وتجفيف وتعقيم الأيدي والأرجل", title_en:"Hand & Foot Washing, Drying & Sanitizing Machine",
    type:"تعقيم يد وتعقيم قدم", type_en:"Hand & Foot Sanitizing",
    note:"3 أذرع لمنع خروج الموظف دون أن يعقم يديه، فرش دوارة لغسيل وتجفيف القدم", note_en:"3-arm barrier prevents staff exit without sanitizing hands; rotating brushes wash and dry feet",
    tags:["3 أذرع مرور", "فرش دوارة للقدم"], tags_en:["3-arm barrier", "Rotating foot brushes"],
  },
  {
    id:"p13", slug:"hand-foot-washer-basin", badge:false, category:["تعقيم يد","تعقيم قدم"],
    title:"ماكينة غسيل وتجفيف وتعقيم الأيدي والأرجل", title_en:"Hand & Foot Washing, Drying & Sanitizing Machine",
    type:"تعقيم يد وتعقيم قدم", type_en:"Hand & Foot Sanitizing",
    note:"3 أذرع لمنع خروج الموظف دون أن يعقم يديه، حوض به معقم لتعقيم البوت", note_en:"3-arm barrier prevents staff exit without sanitizing hands; basin with sanitizer for boot disinfection",
    tags:["3 أذرع مرور", "حوض معقم للبوت"], tags_en:["3-arm barrier", "Boot sanitizing basin"],
  },
  {
    id:"p14", slug:"sink-single-knee", badge:false, category:["أحواض"],
    title:"حوض ركبة فردي", title_en:"Single Knee-Operated Sink",
    type:"أحواض", type_en:"Sinks",
    tags:["استانلس ستيل", "تشغيل بالركبة"], tags_en:["Stainless steel", "Knee operated"],
  },
  {
    id:"p15", slug:"conveyor-vertical", badge:false, category:["معدات مساعدة"],
    title:"سير نقل منتجات رأسي", title_en:"Vertical Product Conveyor",
    type:"معدات مساعدة", type_en:"Support Equipment",
    tags:["استانلس ستيل"], tags_en:["Stainless steel"],
  },
  {
    id:"p16", slug:"conveyor-horizontal", badge:false, category:["معدات مساعدة"],
    title:"سير نقل منتجات أفقي", title_en:"Horizontal Product Conveyor",
    type:"معدات مساعدة", type_en:"Support Equipment",
    tags:["استانلس ستيل"], tags_en:["Stainless steel"],
  },
  {
    id:"p17", slug:"staff-lockers", badge:false, category:["معدات مساعدة"],
    title:"دواليب عمال", title_en:"Staff Lockers",
    type:"معدات مساعدة", type_en:"Support Equipment",
    tags:["استانلس ستيل", "12 خانة بأقفال"], tags_en:["Stainless steel", "12 lockable compartments"],
  },
  {
    id:"p18", slug:"conveyor-stairs", badge:false, category:["معدات مساعدة"],
    title:"سير نقل منتجات سلم", title_en:"Incline Stair Conveyor",
    type:"معدات مساعدة", type_en:"Support Equipment",
    tags:["استانلس ستيل"], tags_en:["Stainless steel"],
  },
  {
    id:"p19", slug:"boot-rack", badge:false, category:["معدات مساعدة"],
    title:"حامل البوت", title_en:"Boot Rack",
    type:"معدات مساعدة", type_en:"Support Equipment",
    tags:["استانلس ستيل", "تركيب حائطي"], tags_en:["Stainless steel", "Wall mounted"],
  },
  {
    id:"p20", slug:"mask-holder", badge:false, category:["معدات مساعدة"],
    title:"حامل الكمامات", title_en:"Mask Holder",
    type:"معدات مساعدة", type_en:"Support Equipment",
    tags:["استانلس ستيل", "تركيب حائطي"], tags_en:["Stainless steel", "Wall mounted"],
  },
  {
    id:"p21", slug:"staff-exit-turnstile", badge:false, category:["معدات مساعدة"],
    title:"ماكينة خروج موظفين", title_en:"Staff Exit Turnstile",
    type:"معدات مساعدة", type_en:"Support Equipment",
    tags:["استانلس ستيل"], tags_en:["Stainless steel"],
  },
  {
    id:"p22", slug:"trash-bin-small", badge:false, category:["معدات مساعدة"],
    title:"صندوق زبالة صغير", title_en:"Small Trash Bin",
    type:"معدات مساعدة", type_en:"Support Equipment",
    images:["trash-bin-small-closed","trash-bin-small-open"],
    tags:["استانلس ستيل", "دواسة قدم"], tags_en:["Stainless steel", "Foot pedal"],
  },
  {
    id:"p23", slug:"tank-double-jacket", badge:false, category:["خزانات"],
    title:"خزان دبل جاكيت", title_en:"Double Jacket Tank",
    type:"خزانات", type_en:"Tanks",
    tags:["عزل ثلاثي بالصوف الحراري", "استانلس ستيل"], tags_en:["Triple thermal wool insulation", "Stainless steel"],
  },
  {
    id:"p24", slug:"tank-mixer-blender", badge:false, category:["خزانات"],
    title:"خزان تقليب بلندر", title_en:"Blender Mixing Tank",
    type:"خزانات", type_en:"Tanks",
    tags:["موتور تقليب", "استانلس ستيل"], tags_en:["Mixing motor", "Stainless steel"],
  },
];

function renderProductCard(p){
  const hasCarousel = Array.isArray(p.images) && p.images.length > 1;
  const carouselId = `pcar-${p.id}`;
  const isEn = CURRENT_LANG === 'en';
  const title = isEn ? p.title_en : p.title;
  const type = isEn ? p.type_en : p.type;
  const tags = isEn ? p.tags_en : p.tags;
  const note = isEn ? p.note_en : p.note;
  const badgeBestLabel = isEn ? 'Best Seller' : 'الأكثر طلبًا';

  const mediaHTML = hasCarousel ? `
        <div id="${carouselId}" class="carousel slide product-carousel" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${p.images.map((slug,i)=>`
            <div class="carousel-item ${i===0?'active':''}">
              <div class="slide-inner">
                <img src="images/products/${slug}.jpg" alt="${title}" class="prod-img" data-name="${title}">
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
    : `<img src="images/products/${p.slug}.jpg" alt="${title}" class="prod-img" data-name="${title}">`;

  return `
  <div class="col-sm-6 col-lg-4">
    <div class="product-card ${p.id === 'p25' ? 'basket-sana-card' : ''}" data-category="${p.category.join(',')}" data-bestseller="${p.badge}">
      <div class="card-media">
        ${p.badge ? `<span class="badge-best">${badgeBestLabel}</span>` : ''}
        <span class="badge-form">${type}</span>
        ${mediaHTML}
      </div>

      <div class="card-body-store">
        <div class="prod-title">${title}</div>
        ${note ? `<div class="prod-note">${note}</div>` : ''}
        <div class="prod-tags">
          ${tags.map(t=>`<span class="tag-pill">${t}</span>`).join("")}
        </div>
        <button class="btn-quote" onclick="requestQuote('${title.replace(/'/g,"")}')">
          <i class="bi bi-chat-dots-fill"></i> ${isEn ? 'Request a Quote' : 'اطلب عرض سعر'}
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

> احتاج عرض سعر لـ ${currentQuoteProduct}

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
  const cat = chip.dataset.filter || chip.textContent.trim();
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
/* أهم 24 شركة أول 24 خانة، وبعدين باقي الـ36 شركة. الاسم بيظهر كـ alt للصورة ولو مفيش لوجو */
const CLIENT_NAMES = [
  // شركات عندها لوجو
  "نستلة", "كوكاكولا", "مصر للطيران",
  "دومتي", "فارم فريتس", "بستانا",
  "فراي داي", "كوكي", "أطياب",
  "لينو", "فيتراك", "القبيصي للعصائر الفرش",
  "راية للصناعات الغذائية", "U-GO للعصائر والمشروبات الغازية", "كمارا للصناعات الغذائية",
  "الشمعدان للصناعات الغذائية", "حتحوت", "بريد فاست",
  "أصالة لمستحضرات التجميل", "العلوي", "لاروز",
  "Pet للتعبئة والتغليف", "أجبان المصيف", "ميدترانيو الصناعة بدمياط",
  "سنا فودز", "Al Sorya للصناعات الغذائية", "PAPCO للتعبئة والتغليف",
  "باتيسري 1945",
  // باقي الشركات (من غير لوجو حاليًا)
  "ريو فودز للصناعات الغذائية", "جريني للصناعات الغذائية",
  "العالمية للصناعات الغذائية", "الصعيدي", "الصردي",
  "الكحيا للعبوات الغذائية", "الأزهر لصناعة اللحوم", "الدمياطي لمنتجات الألبان",
  "مجزر وادينا للحوم السوداني", "مجزر البشاير للحوم البرازيلي", "الرضوى للصناعات الغذائية",
  "الناصر للصناعات الغذائية", "جلوبال للمياه المعدنية", "الفراشة لمواد التعبئة والتغليف",
  "روتو هوس لمواد التعبئة والتغليف", "مجزر الرواد للدواجن", "مينا بلاست للبلاستيكات الطبية",
  "فرش فارم لصناعة منتجات اللحوم", "حلوة للمياه المعدنية بالجوف", "غداف للمياه بتبوك",
  "واحة حائل للمياه بحائل", "قهوة بيشة بجدة", "جود للمياه بالرياض",
  "مجزر فنار المشاعر بمكة", "مجزر أضواء المشاعر بمكة", "حبة القمح بالرياض",
  "الزهرة الذهبية بالرياض", "خطوة جمل للتجارة بالرياض", "مطاعم شاورما بأبها",
  "الأغذية الحديثة بالرياض", "الطبيعة بأبها", "الهبة للصناعات الغذائية",
  "كوكي النوبرية", "كوكاكولا 6 أكتوبر", "مجزر قاصد كريم",
  "فروزن باك",
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
  const lessWrap = document.getElementById('clientsLessWrap');
  const lessBtn = document.getElementById('clientsLessBtn');

  grid.innerHTML = CLIENTS.slice(0, CLIENTS_INITIAL_COUNT).map(clientTileHTML).join("");
  attachClientImgFallback(grid);

  if(CLIENTS.length <= CLIENTS_INITIAL_COUNT){
    moreWrap?.remove();
    lessWrap?.remove();
    return;
  }

  moreBtn.addEventListener('click', ()=>{
    grid.insertAdjacentHTML('beforeend', CLIENTS.slice(CLIENTS_INITIAL_COUNT).map(clientTileHTML).join(""));
    attachClientImgFallback(grid);
    moreWrap.classList.add('d-none');
    lessWrap.classList.remove('d-none');
  });

  lessBtn.addEventListener('click', ()=>{
    grid.innerHTML = CLIENTS.slice(0, CLIENTS_INITIAL_COUNT).map(clientTileHTML).join("");
    attachClientImgFallback(grid);
    lessWrap.classList.add('d-none');
    moreWrap.classList.remove('d-none');
    document.getElementById('portfolio')?.scrollIntoView({ behavior:'smooth', block:'start' });
  });
}

/* ================= معرض أعمالنا ================= */
/* كل الصور والفيديوهات في مجلد واحد: images/gallery/
   سمّي كل ملف بالشكل: <slug>-1.jpg, <slug>-2.mp4 ... */
const GALLERY = [
  { slug:"production-line", icon:"bi-gear-wide-connected", emoji:"🍦",
    label:"تجهيز غرفة التعقيم بمصنع فراي داي", label_en:"Sanitizing Room Fit-Out at Fry Day Factory", media:[
    { type:"image", src:"images/gallery/1.jpg" },
    { type:"image", src:"images/gallery/2.jpg" },
    { type:"video", src:"images/gallery/3.mp4" },
    { type:"video", src:"images/gallery/4.mp4" },
  ] },
  { slug:"packaging", icon:"bi-box-seam", emoji:"📄",
    label:"تجهيز غرفة التعقيم بمصنع الوطنية", label_en:"Sanitizing Room Fit-Out at Al-Watania Factory", media:[
    { type:"video", src:"images/gallery/5.mp4" },
  ] },
  { slug:"quality-lab", icon:"bi-clipboard2-pulse", emoji:"🥩",
    label:"تجهيز غرفة التعقيم بمجزر قاصد كريم", label_en:"Sanitizing Room Fit-Out at Qasid Kareem Slaughterhouse", media:[
    { type:"video", src:"images/gallery/6.mp4" },
  ] },
  { slug:"raw-materials", icon:"bi-boxes", emoji:"🍫",
    label:"تجهيز غرفة التعقيم بمصنع رويال", label_en:"Sanitizing Room Fit-Out at Royal Factory", media:[
    { type:"video", src:"images/gallery/7.mp4" },
    { type:"image", src:"images/gallery/8.jpg" },
    { type:"image", src:"images/gallery/9.jpg" },
  ] },
  { slug:"distribution", icon:"bi-truck-front", emoji:"🍪",
    label:"تجهيز غرفة التعقيم بمصنع لينو", label_en:"Sanitizing Room Fit-Out at Lino Factory", media:[
    { type:"image", src:"images/gallery/10.jpg" },
  ] },
  { slug:"team", icon:"bi-people", emoji:"🍪",
    label:"تجهيز غرفة التعقيم بمصنع ريو فودز", label_en:"Sanitizing Room Fit-Out at Rio Foods Factory", media:[
    { type:"video", src:"images/gallery/11.mp4" },
  ] },
];

function renderGallery(){
  const html = GALLERY.map((g,i) => `
    <div class="col-sm-6 col-lg-4">
      <div class="gallery-tile" onclick="openGallery(${i})">
        <div class="g-visual">${g.emoji ? `<span class="g-emoji">${g.emoji}</span>` : `<i class="bi ${g.icon}"></i>`}</div>
        <div class="g-label">${CURRENT_LANG === 'en' ? g.label_en : g.label}</div>
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
  const label = CURRENT_LANG === 'en' ? g.label_en : g.label;
  const emptyText = CURRENT_LANG === 'en'
    ? 'Photos and videos for this section will be added soon'
    : 'الصور والفيديوهات الخاصة بهذا القسم هتتضاف قريبًا';

  const body = hasMedia ? `
    <div class="gmodal-header">
      ${g.emoji ? `<span class="g-emoji-sm">${g.emoji}</span>` : `<i class="bi ${g.icon}"></i>`}<span>${label}</span>
    </div>
    <div class="gmodal-grid">
      ${g.media.map(galleryMediaItemHTML).join("")}
    </div>`
    : `
    <div class="gmodal-empty">
      ${g.emoji ? `<span class="g-emoji-lg">${g.emoji}</span>` : `<i class="bi ${g.icon}"></i>`}
      <h6>${label}</h6>
      <p>${emptyText}</p>
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

/* ================= الوضع الليلي / النهاري ================= */
function updateThemeIcon(){
  const icon = document.getElementById('themeToggleIcon');
  if(!icon) return;
  const isLight = document.body.classList.contains('light-mode');
  icon.className = isLight ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
}

function toggleTheme(){
  document.body.classList.toggle('light-mode');
  try{ localStorage.setItem('he-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark'); }catch(e){}
  updateThemeIcon();
}

function initTheme(){
  let saved = null;
  try{ saved = localStorage.getItem('he-theme'); }catch(e){}
  if(saved === 'light') document.body.classList.add('light-mode');
  updateThemeIcon();
}

/* ================= عربي / إنجليزي (بداية أولية للنافبار والهيرو) ================= */
const I18N = {
  ar: {
    nav_about:"من نحن", nav_audience:"من نستهدف", nav_products:"منتجاتنا", nav_portfolio:"سابقة أعمالنا",
    nav_gallery:"معرض الأعمال", nav_contact:"اتصل بنا", nav_pay:"طرق الدفع", nav_quote:"اطلب عرض سعر",
    hero_eyebrow:"تصنيع محلي بمعايير عالمية",
    hero_title_1:"حماية تقدر تثق فيها من ", hero_title_em:"أول خطوة",
    hero_p:"Hygiene Egypt شركة متخصصة في توفير حلول الهايجين الصناعية وتجهيز غرف التعقيم، بأجهزة غسيل وتجفيف وتعقيم الأيدي وأنظمة تعقيم الأحذية، لخدمة مصانع الأغذية والأدوية وكل صناعة تتطلب أعلى معايير النظافة والسلامة.",
    hero_btn1:"تصفح المنتجات", hero_btn2:"تواصل مع فريق المبيعات",
    stat1:"سنوات خبرة", stat2:"عميل ومنشأة", stat3:"نظام ومعدة", stat4:"ضمان كامل",
    protect_tag:"نطاق تعقيم فعّال",

    about_title:"من نحن",
    about_p:"في هايجين إيجيبت، نؤمن بأن الجودة تبدأ من بيئة إنتاج آمنة، وأن تطبيق أعلى معايير الهايجين هو الأساس لحماية المنتج وتعزيز كفاءة التشغيل. نحن شركة متخصصة في توفير حلول الهايجين الصناعية وتجهيز غرف التعقيم، حيث نقدم مجموعة متكاملة من أجهزة غسيل وتجفيف وتعقيم الأيدي، وأنظمة تعقيم وتنظيف الأحذية والأرجل، إلى جانب تصميم وتجهيز غرف الهايجين بما يلبي احتياجات مصانع الأغذية والأدوية وغيرها من الصناعات التي تتطلب أعلى مستويات النظافة والسلامة.",
    value1_title:"رؤيتنا", value1_p:"نكون الاختيار الأول لحلول الهايجين الصناعية وتجهيز غرف التعقيم في السوق المحلي والعربي.",
    value2_title:"رسالتنا", value2_p:"بناء بيئة إنتاج أكثر أمانًا وكفاءة لعملائنا، من خلال حلول موثوقة وخدمة احترافية وشراكة طويلة الأمد.",
    value3_title:"الجودة", value3_p:"حلول أوتوماتيكية بخامات عالية الجودة، مصممة لتقليل مخاطر التلوث والالتزام بالمعايير العالمية لسلامة الإنتاج.",
    value4_title:"فريقنا", value4_p:"فريق متخصص في تصميم وتجهيز حلول الهايجين الصناعية، بيطوّر الأنظمة باستمرار لخدمة كل صناعة تتطلب أعلى معايير النظافة.",

    audience_title:"من نستهدف",
    audience_sub:"حلولنا مصممة لتغطية احتياجات القطاعات الغذائية والدوائية التي تتطلب أعلى معايير الهايجين الصناعي",

    products_title:"منتجاتنا",
    products_sub:"تشكيلة من أجهزة وأنظمة الهايجين الصناعي تناسب كل قطاع — للحصول على السعر والمواصفات المناسبة لنشاطك، اطلب عرض سعر مباشر",
    chip_all:"الكل", chip_best:"الأكثر طلبًا", chip_hand:"تعقيم يد", chip_foot:"تعقيم قدم",
    chip_basket:"غسيل باسكت", chip_sinks:"أحواض", chip_cabinets:"خزانات", chip_support:"معدات مساعدة",

    portfolio_title:"سابقة أعمالنا",
    portfolio_sub:"من أهم الشركات والمنشآت اللي وثقت في حلول Hygiene Egypt",
    btn_more:"عرض المزيد", btn_less:"عرض أقل",

    gallery_title:"معرض أعمالنا",
    gallery_sub:"لمحة من داخل خط الإنتاج والتعبئة والتغليف بالمصنع",

    contact_title:"اتصل بنا",
    contact_sub:"جاهزين نجاوب على استفساراتك ونجهزلك عرض سعر يناسب نشاطك",
    form_name:"الاسم", form_name_ph:"اسمك بالكامل",
    form_phone:"رقم الهاتف",
    form_org:"اسم الجهة / المنشأة", form_org_ph:"اسم الجهة أو المنشأة",
    form_activity:"نوع النشاط",
    activity_placeholder:"اختر نوع النشاط",
    activity_note:"*يرجى اختيار النشاط",
    activity1:"مصانع غذائية / مصانع المشروبات",
    activity2:"مصانع غذائية / مصانع المخبوزات والحلويات",
    activity3:"مصانع غذائية / مصانع التعليب والحفظ",
    activity4:"مصانع غذائية / مصانع الحبوب والنشويات",
    activity5:"منشأة طبية",
    form_location:"موقع المصنع", form_location_ph:"المحافظة / المنطقة الصناعية",
    form_message:"رسالتك", form_message_ph:"اكتب تفاصيل طلبك أو استفسارك...",
    form_submit:"إرسال الطلب",
    info_phone:"اتصل بنا", info_whatsapp:"واتساب", info_whatsapp_sub:"متاحين للرد على استفساراتك يوميًا",
    info_email:"البريد الإلكتروني", info_website:"الموقع الإلكتروني",

    footer_desc:"حلول الهايجين الصناعية وتجهيز غرف التعقيم، بأجهزة غسيل وتجفيف وتعقيم الأيدي وأنظمة تعقيم الأحذية، لخدمة مصانع الأغذية والأدوية وكل صناعة تتطلب أعلى معايير النظافة والسلامة.",
    footer_quicklinks:"روابط سريعة", footer_support:"الدعم", footer_contact_link:"تواصل معنا", footer_follow:"تابعنا",
    footer_copyright:"© 2026 Hygiene Egypt لحلول الهايجين الصناعية. جميع الحقوق محفوظة.",
    footer_dev:"تطوير",

    quote_modal_title:"اطلب عرض سعر",
  },
  en: {
    nav_about:"About Us", nav_audience:"Who We Serve", nav_products:"Products", nav_portfolio:"Our Work",
    nav_gallery:"Gallery", nav_contact:"Contact", nav_pay:"Payment Methods", nav_quote:"Request a Quote",
    hero_eyebrow:"Locally manufactured to global standards",
    hero_title_1:"Protection you can trust, from the ", hero_title_em:"first step",
    hero_p:"Hygiene Egypt specializes in industrial hygiene solutions and sanitation room fit-outs — hand washing, drying and sanitizing equipment, plus boot sanitizing systems — serving food and pharmaceutical factories and any industry that demands the highest standards of cleanliness and safety.",
    hero_btn1:"Browse Products", hero_btn2:"Talk to Sales",
    stat1:"Years of experience", stat2:"Clients & facilities", stat3:"Systems & machines", stat4:"Full warranty",
    protect_tag:"Effective sanitizing range",

    about_title:"About Us",
    about_p:"At Hygiene Egypt, we believe quality begins with a safe production environment, and that applying the highest hygiene standards is the foundation for protecting the product and boosting operational efficiency. We specialize in industrial hygiene solutions and sanitation room fit-outs, offering a full range of hand washing, drying and sanitizing equipment, boot and foot sanitizing systems, along with the design and fit-out of hygiene rooms that meet the needs of food and pharmaceutical factories and any industry requiring the highest levels of cleanliness and safety.",
    value1_title:"Our Vision", value1_p:"To be the first choice for industrial hygiene solutions and sanitation room fit-outs in the local and regional market.",
    value2_title:"Our Mission", value2_p:"Building a safer, more efficient production environment for our clients through reliable solutions, professional service, and long-term partnership.",
    value3_title:"Quality", value3_p:"Automated solutions built with high-quality materials, designed to reduce contamination risks and comply with global production safety standards.",
    value4_title:"Our Team", value4_p:"A team specialized in designing and fitting out industrial hygiene solutions, continuously developing systems to serve every industry that demands the highest cleanliness standards.",

    audience_title:"Who We Serve",
    audience_sub:"Our solutions are designed to cover the needs of food and pharmaceutical sectors that require the highest industrial hygiene standards",

    products_title:"Our Products",
    products_sub:"A range of industrial hygiene equipment and systems suited to every sector — for pricing and specifications tailored to your business, request a quote directly",
    chip_all:"All", chip_best:"Best Sellers", chip_hand:"Hand Sanitizing", chip_foot:"Foot Sanitizing",
    chip_basket:"Basket Washing", chip_sinks:"Sinks", chip_cabinets:"Cabinets", chip_support:"Support Equipment",

    portfolio_title:"Our Work",
    portfolio_sub:"Some of the leading companies and facilities that have trusted Hygiene Egypt's solutions",
    btn_more:"Show More", btn_less:"Show Less",

    gallery_title:"Our Gallery",
    gallery_sub:"A look inside our production line and factory packaging process",

    contact_title:"Contact Us",
    contact_sub:"We're ready to answer your questions and prepare a quote that fits your business",
    form_name:"Name", form_name_ph:"Your full name",
    form_phone:"Phone Number",
    form_org:"Company / Facility Name", form_org_ph:"Name of your company or facility",
    form_activity:"Industry Type",
    activity_placeholder:"Select industry type",
    activity_note:"*Please select an industry type",
    activity1:"Food Factories / Beverage Factories",
    activity2:"Food Factories / Bakeries & Confectionery",
    activity3:"Food Factories / Canning & Preservation",
    activity4:"Food Factories / Grains & Starches",
    activity5:"Medical Facility",
    form_location:"Factory Location", form_location_ph:"Governorate / Industrial Zone",
    form_message:"Your Message", form_message_ph:"Write your request or inquiry details...",
    form_submit:"Send Request",
    info_phone:"Call Us", info_whatsapp:"WhatsApp", info_whatsapp_sub:"Available to answer your inquiries daily",
    info_email:"Email", info_website:"Website",

    footer_desc:"Industrial hygiene solutions and sanitation room fit-outs, with hand washing, drying and sanitizing equipment and boot sanitizing systems, serving food and pharmaceutical factories and any industry that demands the highest standards of cleanliness and safety.",
    footer_quicklinks:"Quick Links", footer_support:"Support", footer_contact_link:"Contact Us", footer_follow:"Follow Us",
    footer_copyright:"© 2026 Hygiene Egypt for Industrial Hygiene Solutions. All rights reserved.",
    footer_dev:"Developed by",

    quote_modal_title:"Request a Quote",
  }
};

function applyLanguage(lang){
  CURRENT_LANG = lang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(I18N[lang] && I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.dataset.i18nPlaceholder;
    if(I18N[lang] && I18N[lang][key] !== undefined) el.setAttribute('placeholder', I18N[lang][key]);
  });

  const label = document.getElementById('langToggleLabel');
  if(label) label.textContent = lang === 'ar' ? 'EN' : 'AR';

  /* إعادة رسم السيكشنز اللي بتتبنى من الجافاسكريبت عشان تاخد اللغة الجديدة */
  renderAudience();
  renderProducts();
  renderGallery();
}

function toggleLanguage(){
  const next = CURRENT_LANG === 'ar' ? 'en' : 'ar';
  applyLanguage(next);
  try{ localStorage.setItem('he-lang', next); }catch(e){}
}

function initLanguage(){
  let saved = null;
  try{ saved = localStorage.getItem('he-lang'); }catch(e){}
  applyLanguage(saved || 'ar');
}

renderClients();
initContactFormValidation();
initTheme();
initLanguage();
