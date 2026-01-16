import React from 'react';
import englishSystemImage from './assets/english.webp';
import arabicSystemImage from './assets/arabic.webp';
import spainSystemImage from './assets/spain.webp';
import heroImage1 from './assets/hero.webp';
import heroImage2 from './assets/hero2.webp';
import heroImage3 from './assets/hero3.webp';
import heroImage4 from './assets/hero4.webp';
import heroImage5 from './assets/hero5.webp';
import heroImage6 from './assets/hero6.webp';
import programImage1 from './assets/program1.webp';
import programImage2 from './assets/program2.webp';
import programImage3 from './assets/program3.webp';
import programImage4 from './assets/program4.webp';
import programImage5 from './assets/program5.webp';
import programImage6 from './assets/program6.webp';
import type { FounderLink, EducationStep, Package, OtherServiceItem, HomeCard, TourismPackage, Slide, SocialLink, ServiceOverviewCategory, FAQCategory, FeaturePoint, ServicePoint } from './types';
import { GraduationCap, BookUser, University, UserCheck, Briefcase, Plane, Wallet, Building, Laptop, Stamp, Facebook, Youtube, Instagram, Twitter, Linkedin, MessageCircle, HelpCircle, Scale, Home, Users, RefreshCw, UsersRound, Building2, Award, ShieldCheck, TrendingUp, Languages, FileCheck, School, Landmark, Target, Sailboat, Lightbulb, FileSignature, Gem, Sparkles, Car, Compass, ConciergeBell, Heart, Clock, Monitor, FileText, Music } from 'lucide-react';


const icons = {
    GraduationCap,
    BookUser,
    University,
    UserCheck,
    Briefcase,
    Plane,
    Wallet,
    Building,
    Laptop,
    Stamp,
    Facebook,
    Youtube,
    Instagram,
    Twitter,
    Linkedin,
    WhatsApp: MessageCircle,
    Tiktok: Music,
    HelpCircle,
    Scale,
    Home,
    Users,
    RefreshCw,
    UsersRound,
    Building2,
    Award,
    ShieldCheck,
    TrendingUp,
    Languages,
    FileCheck,
    School,
    Bank: Landmark,
    Target,
    Sailboat,
    Lightbulb,
    FileSignature,
    Gem,
    // FIX: Added missing icons to the icons object.
    Sparkles,
    Car,
    Compass,
    ConciergeBell,
    Heart,
    Clock,
    Monitor,
    FileText
};

const enFounderLinks: FounderLink[] = [
    { icon: icons.GraduationCap, text: "Founder’s profile on the University of Vigo website", url: "https://cinbio.es/en/dissemination/events/teses-cinbio-abdelrahman-hamdeldein-geneidy-aly/" }
    ,
    { icon: icons.BookUser, text: "Founder’s profile on Google Scholar", url: "https://scholar.google.com/citations?user=5KC01o8AAAAJ&hl=en" },
];

const arFounderLinks: FounderLink[] = [
    { icon: icons.GraduationCap, text: "ملف المؤسس علي جامعة فيجو", url: "https://cinbio.es/en/dissemination/events/teses-cinbio-abdelrahman-hamdeldein-geneidy-aly/" },
    { icon: icons.BookUser, text: "ملف المؤسس علي جوجل سكولر", url: "https://scholar.google.com/citations?user=5KC01o8AAAAJ&hl=en" }
];

const esFounderLinks: FounderLink[] = [
    { icon: icons.GraduationCap, text: "Perfil del fundador en el sitio web de la Universidad de Vigo", url: "https://cinbio.es/en/dissemination/events/teses-cinbio-abdelrahman-hamdeldein-geneidy-aly/" },
    { icon: icons.BookUser, text: "Perfil del fundador en Google Scholar", url: "https://scholar.google.com/citations?user=5KC01o8AAAAJ&hl=en" }
];

const socialLinks: SocialLink[] = [
    {
        name: "TikTok",
        url: "https://www.tiktok.com/@abdelrahman.hamad43",
        icon: icons.Tiktok
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/people/Khatwa/100094319869714/",
        icon: icons.Facebook
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/khatwa.spain?utm_source=qr&igsh=Z2t5ajBwa21scmRp",
        icon: icons.Instagram
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@AbdelrahmanHamad-l8t7k",
        icon: icons.Youtube
    },
    {
        name: "Twitter",
        url: "https://twitter.com/khatwa_es",
        icon: icons.Twitter
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/khatwa",
        icon: icons.Linkedin
    },
    {
        name: "WhatsApp",
        url: "https://wa.me/34610992938",
        icon: icons.WhatsApp
    }
];

const enHomeCards: HomeCard[] = [
    {
        icon: icons.GraduationCap,
        title: "Study in Spain",
        description: "Your fastest path to a European career through specialized technical programs with guaranteed admission and paid internships.",
        page: "study",
        cta: "Learn More"
    },
    {
        icon: icons.Laptop,
        title: "Investment & Residency",
        description: "Live and work remotely from Spain. We handle the entire process, offering legal residency and favorable tax options.",
        page: "digital-nomad",
        cta: "Discover Packages"
    },
    {
        icon: icons.Plane,
        title: "Tourism in Spain",
        description: "Discover the beauty of Spain with our curated VIP tours. Experience rich culture, history, and breathtaking landscapes.",
        page: "tourism",
        cta: "Explore Tours"
    },
];

const arHomeCards: HomeCard[] = [
    {
        icon: icons.GraduationCap,
        title: "الدراسة في إسبانيا",
        description: "أسرع طريق لمستقبل مهني أوروبي عبر برامج فنية متخصصة مع قبول مضمون وتدريب مدفوع الأجر.",
        page: "study",
        cta: "اعرف المزيد"
    },
    {
        icon: icons.Laptop,
        title: "الاستثمار والإقامة",
        description: "عش واعمل عن بعد من إسبانيا. نتولى العملية بأكملها، ونوفر لك إقامة قانونية وخيارات ضريبية ميسرة.",
        page: "digital-nomad",
        cta: "اكتشف الباقات"
    },
    {
        icon: icons.Plane,
        title: "السياحة في إسبانيا",
        description: "اكتشف جمال إسبانيا مع جولاتنا المنسقة لكبار الشخصيات. استمتع بالثقافة الغنية والتاريخ والمناظر الطبيعية الخلابة.",
        page: "tourism",
        cta: "استكشف الجولات"
    },

];

const esHomeCards: HomeCard[] = [
    {
        icon: icons.GraduationCap,
        title: "Estudiar en España",
        description: "Tu camino más rápido hacia una carrera europea a través de programas técnicos especializados con admisión garantizada y prácticas remuneradas.",
        page: "study",
        cta: "Saber Más"
    },
    {
        icon: icons.Laptop,
        title: "Inversión y Residencia",
        description: "Vive y trabaja de forma remota desde España. Gestionamos todo el proceso, ofreciendo residencia legal y opciones fiscales favorables.",
        page: "digital-nomad",
        cta: "Descubrir Paquetes"
    },
    {
        icon: icons.Plane,
        title: "Turismo en España",
        description: "Descubre la belleza de España con nuestros tours VIP seleccionados. Experimenta la rica cultura, historia y paisajes impresionantes.",
        page: "tourism",
        cta: "Explorar Tours"
    },
];



const enDigitalNomadSteps: EducationStep[] = [
    { level: "1", title: "Eligibility Assessment", duration: "1-2 Weeks", description: "Review of remote work contracts, income requirements (~€2,646/month), and professional background." },
    { level: "2", title: "Document Gathering", duration: "2-4 Weeks", description: "Collecting university degrees, criminal records, and company letters. All must be translated and apostilled." },
    { level: "3", title: "Legal Review & Submission", duration: "1 Week", description: "Final review by our specialized lawyers and submission to the Spanish authorities (UGE-CE)." },
    { level: "4", title: "Visa Approval", duration: "20 Days", description: "Official processing period by the Spanish government. Most applications are decided within 20 working days." },
    { level: "5", title: "Relocation & TIE Card", duration: "1-2 Months", description: "Arrival in Spain, city registration (Empadronamiento), and obtaining your physical residency card (TIE)." },
];

const arDigitalNomadSteps: EducationStep[] = [
    { level: "1", title: "تقييم الأهلية", duration: "1-2 أسبوع", description: "مراجعة عقود العمل عن بعد، شروط الدخل (حوالي 2,646 يورو شهريًا)، والخلفية المهنية." },
    { level: "2", title: "جمع المستندات", duration: "2-4 أسابيع", description: "جمع الشهادات الجامعية، السجل الجنائي ، وخطابات الشركة. يجب أن تكون جميعها مترجمة وموثقة." },
    { level: "3", title: "المراجعة القانونية والتقديم", duration: "أسبوع واحد", description: "المراجعة النهائية من قبل محامينا المتخصصين وتقديم الطلب إلى السلطات الإسبانية (UGE-CE)." },
    { level: "4", title: "الموافقة على التأشيرة", duration: "20 يومًا", description: "فترة المعالجة الرسمية من قبل الحكومة الإسبانية. يتم البت في معظم الطلبات خلال 20 يوم عمل." },
    { level: "5", title: "الاستقرار وبطاقة الإقامة (TIE)", duration: "1-2 شهر", description: "الوصول إلى إسبانيا، التسجيل في البلدية (Empadronamiento)، والحصول على بطاقة الإقامة الفعلية (TIE)." },
];

const esDigitalNomadSteps: EducationStep[] = [
    { level: "1", title: "Evaluación de Elegibilidad", duration: "1-2 Semanas", description: "Revisión de contratos de trabajo remoto, requisitos de ingresos (~2.646 €/mes) y trayectoria profesional." },
    { level: "2", title: "Recopilación de Documentos", duration: "2-4 Semanas", description: "Obtención de títulos universitarios, antecedentes penales y cartas de la empresa. Todo debe estar traducido y apostillado." },
    { level: "3", title: "Revisión Legal y Envío", duration: "1 Semana", description: "Revisión final por nuestros abogados especializados y presentación ante las autoridades españolas (UGE-CE)." },
    { level: "4", title: "Aprobación del Visado", duration: "20 Días", description: "Periodo oficial de tramitación por el gobierno español. La mayoría de las solicitudes se resuelven en 20 días hábiles." },
    { level: "5", title: "Reubicación y Tarjeta TIE", duration: "1-2 Meses", description: "Llegada a España, empadronamiento y obtención de la tarjeta de residencia física (TIE)." },
];

const enNonLucrativeSteps: EducationStep[] = [
    { level: "1", title: "Preparation", duration: "2-4 Weeks", description: "Preparing the financial and legal file to comply with Spanish embassy requirements." },
    { level: "2", title: "Health Insurance", duration: "1 Week", description: "Assisting in obtaining approved comprehensive health insurance in Spain." },
    { level: "3", title: "Visa Submission", duration: "1-2 Months", description: "Coordinating submission and legal review of the complete dossier." },
    { level: "4", title: "Relocation & Arrival", duration: "1 Week", description: "Airport pickup in Vigo, first-night accommodation, and initial admin support." },
    { level: "5", title: "Residency & TIE", duration: "1-2 Months", description: "NIE, bank account, municipality registration, and obtaining the physical residence card." },
];

const arNonLucrativeSteps: EducationStep[] = [
    { level: "1", title: "التجهيز والإعداد", duration: "2-4 أسابيع", description: "إعداد الملف المالي والقانوني للامتثال لمتطلبات السفارة الإسبانية." },
    { level: "2", title: "التأمين الصحي", duration: "أسبوع واحد", description: "المساعدة في الحصول على تأمين صحي شامل معتمد في إسبانيا." },
    { level: "3", title: "تقديم التأشيرة", duration: "1-2 شهر", description: "تنسيق تقديم الملف والمراجعة القانونية للملف الكامل." },
    { level: "4", title: "الانتقال والوصول", duration: "أسبوع واحد", description: "الاستقبال من المطار في فيغو، إقامة ليلة أولى، ودعم إداري أولي." },
    { level: "5", title: "الإقامة وبطاقة TIE", duration: "1-2 شهر", description: "استخراج NIE، فتح حساب بنكي، التسجيل في البلدية، والحصول على بطاقة الإقامة." },
];

const esNonLucrativeSteps: EducationStep[] = [
    { level: "1", title: "Preparación", duration: "2-4 Semanas", description: "Preparación del expediente financiero y legal para cumplir con los requisitos de la embajada." },
    { level: "2", title: "Seguro de Salud", duration: "1 Semana", description: "Asistencia en la obtención de un seguro médico privado integral aprobado en España." },
    { level: "3", title: "Envío de Visado", duration: "1-2 Meses", description: "Coordinación del envío y revisión legal del expediente completo." },
    { level: "4", title: "Reubicación y Llegada", duration: "1 Semana", description: "Recogida en el aeropuerto de Vigo, alojamiento la primera noche y apoyo inicial." },
    { level: "5", title: "Residencia y TIE", duration: "1-2 Meses", description: "Obtención del NIE, cuenta bancaria, empadronamiento y tarjeta de residencia física." },
];

const enFamilyReunificationSteps: EducationStep[] = [
    { level: "1", title: "Document Verification", duration: "2 Weeks", description: "Verifying relationship proof and sponsor's legal status, income, and housing." },
    { level: "2", title: "Translation & Legalization", duration: "2-3 Weeks", description: "Translating and certifying all required documents for embassy standards." },
    { level: "3", title: "Application Management", duration: "1-3 Months", description: "Coordinating the submission of the reunification request in Spain or consulate." },
    { level: "4", title: "Family Arrival", duration: "1 Week", description: "Support with arrival, municipality registration (Empadronamiento), and setup." },
    { level: "5", title: "TIE Issuance", duration: "1-2 Months", description: "Legal support to obtain the TIE residence card for each family member." },
];

const arFamilyReunificationSteps: EducationStep[] = [
    { level: "1", title: "التحقق من المستندات", duration: "أسبوعان", description: "التحقق من إثبات العلاقة الأسرية والوضع القانوني للراعي والدخل والسكن." },
    { level: "2", title: "الترجمة والتوثيق", duration: "2-3 أسابيع", description: "ترجمة وتوثيق جميع المستندات المطلوبة وفقاً لمعايير السفارة." },
    { level: "3", title: "إدارة الطلب", duration: "1-3 أشهر", description: "تنسيق تقديم طلب لم الشمل في إسبانيا أو في القنصلية." },
    { level: "4", title: "وصول العائلة", duration: "أسبوع واحد", description: "الدعم عند الوصول، التسجيل في البلدية (Empadronamiento)، والتجهيزات الأولية." },
    { level: "5", title: "إصدار بطاقة TIE", duration: "1-2 شهر", description: "الدعم القانوني للحصول على بطاقة الإقامة TIE لكل فرد من أفراد الأسرة." },
];

const esFamilyReunificationSteps: EducationStep[] = [
    { level: "1", title: "Verificación de Documentos", duration: "2 Semanas", description: "Verificación de pruebas de parentesco y situación legal, ingresos y vivienda del patrocinador." },
    { level: "2", title: "Traducción y Legalización", duration: "2-3 Semanas", description: "Traducción y certificación de todos los documentos requeridos según normas consulares." },
    { level: "3", title: "Gestión de la Solicitud", duration: "1-3 Meses", description: "Coordinación de la presentación de la solicitud de reagrupación en España o consulado." },
    { level: "4", title: "Llegada de la Familia", duration: "1 Semana", description: "Apoyo con la llegada, empadronamiento y configuración inicial de la familia." },
    { level: "5", title: "Emisión de TIE", duration: "1-2 Meses", description: "Apoyo legal para obtener la tarjeta de residencia TIE para cada miembro de la familia." },
];

const enMasterPhdSteps: EducationStep[] = [
    { level: "1", title: "File Preparation", duration: "2-4 Weeks", description: "Preparing academic file (CV, motivation letter, recommendations) and document translations." },
    { level: "2", title: "University Application", duration: "1-2 Months", description: "Applying to Master's or PhD programs and handling certificate equivalency in the Spanish system." },
    { level: "3", title: "Admission & Legalization", duration: "2 Weeks", description: "Obtaining the official acceptance letter and finalizing legal document authentication (Apostille)." },
    { level: "4", title: "Visa Processing", duration: "1-2 Months", description: "Handling embassy appointments, visa application, and legal follow-up with specialized lawyers." },
    { level: "5", title: "Arrival & Enrollment", duration: "1 Month", description: "Airport pickup, opening bank account, obtaining NIE, and completing university registration." },
];

const arMasterPhdSteps: EducationStep[] = [
    { level: "1", title: "تجهيز الملف", duration: "2-4 أسابيع", description: "إعداد الملف الأكاديمي (السيرة الذاتية، خطاب الحافز، التوصيات) وترجمة المستندات." },
    { level: "2", title: "التقديم الجامعي", duration: "1-2 شهر", description: "التقديم لبرامج الماجستير أو الدكتوراه ومعالجة معادلة الشهادات في النظام الإسباني." },
    { level: "3", title: "القبول والتوثيق", duration: "أسبوعان", description: "الحصول على خطاب القبول الرسمي واستكمال توثيق المستندات القانونية (الأبوستيل)." },
    { level: "4", title: "إجراءات التأشيرة", duration: "1-2 شهر", description: "إدارة مواعيد السفارة، طلب التأشيرة، والمتابعة القانونية مع محامين متخصصين." },
    { level: "5", title: "الوصول والتسجيل", duration: "شهر واحد", description: "الاستقبال من المطار، فتح حساب بنكي، استخراج رقم NIE، وإتمام التسجيل الجامعي." },
];

const esMasterPhdSteps: EducationStep[] = [
    { level: "1", title: "Preparación del Expediente", duration: "2-4 Semanas", description: "Preparación del expediente académico (CV, carta de motivación, recomendaciones) y traducción de documentos." },
    { level: "2", title: "Solicitud Universitaria", duration: "1-2 Meses", description: "Solicitud a programas de Máster o Doctorado y gestión de la homologación de títulos en el sistema español." },
    { level: "3", title: "Admisión y Legalización", duration: "2 Semanas", description: "Obtención de la carta de aceptación oficial y finalización de la autenticación de documentos (Apostilla)." },
    { level: "4", title: "Tramitación de Visado", duration: "1-2 Meses", description: "Gestión de citas en la embajada, solicitud de visado y seguimiento legal con abogados especializados." },
    { level: "5", title: "Llegada y Matriculación", duration: "1 Mes", description: "Recogida en el aeropuerto, apertura de cuenta bancaria, obtención del NIE y finalización de la matrícula." },
];

const enMinorStudentSteps: EducationStep[] = [
    { level: "1", title: "Program Selection", duration: "2 Weeks", description: "Evaluating technical education paths (Medio/Superior) and preparing the educational file." },
    { level: "2", title: "Legal Guardianship", duration: "2-3 Weeks", description: "Issuing legal guardianship in Spain and obtaining notarized parental authorization." },
    { level: "3", title: "Equivalency & Acceptance", duration: "1-2 Months", description: "Handling certificate equivalency and securing acceptance from accredited institutes." },
    { level: "4", title: "Visa & Relocation", duration: "1-2 Months", description: "Managing the student visa application and coordinating relocation/temporary housing." },
    { level: "5", title: "Integration & Monitoring", duration: "1 Year", description: "Obtaining NIE, municipality registration, and providing monthly academic/legal reports to parents." },
];

const arMinorStudentSteps: EducationStep[] = [
    { level: "1", title: "اختيار البرنامج", duration: "أسبوعان", description: "تقييم مسارات التعليم الفني (متوسط/عالي) وتجهيز الملف التعليمي." },
    { level: "2", title: "الوصاية القانونية", duration: "2-3 أسابيع", description: "إصدار الوصاية القانونية في إسبانيا والحصول على تفويض الوالدين الموثق." },
    { level: "3", title: "المعادلة والقبول", duration: "1-2 شهر", description: "معالجة معادلة الشهادات وتأمين القبول من المعاهد المعتمدة." },
    { level: "4", title: "التأشيرة والانتقال", duration: "1-2 شهر", description: "إدارة طلب تأشيرة الطالب وتنسيق الانتقال والسكن المؤقت." },
    { level: "5", title: "الاندماج والمتابعة", duration: "سنة واحدة", description: "استخراج رقم NIE، التسجيل في البلدية، وتقديم تقارير دورية للوالدين." },
];

const esMinorStudentSteps: EducationStep[] = [
    { level: "1", title: "Selección del Programa", duration: "2 Semanas", description: "Evaluación de itinerarios de formación técnica (Medio/Superior) y preparación del expediente educativo." },
    { level: "2", title: "Tutela Legal", duration: "2-3 Semanas", description: "Emisión de la tutela legal en España y obtención de la autorización paterna notarizada." },
    { level: "3", title: "Homologación y Aceptación", duration: "1-2 Meses", description: "Gestión de la homologación de certificados y obtención de la aceptación en institutos acreditados." },
    { level: "4", title: "Visado y Reubicación", duration: "1-2 Meses", description: "Gestión de la solicitud de visado de estudiante y coordinación de la reubicación/alojamiento temporal." },
    { level: "5", title: "Integración y Seguimiento", duration: "1 Año", description: "Obtención del NIE, empadronamiento y provisión de informes académicos y legales mensuales a los padres." },
];



const enOtherServices: OtherServiceItem[] = [
    { title: "Investment & Golden Visa", description: "Expert guidance on securing residency through significant investment in Spain." },
    { title: "Custom Tourism Packages", description: "We design personalized VIP itineraries across Spain and Europe, like our popular one-week, two-country package." }
];

