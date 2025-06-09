// Çeviri verileri
const translations = {
    'TR': {
        'hakkimizda': 'HAKKIMIZDA',
        'depolarimiz': 'DEPOLARIMIZ',
        'hizmet_agimiz': 'HİZMET AĞIMIZ',
        'iletisim': 'İLETİŞİM',
        'hero_title': 'AKÇAY LOJİSTİK HİZMETLERİ',
        'hero_subtitle': 'Güvenilir lojistik çözümleriniz için yanınızdayız',
        'depo_baslik': 'DEPOLARIMIZ',
        'ısı_kontrollu_depolama': 'Isı kontrollü depolama',
        '7/24 güvenlik': '7/24 güvenlik',
        'Modern ekipman': 'Modern ekipman',
        'hakkimizda_baslik': 'HAKKIMIZDA',
        'vizyon_baslik': 'Vizyonumuz',
        'vizyon_aciklama': 'Müşterilerimize en iyi lojistik çözümleri sunarak sektördeki lider konumumuzu güçlendirmek.',
        'misyon_baslik': 'Misyonumuz',
        'misyon_aciklama': 'Yenilikçi ve sürdürülebilir lojistik hizmetleri ile müşteri memnuniyetini en üst düzeye çıkarmak.',
        'depo_label': 'Depo',
        'ozmal_label': 'Taşıma Aracı',
        'kapali_label': 'Kapalı Depo Alanı',
        'hakkimizda_metin': 'Lojistiğin dönüştürücü gücüne inanan her ölçekteki 2.000\'den fazla müşterimizin çözüm ortağı olmaktan gurur duyuyoruz.',
        'sektörler_metin': 'İşinize nasıl değer katabileceğimizi keşfedebilmek için sektörel çözümlerimizi inceleyin.',
        'gida_ve_icecek': 'Gıda ve İçecek',
        'gida_perakende': 'Gıda Perakende',
        'meyve_sulari': 'Meyve Suları',
        'sut_urunleri': 'Süt Ürünleri',
        'atistirmaliklar': 'Atıştırmalıklar',
        'unlu_mamuller': 'Unlu Mamuller',
        'konserve_urunler': 'Konserve Ürünler',
        'baharatlar': 'Baharatlar',
        'moda_ve_magazacilik': 'Moda ve Mağazacılık',
        'giysiler': 'Giysiler',
        'aksesuarlar': 'Aksesuarlar',
        'ayakkabilar': 'Ayakkabılar',
        'ev_arac_gerecleri': 'Ev Araç Gereçleri',
        'mutfak_aletleri': 'Mutfak Aletleri',
        'temizlik_urunleri': 'Temizlik Ürünleri',
        'dekorasyon': 'Dekorasyon',
        'guzellik_ve_kisisel_bakim': 'Güzellik ve Kişisel Bakım',
        'cilt_bakim_urunleri': 'Cilt Bakım Ürünleri',
        'makyaj_malzemeleri': 'Makyaj Malzemeleri',
        'parfumler': 'Parfümler',
        'tuketici_elektronigi': 'Tüketici Elektroniği',
        'bilgisayarlar': 'Bilgisayarlar',
        'telefonlar': 'Telefonlar',
        'iletisim_adres': 'Adres',
        'iletisim_telefon': 'Telefon',
        'iletisim_email': 'E-posta',
        'hizmet_baslik': 'HİZMET AĞIMIZ',
        'sektörler_baslik': 'HİZMET VERDİĞİMİZ SEKTÖRLER',
        'footer_copyright': '© Tüm Hakları Saklıdır.',
        'footer_sirket_bilgileri': 'Şirket Bilgileri',
        'footer_iletisim': 'Bize Ulaşın',
        'footer_gizlilik': 'Gizlilik Politikası',
        'footer_kullanim_sartlari': 'Kullanım Şartları',
        'footer_cerez_politikasi': 'Çerez Politikası',
        'footer_yurt_ici_tasimacilik': 'Yurt İçi Taşıma',
        'footer_komple_yurt_ici_tasimacilik': 'Komple Yurtiçi Taşıma',
        'footer_parsiyel_tasimacilik': 'Parsiyel Taşımacılık',
        'footer_isı_kontrollu_tasimacilik': 'Isı Kontrollü Taşımacılık',
        'footer_dedike_tasimacilik': 'Dedike Taşıma',
        'footer_likit_tasimacilik': 'Likit Taşıma',
        'depo_istanbul': 'İstanbul Depo',
        '81il': '81 İl',
        'filo_baslik': 'GALERİ',
        'arac_kargo': 'Kargo Yükleme Operasyonu',
        'arac_kargo_aciklama': 'Profesyonel ekipmanlarla güvenli yükleme hizmeti',
        'arac_depo': 'Depo İçi Operasyon',
        'arac_depo_aciklama': 'Kapalı depo alanında güvenli taşıma',
        'arac_acik': 'Açılabilir Kasa Araçlarımız',
        'arac_acik_aciklama': 'Özel yüklemeler için pratik çözümler',
        'arac_teslimat': 'Teslimat Operasyonu',
        'arac_teslimat_aciklama': 'Zamanında ve güvenli teslimat hizmeti',
        'faaliyetlerimiz_baslik': 'FAALİYETLERİMİZ',
        'faaliyet_sehir_ici': 'İzmir - İstanbul – Ankara ve yakın çevrelerinde şehir içi taşımacılık (panelvan, kamyonet, kamyon, tır)',
        'faaliyet_ic_nakliye': 'Tüm Türkiye iç nakliye (parsiyel ve komple olarak)',
        'faaliyet_teminatli': 'Teminatlı ve gümrüklü taşımalar (şehir içi ve şehirler arası)',
        'faaliyet_aktarma': 'İzmir, İstanbul ve Ankara\'da bulunan aktarma merkezlerimizde, ihracat yüklemeleri operasyonu, depolama ve elleçleme hizmetleri',
        'faaliyet_denizyolu': 'Denizyolu parsiyel ihracat ve ithalat taşımaları',
        'faaliyet_gunluk': 'Günlük olarak İzmir - İstanbul ve Ankara parsiyel (gidiş-dönüş) taşımacılık',
        'depo_istanbul_alani': '500 m² kapalı alan',
        'depo_ankara': 'Ankara Depo',
        'depo_ankara_alani': '500 m² kapalı alan',
        'depo_izmir': 'İzmir Depo',
        'depo_izmir_alani': '1500 m² kapalı alan',
        'yurtici_hizmet_ag': 'Yurtiçi Hizmet Ağı',
        'tedarik_zinciri': 'Yurtiçi tedarik zinciri yönetiminde uzmanlık',
        'gunluk_sefer_sayisi': 'Günlük Sefer Sayısı',
        'dagitim_noktasi': 'Dağıtım Noktası',
    },
    'EN': {
        'hakkimizda': 'ABOUT US',
        'depolarimiz': 'OUR WAREHOUSES',
        'hizmet_agimiz': 'SERVICE NETWORK',
        'iletisim': 'CONTACT',
        'hero_title': 'AKÇAY LOGISTICS SERVICES',
        'hero_subtitle': 'We are here for your reliable logistics solutions',
        'depo_baslik': 'OUR WAREHOUSES',
        'ısı_kontrollu_depolama': 'Temperature Controlled Storage',
        '7/24 güvenlik': '24/7 Security',
        'Modern ekipman': 'Modern Equipment',
        'iletisim_adres': 'Address',
        'iletisim_telefon': 'Phone',
        'iletisim_email': 'Email',
        'hakkimizda_baslik': 'ABOUT US',
        'hizmet_baslik': 'SERVICE NETWORK',
        'vizyon_baslik': 'Our Vision',
        'filo_baslik': 'GALLERY',
        'arac_kargo': 'Cargo Loading Operation',
        'arac_kargo_aciklama': 'Secure loading service with professional equipment',
        'arac_depo': 'Warehouse Operation',
        'arac_depo_aciklama': 'Secure transportation in closed warehouse area',
        'arac_acik': 'Vehicles with Openable Body',
        'arac_acik_aciklama': 'Practical solutions for special loads',
        'arac_teslimat': 'Delivery Operation',
        'arac_teslimat_aciklama': 'Timely and secure delivery service',
        'vizyon_aciklama': 'To strengthen our leading position in the industry by providing the best logistics solutions to our customers.',
        'misyon_baslik': 'Our Mission',
        'misyon_aciklama': 'To maximize customer satisfaction through innovative and sustainable logistics services.',
        'sektörler_metin': 'Explore our sectoral solutions to discover how we can add value to your business.',
        'gida_ve_icecek': 'Food and Beverage',
        'gida_perakende': 'Food Retail',
        'meyve_sulari': 'Fruit Juices',
        '81il': '81 City',
        'faaliyetlerimiz_baslik': 'OUR ACTIVITIES',
        'faaliyet_sehir_ici': 'Urban transportation in Izmir - Istanbul - Ankara and surrounding areas (panel van, pickup truck, truck, semi-truck)',
        'faaliyet_ic_nakliye': 'Domestic transportation throughout Turkey (partial and complete)',
        'faaliyet_teminatli': 'Secured and customs transportation (urban and intercity)',
        'faaliyet_aktarma': 'Export loading operations, storage and handling services at our transfer centers in Izmir, Istanbul and Ankara',
        'faaliyet_denizyolu': 'Sea freight partial export and import transportation',
        'faaliyet_gunluk': 'Daily partial transportation between Izmir - Istanbul and Ankara (round trip)',
        'sut_urunleri': 'Dairy Products',
        'atistirmaliklar': 'Snacks',
        'unlu_mamuller': 'Bakery Products',
        'konserve_urunler': 'Canned Products',
        'baharatlar': 'Spices',
        'moda_ve_magazacilik': 'Fashion and Retail',
        'giysiler': 'Clothes',
        'aksesuarlar': 'Accessories',
        'ayakkabilar': 'Shoes',
        'depo_label': 'Warehouse',
        'ozmal_label': 'Transport Vehicle',
        'kapali_label': 'Closed Warehouse Area',
        'tedarik_zinciri': 'Expertise in managing the domestic supply chain',
        'yurtici_hizmet_ag': 'Domestic Service Network',
        'sektörler_baslik': 'SECTORS WE SERVE',
        'hakkimizda_metin': 'We are a company that provides reliable logistics solutions to our customers.',
        'footer_komple_yurt_ici_tasimacilik': 'Complete Domestic Transport',
        'footer_parsiyel_tasimacilik': 'Partial Transport',
        'footer_isı_kontrollu_tasimacilik': 'Temperature Controlled Transport',
        'footer_dedike_tasimacilik': 'Dedicated Transport',
        'footer_likit_tasimacilik': 'Liquid Transport',
        'footer_copyright': 'All Rights Reserved.',
        'footer_sirket_bilgileri': 'Company Information',
        'footer_iletisim': 'Contact Us',
        'footer_gizlilik': 'Privacy Policy',
        'footer_kullanim_sartlari': 'Terms of Use',
        'footer_cerez_politikasi': 'Cookie Policy',
        'footer_yurt_ici_tasimacilik': 'Domestic Transport',
        'gunluk_sefer_sayisi': 'Daily Number of Sefers',
        'dagitim_noktasi': 'Distribution Point',
        'depo_ankara': 'Ankara Warehouse',

        'depo_istanbul': 'Istanbul Warehouse',
        'depo_izmir': 'Izmir Warehouse',
        'depo_istanbul_alani': '500 m² closed area',
        'depo_ankara_alani': '500 m² closed area',
        'depo_izmir_alani': '1500 m² closed area',
        'ev_arac_gerecleri': 'Home Appliances',
        'mutfak_aletleri': 'Kitchen Appliances',
        'temizlik_urunleri': 'Cleaning Products',
        'dekorasyon': 'Decoration',
        'guzellik_ve_kisisel_bakim': 'Beauty and Personal Care',
        'cilt_bakim_urunleri': 'Skin Care Products',
        'makyaj_malzemeleri': 'Makeup Products',
        'parfumler': 'Perfumes',
        'tuketici_elektronigi': 'Consumer Electronics',
        'bilgisayarlar': 'Computers',
        'telefonlar': 'Phones',
    }
};