const arOtherServices: OtherServiceItem[] = [
    { title: "تأشيرة الاستثمار والفيزا الذهبية", description: "إرشادات متخصصة لتأمين الإقامة من خلال استثمار كبير في إسبانيا." },
    { title: "باقات سياحية مخصصة", description: " نقوم بتصميم مسارات رحلات VIP شخصية عبر إسبانيا وأوروبا، مثل باقتنا الشهيرة لمدة أسبوع في بلدين." }
];



const esOtherServices: OtherServiceItem[] = [
    { title: "Inversión y Visado Dorado", description: "Orientación experta para asegurar la residencia a través de inversión significativa en España." },
    { title: "Paquetes Turísticos Personalizados", description: "Diseñamos itinerarios VIP personalizados por España y Europa, como nuestro popular paquete de una semana en dos países." }
];

const enServicesOverviewCategories: ServiceOverviewCategory[] = [
    {
        title: "Tourism Programs",
        items: [
            { title: "Premium Tourism Program", description: "A unified experience offering everything from pure leisure to investment and residency-focused scouting.", page: "tourism" }
        ]
    },
    {
        title: "Study Programs",
        items: [
            { title: "Technical Training", description: "A fast track to a European career via official vocational training programs with paid internships.", page: "study" },
            { title: "Study Program (Under 18)", description: "A safe, legal, and comprehensive program for minor students, including legal guardianship.", page: "students-under-18" },
            { title: "Master's & PhD Program", description: "Leverage our academic connections to apply for postgraduate programs at top Spanish universities.", page: "postgraduate-study" }
        ]
    },
    {
        title: "Residency | Investment | Visas",
        items: [
            { title: "Digital Nomad Visa", description: "Live and work remotely from Spain with our end-to-end visa and settlement support.", page: "digital-nomad" },
            { title: "Non-Lucrative Visa", description: "Settle in Spain without professional activities, ideal for those with passive income or savings.", page: "non-lucrative" },
            { title: "Family Reunification Visa", description: "Bring your family members to live with you legally in Spain.", page: "family-reunification" }
        ]
    }
    
];

const arServicesOverviewCategories: ServiceOverviewCategory[] = [
    {
        title: "برامج الدراسة",
        items: [
            { title: "التدريب الفني", description: "المسار السريع لمستقبل مهني أوروبي عبر برامج تدريب مهني رسمية مع تدريب مدفوع الأجر.", page: "study" },
            { title: "برنامج الدراسة (تحت 18)", description: "برنامج آمن وقانوني وشامل للطلاب القصر، يشمل الوصاية القانونية.", page: "students-under-18" },
            { title: "برنامج الماجستير والدكتوراه", description: "استفد من علاقاتنا الأكاديمية للتقديم على برامج الدراسات العليا في أفضل الجامعات الإسبانية.", page: "postgraduate-study" }
        ]
    },
    {
        title: "الإقامة والتأشيرات",
        items: [
            { title: "فيزا النوماد الرقمي", description: "عش واعمل عن بعد من إسبانيا مع دعمنا الكامل للتأشيرة والاستقرار.", page: "digital-nomad" },
            { title: "الاقامه غير الربحيه", description: "استقر في إسبانيا دون ممارسة أنشطة مهنية، مثالية لمن لديهم دخل سلبي أو مدخرات.", page: "non-lucrative" },
            { title: "اقامه لم الشمل", description: "أحضر أفراد عائلتك للعيش معك بشكل قانوني في إسبانيا.", page: "family-reunification" }
        ]
    },
    {
        title: "البرامج السياحية",
        items: [
            { title: "برنامج السياحة الراقية", description: "تجربة موحدة تقدم كل شيء من الترفيه الخالص إلى البحث عن الاستثمار والإقامة.", page: "tourism" }
        ]
    }
];

const enFaqCategories: FAQCategory[] = [
    {
        title: "Education & Study in Spain",
        icon: icons.GraduationCap,
        items: [
            { question: "Can I study in Spain with an Egyptian or Gulf high school diploma?", answer: "Yes, but the certificate must be translated, Apostilled, and then we will process its equivalency within Spain to ensure the student is accepted into the correct path." },
            { question: "I am currently in my second year of medicine/engineering/pharmacy in Egypt... Can I directly enroll in the second year at a Spanish university?", answer: "The Spanish system does not allow direct second-year enrollment for any medical or engineering major coming from abroad.\nHowever, there are strong alternative paths. The exact details vary for each case... and we can evaluate your situation individually." },
            { question: "What is Spanish Vocational Training (Ciclo Medio / Superior)?", answer: "It is an official two-year program approved by the Spanish Ministry of Education, and it is the fastest way to get:\n• Practical experience within companies and factories\n• Real job opportunities after one year\n• The ability to enter university after completing the Ciclo Superior" },
            { question: "Can I continue to university after vocational training?", answer: "Yes — after the Ciclo Superior, you can enter university directly with a high acceptance rate, and then pursue a Master's and PhD." },
            { question: "Can I apply for Master's or PhD programs?", answer: "Yes — we offer a special track for applying to higher academic programs thanks to our connections within:\n✔ University of Vigo\n✔ Research centers like CINBIO\nEach case requires a special evaluation; just contact us to determine the right program for you." },
            { question: "Can I work while studying?", answer: "Yes, under certain conditions, and we help you find suitable work." },
        ],
    },
    {
        title: "Visas & Residency in Spain",
        icon: icons.Stamp,
        items: [
            { question: "What visas do you offer?", answer: "• Digital Nomad Visa\n• Non-Lucrative Residency\n• Student Visa\n• Family Reunification Visa\n• Modification of legal status from tourism to study or work (according to the law)" },
            { question: "Can a tourist visa be converted to a student visa within Spain?", answer: "Yes, if the visa is still valid and an approved study file can be submitted." },
            { question: "Can a student visa be converted to a Digital Nomad visa?", answer: "Yes — if the requirements for remote work for a company outside of Spain are met." },
            { question: "Can I enter Spain on a tourist visa and then directly obtain a work permit?", answer: "No.\nHowever, you can follow this path:\nTourism → Study → Work\nThis is a legal and successful path for thousands of students." },
        ],
    },
    {
        title: "Digital Nomad Visa",
        icon: icons.Laptop,
        items: [
            { question: "Can I apply for the Nomad visa from outside or inside Spain?", answer: "Yes, both methods are available." },
            { question: "Can I stay outside of Spain for more than 6 months?", answer: "Yes — unlike other residencies, the Nomad visa allows this.\nHowever:\nThis period does not count towards obtaining long-term residency or citizenship." },
            { question: "Can I open a café or start a project in Spain while on a Nomad visa?", answer: "No — the Nomad visa is for remote work only.\nYou can later convert to a 'Cuenta Propia' residency, which is for business projects." },
            { question: "How long does it take to get the Nomad visa?", answer: "From 20 to 45 days." },
        ],
    },
    {
        title: "Non-Lucrative Residency",
        icon: icons.Wallet,
        items: [
            { question: "Can I work with a non-lucrative residency?", answer: "No.\nBut it can be converted to a work permit after one year." },
            { question: "What is the minimum bank balance required?", answer: "Approximately €26,000 for an individual, and it increases depending on the number of family members." },
        ],
    },
    {
        title: "Family Reunification",
        icon: icons.Users,
        items: [
            { question: "Who can come through family reunification?", answer: "• Spouse\n• Children under 18\n• In special cases: Parents or children over 18 (caregiving, disability, complete financial dependence)" },
            { question: "How long does the process take?", answer: "From 3 to 6 months." },
        ],
    },
    {
        title: "Tourism & Visit Programs",
        icon: icons.Plane,
        items: [
            { question: "Does Khatwa offer tourist programs within Spain?", answer: "Yes — various programs that include:\nVigo – Baiona – Santiago – Ourense – Porto (Portugal)" },
            { question: "Can a visit be converted to a study program?", answer: "Yes — if the visa is valid and the legal requirements are met." },
        ],
    },
    {
        title: "Services Within Spain",
        icon: icons.Home,
        items: [
            { question: "Do you help with finding accommodation?", answer: "Yes — we provide student housing or apartments depending on the budget." },
            { question: "Do you help with opening a bank account?", answer: "Yes — within one hour." },
            { question: "Do you help with the NIE and Empadronamiento (city registration)?", answer: "Yes — from the first day of arrival." },
        ],
    },
    {
        title: "Investment & Business Setup",
        icon: icons.Briefcase,
        items: [
            { question: "Does Khatwa help in starting a project in Spain?", answer: "Yes — we offer:\n✔ On-the-ground feasibility study for any project\n✔ Setting up all types of companies\n✔ Obtaining licenses\n✔ Connecting you with official accountants and lawyers\n✔ Assisting you in buying a house or property suitable for family or investment" },
        ],
    },
    {
        title: "Taxes & Legal Residency",
        icon: icons.Scale,
        items: [
            { question: "Does the Nomad visa include the Beckham Law?", answer: "Yes — a fixed 24% tax rate for 6 years." },
            { question: "Will I become a tax resident?", answer: "If you stay more than 183 days in Spain, yes, you become a tax resident." },
            { question: "Do you offer support after arrival?", answer: "Yes — from day one:\n• Airport reception\n• Opening a bank account\n• Health insurance\n• Obtaining NIE\n• Public transport card\n• Facilitating city registration" },
        ],
    },
    {
        title: "Residency Conversion",
        icon: icons.RefreshCw,
        items: [
            { question: "Can a Nomad visa be converted to a work permit?", answer: "Yes — after one year." },
            { question: "Can a study visa be converted to a work permit?", answer: "Yes — after the study program is completed." },
            { question: "Can a language program be converted to vocational training?", answer: "Yes — if the file is prepared correctly (we handle it completely)." },
        ],
    },
    {
        title: "Partnerships",
        icon: icons.UsersRound,
        items: [
            { question: "Is Khatwa contracted with educational institutions?", answer: "Yes — official collaborations with:\n• A public university in Galicia\n• Private centers in Madrid, Barcelona, and Valencia\n• Student housing companies\n• Lawyers and accountants" },
        ],
    },
    {
        title: "Have Another Question?",
        icon: icons.HelpCircle,
        items: [
            { question: "Do you have another question that is not here?", answer: "Leave your question and we will answer you directly — some details are not mentioned here because they depend on each case individually, and to protect our clients' privacy." },
        ],
    },
];

const arFaqCategories: FAQCategory[] = [
    {
        title: "قسم التعليم والدراسة في إسبانيا",
        icon: icons.GraduationCap,
        items: [
            { question: "هل يمكنني الدراسة في إسبانيا بشهادة الثانوية المصرية أو الخليجية؟", answer: "نعم، ولكن يجب ترجمة وتصديق الشهادة بالأبوستيل، ثم نقوم بمعادلتها داخل إسبانيا لضمان قبول الطالب في المسار الصحيح." },
            { question: "أنا حاليًا في سنة ثانية طب/هندسة/صيدلة في مصر… هل يمكنني الالتحاق مباشرة بالسنة الثانية في جامعة إسبانية؟", answer: "النظام الإسباني لا يسمح بالالتحاق المباشر بالسنة الثانية لأي تخصص طبي أو هندسي قادم من الخارج.\nلكن توجد مسارات بديلة قوية.\n\nالتفاصيل الدقيقة تختلف حسب كل ملف… ويمكننا تقييم حالتك بشكل فردي." },
            { question: "ما هو التعليم الفني الإسباني (Ciclo Medio / Superior)؟", answer: "هو مسار رسمي معتمد من وزارة التعليم الإسبانية مدته سنتان، ويعد أسرع طريق للحصول على:\n•\tخبرة عملية داخل شركات ومصانع\n•\tفرص عمل حقيقية بعد سنة واحدة\n•\tإمكانية دخول الجامعة بعد إنهاء Ciclo Superior" },
            { question: "هل يمكنني استكمال الجامعة بعد التعليم الفني؟", answer: "نعم — بعد Ciclo Superior يمكنك دخول الجامعة مباشرة بنسبة قبول مرتفعة، ثم الماجستير والدكتوراه." },
            { question: "هل يمكن التقديم على برامج ماجستير أو دكتوراه؟", answer: "نعم — نقدم مسارًا خاصًا للتقديم على برامج أكاديمية عليا بفضل علاقاتنا داخل:\n✔ جامعة فيغو\n✔ مراكز بحثية مثل CINBIO\n\nكل حالة تحتاج تقييم خاص؛ فقط تواصل معنا لتحديد البرنامج المناسب لك." },
            { question: "هل يمكنني العمل أثناء الدراسه", answer: "نعم بشروط ونساعدكً في ايجاد عمل مناسب" },
        ],
    },
    {
        title: "قسم التأشيرات والإقامات في إسبانيا",
        icon: icons.Stamp,
        items: [
            { question: "ما هي التأشيرات التي نقدمها؟", answer: "•\tفيزا النوماد الرقمي\n•\tالإقامة غير الربحية\n•\tفيزا الدراسة\n•\tفيزا لم الشمل\n•\tتعديل الوضع القانوني من سياحة إلى دراسة أو عمل (حسب القانون)" },
            { question: "هل يمكن تحويل الفيزا السياحية إلى فيزا دراسة داخل إسبانيا؟", answer: "نعم، إذا كانت الفيزا سارية ويمكن تقديم ملف دراسي معتمد." },
            { question: "هل يمكن تحويل فيزا دراسة إلى نوماد رقمي؟", answer: "نعم — إذا توفرت شروط العمل عن بعد لصالح شركة خارج إسبانيا." },
            { question: "هل يمكن دخول إسبانيا بفيزا سياحة ثم استخراج إقامة عمل مباشرة؟", answer: "لا.\nلكن يمكن:\nسياحة ← دراسة ← عمل\nوهو مسار قانوني وناجح لآلاف الطلاب." },
        ],
    },
    {
        title: "قسم فيزا النوماد الرقمي",
        icon: icons.Laptop,
        items: [
            { question: "هل يمكن التقديم على نوماد من خارج أو داخل إسبانيا؟", answer: "نعم، الطريقتان متاحتان." },
            { question: "هل يمكن البقاء خارج إسبانيا أكثر من 6 أشهر؟", answer: "نعم — بعكس باقي الإقامات، النوماد يسمح بذلك.\nولكن:\nهذه المدة لا تُحتسب للحصول على الإقامة طويلة الأمد أو الجنسية." },
            { question: "هل يمكن فتح كافيه أو مشروع داخل إسبانيا أثناء وجودي على نوماد؟", answer: "لا — النوماد مخصّص للعمل عن بعد فقط.\nيمكنك التحويل لاحقًا لإقامة Cuenta Propia الخاصة بالمشاريع." },
            { question: "مده استخراج النوماد", answer: "من ٢٠ يوم الي ٤٥ يوم" },
        ],
    },
    {
        title: "قسم الإقامة غير الربحية",
        icon: icons.Wallet,
        items: [
            { question: "هل يمكن العمل بالإقامة غير الربحية؟", answer: "لا.\nلكن يمكن التحويل إلى إقامة عمل بعد سنة." },
            { question: "ما هو الحد الأدنى لرصيد البنك؟", answer: "حوالي 26,000 يورو للفرد، ويزداد حسب عدد أفراد الأسرة." },
        ],
    },
    {
        title: "قسم لم الشمل",
        icon: icons.Users,
        items: [
            { question: "من يمكنه القدوم عبر لمّ الشمل؟", answer: "•\tالزوج/الزوجة\n•\tالأبناء تحت 18\n•\tفي حالات خاصة: الآباء أو الأبناء فوق 18 (رعاية – عجز – اعتماد مالي كامل)" },
            { question: "ما المدة اللازمة للمعاملة؟", answer: "من 3 إلى 6 أشهر." },
        ],
    },
    {
        title: "قسم الخدمات السياحية وبرامج الزيارة",
        icon: icons.Plane,
        items: [
            { question: "هل تقدم خطوة برامج سياحية داخل إسبانيا؟", answer: "نعم — برامج متنوعة تشمل:\n‏Vigo – Baiona – Santiago – Ourense – Porto (البرتغال)" },
            { question: "هل يمكن تحويل الزيارة إلى دراسة؟", answer: "نعم — إذا كانت الفيزا صالحة وتتوفر الشروط القانونية." },
        ],
    },
    {
        title: "قسم الخدمات داخل إسبانيا",
        icon: icons.Home,
        items: [
            { question: "هل تساعدون في إيجاد سكن؟", answer: "نعم — نوفر سكن طلاب أو شقق حسب الميزانية." },
            { question: "هل تساعدون في فتح حساب بنكي؟", answer: "نعم — خلال ساعة واحدة." },
            { question: "هل تساعدون في NIE وEmpadronamiento؟", answer: "نعم — من أول يوم وصول." },
        ],
    },
    {
        title: "قسم الاستثمار وفتح المشاريع",
        icon: icons.Briefcase,
        items: [
            { question: "هل تساعد خطوة في فتح مشروع داخل إسبانيا؟", answer: "نعم — نقدم:\n✔ دراسة جدوى ميدانية لأي مشروع\n✔ فتح الشركات بجميع أنواعها\n✔ الحصول على التراخيص\n✔ ربطك بمحاسبين ومحامين رسميين\n✔ مساعدتك في شراء منزل أو عقار مناسب للأسرة أو للاستثمار" },
        ],
    },
    {
        title: "قسم الضرايب والإقامة القانونية",
        icon: icons.Scale,
        items: [
            { question: "هل فيزا النوماد تشمل قانون بيكهام؟", answer: "نعم — ضريبة 24% ثابتة لمدة 6 سنوات." },
            { question: "هل سأصبح مقيمًا ضريبيًا؟", answer: "إذا بقيت أكثر من 183 يوم داخل إسبانيا، نعم تصبح مقيمًا ضريبيًا." },
            { question: "هل تقدمون دعمًا بعد الوصول؟", answer: "نعم — من أول يوم:\n•\tاستقبال في المطار\n•\tفتح حساب بنكي\n•\tتأمين صحي\n•\tاستخراج NIE\n•\tكارت المواصلات\n•\tتسهيل التسجيل البلدي" },
        ],
    },
    {
        title: "قسم تحويل الإقامات",
        icon: icons.RefreshCw,
        items: [
            { question: "هل يمكن تحويل نوماد إلى إقامة عمل؟", answer: "نعم — بعد سنة." },
            { question: "هل يمكن تحويل دراسة إلى عمل؟", answer: "نعم — بعد انتهاء البرنامج الدراسي." },
            { question: "هل يمكن تحويل برنامج لغة إلى تعليم فني؟", answer: "نعم — إذا تم تجهيز الملف بشكل صحيح (نقوم به بالكامل)." },
        ],
    },
    {
        title: "قسم الشراكات",
        icon: icons.UsersRound,
        items: [
            { question: "هل خطوة متعاقدة مع مؤسسات تعليمية؟", answer: "نعم — تعاونات رسمية مع:\n•\tجامعة حكومية في جاليثيا\n•\tمراكز خاصة في مدريد وبرشلونة وفالنسيا\n•\tشركات سكن طلابي\n•\tمحامين ومحاسبين" },
        ],
    },
    {
        title: "هل لديك سؤال آخر غير موجود هنا؟",
        icon: icons.HelpCircle,
        items: [
            { question: "هل لديك سؤال آخر غير موجود هنا؟", answer: "اترك سؤالك وسنقوم بالرد عليك مباشرة — بعض التفاصيل لا نذكرها هنا لأنها تعتمد على كل ملف بشكل منفصل، وبهدف حماية خصوصية عملائنا." },
        ],
    },
];

const enStudyInSpainContent: {
    id: string;
    pageTitle: string;
    intro: string;
    whyTitle: string;
    whyPoints: FeaturePoint[];
    targetAudience: { title: string; audiences: { icon: React.ElementType; title: string; description: string; }[]; };
    systemTitle: string;
    systemIntro: string;
    systemSteps: EducationStep[];
    systemImage?: string;
    supportTitle: string;
    supportIntro: string;
    supportServices: ServicePoint[];
    docsTitle: string;
    docsList: string[];
    programRefundTitle: string;
    programRefund: string;
    readyForJourneyTitle: string;
    phase1Title: string;
    phase2Title: string;
    phase3Title: string;
    readMoreInfo: string;
} = {
    id: "study",
    pageTitle: "Vocational & Technical Education in Spain",
    intro: "Your fastest path to a European career. We provide guaranteed admission to official vocational training programs (Ciclos) that blend academic study with hands-on training. Our programs are designed for rapid entry into the EU job market and provide a legal pathway to residency.",
    whyTitle: "Why Choose Vocational & Technical Training?",
    whyPoints: [
        { icon: icons.Award, title: "Guaranteed Admission", description: "Secure your place in public institutions where education is high-quality and practically free." },
        { icon: icons.Briefcase, title: "Paid Internships", description: "Gain practical experience and earn while you learn with our network of partner companies." },
        { icon: icons.ShieldCheck, title: "EU-Recognized Diploma", description: "Graduate with an official 'Técnico Superior' diploma, unlocking job opportunities across the European Union." },
        { icon: icons.TrendingUp, title: "Fast Track to Residency", description: "Achieve permanent residency in just 5 years with a work permit, compared to 10 years for university students." },
        { icon: icons.Wallet, title: "Cost-Effective Path", description: "A smart and affordable alternative to lengthy and expensive traditional university degrees." },
        { icon: icons.Languages, title: "Intensive Language Program", description: "Includes a comprehensive Spanish course to ensure you are linguistically prepared for success." },
    ],
    targetAudience: {
        title: "Is This Program Right For You?",
        audiences: [
            { icon: icons.School, title: "High School Graduates", description: "A direct path to a European career without the high cost and time of a traditional university degree." },
            { icon: icons.Users, title: "Adults & Career Changers", description: "Update your skills or switch careers with a practical program designed for rapid entry into the EU job market." },
        ],
    },
    systemTitle: "Your Pathway Through The Spanish Education System",
    systemIntro: "Our programs fit within the official Spanish educational framework, offering a direct path to a professional title.",
    systemSteps: [],
    systemImage: englishSystemImage,
    supportTitle: "Our All-Inclusive Support Package",
    supportIntro: "From your application in your home country to your full settlement in Spain, we manage every step of the process with expert care.",
    supportServices: [
        { icon: icons.FileCheck, description: "Complete legal document preparation, translation, notarization, and Apostille." },
        { icon: icons.Stamp, description: "Securing official admission letters and processing diploma equivalency." },
        { icon: icons.Scale, description: "Full legal support with our specialized immigration lawyers until your visa is issued." },
        { icon: icons.Plane, description: "Airport pickup upon arrival and first-night hotel accommodation." },
        { icon: icons.Home, description: "Assistance with finding suitable long-term accommodation." },
        { icon: icons.Users, description: "Full guidance on all residency procedures: TIE, NIE, and city registration (Empadronamiento)." },
        { icon: icons.Bank, description: "Support with opening a Spanish bank account and activating health insurance." },
        { icon: icons.Building2, description: "A cultural integration program with city tours to help you settle in and feel at home." },
    ],
    docsTitle: "Required Documents",
    docsList: [
        "Passport valid for at least one year.",
        "High school diploma or university degree (translated with Apostille).",
        "Bank statement showing sufficient funds (min. €7,000 recommended).",
        "Clean criminal record certificate (translated with Apostille).",
        "Medical certificate stating you are free from contagious diseases.",
        "Full Spanish health insurance for your entire stay."
    ],
    programRefundTitle: "Payment & Refund Policy",
    programRefund: "• In case of initial rejection: The lawyer submits a formal appeal for free.\n• In case of final rejection: Administrative fees are deducted.",
    readyForJourneyTitle: "Get Ready to Start Your Journey",
    phase1Title: "Phase 1: Seamless Preparation",
    phase2Title: "Phase 2: Supported Arrival",
    phase3Title: "Phase 3: Full Integration",
    readMoreInfo: "For More Information"
};

const arStudyInSpainContent: typeof enStudyInSpainContent = {
    id: "study",
    pageTitle: "التعليم المهني والفني في إسبانيا",
    intro: "طريقك الأسرع لمستقبل مهني أوروبي. نقدم قبولاً مضمونًا في برامج التدريب المهني الرسمية (Ciclos) التي تدمج الدراسة الأكاديمية مع التدريب العملي. صُممت برامجنا للدخول السريع إلى سوق العمل في الاتحاد الأوروبي وتوفير مسار قانوني للإقامة.",
    whyTitle: "لماذا تختار التدريب المهني والفني؟",
    whyPoints: [
        { icon: icons.Award, title: "قبول مضمون", description: "احصل على مكانك في مؤسسات حكومية حيث التعليم عالي الجودة وشبه مجاني." },
        { icon: icons.Briefcase, title: "تدريب مدفوع الأجر", description: "اكتسب خبرة عملية واكسب المال أثناء التعلم مع شبكتنا من الشركات الشريكة." },
        { icon: icons.ShieldCheck, title: "دبلوم معترف به في الاتحاد الأوروبي", description: "تخرج بدبلوم 'فني أعلى' رسمي، مما يفتح لك فرص عمل في جميع أنحاء الاتحاد الأوروبي." },
        { icon: icons.TrendingUp, title: "مسار سريع للإقامة", description: "احصل على الإقامة الدائمة في 5 سنوات فقط بتصريح عمل، مقارنة بـ 10 سنوات لطلاب الجامعة." },
        { icon: icons.Wallet, title: "مسار فعال من حيث التكلفة", description: "بديل ذكي وميسور التكلفة للدرجات الجامعية التقليدية الطويلة والمكلفة." },
        { icon: icons.Languages, title: "برنامج لغة مكثف", description: "يشمل دورة إسبانية شاملة لضمان استعدادك اللغوي للنجاح." },
    ],
    targetAudience: {
        title: "هل هذا البرنامج مناسب لك؟",
        audiences: [
            { icon: icons.School, title: "خريجو الثانوية العامة", description: "مسار مباشر لمستقبل مهني أوروبي دون التكلفة والوقت المرتفعين للشهادة الجامعية التقليدية." },
            { icon: icons.Users, title: "البالغون ومغيرو المسار الوظيفي", description: "حدّث مهاراتك أو غيّر مسارك المهني ببرنامج عملي مصمم للدخول السريع إلى سوق العمل في الاتحاد الأوروبي." },
        ],
    },
    systemTitle: "مسارك عبر نظام التعليم الإسباني",
    systemIntro: "تتناسب برامجنا مع الإطار التعليمي الإسباني الرسمي، وتقدم مسارًا مباشرًا للحصول على لقب مهني.",
    systemSteps: [],
    systemImage: arabicSystemImage,
    supportTitle: "باقة دعمنا الشاملة",
    supportIntro: "من طلبك في بلدك إلى استقرارك الكامل في إسبانيا، ندير كل خطوة في العملية بعناية فائقة.",
    supportServices: [
        { icon: icons.FileCheck, description: "إعداد كامل للمستندات القانونية، الترجمة، التوثيق، والأبوستيل." },
        { icon: icons.Stamp, description: "الحصول على خطابات القبول الرسمية ومعالجة معادلة الشهادات." },
        { icon: icons.Scale, description: "دعم قانوني كامل مع محامي الهجرة المتخصصين لدينا حتى إصدار تأشيرتك." },
        { icon: icons.Plane, description: "استقبال من المطار عند الوصول وإقامة فندقية لليلة الأولى." },
        { icon: icons.Home, description: "المساعدة في العثور على سكن مناسب طويل الأمد." },
        { icon: icons.Users, description: "إرشاد كامل لجميع إجراءات الإقامة: TIE، NIE، والتسجيل البلدي (Empadronamiento)." },
        { icon: icons.Bank, description: "دعم لفتح حساب بنكي إسباني وتفعيل التأمين الصحي." },
        { icon: icons.Building2, description: "برنامج اندماج ثقافي مع جولات في المدينة لمساعدتك على الاستقرار والشعور وكأنك في بيتك." },
    ],
    docsTitle: "المستندات المطلوبة",
    docsList: [
        "جواز سفر ساري المفعول لمدة لا تقل عن سنة.",
        "شهادة الثانوية العامة أو شهادة جامعية (مترجمة وموثقة بالأبوستيل).",
        "كشف حساب بنكي يثبت وجود أموال كافية (يوصى بحد أدنى 7000 يورو).",
        "شهادة خلو من السوابق الجنائية (مترجمة وموثقة بالأبوستيل).",
        "شهادة طبية تفيد بخلوك من الأمراض المعدية.",
        "تأمين صحي إسباني كامل يغطي فترة إقامتك بأكملها."
    ],
    programRefundTitle: "سياسة الدفع والاسترداد",
    programRefund: "مجانًا:\nأ- في حال الرفض الأولي: يقدم المحامي تظلمًا رسميًا\nب- في حال الرفض النهائي: يتم خصم المصاريف الادارية ",
    readyForJourneyTitle: "استعد لرحلتك",
    phase1Title: "المرحلة الأولى: الإعداد السلس",
    phase2Title: "المرحلة الثانية: الوصول المدعوم",
    phase3Title: "المرحلة الثالثة: الاندماج الكامل",
    readMoreInfo: "للمزيد من المعلومات"
};