// DOM yüklendiğinde çalışacak tüm fonksiyonlar
document.addEventListener('DOMContentLoaded', function () {
    // Dil işlemleri için başlangıç ayarları
    const savedLang = localStorage.getItem('language') || 'TR';
    const languageSelect = document.getElementById('languageSelect');
    const mobileLanguageSelect = document.getElementById('mobileLanguageSelect');

    if (languageSelect) {
        languageSelect.value = savedLang;
        applyLanguage(savedLang);
    }

    // Mobil menü işlemleri
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuContent = document.getElementById('mobileMenuContent');
    const navbar = document.getElementById('navbar');

    if (mobileMenuBtn && mobileMenuContent) {
        mobileMenuBtn.addEventListener('click', function () {
            toggleMobileMenu(mobileMenuContent, navbar);
        });
    }

    // Dil seçimi senkronizasyonu
    if (languageSelect && mobileLanguageSelect) {
        languageSelect.addEventListener('change', function (e) {
            mobileLanguageSelect.value = e.target.value;
            setLanguage(e.target.value);
        });

        mobileLanguageSelect.addEventListener('change', function (e) {
            languageSelect.value = e.target.value;
            setLanguage(e.target.value);
        });
    }

    // Smooth scroll için
    setupSmoothScroll();

    // Marquee içeriği oluştur
    createMarqueeContent();
});