export const content = {
    en: {
        metadata: {
            home: {
                title: "Khatwa - Your Gateway to Spain | Study, Residency & Investment",
                description: "Expert guidance for studying, living, and investing in Spain. We handle visas, residency, and legal procedures for a seamless transition.",
                keywords: ["Spain", "Visa", "Study", "Investment", "Residency", "Khatwa", "Immigration"]
            },
            about: {
                title: "About Khatwa | Trusted Spanish Immigration Consultants",
                description: "Learn about Khatwa's mission to bridge the gap between you and your dreams in Spain. Founded by Dr. Abdelrahman Hamad.",
                keywords: ["About Us", "Team", "Mission", "Dr. Abdelrahman Hamad"]
            },
            study: {
                title: "Vocational Training in Spain | Guaranteed Admission & Internships",
                description: "Fast track your career with vocational training in Spain. Paid internships, guaranteed admission, and a clear path to residency.",
                keywords: ["Study", "Vocational Training", "Spain", "Ciclo Formativo", "Internships"]
            },
            studentsUnder18: {
                title: "Study in Spain for Minors | Legal Guardianship & Support",
                description: "Safe and legal study programs for students under 18 in Spain. Includes full legal guardianship, housing, and academic support.",
                keywords: ["Minors", "Study Abroad", "Guardianship", "High School"]
            },
            postgraduateStudy: {
                title: "Master's & PhD in Spain | University of Vigo Partnership",
                description: "Pursue your Master's or PhD in Spain. Official programs with university partnerships and research opportunities.",
                keywords: ["Masters", "PhD", "Postgraduate", "University of Vigo"]
            },
            digitalNomad: {
                title: "Digital Nomad Visa Spain | Remote Work Residency",
                description: "Live and work remotely from Spain. We provide complete legal and administrative support for the Digital Nomad Visa.",
                keywords: ["Digital Nomad", "Remote Work", "Visa", "Beckham Law"]
            },
            tourism: {
                title: "Premium Tourism in Spain | VIP Tours & Residency Scouting",
                description: "Experience the beauty of Spain with our curated VIP tourism packages. Explore residency and investment opportunities while you travel.",
                keywords: ["Tourism", "Travel", "Spain", "VIP", "Residency Scouting"]
            },
            familyReunification: {
                title: "Family Reunification Visa Spain | Bring Your Family",
                description: "Bring your family to live with you legally in Spain. We handle the entire family reunification process smoothly.",
                keywords: ["Family", "Reunification", "Visa", "Dependents"]
            },
            nonLucrative: {
                title: "Non-Lucrative Visa Spain | Retire & Live in Spain",
                description: "Retire or live in Spain with passive income. Full residency support for the Non-Lucrative Visa application.",
                keywords: ["Non-Lucrative", "Retirement", "Visa", "Passive Income"]
            },
            contact: {
                title: "Contact Khatwa | Free Consultation for Spanish Visas",
                description: "Get in touch with us for a free consultation about your future in Spain. We are here to answer your questions.",
                keywords: ["Contact", "Consultation", "Spain", "Help"]
            },
            faq: {
                title: "FAQ | Common Questions About Living in Spain",
                description: "Find answers to common questions about visas, study, residency, and life in Spain.",
                keywords: ["FAQ", "Questions", "Help", "Guide"]
            },
            servicesOverview: {
                title: "Our Services | Comprehensive Spanish Immigration Support",
                description: "Explore our full range of services: Study programs, Visas, Residency, Tourism, and Investment in Spain.",
                keywords: ["Services", "Immigration", "Visa", "Study"]
            },
            otherServices: {
                title: "Other Services | Golden Visa & Investment",
                description: "Expert legal assistance for Golden Visa, investment opportunities, and customized tourism packages.",
                keywords: ["Golden Visa", "Investment", "Custom Tours"]
            }
        },
        header: {
            logo: "Khatwa",
            nav: {
                home: "Home",
                about: "About Us",
                services: {
                    title: "Services",
                    overview: {
                        title: "All Services Overview",
                        page: "services-overview" as const,
                    },
                    categories: [
                        {
                            title: "Tourism Programs",
                            items: {
                                tourism: "Premium Tourism Program",
                            }
                        },
                        {
                            title: "Study Programs",
                            items: {
                                study: "Vocational & Technical Training",
                                studentsUnder18: "Study Program (Under 18)",
                                postgraduateStudy: "Master's & PhD Program",
                            }
                        },
                        {
                            title: "Residency | Investment | Visas",
                            items: {
                                digitalNomad: "Digital Nomad Visa",
                                nonLucrative: "Non-Lucrative Visa",
                                familyReunification: "Family Reunification Visa",
                            }
                        }
                        
                    ]
                },
                faq: "FAQ",
                contact: "Contact Us"
            },
            language: "العربية"
        },
        hero: {
            slides: [
                {
                    title: "Khatwa - Your first step",
                    subtitle: "A step toward a better future through the fastest route to European residency and work.",
                    image: heroImage1
                },
                {
                    title: "Comprehensive Visa Assistance",
                    subtitle: "We assist clients in obtaining various Spanish visas under the guidance of certified immigration lawyers, with full support from start to settlement.",
                    image: heroImage2
                },
                {
                    title: "Vocational Education in Spain",
                    subtitle: "The fastest route to residency and work. Choose the technical path for rapid qualification for the European job market and legal residency.",
                    image: heroImage3
                },
                {
                    title: "Genuine Postgraduate Studies",
                    subtitle: "With our academic ties to the University of Vigo and research centers like CINBIO, we provide dedicated support for Master’s and PhD applicants.",
                    image: heroImage4
                },
                {
                    title: "Integrated Investment Solution",
                    subtitle: "Whether you're buying property or starting a business, we guide you step-by-step through all legal and administrative procedures.",
                    image: heroImage5
                },
                {
                    title: "Discovery Tours & Personal       Support",
                    subtitle: "Explore opportunities with our organized tours and personal accompaniment service, supporting you from the moment you arrive.",
                    image: heroImage6
                }
            ],
            cta: "Discover Our Services",
            cardsSection: {
                id: "services-overview",
                title: "Our Core Services",
                cards: enHomeCards,
            }
        },
        about: {
            title: "About Khatwa",
            intro: "Khatwa — meaning “step” in Arabic — was founded by Dr. Abdelrahman Hamad, a Spanish national and PhD holder from the University of Vigo. We provide structured pathways to residency, education, and tourism in Spain, in collaboration with accredited legal and academic partners.",
            founderTitle: "Meet the Founder",
            founderName: "Dr. Abdelrahman Hamad",
            founderCredentials: "Ph.D. in Materials Science and Nanotechnology – University of Vigo",
            founderBio: "With a deep personal and academic connection to Spain, Dr. Abdelrahman founded Khatwa to simplify the complex process of relocating and settling in the country. His firsthand experience as an international student and resident, combined with his extensive network, provides clients with unparalleled guidance and support.",
            founderLinks: enFounderLinks,
            ourVisionary: "Our Visionary",
            values: ["Innovation", "Community", "Excellence", "Growth"],
            readMore: "Read More About Us",
            partnersTitle: "Our Network & Partners",
            partnersIntro: "Our strength lies in our official collaborations. We work directly with:",
            partnersList: [
                "Accredited law firms specializing in immigration.",
                "Official technical and vocational training institutes in Galicia.",
                "A diverse portfolio of companies offering paid internships for our students.",
                "Real estate agencies and tourism operators."
            ],
            activitiesTitle: "Official Activities",
            activitiesText: "Khatwa operates as a legally registered professional consultancy establishment in Spain. Our core activities include delivering educational services, offering guidance on residency and administrative procedures, organizing VIP tourism experiences, and providing support and advisory services for investment opportunities."
        },
        faq: {
            pageTitle: "Frequently Asked Questions",
            intro: "Find answers to the most common questions about studying, living, and working in Spain. If you don't find your answer here, feel free to contact us.",
            categories: enFaqCategories
        },
        servicesOverview: {
            pageTitle: "All Our Services",
            intro: "From academic pursuits to residency and unforgettable tourism experiences, we offer a comprehensive suite of services to make your journey to Spain seamless and successful. Explore our offerings below.",
            categories: enServicesOverviewCategories,
            cta: "Learn More",
        },
        studyInSpain: enStudyInSpainContent,
        studentsUnder18: {
            id: "students-under-18",
            pageTitle: "Program for Students Under 18",
            intro: "This program is specially designed for students under 18 for a safe and legal study experience in Spain, in collaboration with government universities and institutes in Galicia. We focus on linguistic and cultural preparation (6-8 months) and provide a pathway to technical education, which is the fastest route to legal residency and employment in the EU.",
            whyTitle: "Program Benefits",
            whyPoints: [
                { icon: icons.UserCheck, title: "Swift Market Entry", description: "Technical education allows for faster entry into the labor market, often after just one year of study." },
                { icon: icons.Award, title: "EU-Recognized Certificates", description: "Earn degrees like Ciclo Medio or Ciclo Superior, which are highly valued and in demand across Europe." },
                { icon: icons.TrendingUp, title: "Fast-Track Residency", description: "Convert to a work residence permit quickly and reach permanent residency in 5 years (instead of 10 for university students)." },
                { icon: icons.School, title: "Dual Education System", description: "Combine academic learning with practical training at top Spanish companies." },
                { icon: icons.ShieldCheck, title: "Comprehensive Care", description: "We provide full legal guardianship, health insurance, and safe housing for students under 18." },
                { icon: icons.Monitor, title: "Diverse Specializations", description: "Choose from high-demand fields like Industrial Electricity, Web Development, Renewable Energy, or Nursing Aid." },
            ],
            targetAudience: {
                title: "Is This Program Right For Your Child?",
                audiences: [
                    { icon: icons.School, title: "Minor Students", description: "For students under 18 seeking a safe and legal pathway to study in Spain with full guardianship support." },
                    { icon: icons.Users, title: "Parents Seeking Safety", description: "For parents who want comprehensive care and legal protection for their children studying abroad." },
                ],
            },
            systemTitle: "Pathway for Minor Students",
            systemIntro: "Our comprehensive program ensures your child's safety and academic success through a structured selection and support process.",
            systemSteps: enMinorStudentSteps,
            supportTitle: "Our All-Inclusive Support Package",
            supportIntro: "From document preparation to full settlement in Spain, we manage every step with expert care for your child's safety.",
            supportServices: [
                { icon: icons.FileCheck, description: "Full student application preparation for accredited institutions." },
                { icon: icons.Stamp, description: "Equivalency processing for the student's academic certificates." },
                { icon: icons.Scale, description: "Notarization of the legal guardianship letter and parental authorization in Spain." },
                { icon: icons.Plane, description: "Airport pickup and coordination of relocation and housing." },
                { icon: icons.Users, description: "Support for obtaining the NIE number and residency card (TIE)." },
                { icon: icons.Bank, description: "Assistance with opening a bank account and activating health insurance." },
                { icon: icons.Building2, description: "Registration at the municipality (Empadronamiento) and issuing a public transport card." },
                { icon: icons.FileText, description: "Monthly academic and legal follow-up reports sent to parents." },
            ],
            docsTitle: "Required Documents",
            docsList: [
                "Parental authorization letter for travel and residency (notarized and translated).",
                "Legal guardianship letter (Tutor Legal) issued for Khatwa's representative.",
                "Birth certificate (translated and with Apostille).",
                "Educational certificate (translated and with Apostille).",
                "Internationally certified medical certificate.",
                "Guardian's bank statement showing at least €7,000.",
                "Comprehensive Spanish health insurance.",
                "Visa application form signed by a guardian.",
                "Two recent photos with a white background.",
                "Preliminary flight and housing bookings."
            ],
            programRefundTitle: "Payment Information",
            programRefund: "Please contact us for detailed pricing and payment information.",
            readyForJourneyTitle: "Get Ready for Your Child's Journey",
            phase1Title: "Phase 1: Seamless Preparation",
            phase2Title: "Phase 2: Supported Arrival",
            phase3Title: "Phase 3: Full Integration",
            readMoreInfo: "For More Information"
        },
        postgraduateStudy: {
            id: "postgraduate-study",
            pageTitle: "Master's and PhD Program",
            intro: "Khatwa provides guidance for students interested in pursuing Master's or PhD degrees in Spain. Our professional network, including collaborations with the University of Vigo, CINBIO research center, and recognized technical institutes, helps students navigate officially accredited programs in various academic fields.",
            whyTitle: "Program Benefits",
            whyPoints: [
                { icon: icons.GraduationCap, title: "Post-Study Residence", description: "After completion, students are eligible for a 1-year job search residency, convertible to a full work permit." },
                { icon: icons.Award, title: "Official EU Degrees", description: "Earn a Máster Universitario or Doctorado degree, recognized throughout the EU and internationally equivalent." },
                { icon: icons.Scale, title: "Residency Path", description: "Our specialized lawyers handle the legal coordination to convert your student status to a work permit." },
                { icon: icons.Briefcase, title: "Work Flexibility", description: "Spain's academic system allows you to gain high-level qualifications while preparing for the European labor market." },
                { icon: icons.Clock, title: "PhD Opportunities", description: "Doctoral programs offer 3-4 years focused on original research with world-class facilities and researchers." },
                { icon: icons.Monitor, title: "Advanced Fields", description: "Specializations include Neuroscience, Chemical Research, Advanced Biotechnology, Economic Analysis, and more." },
            ],
            targetAudience: {
                title: "Is This Program Right For You?",
                audiences: [
                    { icon: icons.GraduationCap, title: "Bachelor's Graduates", description: "For graduates seeking advanced qualifications with EU recognition and professional work opportunities." },
                    { icon: icons.Users, title: "Researchers & Academics", description: "For those pursuing doctoral studies with direct access to Spanish research hubs." },
                ],
            },
            systemTitle: "Your Academic Journey",
            systemIntro: "Our structured process connects you with top-tier education and ensures your legal and administrative success in Spain.",
            systemSteps: enMasterPhdSteps,
            supportTitle: "Our All-Inclusive Support Package",
            supportIntro: "From admission to career transition, we manage every academic and legal step.",
            supportServices: [
                { icon: icons.FileCheck, description: "Prepare full academic file (CV, motivation letter, recommendations, translations)." },
                { icon: icons.School, description: "Application to official programs and handling university degree equivalency." },
                { icon: icons.Stamp, description: "Securing official admission letters and handling necessary legalizations (Apostille)." },
                { icon: icons.Scale, description: "Full legal follow-up with specialized lawyers throughout the visa process." },
                { icon: icons.Plane, description: "Airport pickup and arranging temporary accommodation or hotel stay." },
                { icon: icons.Home, description: "Assistance with municipality registration (Empadronamiento) and NIE number." },
                { icon: icons.Bank, description: "Support for opening a Spanish bank account and activating health insurance." },
                { icon: icons.Building2, description: "Cultural integration program including guided tours of Vigo, Ourense, and Porto." },
            ],
            docsTitle: "Required Documents",
            docsList: [
                "Passport valid for at least one year.",
                "Bank statement showing stable funds (at least €7,000 recommended).",
                "Medical certificate (translated and with Apostille).",
                "Educational certificates (translated and with Apostille).",
                "Embassy appointment booking (BLS center).",
                "Comprehensive Spanish health insurance.",
                "Two recent photos with a white background.",
                "Proof of preliminary flight and housing bookings."
            ],
            programRefundTitle: "Payment Information",
            programRefund: "Please contact us for detailed pricing and payment information.",
            readyForJourneyTitle: "Start Your Academic Career in Spain",
            phase1Title: "Phase 1: Seamless Preparation",
            phase2Title: "Phase 2: Supported Arrival",
            phase3Title: "Phase 3: Full Integration",
            readMoreInfo: "For More Information"
        },
        tourism: {
            id: "tourism",
            pageTitle: "Premium Tourism & Discovery Program",
            intro: "Experience Spain beyond sightseeing. Our unified tourism program combines luxury travel with strategic scouting for education, residency, and investment.",
            heroImage: "https://images.unsplash.com/photo-1543783232-47503914a27c?q=80&w=2070&auto=format&fit=crop",
            itinerariesTitle: "Our Curated Tour Itineraries",
            itineraries: [
                {
                    title: "Program 1: Northwest Spain + Porto (Portugal)",
                    image: programImage1,
                    points: [
                        "Vigo – Evening tour of the city and waterfront.",
                        "Aguda & Cíes Islands (Islas Cíes) – Breathtaking natural landscapes.",
                        "Ourense – Visit Roman baths “As Burgas” and “Puente Romano”.",
                        "Santiago de Compostela – St. James Cathedral and Old Town.",
                        "A Coruña – Iconic Tower of Hercules and waterfront promenade.",
                        "Porto (Portugal) – Tasting and historical landmark visits.",
                        "Porto City Tour + Return journey."
                    ]
                },
                {
                    title: "Program 2: Spain & Portugal Mix",
                    image: programImage2,
                    points: [
                        "Vigo – City exploration.",
                        "Porto – Douro River and major historical landmarks.",
                        "Porto – Tour of the city and visits to the Old Cathedral.",
                        "Lisbon – Transfer to Lisbon and leisure time in the city.",
                        "Sintra – Pena Palace and Montserrat Park.",
                        "Santiago de Compostela – St. James Cathedral and Old Town."
                    ]
                },
                {
                    title: "Program 3: Cordoba & Andalusia",
                    image: programImage3,
                    points: [
                        "Granada – Arrival and exploration of the Old Quarter.",
                        "Alhambra – Visit to the Alhambra Palace and Generalife Gardens.",
                        "Cordoba – Mosque of Cordoba and Roman Bridge.",
                        "Cordoba – Visit to the Jewish Quarter and Corazon de Maria Square.",
                        "Seville – Transfer to Seville, Cathedral and Giralda Tower.",
                        "Seville – Plaza de España and Maria Luisa Gardens.",
                        "Malaga – Day trip (Sea + Mountain Castle)."
                    ]
                },
                {
                    title: "Program 4: Barcelona + Madrid",
                    image: programImage4,
                    points: [
                        "Barcelona – Boat trip at La Rambla.",
                        "Barcelona – Sagrada Familia and Park Güell.",
                        "Montserrat – Trip to the Mountain Monastery.",
                        "Madrid – Transfer and tour of Plaza Mayor and Buen Retiro.",
                        "Madrid – Visit to Prado Museum and major galleries.",
                        "Toledo – Historical city (Ancient terraces and castles)."
                    ]
                },
                {
                    title: "Program 5: Switzerland – Nature & Mountains",
                    image: programImage5,
                    points: [
                        "Zurich – Arrival and Old Town tour.",
                        "Lucerne – Lake Lucerne and Chapel Bridge.",
                        "Interlaken – Alpine adventure exploration.",
                        "Mürren – Mountain peaks and breathtaking views.",
                        "Jungfraujoch – Highest railway station in Europe.",
                        "Geneva – Transfer, Lake Geneva and city tour."
                    ]
                },
                {
                    title: "Program 6: France – Netherlands – Belgium",
                    image: programImage6,
                    points: [
                        "Paris – Eiffel Tower and Seine River.",
                        "Paris – Louvre Museum and Notre-Dame Cathedral.",
                        "Brussels – Grand Place and Old Town views.",
                        "Brussels – Chocolate and Waffle tasting tour.",
                        "Amsterdam – Canal cruise tour.",
                        "Amsterdam – Van Gogh Museum and Jordaan district."
                    ]
                }
            ],
            comparisonTitle: "Compare Our Specialized Programs",
            comparisonPrograms: [
                {
                    name: "General Tourism",
                    description: "Perfect for families and individuals focused on pure leisure, culture, and relaxation.",
                    focus: "Sightseeing & Leisure",
                    uniqueFeatures: ["Iconic landmark visits", "Authentic gastronomy", "Historical excursions"],
                    priceHint: "Contact for Pricing"
                },
                {
                    name: "Smart Tourism (Directed)",
                    description: "Designed for those exploring Spanish educational and professional opportunities.",
                    focus: "Academic Scouting",
                    uniqueFeatures: ["Guided campus visits", "Admission counseling", "Professional networking"],
                    priceHint: "Contact for Pricing"
                },
                {
                    name: "Smart Tourism (Visa Pathway)",
                    description: "High-end travel combined with preliminary legal steps for residency.",
                    focus: "Residency Preparation",
                    uniqueFeatures: ["Preliminary legal profiling", "Relocation area scouting", "Document verification"],
                    priceHint: "Contact for Pricing"
                },
                {
                    name: "VIP Tourism (Visa Pathway)",
                    description: "The ultimate luxury strategy overseen by experts for high-net-worth individuals.",
                    focus: "Elite Relocation",
                    uniqueFeatures: ["5-star luxury hotels", "Private strategy with Dr. Abdelrahman", "Exclusive investment access"],
                    priceHint: "Contact for Pricing"
                }
            ],
            ctaBlock: {
                title: "Ready to Explore Spain with a Purpose?",
                text: "Whether you're visiting for fun or planning your future, our experts ensure a seamless and productive journey.",
                button: "Consult with Our Team"
            }
        },
        digitalNomad: {
            id: "digital-nomad",
            pageTitle: "Digital Nomad Visa & Residency",
            intro: "Spain offers an attractive Digital Nomad visa for remote workers and freelancers. We provide end-to-end services to secure your residency and help you settle in.",
            whyTitle: "Key Benefits",
            whyPoints: [
                { icon: icons.ShieldCheck, title: "Long-term Residency", description: "Legal residency in Spain for up to 5 years." },
                { icon: icons.TrendingUp, title: "Tax Benefits", description: "Favorable tax regime (Beckham Law)." },
                { icon: icons.Plane, title: "Schengen Freedom", description: "Freedom to travel within the Schengen Area." },
                { icon: icons.Award, title: "Quality of Life", description: "High quality of life and affordable cost of living." },
                { icon: icons.Users, title: "Family Inclusion", description: "The visa can be extended to include your spouse and children." },
                { icon: icons.Laptop, title: "Work Remotely", description: "Work from anywhere in Spain for companies outside Spain." },
            ],
            targetAudience: {
                title: "Is This Visa Right For You?",
                audiences: [
                    { icon: icons.Laptop, title: "Remote Workers", description: "For digital professionals working remotely for non-Spanish companies." },
                    { icon: icons.Briefcase, title: "Freelancers", description: "For self-employed individuals with international clients seeking European residency." },
                ],
            },
            systemTitle: "Your Path to Spanish Residency",
            systemIntro: "Our proven 5-step process ensures a smooth journey from your initial application to receiving your residency card.",
            systemSteps: enDigitalNomadSteps,
            supportTitle: "Our All-Inclusive Support Package",
            supportIntro: "From application to settlement, we manage every step with expert care.",
            supportServices: [
                { icon: icons.FileCheck, description: "Complete document preparation and translation." },
                { icon: icons.Scale, description: "Full legal support with specialized lawyers." },
                { icon: icons.Stamp, description: "Visa application assistance and embassy coordination." },
                { icon: icons.Plane, description: "Airport pickup upon arrival." },
                { icon: icons.Home, description: "Assistance with finding accommodation." },
                { icon: icons.Bank, description: "Support with opening a Spanish bank account." },
                { icon: icons.Users, description: "Full guidance on residency procedures (TIE, NIE, Empadronamiento)." },
                { icon: icons.Building2, description: "Cultural integration support to help you settle in." },
            ],
            docsTitle: "Main Requirements",
            docsList: [
                "Proof of remote work for a non-Spanish company.",
                "Minimum monthly income of ~€2,600.",
                "University degree or 3+ years of work experience.",
                "Clean criminal record.",
                "Valid passport.",
                "Comprehensive health insurance."
            ],
            programRefundTitle: "Payment Information",
            programRefund: "Please contact us for detailed pricing and payment information.",
            readyForJourneyTitle: "Get Ready for Your Digital Nomad Journey",
            phase1Title: "Phase 1: Seamless Preparation",
            phase2Title: "Phase 2: Supported Arrival",
            phase3Title: "Phase 3: Full Integration",
            readMoreInfo: "For More Information"
        },
        nonLucrative: {
            id: "non-lucrative",
            pageTitle: "Non-Lucrative Visa",
            intro: "The Non-Lucrative Residence Visa is one of the most popular residency types in Spain, ideal for individuals and families who wish to live legally in Spain without engaging in any professional or commercial activities. This residency allows you to settle in a safe European environment, benefit from the Spanish healthcare system, and provide free education for your children in public schools.",
            whyTitle: "Visa Benefits",
            whyPoints: [
                { icon: icons.ShieldCheck, title: "1-Year Initial Grant", description: "Initially granted for one year, renewable for two additional years." },
                { icon: icons.TrendingUp, title: "Path to Citizenship", description: "After five years of continuous residence, apply for permanent residency and later Spanish citizenship." },
                { icon: icons.Users, title: "Family Inclusion", description: "Bring family members, including parents, to live with you in Spain." },
                { icon: icons.School, title: "Free Education", description: "Children can study in Spanish schools at a nominal cost or for free." },
                { icon: icons.Heart, title: "Healthcare Access", description: "Benefit from the Spanish healthcare system." },
                { icon: icons.RefreshCw, title: "Status Modification", description: "Although the NLV prohibits work, this status can be modified later to a work permit or self-employment." },
            ],
            targetAudience: {
                title: "Is This Visa Right For You?",
                audiences: [
                    { icon: icons.Users, title: "Retirees", description: "For individuals with passive income or savings seeking a peaceful European lifestyle." },
                    { icon: icons.UsersRound, title: "Families", description: "For families wanting to settle in Spain with access to healthcare and education." },
                ],
            },
            systemTitle: "Your Path to Residency",
            systemIntro: "Our proven 5-step process ensures a smooth journey from your initial application to receiving your residency card.",
            systemSteps: enNonLucrativeSteps,
            supportTitle: "Our All-Inclusive Support Package",
            supportIntro: "From application to settlement, we manage every step with expert care.",
            supportServices: [
                { icon: icons.FileCheck, description: "Complete document preparation, translation, and apostille." },
                { icon: icons.Scale, description: "Full legal follow-up by a specialized lawyer until you receive your residency card (TIE)." },
                { icon: icons.Plane, description: "Airport pickup in Vigo and first-night accommodation in a comfortable hotel." },
                { icon: icons.Bank, description: "Accompaniment for opening a bank account and obtaining an NIE number." },
                { icon: icons.Stamp, description: "Residency application and city hall registration (Empadronamiento)." },
                { icon: icons.Heart, description: "Provision of comprehensive health insurance for the first month." },
                { icon: icons.Building2, description: "City orientation tour and a public transport card." },
                { icon: icons.RefreshCw, description: "Annual renewal service or assistance with converting to a work or investment residency." },
            ],
            docsTitle: "Required Documents",
            docsList: [
                "Proof of Financial Means: Annual income or savings of at least €28,800 for the main applicant, plus ~€7,200 for each additional family member.",
                "Comprehensive private health insurance from a company authorized to operate in Spain.",
                "Clean criminal record from your country of residence for the last five years, translated and certified with an Apostille.",
                "Medical certificate stating you are free from contagious diseases.",
                "Proof of accommodation in Spain (rental contract or property deed).",
                "Passport valid for at least one year."
            ],
            programRefundTitle: "Payment Information",
            programRefund: "Please contact us for detailed pricing and payment information.",
            readyForJourneyTitle: "Get Ready for Your New Life in Spain",
            phase1Title: "Phase 1: Seamless Preparation",
            phase2Title: "Phase 2: Supported Arrival",
            phase3Title: "Phase 3: Full Integration",
            readMoreInfo: "For More Information"
        },
        familyReunification: {
            id: "family-reunification",
            pageTitle: "Family Reunification Visa",
            intro: "This visa allows family members of a foreign resident in Spain to join them and live legally in the country. This program is essential for those who wish to unite their family in Spain, provided they meet the legally established requirements.",
            whyTitle: "Visa Benefits",
            whyPoints: [
                { icon: icons.Users, title: "Unite Your Family", description: "Family members receive a residence permit aligned with the sponsor's permit duration." },
                { icon: icons.TrendingUp, title: "Path to Permanent Residency", description: "After fulfilling the requirements, apply for long-term residence or even Spanish citizenship." },
                { icon: icons.RefreshCw, title: "Status Flexibility", description: "Family members can change their residence type (e.g., from family reunification to work or self-employment)." },
                { icon: icons.ShieldCheck, title: "Legal Security", description: "Secure legal residency for your entire family in Spain." },
                { icon: icons.School, title: "Education Access", description: "Children can access Spanish public education." },
                { icon: icons.Heart, title: "Healthcare Coverage", description: "Access to Spanish healthcare system for all family members." },
            ],
            targetAudience: {
                title: "Is This Visa Right For You?",
                audiences: [
                    { icon: icons.Users, title: "Resident Sponsors", description: "For legal residents in Spain who want to bring their family members to live with them." },
                    { icon: icons.UsersRound, title: "Family Members", description: "For spouses, children, and parents of legal residents in Spain." },
                ],
            },
            systemTitle: "Steps for Family Reunification",
            systemIntro: "We manage the entire process to ensure your family can join you in Spain as quickly and smoothly as possible.",
            systemSteps: enFamilyReunificationSteps,
            supportTitle: "Our All-Inclusive Support Package",
            supportIntro: "From application to settlement, we help your family reunite in Spain.",
            supportServices: [
                { icon: icons.Plane, description: "Reception of family members at the airport or in Spain." },
                { icon: icons.FileCheck, description: "Translation and certification of required documents for the applicant(s)." },
                { icon: icons.Scale, description: "Providing legal support to obtain the residence card (TIE) for each family member." },
                { icon: icons.Stamp, description: "Coordination of the family reunification application submission." },
                { icon: icons.Home, description: "Assistance in registering the family at the municipality (Empadronamiento)." },
                { icon: icons.Bank, description: "Opening bank accounts for individuals." },
                { icon: icons.Users, description: "Follow-up on tax and residency regulations." },
                { icon: icons.RefreshCw, description: "Renewal services or switching to other permits if desired." },
            ],
            docsTitle: "Required Documents",
            docsList: [
                "Appropriate visa/residence application form, signed by the applicant.",
                "Valid passport for the applicant, with copies.",
                "Proof of family relationship (marriage certificate, children's birth certificates, proof of adoption if applicable), translated and certified if issued outside of Spain.",
                "Proof that the sponsor in Spain has a valid legal residence and has actually resided for a certain period (usually one year or more).",
                "Proof that the sponsor has adequate housing in Spain (rental contract, property deed, or a certificate from the municipality).",
                "Proof that the sponsor has sufficient financial resources to support themselves and the family members they wish to include, without being a burden on the public system.",
                "Health insurance or proof of health coverage for the applicant or family members.",
                "Clean criminal record for the applicant."
            ],
            programRefundTitle: "Payment Information",
            programRefund: "Please contact us for detailed pricing and payment information.",
            readyForJourneyTitle: "Get Ready to Reunite Your Family",
            phase1Title: "Phase 1: Seamless Preparation",
            phase2Title: "Phase 2: Supported Arrival",
            phase3Title: "Phase 3: Full Integration",
            readMoreInfo: "For More Information"
        },
        otherServices: {
            id: "other-services",
            title: "Other Visa & Residency Services",
            intro: "Beyond our core offerings, we provide expert legal assistance for a range of other residency options in Spain.",
            services: enOtherServices
        },
        contactPage: {
            pageTitle: "Get in Touch",
            intro: "We're here to help. Whether you have a question about our services, need a consultation, or just want to say hello, we'd love to hear from you.",
            form: {
                name: "Full Name",
                email: "Email Address",
                subject: "Subject",
                message: "Your Message",
                cta: "Send Message"
            },
            infoTitle: "Contact Information",
            address: "Vigo, Pontevedra, Spain",
            phone: "+34 610 99 29 38",
            email: "khatwa.es@gmail.com",
        },
        footer: {
            companyName: "Khatwa",
            description: "Your first step towards a new life in Spain.",
            contactTitle: "Get in Touch",
            address: "Vigo, Pontevedra, Spain",
            phone: "+34 610 99 29 38",
            email: "khatwa.es@gmail.com",
            legalTitle: "Legal Information",
            legalText: "Khatwa A professional consultancy establishment operated by Dr. Abdelrahman Hamad, registered in Spain.",
            followTitle: "Follow Us",
            socialLinks: socialLinks,
            copyright: "© 2026 Khatwa. All rights reserved."
        }
    },
    ar: {
        metadata: {
            home: {
                title: "خطوة - بوابتك إلى إسبانيا | دراسة، إقامة واستثمار",
                description: "توفر خطوة إرشادات الخبراء للدراسة والعيش والاستثمار في إسبانيا. ندير التأشيرات والإقامة والإجراءات القانونية لانتقال سلس.",
                keywords: ["إسبانيا", "فيزا", "دراسة", "استثمار", "إقامة", "خطوة", "هجرة"]
            },
            about: {
                title: "عن خطوة | مستشارو الهجرة الإسبانية الموثوقون",
                description: "تعرف على مهمة خطوة لسد الفجوة بينك وبين أحلامك في إسبانيا. أسسها د. عبدالرحمن جنيدي.",
                keywords: ["من نحن", "فريق", "مهمة", "د. عبدالرحمن جنيدي"]
            },
            study: {
                title: "التدريب المهني في إسبانيا | قبول مضمون وتدريب",
                description: "سارع بمسارك المهني مع التدريب المهني في إسبانيا. تدريب مدفوع الأجر، قبول مضمون، ومسار واضح للإقامة.",
                keywords: ["دراسة", "تدريب مهني", "إسبانيا", "تكوين مهني", "تدريب"]
            },
            studentsUnder18: {
                title: "الدراسة في إسبانيا للقاصرين | وصاية قانونية ودعم",
                description: "برامج دراسية آمنة وقانونية للطلاب تحت 18 سنة في إسبانيا. تشمل الوصاية القانونية الكاملة، السكن، والدعم الأكاديمي.",
                keywords: ["قاصرين", "دراسة بالخارج", "وصاية", "ثانوية"]
            },
            postgraduateStudy: {
                title: "ماجستير ودكتوراه في إسبانيا | شراكة جامعة فيغو",
                description: "تابع دراسة الماجستير أو الدكتوراه في إسبانيا. برامج رسمية مع شراكات جامعية وفرص بحثية.",
                keywords: ["ماجستير", "دكتوراه", "دراسات عليا", "جامعة فيغو"]
            },
            digitalNomad: {
                title: "فيزا النوماد الرقمي إسبانيا | إقامة العمل عن بعد",
                description: "عش واعمل عن بعد من إسبانيا. نقدم دعمًا قانونيًا وإداريًا كاملًا لتأشيرة النوماد الرقمي.",
                keywords: ["نوماد رقمي", "عمل عن بعد", "فيزا", "قانون بيكهام"]
            },
            tourism: {
                title: "سياحة فاخرة في إسبانيا | جولات VIP واستكشاف الإقامة",
                description: "جرب جمال إسبانيا مع باقات السياحة الفاخرة لدينا. استكشف فرص الإقامة والاستثمار أثناء سفرك.",
                keywords: ["سياحة", "سفر", "إسبانيا", "VIP", "استكشاف الإقامة"]
            },
            familyReunification: {
                title: "فيزا لم الشمل إسبانيا | أحضر عائلتك",
                description: "أحضر عائلتك للعيش معك بشكل قانوني في إسبانيا. ندير عملية لم الشمل بالكامل بسلاسة.",
                keywords: ["عائلة", "لم الشمل", "فيزا", "مرافقين"]
            },
            nonLucrative: {
                title: "الإقامة غير الربحية إسبانيا | تقاعد وعش في إسبانيا",
                description: "تقاعد أو عش في إسبانيا بدخل سلبي. دعم كامل للإقامة لطلب التأشيرة غير الربحية.",
                keywords: ["غير ربحية", "تقاعد", "فيزا", "دخل سلبي"]
            },
            contact: {
                title: "تواصل مع خطوة | استشارة مجانية لتأشيرات إسبانيا",
                description: "تواصل معنا للحصول على استشارة مجانية حول مستقبلك في إسبانيا. نحن هنا للإجابة على أسئلتك.",
                keywords: ["تواصل", "استشارة", "إسبانيا", "مساعدة"]
            },
            faq: {
                title: "الأسئلة الشائعة | أسئلة شائعة حول العيش في إسبانيا",
                description: "اعثر على إجابات للأسئلة الشائعة حول التأشيرات، الدراسة، الإقامة، والحياة في إسبانيا.",
                keywords: ["أسئلة شائعة", "أسئلة", "مساعدة", "دليل"]
            },
            servicesOverview: {
                title: "خدماتنا | دعم هجرة إسباني شامل",
                description: "استكشف مجموعتنا الكاملة من الخدمات: برامج الدراسة، التأشيرات، الإقامة، السياحة، والاستثمار في إسبانيا.",
                keywords: ["خدمات", "هجرة", "فيزا", "دراسة"]
            },
            otherServices: {
                title: "خدمات أخرى | الفيزا الذهبية والاستثمار",
                description: "مساعدة قانونية متخصصة للفيزا الذهبية، فرص الاستثمار، وباقات السياحة المخصصة.",
                keywords: ["فيزا ذهبية", "استثمار", "جولات مخصصة"]
            }
        },
        header: {
            logo: "خطوة",
            nav: {
                home: "الرئيسية",
                about: "عن المؤسسة",
                services: {
                    title: "الخدمات",
                    overview: {
                        title: "نظرة عامة على جميع الخدمات",
                        page: "services-overview" as const,
                    },
                    categories: [
                        {
                            title: "برامج الدراسة",
                            items: {
                                study: "التدريب المهني والفني",
                                studentsUnder18: "برنامج الدراسة (تحت 18)",
                                postgraduateStudy: "برنامج الماجستير والدكتوراه",
                            }
                        },
                        {
                            title: "الإقامة والتأشيرات",
                            items: {
                                digitalNomad: "فيزا النوماد الرقمي",
                                nonLucrative: "الاقامه غير الربحيه",
                                familyReunification: "اقامه لم الشمل",
                            }
                        },
                        {
                            title: "البرامج السياحية",
                            items: {
                                tourism: "برنامج السياحة الراقية",
                            }
                        }
                    ]
                },
                faq: "الأسئلة الشائعة",
                contact: "تواصل معنا"
            },
            language: "English"
        },
        hero: {
            slides: [
                {
                    title: "خطوة - اولي خطواتك",
                    subtitle: "تحت إشراف محامي هجرة معتمدين في إسبانيا، مع متابعة كاملة من البداية حتى الاستقرار.",
                    image: heroImage1
                },
                {
                    title: "التعليم الفني في إسبانيا — أقصر طريق للإقامة والعمل",
                    subtitle: "اختر المسار الفني (Ciclo Medio / Superior) لتأهيل سريع لسوق العمل الأوروبي والحصول على إقامة قانونية.",
                    image: heroImage3
                },
                {
                    title: "دراسات عليا حقيقية برؤية أكاديمية",
                    subtitle: "بفضل خبرتنا وعلاقاتنا مع باحثين وأساتذة في جامعة فيغو ومراكز بحثية مثل CINBIO نساند طلبة الماجستير والدكتوراه.",
                    image: heroImage4
                },
                {
                    title: "نوفر لك حلول استثمارية متكاملة",
                    subtitle: "استثمار في سكن أو تأسيس مشروع تجاري — نرشدك وخطوة بخطوة نساعدك في الإجراءات القانونية والإدارية.",
                    image: heroImage5
                },
                {
                    title: "برنامج سياحي تعريفي ومرافقة شخصية",
                    subtitle: "جولات مُنظمة لتعريفك بالمناطق وفرص الدراسة والعمل قبل اتخاذ القرار — خدمة مرافقة منذ الوصول.",
                    image: heroImage6
                }
            ],
            cta: "اكتشف خدماتنا",
            cardsSection: {
                id: "services-overview",
                title: "خدماتنا الأساسية",
                cards: arHomeCards,
            }
        },
        about: {
            title: "عن خطوة",
            intro: "خطوة — وتعني “Step” باللغة العربية — تأسست على يد الدكتور عبد الرحمن حمد، وهو مواطن إسباني وحاصل على درجة الدكتوراه من جامعة فيغو. نقدم مسارات منظمة للإقامة والتعليم والسياحة في إسبانيا، وذلك بالتعاون مع شركاء قانونيين وأكاديميين معتمدين..",
            founderTitle: "تعرف على المؤسس",
            founderName: "د. عبد الرحمن حمد",
            founderCredentials: "دكتوراه في النانو تكنولوجي علوم المواد وتكنولوجيا النانو الكيمياء الفيزيائيه جامعه فيجوو اسبانيا",
            founderBio: "بفضل ارتباطه الشخصي والأكاديمي العميق بإسبانيا، أسس الدكتور عبد الرحمن 'خطوة' لتبسيط العملية المعقدة للانتقال والاستقرار في البلاد. خبرته المباشرة كطالب ومقيم دولي، بالإضافة إلى شبكته الواسعة، تزود العملاء بإرشادات ودعم لا مثيل لهما.",
            founderLinks: arFounderLinks,
            ourVisionary: "صاحب الرؤية",
            values: ["الابتكار", "المجتمع", "التميز", "النمو"],
            readMore: "اقرأ المزيد عنا",
            partnersTitle: "شبكتنا وشركاؤنا",
            partnersIntro: "تكمن قوتنا في تعاوننا الرسمي. نحن نعمل مباشرة مع:",
            partnersList: [
                "شركات محاماة معتمدة متخصصة في الهجرة.",
                "معاهد تدريب فني ومهني رسمية في غاليسيا.",
                "مجموعة متنوعة من الشركات التي تقدم تدريبًا مدفوع الأجر لطلابنا.",
                "وكالات عقارية ومنظمي رحلات سياحية."
            ],
            activitiesTitle: "الأنشطة الرسمية",
            activitiesText: "'خطوة' مسجلة رسميًا في إسبانيا. تشمل أنشطتنا الرئيسية الخدمات التعليمية، والاستشارات القانونية للإقامة، وتنظيم برامج السياحة لكبار الشخصيات."
        },
        faq: {
            pageTitle: "الأسئلة الشائعة",
            intro: "اعثر على إجابات للأسئلة الأكثر شيوعًا حول الدراسة والعيش والعمل في إسبانيا. إذا لم تجد إجابتك هنا، فلا تتردد في الاتصال بنا.",
            categories: arFaqCategories
        },
        servicesOverview: {
            pageTitle: "جميع خدماتنا",
            intro: "من المسارات الأكاديمية إلى الإقامة والتجارب السياحية التي لا تُنسى، نقدم مجموعة شاملة من الخدمات لجعل رحلتك إلى إسبانيا سلسة وناجحة. استكشف عروضنا أدناه.",
            categories: arServicesOverviewCategories,
            cta: "اعرف المزيد",
        },
        studyInSpain: arStudyInSpainContent,
        studentsUnder18: {
            id: "students-under-18",
            pageTitle: "برنامج الطالب القاصر (تحت 18 عاماً)",
            intro: "صُمم هذا البرنامج خصيصاً للطلاب تحت سن 18 عاماً لضمان تجربة دراسية آمنة وقانونية في إسبانيا، بالتعاون مع الجامعات والمعاهد الحكومية في إقليم غاليسيا. نركز على التحضير اللغوي والثقافي (6-8 أشهر) ونوفر مساراً للتعليم الفني (FP)، وهو أسرع طريق للحصول على الإقامة القانونية والعمل في الاتحاد الأوروبي.",
            whyTitle: "مميزات البرنامج",
            whyPoints: [
                { icon: icons.UserCheck, title: "دخول سريع لسوق العمل", description: "يتيح التعليم الفني الدخول إلى سوق العمل بعد سنة واحدة فقط من بدئ الدراسة في بعض التخصصات." },
                { icon: icons.Award, title: "شهادات معترف بها أوروبياً", description: "احصل على دبلوم فني متوسط (Medio) أو عالي (Superior) معترف بها ومطلوبة بشدة في أوروبا." },
                { icon: icons.TrendingUp, title: "إقامة المسار السريع", description: "تحويل إقامة الطالب إلى إقامة عمل بسرعة، والوصول للإقامة الدائمة خلال 5 سنوات." },
                { icon: icons.School, title: "نظام التعليم المزدوج", description: "الجمع بين الدراسة الأكاديمية والتدريب العملي في كبرى الشركات الإسبانية." },
                { icon: icons.ShieldCheck, title: "رعاية كاملة", description: "نوفر الوصاية القانونية الكاملة، التأمين الصحي، والسكن الآمن للطلاب القاصرين." },
                { icon: icons.Monitor, title: "تخصصات متنوعة", description: "اختر من بين مجالات مطلوبة مثل الكهرباء الصناعية، تطوير الويب، الطاقة المتجددة، أو مساعد التمريض." },
            ],
            targetAudience: {
                title: "هل هذا البرنامج مناسب لطفلك؟",
                audiences: [
                    { icon: icons.School, title: "الطلاب القُصَّر", description: "للطلاب أقل من 18 عامًا الباحثين عن مسار آمن وقانوني للدراسة في إسبانيا مع وصاية قانونية كاملة." },
                    { icon: icons.Users, title: "أولياء الأمور", description: "لأولياء الأمور الذين يريدون رعاية شاملة وحماية قانونية لأبنائهم الدارسين في الخارج." },
                ],
            },
            systemTitle: "مسار الطالب القاصر",
            systemIntro: "يضمن برنامجنا الشامل سلامة طفلك ونجاحه الأكاديمي من خلال عملية اختيار ودعم منظمة.",
            systemSteps: arMinorStudentSteps,
            supportTitle: "باقة الدعم الشاملة",
            supportIntro: "من إعداد المستندات إلى الاستقرار الكامل في إسبانيا، نتولى كل خطوة بعناية لضمان سلامة طفلك.",
            supportServices: [
                { icon: icons.FileCheck, description: "تجهيز ملف الطالب بالكامل والتقديم على المعاهد والجامعات المعتمدة." },
                { icon: icons.Stamp, description: "معالجة معادلة الشهادات الدراسية للطالب حسب النظام الإسباني." },
                { icon: icons.Scale, description: "توثيق خطاب الوصاية القانونية وتفويض الوالدين داخل إسبانيا." },
                { icon: icons.Plane, description: "استقبال من المطار وتنسيق الانتقال والسكن." },
                { icon: icons.Users, description: "دعم في استخراج رقم NIE وبطاقة الإقامة (TIE)." },
                { icon: icons.Bank, description: "المساعدة في فتح حساب بنكي وتفعيل التأمين الصحي." },
                { icon: icons.Building2, description: "التسجيل في البلدية (Empadronamiento) وإصدار كارت المواصلات." },
                { icon: icons.FileText, description: "تقديم تقارير دورية شهرية عن الحالة الأكاديمية والقانونية للأهل." },
            ],
            docsTitle: "المستندات المطلوبة",
            docsList: [
                "خطاب تفويض من الوالدين بالسفر والإقامة (موثق ومترجم).",
                "خطاب وصاية قانونية (Tutor Legal) يصدر لممثل خطوة في إسبانيا.",
                "شهادة الميلاد (مترجمة ومصدّقة بالأبوستيل).",
                "شهادة دراسية (مترجمة ومصدّقة بالأبوستيل).",
                "شهادة طبية دولية معتمدة.",
                "كشف حساب بنكي للولي لا يقل عن 7,000 يورو.",
                "تأمين صحي إسباني شامل.",
                "استمارة طلب التأشيرة موقعة من ولي الأمر.",
                "صورتان شخصيتان بخلفية بيضاء.",
                "حجز مبدئي للطيران والسكن."
            ],
            programRefundTitle: "معلومات الدفع",
            programRefund: "يرجى التواصل معنا للحصول على تفاصيل الأسعار والدفع.",
            readyForJourneyTitle: "استعد لرحلة طفلك التعليمية",
            phase1Title: "المرحلة الأولى: الإعداد السلس",
            phase2Title: "المرحلة الثانية: الوصول المدعوم",
            phase3Title: "المرحلة الثالثة: الاندماج الكامل",
            readMoreInfo: "للمزيد من المعلومات"
        },
        postgraduateStudy: {
            id: "postgraduate-study",
            pageTitle: "برنامج الماجستير والدكتوراه",
            intro: "تقدم خطوة فرصة نخبوية للطلاب الراغبين في استكمال دراسات الماجستير أو الدكتوراه في إسبانيا. نضمن لك القبول في برامج معترف بها رسمياً في مختلف التخصصات الأكاديمية بفضل شراكاتنا مع جامعة فيغو، مركز البحوث CINBIO، وأفضل المعاهد الفنية.",
            whyTitle: "مميزات البرنامج",
            whyPoints: [
                { icon: icons.GraduationCap, title: "إقامة بعد التخرج", description: "بعد استكمال الدراسة، يحق للطالب الحصول على إقامة لمدة سنة للبحث عن عمل، قابلة للتحويل إلى إقامة عمل كاملة." },
                { icon: icons.Award, title: "شهادات رسمية (EU)", description: "احصل على درجة الماجستير أو الدكتوراه (PhD) المعتمدة رسمياً في جميع دول الاتحاد الأوروبي والمعادلة دولياً." },
                { icon: icons.Scale, title: "تعديل الوضع القانوني", description: "يتولى محامونا المتخصصون التنسيق القانوني لتحويل وضعك من طالب إلى إقامة عمل قانونية بعد التخرج." },
                { icon: icons.Briefcase, title: "مرونة مهنية", description: "النظام الأكاديمي الإسباني يتيح لك اكتساب مؤهلات عالية المستوى بالتوازي مع التحضير لسوق العمل الأوروبي." },
                { icon: icons.Clock, title: "فرص الدكتوراه", description: "تركز برامج الدكتوراه (3-4 سنوات) على البحث الأصلي مع إمكانية الوصول لمرافق بحثية عالمية." },
                { icon: icons.Monitor, title: "تخصصات متقدمة", description: "شمل التخصصات: علوم الأعصاب، أبحاث الكيمياء، التكنولوجيا الحيوية المتقدمة، التحليل الاقتصادي، وغيرها الكثير." },
            ],
            targetAudience: {
                title: "هل هذا البرنامج مناسب لك؟",
                audiences: [
                    { icon: icons.GraduationCap, title: "خريجو البكالوريوس", description: "للخريجين الباحثين عن مؤهلات أكاديمية متقدمة مع اعتراف أوروبي وفرص عمل." },
                    { icon: icons.Users, title: "الباحثون والأكاديميون", description: "للباحثين عن دراسات الدكتوراه مع وصول مباشر إلى مراكز البحث والجامعات الإسبانية." },
                ],
            },
            systemTitle: "رحلتك الأكاديمية",
            systemIntro: "تربطك عمليتنا المنظمة بأرقى الجامعات وتضمن نجاحك القانوني والإداري في إسبانيا.",
            systemSteps: arMasterPhdSteps,
            supportTitle: "باقة الدعم الشاملة",
            supportIntro: "من القبول الجامعي إلى الحصول على العمل، ندير جميع الخطوات الأكاديمية والقانونية.",
            supportServices: [
                { icon: icons.FileCheck, description: "إعداد الملف الأكاديمي الكامل (CV، خطاب الحافز، التوصيات، والترجمة)." },
                { icon: icons.School, description: "التقديم على البرامج الرسمية ومعالجة معادلة الشهادات الجامعية." },
                { icon: icons.Stamp, description: "تأمين خطابات القبول الرسمية واستكمال توثيقات الأبوستيل المطلوبة." },
                { icon: icons.Scale, description: "متابعة قانونية كاملة مع محامين متخصصين طوال عملية تأشيرة الطالب." },
                { icon: icons.Plane, description: "استقبال من المطار وترتيب سكن مؤقت أو حجز فندق لليلة الأولى." },
                { icon: icons.Home, description: "المساعدة في التسجيل البلدي (Empadronamiento) واستخراج رقم NIE." },
                { icon: icons.Bank, description: "دعم فتح حساب بنكي إسباني وتفعيل التأمين الصحي." },
                { icon: icons.Building2, description: "برنامج اندماج ثقافي يشمل جولات سياحية في فيغو، بورتو، وسنتياغو دي كومبوستيلا." },
            ],
            docsTitle: "المستندات المطلوبة",
            docsList: [
                "جواز سفر ساري لمدة لا تقل عن سنة.",
                "كشف حساب بنكي أو دخل ثابت (يفضل 7,000 يورو على الأقل).",
                "شهادة طبية مترجمة ومصدّقة بالأبوستيل.",
                "شهادات دراسية مترجمة ومصدّقة بالأبوستيل.",
                "حجز موعد في مركز السفارة (BLS).",
                "تأمين صحي إسباني شامل لفترة الإقامة.",
                "صورتان شخصيتان بخلفية بيضاء.",
                "حجز مبدئي للطيران والسكن."
            ],
            programRefundTitle: "معلومات الدفع",
            programRefund: "يرجى التواصل معنا للحصول على تفاصيل الأسعار والدفع.",
            readyForJourneyTitle: "ابدأ مسارك الأكاديمي في إسبانيا",
            phase1Title: "المرحلة الأولى: الإعداد السلس",
            phase2Title: "المرحلة الثانية: الوصول المدعوم",
            phase3Title: "المرحلة الثالثة: الاندماج الكامل",
            readMoreInfo: "للمزيد من المعلومات"
        },
        tourism: {
            id: "tourism",
            pageTitle: "برنامج السياحة الراقية والاستكشاف",
            intro: "اختبر إسبانيا بما يتجاوز المشاهدة التقليدية. يجمع برنامجنا السياحي الموحد بين السفر الفاخر والبحث الاستراتيجي عن التعليم والإقامة والاستثمار.",
            heroImage: "https://images.unsplash.com/photo-1543783232-47503914a27c?q=80&w=2070&auto=format&fit=crop",
            itinerariesTitle: "مساراتنا السياحية المميزة",
            itineraries: [
                {
                    title: "البرنامج 1: شمال غرب إسبانيا + بورتو (البرتغال)",
                    image: programImage1,
                    points: [
                        "فيغو – جولة مساءً في المدينة وواجهة البحر.",
                        "زيارة أغودا وجزر سيزاريس (Islas Cíes) – مناظر طبيعية خلابة.",
                        "الانتقال إلى أورينسي – زيارة الحمامات الرومانية “As Burgas” وجسر “Puente Romano”.",
                        "سانتياغو دي كومبوستيلا – كاتدرائية القديس يعقوب وبلدة البلدة القديمة.",
                        "لا كورونيا – برج هيركوليس الشهير والمشي على الواجهة البحرية.",
                        "الانتقال إلى بورتو (البرتغال) – تذوق وزياره المعالم التاريخيه.",
                        "جولة في بورتو + العودة."
                    ]
                },
                {
                    title: "البرنامج 2: مزيج إسبانيا والبرتغال",
                    image: programImage2,
                    points: [
                        "فيغو – استكشاف المدينة.",
                        "بورتو – نهر دورو واهم المعالم التاريخيه.",
                        "جولة في بورتو + زيارة الكاتدرائية القديمة.",
                        "الانتقال إلى لشبونة – جولة حرة في المدينة.",
                        "رحلة إلى سينترا – قصر بينا ومنتزه مونتسيرات.",
                        "سانتياغو دي كومبوستيلا – كاتدرائية القديس يعقوب وبلدة البلدة القديمة."
                    ]
                },
                {
                    title: "البرنامج 3: قرطبة والأندلس",
                    image: programImage3,
                    points: [
                        "الوصول إلى غرناطة – زيارة الحي القديم.",
                        "قصر الحمراء وحدائق الجنّة.",
                        "الانتقال إلى قرطبة – مسجد قرطبة وجسر رومانو.",
                        "زيارة حي يهودا وساحة كورازون دي ماريا.",
                        "الانتقال إلى إشبيلية – كاتدرائية إشبيلية وبرج الجيرالدا.",
                        "ساحة إسبانيا وحدائق ماريا لويزا.",
                        "يوم في مالقا (بحر + قلعة الجبل)."
                    ]
                },
                {
                    title: "البرنامج 4: برشلونة + مدريد",
                    image: programImage4,
                    points: [
                        "برشلونة – جولة بحرية في لا رامبلا.",
                        "ساغرادا فاميليا وبارك غويل.",
                        "رحلة إلى مونتسيرات (دير الجبل).",
                        "الانتقال إلى مدريد – جولة في بلازا مايور وبوين ريتيرو.",
                        "زيارة برادو ومتاحف مدريد.",
                        "طليطلة التاريخية (المدرجات والقلاع القديمة)."
                    ]
                },
                {
                    title: "البرنامج 5: سويسرا – الطبيعة والجبال",
                    image: programImage5,
                    points: [
                        "الوصول إلى زيورخ – جولة في المدينة القديمة.",
                        "الانتقال إلى لوسيرن – بحيرة لوسيرن وجسر تشابل.",
                        "إنترلاكن – مغامرات جبال الألب.",
                        "مورن (Mürren) – قمم الجبال والمناظر الخلابة.",
                        "يونغفراويوخ – أعلى محطة قطار في أوروبا.",
                        "الانتقال إلى جنيف – بحيرة جنيف وجولة بالمدينة."
                    ]
                },
                {
                    title: "البرنامج 6: فرنسا – هولندا – بلجيكا",
                    image: programImage6,
                    points: [
                        "الوصول إلى باريس – برج إيفل ونهر السين.",
                        "متحف اللوفر وكاتدرائية نوتردام.",
                        "الانتقال إلى بروكسل – غراند بلاس ومناظر البلدة القديمة.",
                        "جولة في بروكسل + تذوق الشوكولاتة والوافل.",
                        "الانتقال إلى أمستردام – جولة على القنوات.",
                        "زيارة متحف فان جوخ وحي جوردان."
                    ]
                }
            ],
            comparisonTitle: "قارن بين برامجنا المتخصصة",
            comparisonPrograms: [
                {
                    name: "السياحة العامة",
                    description: "مثالية للعائلات والأفراد الذين يركزون على الترفيه الخالص والثقافة والاسترخاء.",
                    focus: "المشاهدة والترفيه",
                    uniqueFeatures: ["زيارة المعالم الشهيرة", "فن الطهي الأصيل", "رحلات تاريخية"],
                    priceHint: "تواصل معنا للسعر"
                },
                {
                    name: "السياحة الذكية (الموجه)",
                    description: "مصممة لمن يستكشفون الفرص التعليمية والمهنية في إسبانيا.",
                    focus: "الاستكشاف الأكاديمي",
                    uniqueFeatures: ["زيارات جامعية موجهة", "استشارات القبول", "تواصل مهني"],
                    priceHint: "تواصل معنا للسعر"
                },
                {
                    name: "السياحة الذكية (مسار الإقامة)",
                    description: "سفر راقٍ مدمج مع الخطوات القانونية الأولية للإقامة.",
                    focus: "إعداد الإقامة",
                    uniqueFeatures: ["تحديد الملف القانوني الأولي", "استكشاف مناطق الاستقرار", "التحقق من المستندات"],
                    priceHint: "تواصل معنا للسعر"
                },
                {
                    name: "السياحة الفاخرة (مسار الإقامة)",
                    description: "الاستراتيجية الفاخرة النهائية تحت إشراف الخبراء لأصحاب الثروات العالية.",
                    focus: "استقرار النخبة",
                    uniqueFeatures: ["فنادق فاخرة 5 نجوم", "استراتيجية خاصة مع د. عبد الرحمن", "وصول حصري للاستثمار"],
                    priceHint: "تواصل معنا للسعر"
                },
                {
                    name: "السياحة الذكية (الاستثمار)",
                    description: "تركز على تحديد الفرص العقارية والتجارية في السوق الإسباني.",
                    focus: "الأعمال والعقارات",
                    uniqueFeatures: ["جولات معاينة العقارات", "جلسات تحليل السوق", "توجيه الفيزا الذهبية"],
                    priceHint: "تواصل معنا للسعر"
                }
            ],
            ctaBlock: {
                title: "هل أنت مستعد لاستكشاف إسبانيا بهدف؟",
                text: "سواء كنت تزور من أجل المتعة أو تخطط لمستقبلك، يضمن خبراؤنا رحلة سلسة ومثمرة.",
                button: "استشر فريقنا"
            }
        },
        digitalNomad: {
            id: "digital-nomad",
            pageTitle: "اقامه النوماد الرقميه",
            intro: "نقدم لك الدعم الكامل للحصول على إقامة النوماد الرقمي في إسبانيا، مما يتيح لك العمل عن بعد من أحد أجمل بلدان أوروبا مع الاستفادة من نظام ضريبي ميسر.",
            whyTitle: "مزايا التأشيرة",
            whyPoints: [
                { icon: icons.ShieldCheck, title: "إقامة طويلة الأمد", description: "إقامة قانونية لمدة ثلاث اعوام، قابلة للتجديد حتى 5 سنوات." },
                { icon: icons.TrendingUp, title: "مزايا ضريبية", description: "نظام ضريبي ميسر (قانون بيكهام): ادفع ضريبة ثابتة بنسبة 24% على الدخل الأجنبي." },
                { icon: icons.Plane, title: "حرية شنغن", description: "حرية السفر داخل منطقة شنغن." },
                { icon: icons.Award, title: "جودة الحياة", description: "جودة حياة عالية وتكلفة معيشة ميسرة." },
                { icon: icons.Users, title: "ضم الأسرة", description: "يمكنك إحضار زوجتك وأطفالك المعالين معك." },
                { icon: icons.Laptop, title: "العمل عن بعد", description: "اعمل من أي مكان في إسبانيا لشركات خارج إسبانيا." },
            ],
            targetAudience: {
                title: "هل هذه الإقامة مناسبة لك؟",
                audiences: [
                    { icon: icons.Laptop, title: "العاملون عن بعد", description: "للمحترفين الرقميين الذين يعملون عن بعد لشركات خارج إسبانيا." },
                    { icon: icons.Briefcase, title: "المستقلون", description: "للعاملين لحسابهم الخاص مع عملاء دوليين الباحثين عن إقامة أوروبية." },
                ],
            },
            systemTitle: "خطوات الحصول على الإقامة",
            systemIntro: "تضمن عمليتنا المكونة من 5 خطوات رحلة سلسة من طلبك الأولي حتى استلام بطاقة الإقامة الخاصة بك.",
            systemSteps: arDigitalNomadSteps,
            supportTitle: "باقة الدعم الشاملة",
            supportIntro: "من التقديم إلى الاستقرار، نتولى كل خطوة بعناية متخصصة.",
            supportServices: [
                { icon: icons.FileCheck, description: "إعداد كامل للمستندات والترجمة." },
                { icon: icons.Scale, description: "دعم قانوني كامل مع محامين متخصصين." },
                { icon: icons.Stamp, description: "المساعدة في طلب التأشيرة والتنسيق مع السفارة." },
                { icon: icons.Plane, description: "استقبال خاص من المطار." },
                { icon: icons.Home, description: "المساعدة في إيجاد سكن." },
                { icon: icons.Bank, description: "دعم في فتح حساب بنكي إسباني." },
                { icon: icons.Users, description: "إرشاد كامل في إجراءات الإقامة (TIE، NIE، Empadronamiento)." },
                { icon: icons.Building2, description: "دعم اندماج ثقافي لمساعدتك على الاستقرار." },
            ],
            docsTitle: "المتطلبات الرئيسية",
            docsList: [
                "إثبات الدخل: بما لا يقل عن 200% من الحد الأدنى للأجور الإسباني (2,646 يورو شهريًا).",
                "مستندات الشركة الأجنبية: خطاب رسمي بالسماح بالعمل عن بُعد من إسبانيا.",
                "إثبات العلاقة المهنية: عقد عمل أو عقد خدمات لا يقل عن 3 أشهر.",
                "المؤهلات المهنية: شهادة جامعية موثقة بالأبوستيل.",
                "السجل الجنائي: شهادة خلو سوابق مترجمة وموثقة.",
                "التأمين الصحي الإسباني الكامل بدون خصومات.",
                "صورة من جواز السفر (جميع الصفحات المختومة)."
            ],
            programRefundTitle: "معلومات الدفع",
            programRefund: "يرجى التواصل معنا للحصول على تفاصيل الأسعار والدفع.",
            readyForJourneyTitle: "استعد لرحلة النوماد الرقمي",
            phase1Title: "المرحلة الأولى: الإعداد السلس",
            phase2Title: "المرحلة الثانية: الوصول المدعوم",
            phase3Title: "المرحلة الثالثة: الاندماج الكامل",
            readMoreInfo: "للمزيد من المعلومات"
        },
        nonLucrative: {
            id: "non-lucrative",
            pageTitle: "الاقامه غير الربحيه",
            intro: "تُعدّ فيزا الإقامة غير الربحية واحدة من أكثر أنواع الإقامات شيوعًا في إسبانيا، وهي الخيار المثالي للأفراد والأسر الذين يرغبون في العيش داخل إسبانيا بطريقة قانونية دون ممارسة أي نشاط مهني أو تجاري داخلها. تمكّنك هذه الإقامة من الاستقرار في بيئة أوروبية آمنة والاستفادة من النظام الصحي الإسباني والتعليم المجاني لأطفالك في المدارس الحكومية.",
            whyTitle: "مميزات الاقامه",
            whyPoints: [
                { icon: icons.ShieldCheck, title: "منحة سنة واحدة", description: "تُمنح في البداية لمدة عام واحد، قابلة للتجديد لمدة عامين إضافيين." },
                { icon: icons.TrendingUp, title: "مسار للجنسية", description: "بعد خمس سنوات، التقديم على الإقامة الدائمة ثم الجنسية الإسبانية." },
                { icon: icons.Users, title: "ضم العائلة", description: "جلب أفراد أسرتك، بما في ذلك الوالدين، للعيش معك في إسبانيا." },
                { icon: icons.School, title: "تعليم مجاني", description: "الأبناء يمكنهم الدراسة في المدارس الإسبانية بتكلفة رمزية أو مجانًا." },
                { icon: icons.Heart, title: "الرعاية الصحية", description: "الاستفادة من النظام الصحي الإسباني." },
                { icon: icons.RefreshCw, title: "تعديل الوضع", description: "يُمكن تعديل الوضع لاحقًا إلى تصريح عمل أو نشاط مستقل." },
            ],
            targetAudience: {
                title: "هل هذه الإقامة مناسبة لك؟",
                audiences: [
                    { icon: icons.Users, title: "المتقاعدون", description: "للأفراد ذوي الدخل السلبي أو المدخرات الباحثين عن حياة أوروبية هادئة." },
                    { icon: icons.UsersRound, title: "العائلات", description: "للعائلات الراغبة في الاستقرار في إسبانيا مع الوصول إلى الرعاية الصحية والتعليم." },
                ],
            },
            systemTitle: "خطوات الحصول على الإقامة",
            systemIntro: "تضمن عمليتنا المكونة من 5 خطوات رحلة سلسة من طلبك الأولي حتى استلام بطاقة الإقامة الخاصة بك.",
            systemSteps: arNonLucrativeSteps,
            supportTitle: "باقة الدعم الشاملة",
            supportIntro: "من التقديم إلى الاستقرار، نتولى كل خطوة بعناية متخصصة.",
            supportServices: [
                { icon: icons.FileCheck, description: "إعداد كامل للمستندات، الترجمة، والأبوستيل." },
                { icon: icons.Scale, description: "متابعة قانونية كاملة من محامٍ مختص حتى استلام بطاقة الإقامة (TIE)." },
                { icon: icons.Plane, description: "استقبال من المطار في فيغو وإقامة ليلة أولى في فندق مريح." },
                { icon: icons.Bank, description: "المرافقة في فتح الحساب البنكي واستخراج رقم NIE." },
                { icon: icons.Stamp, description: "تقديم طلب الإقامة والتسجيل في البلدية (Empadronamiento)." },
                { icon: icons.Heart, description: "توفير تأمين صحي شامل لأول شهر." },
                { icon: icons.Building2, description: "جولة تعريفية بالمدينة وكارت المواصلات العامة." },
                { icon: icons.RefreshCw, description: "خدمة التجديد السنوي أو التحويل إلى إقامة عمل أو استثمار." },
            ],
            docsTitle: "المستندات المطلوبة",
            docsList: [
                "إثبات القدرة المالية: يجب أن يمتلك المتقدم الرئيسي رصيدًا أو دخلًا سنويًا لا يقل عن 28,800 يورو. يُضاف مبلغ 7,200 يورو تقريبًا لكل فرد إضافي من الأسرة.",
                "تأمين صحي خاص شامل ومعتمد داخل إسبانيا يغطي كامل مدة الإقامة.",
                "سجل جنائي نظيف من بلد الإقامة خلال آخر خمس سنوات، مترجم ومصدق بالأبوستيل.",
                "شهادة طبية تفيد بخلو المتقدم من الأمراض المعدية.",
                "إثبات سكن في إسبانيا (عقد إيجار أو ملكية).",
                "جواز سفر ساري لمدة لا تقل عن سنة."
            ],
            programRefundTitle: "معلومات الدفع",
            programRefund: "يرجى التواصل معنا للحصول على تفاصيل الأسعار والدفع.",
            readyForJourneyTitle: "استعد لحياتك الجديدة في إسبانيا",
            phase1Title: "المرحلة الأولى: الإعداد السلس",
            phase2Title: "المرحلة الثانية: الوصول المدعوم",
            phase3Title: "المرحلة الثالثة: الاندماج الكامل",
            readMoreInfo: "للمزيد من المعلومات"
        },
        familyReunification: {
            id: "family-reunification",
            pageTitle: "اقامه لم الشمل",
            intro: "تُتيح هذه التأشيرة لأفراد عائلة مقيم أجنبي في إسبانيا أن ينضمّوا إليه/إليها للعيش معه بصورة قانونية. بمعنى: إذا كان لديك إقامة قانونية في إسبانيا (بهدف عمل، إقامة، إلخ)، يمكنك أن تطلب لمّ شمل أفراد عائلتك (مثل الزوج/ة، الأبناء، أحياناً الوالدين) للقدوم إلى إسبانيا والعيش معك ضمن الإطار القانوني.. هذا البرنامج مهمّ لمن يرغب في توحيد الأسرة في إسبانيا، مع استيفاء الشروط المنصوص عليها قانونياً.",
            whyTitle: "مميزات الاقامه",
            whyPoints: [
                { icon: icons.Users, title: "لمّ شمل العائلة", description: "حصول أفراد العائلة على تصريح إقامة يتماشى مع مدة تصريح الراعي." },
                { icon: icons.TrendingUp, title: "مسار للإقامة الدائمة", description: "بعد استيفاء الشروط، التقديم للحصول على الإقامة الدائمة أو الجنسية الإسبانية." },
                { icon: icons.RefreshCw, title: "مرونة الوضع", description: "إمكانية تحويل نوع الإقامة (من لمّ الشمل إلى عمل أو استقلال اقتصادي)." },
                { icon: icons.ShieldCheck, title: "أمان قانوني", description: "إقامة قانونية آمنة لعائلتك بأكملها في إسبانيا." },
                { icon: icons.School, title: "الوصول للتعليم", description: "الأطفال يمكنهم الوصول إلى التعليم العام الإسباني." },
                { icon: icons.Heart, title: "التغطية الصحية", description: "الوصول إلى نظام الرعاية الصحية الإسباني لجميع أفراد الأسرة." },
            ],
            targetAudience: {
                title: "هل هذه الإقامة مناسبة لك؟",
                audiences: [
                    { icon: icons.Users, title: "الرعاة المقيمون", description: "للمقيمين القانونيين في إسبانيا الذين يرغبون في إحضار أفراد عائلتهم للعيش معهم." },
                    { icon: icons.UsersRound, title: "أفراد العائلة", description: "للأزواج والأطفال والوالدين للمقيمين القانونيين في إسبانيا." },
                ],
            },
            systemTitle: "خطوات لمّ الشمل",
            systemIntro: "ندير العملية بالكامل لضمان انضمام عائلتك إليك في إسبانيا بأسرع وأسهل طريقة ممكنة.",
            systemSteps: arFamilyReunificationSteps,
            supportTitle: "باقة الدعم الشاملة",
            supportIntro: "من التقديم إلى الاستقرار، نساعد عائلتك على لمّ الشمل في إسبانيا.",
            supportServices: [
                { icon: icons.Plane, description: "استقبال أفراد العائلة من المطار أو في إسبانيا." },
                { icon: icons.FileCheck, description: "ترجمة وتصديق الوثائق المطلوبة للمتقدم/ين." },
                { icon: icons.Scale, description: "تقديم الدعم القانوني لاستخراج بطاقة الإقامة (TIE) لكل فرد من الأسرة." },
                { icon: icons.Stamp, description: "تنسيق تقديم طلب لمّ شمل في إسبانيا أو لدى القنصلية المختصة." },
                { icon: icons.Home, description: "مساعدة في تسجيل العائلة في البلدية (Empadronamiento)." },
                { icon: icons.Bank, description: "فتح حساب بنكي للأفراد." },
                { icon: icons.Users, description: "متابعة اللوائح الضريبية والإقامة." },
                { icon: icons.RefreshCw, description: "خدمة التجديد أو التبديل إلى تصاريح أخرى إذا رغبت العائلة." },
            ],
            docsTitle: "المستندات المطلوبة",
            docsList: [
                "طلب التأشيرة/الإقامة المناسب (نموذج معين حسب القنصلية) موقّع من مقدم الطلب.",
                "جواز سفر صالح للمتقدم مع صور منه.",
                "إثبات العلاقة الأسرية (شهادة زواج، شهادة ميلاد الأبناء، إثبات تبنّي إن وجد) مترجمة ومصدّقة إذا صدرت من خارج إسبانيا.",
                "إثبات أنّ المقيم (الراعي) في إسبانيا يمتلك إقامة قانونية صالحة، وقد أقام فعلياً لفترة معينة (غالباً سنة واحدة أو أكثر).",
                "إثبات أن الراعي يمتلك السكن الملائم في إسبانيا (عقد إيجار أو ملكية أو شهادة من البلدية بأن السكن مناسب).",
                "إثبات أن الراعي لديه موارد مالية كافية لدعم نفسه ولأفراد العائلة الذين يرغب بمشمولهم، دون أن يكونوا عبئاً على النظام العام.",
                "تأمين صحي أو إثبات تغطية صحية للمتقدم أو أفراد العائلة.",
                "سجل جنائي نظيف للمتقدم."
            ],
            programRefundTitle: "معلومات الدفع",
            programRefund: "يرجى التواصل معنا للحصول على تفاصيل الأسعار والدفع.",
            readyForJourneyTitle: "استعد للمّ شمل عائلتك",
            phase1Title: "المرحلة الأولى: الإعداد السلس",
            phase2Title: "المرحلة الثانية: الوصول المدعوم",
            phase3Title: "المرحلة الثالثة: الاندماج الكامل",
            readMoreInfo: "للمزيد من المعلومات"
        },
        otherServices: {
            id: "other-services",
            title: "خدمات التأشيرات والإقامة الأخرى",
            intro: "بالإضافة إلى عروضنا الأساسية، نقدم مساعدة قانونية متخصصة لمجموعة من خيارات الإقامة الأخرى في إسبانيا.",
            services: arOtherServices
        },
        contactPage: {
            pageTitle: "تواصل معنا",
            intro: "نحن هنا للمساعدة. سواء كان لديك سؤال حول خدماتنا، أو تحتاج إلى استشارة، أو ترغب فقط في إلقاء التحية، يسعدنا أن نسمع منك.",
            form: {
                name: "الاسم الكامل",
                email: "البريد الإلكتروني",
                subject: "الموضوع",
                message: "رسالتك",
                cta: "إرسال الرسالة"
            },
            infoTitle: "معلومات الاتصال",
            address: "فيغو، بونتيفيدرا، إسبانيا",
            phone: "+34 610 99 29 38",
            email: "khatwa.es@gmail.com",
        },
        footer: {
            companyName: "خطوة",
            description: "اولي خطواتك نحو حياة جديدة في إسبانيا.",
            contactTitle: "تواصل معنا",
            address: "فيغو، بونتيفيدرا، إسبانيا",
            phone: "+34 610 99 29 38",
            displayPhone: "+٣٤ ٦١٠ ٩٩ ٢٩ ٣٨",
            email: "khatwa.es@gmail.com",
            legalTitle: "معلومات قانونية",
            legalText: "خطوة هي مؤسسة استشارية مهنية يديرها الدكتور عبد الرحمن حمد، ومسجلة رسميًا في إسبانيا.",
            followTitle: "تابعنا",
            socialLinks: socialLinks,
            copyright: "© 2026 خطوة. جميع الحقوق محفوظة."
        }
    },
    es: {
        metadata: {
            home: {
                title: "Khatwa - Tu Puerta a España | Estudio, Residencia e Inversión",
                description: "Guía experta para estudiar, vivir e invertir en España. Gestionamos visados, residencia y trámites legales para una transición fluida.",
                keywords: ["España", "Visa", "Estudio", "Inversión", "Residencia", "Khatwa", "Inmigración"]
            },
            about: {
                title: "Sobre Khatwa | Consultores de Inmigración Española de Confianza",
                description: "Conozca la misión de Khatwa de cerrar la brecha entre usted y sus sueños en España. Fundada por el Dr. Abdelrahman Hamad.",
                keywords: ["Sobre Nosotros", "Equipo", "Misión", "Dr. Abdelrahman Hamad"]
            },
            study: {
                title: "Formación Profesional en España | Admisión Garantizada y Prácticas",
                description: "Acelere su carrera con formación profesional en España. Prácticas remuneradas, admisión garantizada y un camino claro hacia la residencia.",
                keywords: ["Estudio", "Formación Profesional", "España", "Ciclo Formativo", "Prácticas"]
            },
            studentsUnder18: {
                title: "Estudios en España para Menores | Tutela Legal y Apoyo",
                description: "Programas de estudio seguros y legales para estudiantes menores de 18 años en España. Incluye tutela legal completa, alojamiento y apoyo académico.",
                keywords: ["Menores", "Estudiar en el Extranjero", "Tutela", "Bachillerato"]
            },
            postgraduateStudy: {
                title: "Máster y Doctorado en España | Colaboración con Universidad de Vigo",
                description: "Realice su Máster o Doctorado en España. Programas oficiales con convenios universitarios y oportunidades de investigación.",
                keywords: ["Máster", "Doctorado", "Postgrado", "Universidad de Vigo"]
            },
            digitalNomad: {
                title: "Visa Nómada Digital España | Residencia para Teletrabajo",
                description: "Viva y trabaje en remoto desde España. Brindamos soporte legal y administrativo completo para la Visa de Nómada Digital.",
                keywords: ["Nómada Digital", "Teletrabajo", "Visa", "Ley Beckham"]
            },
            tourism: {
                title: "Turismo Premium en España | Tours VIP y Scouting de Residencia",
                description: "Experimente la belleza de España con nuestros paquetes turísticos VIP. Explore oportunidades de residencia e inversión mientras viaja.",
                keywords: ["Turismo", "Viajes", "España", "VIP", "Scouting de Residencia"]
            },
            familyReunification: {
                title: "Visa de Reagrupación Familiar España | Traiga a su Familia",
                description: "Traiga a su familia a vivir con usted legalmente en España. Gestionamos todo el proceso de reagrupación familiar sin problemas.",
                keywords: ["Familia", "Reagrupación", "Visa", "Dependientes"]
            },
            nonLucrative: {
                title: "Visa No Lucrativa España | Jubilarse y Vivir en España",
                description: "Jubílese o viva en España con ingresos pasivos. Soporte de residencia completo para la solicitud de Visa No Lucrativa.",
                keywords: ["No Lucrativa", "Jubilación", "Visa", "Ingresos Pasivos"]
            },
            contact: {
                title: "Contacte a Khatwa | Consulta Gratuita para Visados Españoles",
                description: "Póngase en contacto con nosotros para una consulta gratuita sobre su futuro en España. Estamos aquí para responder a sus preguntas.",
                keywords: ["Contacto", "Consulta", "España", "Ayuda"]
            },
            faq: {
                title: "Preguntas Frecuentes | Vivir en España",
                description: "Encuentre respuestas a preguntas comunes sobre visados, estudios, residencia y la vida en España.",
                keywords: ["FAQ", "Preguntas", "Ayuda", "Guía"]
            },
            servicesOverview: {
                title: "Nuestros Servicios | Apoyo Integral para Inmigración Española",
                description: "Explore nuestra gama completa de servicios: Programas de estudio, Visados, Residencia, Turismo e Inversión en España.",
                keywords: ["Servicios", "Inmigración", "Visa", "Estudio"]
            },
            otherServices: {
                title: "Otros Servicios | Golden Visa e Inversión",
                description: "Asistencia legal experta para Golden Visa, oportunidades de inversión y paquetes turísticos personalizados.",
                keywords: ["Golden Visa", "Inversión", "Tours Personalizados"]
            }
        },
        header: {
            logo: "Khatwa",
            nav: {
                home: "Inicio",
                about: "Sobre Nosotros",
                services: {
                    title: "Servicios",
                    overview: {
                        title: "Resumen de Todos los Servicios",
                        page: "services-overview" as const,
                    },
                    categories: [
                        {
                            title: "Programas de Estudio",
                            items: {
                                study: "Formación Profesional y Técnica",
                                studentsUnder18: "Programa de Estudio (Menores de 18)",
                                postgraduateStudy: "Programa de Máster y Doctorado",
                            }
                        },
                        {
                            title: "Residencia y Visados",
                            items: {
                                digitalNomad: "Visa de Nómada Digital",
                                nonLucrative: "Visa No Lucrativa",
                                familyReunification: "Visa de Reagrupación Familiar",
                            }
                        },
                        {
                            title: "Programas de Turismo",
                            items: {
                                tourism: "Programa de Turismo Premium",
                            }
                        }
                    ]
                },
                faq: "Preguntas Frecuentes",
                contact: "Contacto"
            },
            language: "English"
        },
        hero: {
            slides: [
                {
                    title: "Khatwa - Tu primer paso",
                    subtitle: "Un paso hacia un futuro mejor a través de la vía más rápida para la residencia y el trabajo en Europa.",
                    image: heroImage1
                },
                {
                    title: "Asistencia Integral de Visados",
                    subtitle: "Ayudamos a los clientes a obtener diversos visados españoles bajo la orientación de abogados de inmigración certificados, con apoyo completo desde el inicio hasta el establecimiento.",
                    image: heroImage2
                },
                {
                    title: "Educación Profesional en España",
                    subtitle: "La ruta más rápida hacia la residencia y el trabajo. Elige el camino técnico para una rápida cualificación para el mercado laboral europeo y residencia legal.",
                    image: heroImage3
                },
                {
                    title: "Estudios de Posgrado Genuinos",
                    subtitle: "Con nuestras conexiones académicas con la Universidad de Vigo y centros de investigación como CINBIO, brindamos apoyo dedicado para solicitantes de Máster y Doctorado.",
                    image: heroImage4
                },
                {
                    title: "Soluciones de Inversión Integradas",
                    subtitle: "Ya sea que estés comprando propiedad o iniciando un negocio, te guiamos paso a paso a través de todos los procedimientos legales y administrativos.",
                    image: heroImage5
                },
                {
                    title: "Tours de Descubrimiento y Apoyo Personal",
                    subtitle: "Explora oportunidades con nuestros tours organizados y servicio de acompañamiento personal, apoyándote desde el momento en que llegas.",
                    image: heroImage6
                }
            ],
            cta: "Descubre Nuestros Servicios",
            cardsSection: {
                id: "services-overview",
                title: "Nuestros Servicios Principales",
                cards: esHomeCards,
            }
        },
        about: {
            title: "Sobre Khatwa",
            intro: "Khatwa, que significa “paso” en árabe, fue fundada por el Dr. Abdelrahman Hamad, ciudadano español y doctor por la Universidad de Vigo. Ofrecemos itinerarios estructurados para la residencia, la educación y el turismo en España, en colaboración con socios legales y académicos acreditados.",
            founderTitle: "Conoce al Fundador",
            founderName: "Dr. Abdelrahman Hamad",
            founderCredentials: "PhD in Nanotechnology, Materials Science, and Physical Chemistry, obtained from the University of Vigo, Spain.",
            founderBio: "Con una profunda conexión personal y académica con España, el Dr. Abdelrahman fundó Khatwa para simplificar el complejo proceso de reubicación y establecimiento en el país. Su experiencia de primera mano como estudiante y residente internacional, combinada con su extensa red, proporciona a los clientes orientación y apoyo incomparables.",
            founderLinks: esFounderLinks,
            ourVisionary: "Nuestro Visionario",
            values: ["Innovación", "Comunidad", "Excelencia", "Crecimiento"],
            readMore: "Para más información",
            partnersTitle: "Nuestra Red y Socios",
            partnersIntro: "Nuestra fortaleza radica en nuestras colaboraciones oficiales. Trabajamos directamente con:",
            partnersList: [
                "Bufetes de abogados acreditados especializados en inmigración.",
                "Institutos oficiales de formación técnica y profesional en Galicia.",
                "Una cartera diversa de empresas que ofrecen prácticas remuneradas para nuestros estudiantes.",
                "Agencias inmobiliarias y operadores turísticos."
            ],
            activitiesTitle: "Actividades Oficiales",
            activitiesText: "Khatwa opera como un establecimiento de consultoría profesional legalmente registrado en España. Nuestras actividades principales incluyen la prestación de servicios educativos, orientación sobre residencia y procedimientos administrativos, organización de experiencias turísticas VIP y apoyo y servicios de asesoramiento para oportunidades de inversión."
        },
        faq: {
            pageTitle: "Preguntas Frecuentes",
            intro: "Encuentra respuestas a las preguntas más comunes sobre estudiar, vivir y trabajar en España. Si no encuentras tu respuesta aquí, no dudes en contactarnos.",
            categories: [
                {
                    title: "Educación y Estudio en España",
                    icon: icons.GraduationCap,
                    items: [
                        { question: "¿Puedo estudiar en España con un diploma de secundaria egipcio o del Golfo?", answer: "Sí, pero el certificado debe ser traducido, apostillado, y luego procesaremos su equivalencia dentro de España para asegurar que el estudiante sea aceptado en el camino correcto." },
                        { question: "¿Qué es la Formación Profesional española (Ciclo Medio / Superior)?", answer: "Es un programa oficial de dos años aprobado por el Ministerio de Educación español, y es la forma más rápida de obtener:\n• Experiencia práctica dentro de empresas y fábricas\n• Oportunidades laborales reales después de un año\n• La capacidad de ingresar a la universidad después de completar el Ciclo Superior" },
                        { question: "¿Puedo continuar en la universidad después de la formación profesional?", answer: "Sí — después del Ciclo Superior, puedes ingresar a la universidad directamente con una alta tasa de aceptación, y luego seguir un Máster y Doctorado." }
                    ],
                },
                {
                    title: "Visados y Residencia en España",
                    icon: icons.Stamp,
                    items: [
                        { question: "¿Qué visados ofrecen?", answer: "• Visa de Nómada Digital\n• Residencia No Lucrativa\n• Visa de Estudiante\n• Visa de Reagrupación Familiar\n• Modificación de estatus legal de turismo a estudio o trabajo (según la ley)" },
                        { question: "¿Se puede convertir una visa de turista en visa de estudiante dentro de España?", answer: "Sí, si la visa aún es válida y se puede presentar un expediente de estudio aprobado." }
                    ],
                }
            ]
        },
        servicesOverview: {
            pageTitle: "Todos Nuestros Servicios",
            intro: "Desde actividades académicas hasta residencia y experiencias turísticas inolvidables, ofrecemos un conjunto completo de servicios para hacer que tu viaje a España sea fluido y exitoso. Explora nuestras ofertas a continuación.",
            categories: [
                {
                    title: "Programas de Estudio",
                    items: [
                        { title: "Formación Técnica", description: "Una vía rápida hacia una carrera europea a través de programas oficiales de formación profesional con prácticas remuneradas.", page: "study" },
                        { title: "Programa de Estudio (Menores de 18)", description: "Un programa seguro, legal y completo para estudiantes menores, incluyendo tutela legal.", page: "students-under-18" },
                        { title: "Programa de Máster y Doctorado", description: "Aprovecha nuestras conexiones académicas para solicitar programas de posgrado en las mejores universidades españolas.", page: "postgraduate-study" }
                    ]
                },
                {
                    title: "Residencia y Visados",
                    items: [
                        { title: "Visa de Nómada Digital", description: "Vive y trabaja de forma remota desde España con nuestro apoyo integral de visa y establecimiento.", page: "digital-nomad" },
                        { title: "Visa No Lucrativa", description: "Establécete en España sin actividades profesionales, ideal para aquellos con ingresos pasivos o ahorros.", page: "non-lucrative" },
                        { title: "Visa de Reagrupación Familiar", description: "Trae a tus familiares para vivir contigo legalmente en España.", page: "family-reunification" }
                    ]
                },
                {
                    title: "Programas de Turismo",
                    items: [
                        { title: "Programa de Turismo Premium", description: "Una experiencia unificada que ofrece desde ocio puro hasta búsqueda de inversión y residencia.", page: "tourism" }
                    ]
                }
            ],
            cta: "Saber Más",
        },
        studyInSpain: {
            id: "study",
            pageTitle: "Educación Profesional y Técnica en España",
            intro: "Tu camino más rápido hacia una carrera europea. Proporcionamos admisión garantizada a programas oficiales de formación profesional (Ciclos) que combinan estudio académico con formación práctica. Nuestros programas están diseñados para una rápida entrada al mercado laboral de la UE y proporcionan un camino legal hacia la residencia.",
            whyTitle: "¿Por Qué Elegir Formación Profesional y Técnica?",
            whyPoints: [
                { icon: icons.Award, title: "Admisión Garantizada", description: "Asegura tu lugar en instituciones públicas donde la educación es de alta calidad y prácticamente gratuita." },
                { icon: icons.Briefcase, title: "Prácticas Remuneradas", description: "Gana experiencia práctica y gana mientras aprendes con nuestra red de empresas asociadas." },
                { icon: icons.ShieldCheck, title: "Diploma Reconocido por la UE", description: "Gradúate con un diploma oficial de 'Técnico Superior', desbloqueando oportunidades laborales en toda la Unión Europea." },
                { icon: icons.TrendingUp, title: "Vía Rápida a la Residencia", description: "Logra la residencia permanente en solo 5 años con un permiso de trabajo, en comparación con 10 años para estudiantes universitarios." },
                { icon: icons.Wallet, title: "Camino Rentable", description: "Una alternativa inteligente y asequible a los títulos universitarios tradicionales largos y costosos." },
                { icon: icons.Languages, title: "Programa de Idioma Intensivo", description: "Incluye un curso completo de español para asegurar que estés lingüísticamente preparado para el éxito." },
            ],
            targetAudience: {
                title: "¿Es Este Programa Adecuado Para Ti?",
                audiences: [
                    { icon: icons.School, title: "Graduados de Secundaria", description: "Un camino directo hacia una carrera europea sin el alto costo y tiempo de un título universitario tradicional." },
                    { icon: icons.Users, title: "Adultos y Cambiadores de Carrera", description: "Actualiza tus habilidades o cambia de carrera con un programa práctico diseñado para una rápida entrada al mercado laboral de la UE." },
                ],
            },
            systemTitle: "Tu Camino a Través del Sistema Educativo Español",
            systemIntro: "Nuestros programas se ajustan al marco educativo oficial español, ofreciendo un camino directo hacia un título profesional.",
            systemSteps: [],
            systemImage: spainSystemImage,
            supportTitle: "Nuestro Paquete de Apoyo Todo Incluido",
            supportIntro: "Desde tu solicitud en tu país de origen hasta tu completo establecimiento en España, gestionamos cada paso del proceso con cuidado experto.",
            supportServices: [
                { icon: icons.FileCheck, description: "Preparación completa de documentos legales, traducción, notarización y Apostilla." },
                { icon: icons.Stamp, description: "Asegurar cartas de admisión oficiales y procesar la equivalencia de diplomas." },
                { icon: icons.Scale, description: "Apoyo legal completo con nuestros abogados especializados en inmigración hasta que se emita tu visa." },
                { icon: icons.Plane, description: "Recogida en el aeropuerto a la llegada y alojamiento en hotel la primera noche." },
                { icon: icons.Home, description: "Asistencia para encontrar alojamiento adecuado a largo plazo." },
                { icon: icons.Users, description: "Orientación completa sobre todos los procedimientos de residencia: TIE, NIE y empadronamiento." },
                { icon: icons.Bank, description: "Apoyo para abrir una cuenta bancaria española y activar el seguro de salud." },
                { icon: icons.Building2, description: "Un programa de integración cultural con tours por la ciudad para ayudarte a establecerte y sentirte como en casa." },
            ],
            docsTitle: "Documentos Requeridos",
            docsList: [
                "Pasaporte válido por al menos un año.",
                "Diploma de secundaria o título universitario (traducido con Apostilla).",
                "Extracto bancario que muestre fondos suficientes (mín. €7,000 recomendado).",
                "Certificado de antecedentes penales limpio (traducido con Apostilla).",
                "Certificado médico que indique que estás libre de enfermedades contagiosas.",
                "Seguro de salud español completo para toda tu estancia."
            ],
            programRefundTitle: "Política de Pago y Reembolso",
            programRefund: "• En caso de rechazo inicial: El abogado presenta una apelación formal de forma gratuita.\n• En caso de rechazo final: Se deducen las tarifas administrativas.",
            readyForJourneyTitle: "Prepárate para Comenzar Tu Viaje",
            phase1Title: "Fase 1: Preparación Sin Problemas",
            phase2Title: "Fase 2: Llegada con Apoyo",
            phase3Title: "Fase 3: Integración Completa",
            readMoreInfo: "Para más información"
        },
        studentsUnder18: {
            id: "students-under-18",
            pageTitle: "Programa para Estudiantes Menores (Bajo 18)",
            intro: "Este programa está diseñado específicamente para estudiantes menores de 18 años para una experiencia de estudio segura y legal en España, en colaboración con universidades e institutos gubernamentales en Galicia. Nos enfocamos en la preparación lingüística y cultural (6-8 meses) y brindamos un camino hacia la formación técnica (FP), que es la ruta más rápida hacia la residencia legal y el empleo en la UE.",
            whyTitle: "Beneficios del Programa",
            whyPoints: [
                { icon: icons.UserCheck, title: "Entrada Rápida al Mercado", description: "La formación técnica permite una entrada más rápida al mercado laboral, a menudo después de solo un año de estudio." },
                { icon: icons.Award, title: "Certificados Reconocidos por la UE", description: "Obtenga títulos como Ciclo Medio o Ciclo Superior, que son altamente valorados y demandados en toda Europa." },
                { icon: icons.TrendingUp, title: "Residencia de Vía Rápida", description: "Convierta su permiso en una residencia de trabajo rápidamente y alcance la residencia permanente en 5 años." },
                { icon: icons.School, title: "Sistema de Educación Dual", description: "Combine el aprendizaje académico con la formación práctica en las mejores empresas españolas." },
                { icon: icons.ShieldCheck, title: "Atención Integral", description: "Brindamos tutela legal completa, seguro de salud y vivienda segura para estudiantes menores de 18 años." },
                { icon: icons.Monitor, title: "Diversas Especializaciones", description: "Elija entre campos de alta demanda como Electricidad Industrial, Desarrollo Web, Energías Renovables o Auxiliar de Enfermería." },
            ],
            targetAudience: {
                title: "¿Es este programa adecuado para su hijo?",
                audiences: [
                    { icon: icons.School, title: "Estudiantes Menores", description: "Para estudiantes menores de 18 años que buscan un camino seguro y legal para estudiar en España con apoyo total de tutela." },
                    { icon: icons.Users, title: "Padres que Buscan Seguridad", description: "Para padres que desean atención integral y protección legal para sus hijos que estudian en el extranjero." },
                ],
            },
            systemTitle: "Camino para Estudiantes Menores",
            systemIntro: "Nuestro programa integral garantiza la seguridad y el éxito académico de su hijo a través de un proceso estructurado de selección y apoyo.",
            systemSteps: esMinorStudentSteps,
            supportTitle: "Nuestro Paquete de Apoyo Todo Incluido",
            supportIntro: "Desde la preparación de documentos hasta el establecimiento total en España, gestionamos cada paso con cuidado experto para la seguridad de su hijo.",
            supportServices: [
                { icon: icons.FileCheck, description: "Preparación completa de la solicitud del estudiante para instituciones acreditadas." },
                { icon: icons.Stamp, description: "Procesamiento de equivalencia para los certificados académicos del estudiante." },
                { icon: icons.Scale, description: "Notarización de la carta de tutela legal y autorización paterna en España." },
                { icon: icons.Plane, description: "Recogida en el aeropuerto y coordinación de traslado y vivienda." },
                { icon: icons.Users, description: "Apoyo para la obtención del número NIE y la tarjeta de residencia (TIE)." },
                { icon: icons.Bank, description: "Asistencia para abrir cuenta bancaria y activar el seguro de salud." },
                { icon: icons.Building2, description: "Registro en el municipio (Empadronamiento) y emisión de tarjeta de transporte público." },
                { icon: icons.FileText, description: "Informes mensuales de seguimiento académico y legal enviados a los padres." },
            ],
            docsTitle: "Documentos Requeridos",
            docsList: [
                "Carta de autorización paterna para viaje y residencia (notarizada y traducida).",
                "Carta de tutela legal (Tutor Legal) emitida para el representante de Khatwa.",
                "Certificado de nacimiento (traducido y con Apostilla).",
                "Certificado educativo (traducido y con Apostilla).",
                "Certificado médico certificado internacionalmente.",
                "Extracto bancario del tutor que muestre al menos 7.000 €.",
                "Seguro de salud español integral.",
                "Formulario de solicitud de visa firmado por un tutor.",
                "Dos fotos recientes con fondo blanco.",
                "Reservas preliminares de vuelo y vivienda."
            ],
            programRefundTitle: "Información de Pago",
            programRefund: "Póngase en contacto con nosotros para obtener información detallada sobre precios y pagos.",
            readyForJourneyTitle: "Prepárese para el viaje de su hijo",
            phase1Title: "Fase 1: Preparación Sin Problemas",
            phase2Title: "Fase 2: Llegada con Apoyo",
            phase3Title: "Fase 3: Integración Completa",
            readMoreInfo: "Para más información"
        },
        postgraduateStudy: {
            id: "postgraduate-study",
            pageTitle: "Programa de Máster y Doctorado",
            intro: "Khatwa ofrece una oportunidad de élite para que los estudiantes cursen maestrías o doctorados en España. Nuestras profundas asociaciones con la Universidad de Vigo, el centro de investigación CINBIO y los mejores institutos técnicos garantizan el acceso directo a programas oficialmente reconocidos en diversas áreas académicas.",
            whyTitle: "Beneficios del Programa",
            whyPoints: [
                { icon: icons.GraduationCap, title: "Residencia Post-Estudio", description: "Tras finalizar, los estudiantes son elegibles para una residencia de búsqueda de empleo de 1 año, convertible en un permiso de trabajo." },
                { icon: icons.Award, title: "Títulos Oficiales de la UE", description: "Obtenga un título de Máster Universitario o Doctorado, reconocido en toda la UE y equivalente internacionalmente." },
                { icon: icons.Scale, title: "Camino a la Residencia", description: "Nuestros abogados especializados gestionan la coordinación legal para convertir su estatus de estudiante en un permiso de trabajo." },
                { icon: icons.Briefcase, title: "Flexibilidad Laboral", description: "El sistema académico de España le permite obtener calificaciones de alto nivel mientras se prepara para el mercado laboral europeo." },
                { icon: icons.Clock, title: "Oportunidades de Doctorado", description: "Los programas de doctorado ofrecen 3-4 años enfocados en investigación original con instalaciones e investigadores de clase mundial." },
                { icon: icons.Monitor, title: "Campos Avanzados", description: "Las especializaciones incluyen Neurociencia, Investigación Química, Biotecnología Avanzada, Análisis Económico y más." },
            ],
            targetAudience: {
                title: "¿Es este programa adecuado para usted?",
                audiences: [
                    { icon: icons.GraduationCap, title: "Graduados de Licenciatura", description: "Para graduados que buscan calificaciones avanzadas con reconocimiento de la UE y oportunidades laborales profesionales." },
                    { icon: icons.Users, title: "Investigadores y Académicos", description: "Para aquellos que cursan doctorados con acceso directo a centros de investigación españoles." },
                ],
            },
            systemTitle: "Su Viaje Académico",
            systemIntro: "Nuestro proceso estructurado lo conecta con una educación de primer nivel y garantiza su éxito legal y administrativo en España.",
            systemSteps: esMasterPhdSteps,
            supportTitle: "Nuestro Paquete de Apoyo Todo Incluido",
            supportIntro: "Desde la admisión hasta la transición profesional, gestionamos cada paso académico y legal.",
            supportServices: [
                { icon: icons.FileCheck, description: "Preparación de expediente académico completo (CV, carta de motivación, recomendaciones, traducciones)." },
                { icon: icons.School, description: "Solicitud a programas oficiales y gestión de equivalencia de títulos universitarios." },
                { icon: icons.Stamp, description: "Obtención de cartas de admisión oficiales y gestión de legalizaciones necesarias (Apostilla)." },
                { icon: icons.Scale, description: "Seguimiento legal completo con abogados especializados durante todo el proceso de visa." },
                { icon: icons.Plane, description: "Recogida en el aeropuerto y organización de alojamiento temporal o estancia en hotel." },
                { icon: icons.Home, description: "Asistencia con el registro municipal (Empadronamiento) y número NIE." },
                { icon: icons.Bank, description: "Apoyo para abrir cuenta bancaria española y activar el seguro de salud." },
                { icon: icons.Building2, description: "Programa de integración cultural que incluye tours guiados por Vigo, Ourense y Oporto." },
            ],
            docsTitle: "Documentos Requeridos",
            docsList: [
                "Pasaporte válido por al menos un año.",
                "Extracto bancario que muestre fondos estables (mín. €7,000 recomendado).",
                "Certificado médico (traducido y con Apostilla).",
                "Certificados educativos (traducidos y con Apostilla).",
                "Reserva de cita en la embajada (centro BLS).",
                "Seguro de salud español integral.",
                "Dos fotos recientes con fondo blanco.",
                "Prueba de reservas preliminares de vuelo y vivienda."
            ],
            programRefundTitle: "Información de Pago",
            programRefund: "Póngase en contacto con nosotros para obtener información detallada sobre precios y pagos.",
            readyForJourneyTitle: "Comience su Carrera Académica en España",
            phase1Title: "Fase 1: Preparación Sin Problemas",
            phase2Title: "Fase 2: Llegada con Apoyo",
            phase3Title: "Fase 3: Integración Completa",
            readMoreInfo: "Para más información"
        },
        digitalNomad: {
            id: "digital-nomad",
            pageTitle: "Visa de Nómada Digital",
            intro: "Vive y trabaja de forma remota desde España con nuestra asistencia completa de visa y establecimiento.",
            whyTitle: "Beneficios Clave",
            whyPoints: [
                { icon: icons.ShieldCheck, title: "Residencia a Largo Plazo", description: "Residencia legal en España por hasta 5 años." },
                { icon: icons.TrendingUp, title: "Beneficios Fiscales", description: "Régimen fiscal favorable (Ley Beckham)." },
                { icon: icons.Plane, title: "Libertad Schengen", description: "Libertad para viajar por el Espacio Schengen." },
                { icon: icons.Award, title: "Calidad de Vida", description: "Alta calidad de vida y coste de vida asequible." },
                { icon: icons.Users, title: "Inclusión Familiar", description: "El visado puede ampliarse para incluir a su cónyuge e hijos." },
                { icon: icons.Laptop, title: "Trabajo Remoto", description: "Trabaje desde cualquier lugar de España para empresas fuera de España." },
            ],
            targetAudience: {
                title: "¿Es este visado adecuado para usted?",
                audiences: [
                    { icon: icons.Laptop, title: "Trabajadores Remotos", description: "Para profesionales digitales que trabajan remotamente para empresas no españolas." },
                    { icon: icons.Briefcase, title: "Freelancers", description: "Para trabajadores por cuenta propia con clientes internacionales que buscan residencia europea." },
                ],
            },
            systemTitle: "Tu Camino hacia la Residencia Española",
            systemIntro: "Nuestro proceso de 5 pasos garantiza un viaje fluido desde tu solicitud inicial hasta la obtención de tu tarjeta de residencia.",
            systemSteps: esDigitalNomadSteps,
            supportTitle: "Nuestro Paquete de Apoyo Todo Incluido",
            supportIntro: "Desde la solicitud hasta el establecimiento, gestionamos cada paso con cuidado experto.",
            supportServices: [
                { icon: icons.FileCheck, description: "Preparación completa de documentos y traducción." },
                { icon: icons.Scale, description: "Apoyo legal integral con abogados especializados." },
                { icon: icons.Stamp, description: "Asistencia en la solicitud de visado y coordinación con la embajada." },
                { icon: icons.Plane, description: "Recogida en el aeropuerto a la llegada." },
                { icon: icons.Home, description: "Asistencia para encontrar alojamiento." },
                { icon: icons.Bank, description: "Apoyo para abrir una cuenta bancaria española." },
                { icon: icons.Users, description: "Orientación completa sobre procedimientos de residencia (TIE, NIE, Empadronamiento)." },
                { icon: icons.Building2, description: "Apoyo a la integración cultural para ayudarle a establecerte." },
            ],
            docsTitle: "Requisitos Principales",
            docsList: [
                "Prueba de trabajo remoto para una empresa no española.",
                "Ingresos mensuales mínimos de ~2.600 €.",
                "Título universitario o más de 3 años de experiencia laboral.",
                "Antecedentes penales limpios.",
                "Pasaporte válido.",
                "Seguro médico integral."
            ],
            programRefundTitle: "Información de Pago",
            programRefund: "Póngase en contacto con nosotros para obtener información detallada sobre precios y pagos.",
            readyForJourneyTitle: "Prepárese para su viaje de Nómada Digital",
            phase1Title: "Fase 1: Preparación Sin Problemas",
            phase2Title: "Fase 2: Llegada con Apoyo",
            phase3Title: "Fase 3: Integración Completa",
            readMoreInfo: "Para más información"
        },
        nonLucrative: {
            id: "non-lucrative",
            pageTitle: "Visa No Lucrativa",
            intro: "La Residencia No Lucrativa es uno de los tipos de residencia más populares en España, ideal para personas y familias que deseen vivir legalmente en España sin realizar actividades profesionales o comerciales. Esta residencia le permite establecerse en un entorno europeo seguro, beneficiarse del sistema sanitario español y proporcionar educación gratuita a sus hijos en colegios públicos.",
            whyTitle: "Beneficios de la Visa",
            whyPoints: [
                { icon: icons.ShieldCheck, title: "Concesión Inicial de 1 Año", description: "Concedida inicialmente por un año, renovable por dos años adicionales." },
                { icon: icons.TrendingUp, title: "Camino a la Ciudadanía", description: "Tras cinco años de residencia continua, solicite la residencia permanente y más tarde la nacionalidad española." },
                { icon: icons.Users, title: "Inclusión Familiar", description: "Traiga a sus familiares, incluidos los padres, a vivir con usted en España." },
                { icon: icons.School, title: "Educación Gratuita", description: "Los hijos pueden estudiar en colegios españoles de forma gratuita o a coste nominal." },
                { icon: icons.Heart, title: "Acceso Sanitario", description: "Benefíciese del sistema sanitario español." },
                { icon: icons.RefreshCw, title: "Modificación de Estatus", description: "Aunque la RNL prohíbe trabajar, este estatus puede modificarse más tarde a un permiso de trabajo." },
            ],
            targetAudience: {
                title: "¿Es este visado adecuado para usted?",
                audiences: [
                    { icon: icons.Users, title: "Jubilados", description: "Para personas con ingresos pasivos o ahorros que buscan un estilo de vida europeo tranquilo." },
                    { icon: icons.UsersRound, title: "Familias", description: "Para familias que desean establecerse en España con acceso a sanidad y educación." },
                ],
            },
            systemTitle: "Tu Camino hacia la Residencia",
            systemIntro: "Nuestro proceso de 5 pasos garantiza un viaje fluido desde tu solicitud inicial hasta la obtención de tu tarjeta de residencia.",
            systemSteps: esNonLucrativeSteps,
            supportTitle: "Nuestro Paquete de Apoyo Todo Incluido",
            supportIntro: "Desde la solicitud hasta el establecimiento, gestionamos cada paso con cuidado experto.",
            supportServices: [
                { icon: icons.FileCheck, description: "Preparación completa de documentos, traducción y apostilla." },
                { icon: icons.Scale, description: "Seguimiento legal completo por un abogado especializado hasta recibir la TIE." },
                { icon: icons.Plane, description: "Recogida en el aeropuerto de Vigo y primera noche de hotel." },
                { icon: icons.Bank, description: "Acompañamiento para abrir cuenta bancaria y obtener el NIE." },
                { icon: icons.Stamp, description: "Solicitud de residencia y empadronamiento." },
                { icon: icons.Heart, description: "Provisión de seguro médico integral para el primer mes." },
                { icon: icons.Building2, description: "Tour de orientación por la ciudad y tarjeta de transporte público." },
                { icon: icons.RefreshCw, description: "Servicio de renovación anual o asistencia para convertir a residencia de trabajo." },
            ],
            docsTitle: "Documentos Requeridos",
            docsList: [
                "Prueba de Medios Económicos: Ingresos o ahorros anuales de al menos 28.800€ para el solicitante principal, más ~7.200€ por cada familiar adicional.",
                "Seguro médico privado integral de una compañía autorizada en España.",
                "Antecedentes penales limpios de los últimos cinco años, traducido y apostillado.",
                "Certificado médico acreditando que no padece enfermedades contagiosas.",
                "Prueba de alojamiento en España (contrato de alquiler o escritura).",
                "Pasaporte válido por al menos un año."
            ],
            programRefundTitle: "Información de Pago",
            programRefund: "Póngase en contacto con nosotros para obtener información detallada sobre precios y pagos.",
            readyForJourneyTitle: "Prepárese para su nueva vida en España",
            phase1Title: "Fase 1: Preparación Sin Problemas",
            phase2Title: "Fase 2: Llegada con Apoyo",
            phase3Title: "Fase 3: Integración Completa",
            readMoreInfo: "Para más información"
        },
        familyReunification: {
            id: "family-reunification",
            pageTitle: "Visa de Reagrupación Familiar",
            intro: "Este visado permite que los familiares de un residente extranjero en España se unan a él y vivan legalmente en el país. Este programa es fundamental para quienes desean unir a su familia en España.",
            whyTitle: "Beneficios de la Visa",
            whyPoints: [
                { icon: icons.Users, title: "Una a su Familia", description: "Los familiares reciben un permiso de residencia alineado con la duración del permiso del patrocinador." },
                { icon: icons.TrendingUp, title: "Camino a la Residencia Permanente", description: "Tras cumplir los requisitos, solicite la residencia de larga duración o la nacionalidad." },
                { icon: icons.RefreshCw, title: "Flexibilidad de Estatus", description: "Los familiares pueden cambiar su tipo de residencia (ej. a permiso de trabajo)." },
                { icon: icons.ShieldCheck, title: "Seguridad Legal", description: "Asegure la residencia legal para toda su familia en España." },
                { icon: icons.School, title: "Acceso a la Educación", description: "Los hijos pueden acceder a la educación pública española." },
                { icon: icons.Heart, title: "Cobertura Sanitaria", description: "Acceso al sistema sanitario español para todos los familiares." },
            ],
            targetAudience: {
                title: "¿Es este visado adecuado para usted?",
                audiences: [
                    { icon: icons.Users, title: "Patrocinadores Residentes", description: "Para residentes legales en España que desean traer a sus familiares." },
                    { icon: icons.UsersRound, title: "Familiares", description: "Para cónyuges, hijos y padres de residentes legales en España." },
                ],
            },
            systemTitle: "Pasos para la Reagrupación",
            systemIntro: "Gestionamos todo el proceso para asegurar que su familia se una a usted en España lo antes posible.",
            systemSteps: esFamilyReunificationSteps,
            supportTitle: "Nuestro Paquete de Apoyo Todo Incluido",
            supportIntro: "Desde la solicitud hasta el establecimiento, ayudamos a su familia a reunirse en España.",
            supportServices: [
                { icon: icons.Plane, description: "Recepción de familiares en el aeropuerto o en España." },
                { icon: icons.FileCheck, description: "Traducción y certificación de documentos requeridos." },
                { icon: icons.Scale, description: "Apoyo legal para obtener la TIE para cada familiar." },
                { icon: icons.Stamp, description: "Coordinación de la presentación de la solicitud." },
                { icon: icons.Home, description: "Asistencia en el empadronamiento de la familia." },
                { icon: icons.Bank, description: "Apertura de cuentas bancarias." },
                { icon: icons.Users, description: "Seguimiento de normas fiscales y de residencia." },
                { icon: icons.RefreshCw, description: "Servicios de renovación o cambio de permiso." },
            ],
            docsTitle: "Documentos Requeridos",
            docsList: [
                "Formulario de solicitud de visado/residencia firmado.",
                "Pasaporte válido con copias.",
                "Prueba de parentesco (acta de matrimonio, nacimiento), traducida y legalizada.",
                "Prueba de que el patrocinador tiene residencia legal y ha residido el tiempo mínimo.",
                "Prueba de vivienda adecuada (contrato de alquiler o escritura).",
                "Prueba de recursos económicos suficientes del patrocinador.",
                "Seguro médico o prueba de cobertura sanitaria.",
                "Antecedentes penales del solicitante."
            ],
            programRefundTitle: "Información de Pago",
            programRefund: "Póngase en contacto con nosotros para obtener información detallada sobre precios y pagos.",
            readyForJourneyTitle: "Prepárese para reunir a su familia",
            phase1Title: "Fase 1: Preparación Sin Problemas",
            phase2Title: "Fase 2: Llegada con Apoyo",
            phase3Title: "Fase 3: Integración Completa",
            readMoreInfo: "Para más información"
        },
        tourism: {
            id: "tourism",
            pageTitle: "Programa de Turismo y Descubrimiento Premium",
            intro: "Experimente España más allá del turismo convencional. Nuestro programa unificado combina viajes de lujo con exploración estratégica para educación, residencia e inversión.",
            heroImage: "https://images.unsplash.com/photo-1543783232-47503914a27c?q=80&w=2070&auto=format&fit=crop",
            itinerariesTitle: "Nuestros Itinerarios de Viaje Seleccionados",
            itineraries: [
                {
                    title: "Programa 1: Noroeste de España + Oporto (Portugal)",
                    image: programImage1,
                    points: [
                        "Vigo – Tour nocturno por la ciudad y el paseo marítimo.",
                        "Aguda e Islas Cíes – Paisajes naturales impresionantes.",
                        "Ourense – Visita a las termas romanas “As Burgas” y al “Puente Romano”.",
                        "Santiago de Compostela – Catedral de Santiago y casco antiguo.",
                        "A Coruña – Torre de Hércules y paseo marítimo.",
                        "Oporto (Portugal) – Degustación y visitas históricas.",
                        "Tour por Oporto + Viaje de regreso."
                    ]
                },
                {
                    title: "Programa 2: Mezcla de España y Portugal",
                    image: programImage2,
                    points: [
                        "Vigo – Exploración de la ciudad.",
                        "Oporto – Río Duero y principales monumentos históricos.",
                        "Oporto – Tour de la ciudad y visita a la Catedral Vieja.",
                        "Lisboa – Traslado a Lisboa y tiempo libre en la ciudad.",
                        "Sintra – Palacio de la Pena y Parque Montserrat.",
                        "Santiago de Compostela – Catedral de Santiago y casco antiguo."
                    ]
                },
                {
                    title: "Programa 3: Córdoba y Andalucía",
                    image: programImage3,
                    points: [
                        "Granada – Llegada y exploración del barrio antiguo.",
                        "Alhambra – Visita al Palacio de la Alhambra y Jardines del Generalife.",
                        "Córdoba – Mezquita de Córdoba y Puente Romano.",
                        "Córdoba – Barrio Judío y Plaza Corazón de María.",
                        "Sevilla – Traslado a Sevilla, Catedral y Giralda.",
                        "Sevilla – Plaza de España y Jardines de María Luisa.",
                        "Málaga – Excursión de un día (Mar + Castillo de la montaña)."
                    ]
                },
                {
                    title: "Programa 4: Barcelona + Madrid",
                    image: programImage4,
                    points: [
                        "Barcelona – Paseo en barco por las Ramblas.",
                        "Barcelona – Sagrada Familia y Park Güell.",
                        "Montserrat – Excursión al monasterio de la montaña.",
                        "Madrid – Traslado y tour por la Plaza Mayor y el Buen Retiro.",
                        "Madrid – Visita al Museo del Prado y galerías principales.",
                        "Toledo – Ciudad histórica (Terrazas antiguas y castillos)."
                    ]
                },
                {
                    title: "Programa 5: Suiza – Naturaleza y Montañas",
                    image: programImage5,
                    points: [
                        "Zúrich – Llegada y tour por el casco antiguo.",
                        "Lucerna – Lago de Lucerna y Puente de la Capilla.",
                        "Interlaken – Exploración de aventuras alpinas.",
                        "Mürren – Cumbres de las montañas y vistas impresionantes.",
                        "Jungfraujoch – La estación de ferrocarril más alta de Europa.",
                        "Ginebra – Traslado, Lago Lemán y tour de la ciudad."
                    ]
                },
                {
                    title: "Programa 6: Francia – Países Bajos – Bélgica",
                    image: programImage6,
                    points: [
                        "París – Torre Eiffel y el río Sena.",
                        "París – Museo del Louvre y Catedral de Notre Dame.",
                        "Bruselas – Grand Place y vistas del casco antiguo.",
                        "Bruselas – Tour de degustación de chocolate y gofres.",
                        "Ámsterdam – Crucero por los canales.",
                        "Ámsterdam – Museo Van Gogh y barrio de Jordaan."
                    ]
                }
            ],
            comparisonTitle: "Compare Nuestros Programas Especializados",
            comparisonPrograms: [
                {
                    name: "Turismo General",
                    description: "Perfecto para familias e individuos centrados en el ocio puro, la cultura y la relajación.",
                    focus: "Turismo y Ocio",
                    uniqueFeatures: ["Visitas a monumentos icónicos", "Gastronomía auténtica", "Excursiones históricas"],
                    priceHint: "Contactar para precios"
                },
                {
                    name: "Turismo Inteligente (Dirigido)",
                    description: "Diseñado para quienes exploran oportunidades educativas y profesionales en España.",
                    focus: "Exploración Académica",
                    uniqueFeatures: ["Visitas guiadas a campus", "Asesoramiento de admisión", "Networking profesional"],
                    priceHint: "Contactar para precios"
                },
                {
                    name: "Turismo Inteligente (Vía de Residencia)",
                    description: "Viajes de alto nivel combinados con pasos legales preliminares para la residencia.",
                    focus: "Preparación de Residencia",
                    uniqueFeatures: ["Perfilado legal preliminar", "Búsqueda de zonas de reubicación", "Verificación de documentos"],
                    priceHint: "Contactar para precios"
                },
                {
                    name: "Turismo VIP (Vía de Residencia)",
                    description: "La estrategia de lujo definitiva supervisada por expertos para personas de alto patrimonio.",
                    focus: "Reubicación de Élite",
                    uniqueFeatures: ["Hoteles de lujo de 5 estrellas", "Estrategia privada con el Dr. Abdelrahman", "Acceso exclusivo a inversiones"],
                    priceHint: "Contactar para precios"
                },
                {
                    name: "Turismo Inteligente (Inversión)",
                    description: "Centrado en identificar oportunidades inmobiliarias y de negocio en el mercado español.",
                    focus: "Negocios e Inmobiliaria",
                    uniqueFeatures: ["Tours de visualización de propiedades", "Sesiones de análisis de mercado", "Orientación sobre Golden Visa"],
                    priceHint: "Contactar para precios"
                }
            ],
            ctaBlock: {
                title: "¿Listo para Explorar España con un Propósito?",
                text: "Ya sea que nos visite por diversión o planee su futuro, nuestros expertos garantizan un viaje fluido y productivo.",
                button: "Consulte con Nuestro Equipo"
            }
        },
        otherServices: {
            id: "other-services",
            title: "Otros Servicios de Visa y Residencia",
            intro: "Más allá de nuestras ofertas principales, brindamos asistencia legal experta para una variedad de otras opciones de residencia en España.",
            services: esOtherServices
        },
        contactPage: {
            pageTitle: "Ponte en Contacto",
            intro: "Estamos aquí para ayudar. Ya sea que tengas una pregunta sobre nuestros servicios, necesites una consulta o simplemente quieras saludar, nos encantaría saber de ti.",
            form: {
                name: "Nombre Completo",
                email: "Correo Electrónico",
                subject: "Asunto",
                message: "Tu Mensaje",
                cta: "Enviar Mensaje"
            },
            infoTitle: "Información de Contacto",
            address: "Vigo, Pontevedra, España",
            phone: "+34 610 99 29 38",
            email: "khatwa.es@gmail.com",
        },
        footer: {
            companyName: "Khatwa",
            description: "Tu primer paso hacia una nueva vida en España.",
            contactTitle: "Ponte en Contacto",
            address: "Vigo, Pontevedra, España",
            phone: "+34 610 99 29 38",
            email: "khatwa.es@gmail.com",
            legalTitle: "Información Legal",
            legalText: "Khatwa es una entidad de consultoría profesional dirigida por el Dr. Abdelrahman Hamad, registrada en España.",
            followTitle: "Síguenos",
            socialLinks: socialLinks,
            copyright: "© 2026 Khatwa. Todos los derechos reservados."
        }
    }
};