// Mobil menü toggle fonksiyonu
function toggleMobileMenu(mobileMenu, navbar) {
    if (mobileMenu.classList.contains('hidden')) {
        // Menüyü aç
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
        navbar.classList.add('mobile-open');
        navbar.style.backgroundColor = 'white';
    } else {
        // Menüyü kapat
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('block');
        navbar.classList.remove('mobile-open');
    }
}

// Dil değiştirme fonksiyonları
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}


// Smooth scroll ayarları
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Marquee içeriği oluşturma
function createMarqueeContent() {
    const container = document.getElementById('marqueeContainer');
    if (!container) return;

    const cities = [
        "ADANA", "ADIYAMAN", "AFYONKARAHİSAR", "AĞRI", "AMASYA", "ANKARA", "ANTALYA", "ARTVİN",
        "AYDIN", "BALIKESİR", "BİLECİK", "BİNGÖL", "BİTLİS", "BOLU", "BURDUR", "BURSA",
        "ÇANAKKALE", "ÇANKIRI", "ÇORUM", "DENİZLİ", "DİYARBAKIR", "EDİRNE", "ELAZIĞ", "ERZİNCAN",
        "ERZURUM", "ESKİŞEHİR", "GAZİANTEP", "GİRESUN", "GÜMÜŞHANE", "HAKKARİ", "HATAY",
        "ISPARTA", "MERSİN", "İSTANBUL", "İZMİR", "KARS", "KASTAMONU", "KAYSERİ", "KIRKLARELİ",
        "KIRŞEHİR", "KOCAELİ", "KONYA", "KÜTAHYA", "MALATYA", "MANİSA", "KAHRAMANMARAŞ",
        "MARDİN", "MUĞLA", "MUŞ", "NEVŞEHİR", "NİĞDE", "ORDU", "RİZE", "SAKARYA", "SAMSUN",
        "SİİRT", "SİNOP", "SİVAS", "TEKİRDAĞ", "TOKAT", "TRABZON", "TUNCELİ", "ŞANLIURFA",
        "UŞAK", "VAN", "YOZGAT", "ZONGULDAK", "AKSARAY", "BAYBURT", "KARAMAN", "KIRIKKALE",
        "BATMAN", "ŞIRNAK", "BARTIN", "ARDAHAN", "IĞDIR", "YALOVA", "KARABÜK", "KİLİS",
        "OSMANİYE", "DÜZCE"
    ];

    // İlk set şehirler
    const firstSet = document.createElement('div');
    firstSet.className = 'flex';
    cities.forEach(city => {
        const span = document.createElement('span');
        span.className = 'text-xl text-gray-600 mx-4';
        span.textContent = city;
        firstSet.appendChild(span);
    });

    // İkinci set (kopya)
    const secondSet = firstSet.cloneNode(true);

    container.appendChild(firstSet);
    container.appendChild(secondSet);
}

// Modal işlemleri
function openModal(title, content) {
    // Eğer zaten bir modal varsa kaldır
    const existingModal = document.querySelector('.modal-container');
    if (existingModal) {
        existingModal.remove();
    }

    // Modal HTML'i oluştur
    const modalHTML = `
        <div class="modal-container fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col">
                <div class="p-4 border-b flex justify-between items-center">
                    <h3 class="text-xl font-bold text-[#2B3990]">${title}</h3>
                    <button class="text-gray-500 hover:text-gray-700 focus:outline-none" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="p-6 overflow-y-auto whitespace-pre-line">
                    ${content}
                </div>
                <div class="p-4 border-t flex justify-end">
                    <button class="bg-[#2B3990] text-white px-4 py-2 rounded hover:bg-[#1E2A78] transition-colors" onclick="closeModal()">
                        Kapat
                    </button>
                </div>
            </div>
        </div>
    `;

    // Modal'ı sayfaya ekle
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Scroll'u engelle
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.querySelector('.modal-container');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}