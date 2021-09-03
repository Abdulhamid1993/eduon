import {strict} from "assert";

export type I18nCode = keyof I18nSchema;

export interface I18nSchema {
    // Navbar
    readonly NAVBAR_MAIN_PAGE_TITTLE: string;
    readonly NAVBAR_COURSES_TITTLE: string;
    readonly NAVBAR_FAQ_TITTLE: string;
    readonly NAVBAR_ABOUT_TITTLE: string;

    // 404 page
    readonly PAGE_NOT_FOUND_TITTLE: string;
    readonly PAGE_NOT_FOUND_FOOTER_TITTLE: string;
    readonly NAVBAR_LOGIN_TITTLE: string;

    //Main
    readonly TITTLE_MAIN_PLATFORMA: string;
    readonly TITTLE_MAIN_PLATFORM: string;
    readonly TITTLE_MAIN_TALIM: string;
    readonly TITTLE_MAIN_KURSLAR: string;
    readonly TITTLE_MAIN_VIDEO: string;
    readonly TITTLE_MAIN_BILIMOLUVCHI: string;
    readonly TITTLE_MAIN_BILIMULASHUVCHI: string;
    readonly TITTLE_MAIN_PROFIL: string;
    readonly TITTLE_MAIN_KURSTANGLANG: string;
    readonly TITTLE_MAIN_OQISHNI: string;
    readonly TITTLE_MAIN_TOP: string;
    readonly TITTLE_MAIN_KURS: string;
    readonly TITTLE_MAIN_XARID: string;
    readonly TITTLE_MAIN_BARCHASI: string;
    readonly TITTLE_MAIN_YANGI: string;
    readonly TITTLE_MAIN_SPIKER: string;
    readonly TITTLE_MAIN_DAN: string;
    readonly TITTLE_MAIN_DANS: string;
    readonly TITTLE_MAIN_ORTIQMAXSULOT: string;
    readonly TITTLE_MAIN_PROFILS: string;
    readonly TITTLE_MAIN_ORTIQSOXA: string;
    readonly NAVBAR_COURSES_TITTLES: string;
    readonly TITTLE_MAIN_MARKETING: string;
    readonly TITTLE_MAIN_DASTURLASH: string;
    readonly TITTLE_MAIN_DIZAYN: string;
    readonly TITTLE_MAIN_DIN: string;
    readonly TITTLE_MAIN_XORIJI: string;
    readonly TITTLE_MAIN_BIZNES: string;
    readonly TITTLE_MAIN_MENEJMENT: string;
    readonly TITTLE_MAIN_USTUNLIK: string;
    readonly TITTLE_MAIN_NEGA: string;
    readonly TITTLE_MAIN_AYNAN: string;
    readonly TITTLE_MAIN_QULAY: string;
    readonly TITTLE_MAIN_PLATFORMADA: string;
    readonly TITTLE_MAIN_SOAT: string;
    readonly TITTLE_MAIN_ISTALGANJOY: string;
    readonly TITTLE_MAIN_INTERNETBOLSA: string;
    readonly TITTLE_MAIN_MUTAXASISLAR: string;
    readonly TITTLE_MAIN_DASTURLASHMUTAXASISLAR: string;
    readonly TITTLE_MAIN_AKTUAL: string;
    readonly TITTLE_MAIN_BARCHAAQTUAL: string;
    readonly TITTLE_MAIN_OSON: string;
    readonly TITTLE_MAIN_SAMARALIILM: string;
    readonly TITTLE_MAIN_FIKIRLAR: string;
    readonly TITTLE_MAIN_ULARBIZXAQIMIZDA: string;
    readonly TITTLE_MAIN_NIMAFIKIR: string;
    readonly TITTLE_MAIN_ONLINETALIM: string;
    readonly TITTLE_MAIN_PLATFORMAORQALI: string;
    readonly TITTLE_MAIN_ROYXATANOTISH: string;
    readonly TITTLE_MAIN_AKKAUNTINGIZ: string;

    //Main2
    readonly TITTLE_MAIN2_ONLINE: string;
    readonly TITTLE_MAIN2_PLATFORM: string;
    readonly TITTLE_MAIN2_KELAJAK: string;
    readonly TITTLE_MAIN2_BILIM: string;
    readonly TITTLE_MAIN2_VIDEO: string;
    readonly TITTLE_MAIN2_BILIMOLUVCHI: string;
    readonly TITTLE_MAIN2_OQUVCHI: string;
    readonly TITTLE_MAIN2_BILIMULASHUVCHI: string;
    readonly TITTLE_MAIN2_OQITUVCHI: string;
    readonly TITTLE_MAIN2_PROFIL: string;
    readonly TITTLE_MAIN2_SOHANGIZ: string;
    readonly TITTLE_MAIN2_OQITISH: string;
    readonly TITTLE_MAIN2_TARIFLAR: string;
    readonly TITTLE_MAIN2_OQUVCHILAR: string;
    readonly TITTLE_MAIN2_SOHA: string;
    readonly TITTLE_MAIN2_SOTILGAN: string;
    readonly TITTLE_MAIN2_QADAMLAR: string;
    readonly TITTLE_MAIN2_TALIMBERISH: string;
    readonly TITTLE_MAIN2_QANDAY: string;
    readonly TITTLE_MAIN2_BOSHLASH: string;
    readonly TITTLE_MAIN2_ROYXATDAN: string;
    readonly TITTLE_MAIN2_BILIMULASHUVCHISIFATIDA: string;
    readonly TITTLE_MAIN2_BUYERGA: string;
    readonly TITTLE_MAIN2_BOSING: string;
    readonly TITTLE_MAIN2_MALUMOTLAR: string;
    readonly TITTLE_MAIN2_PLATFORMATOMONIDAN: string;
    readonly TITTLE_MAIN2_KURSYUKLASH: string;
    readonly TITTLE_MAIN2_SOHANGIZBOYICHA: string;
    readonly TITTLE_MAIN2_USTUNLIK: string;
    readonly TITTLE_MAIN2_NEGA: string;
    readonly TITTLE_MAIN2_AYNAN: string;
    readonly TITTLE_MAIN2_AUDITORIYA: string;
    readonly TITTLE_MAIN2_OZINGIZSHAXSI: string;
    readonly TITTLE_MAIN2_OQUVCHIMARKAZ: string;
    readonly TITTLE_MAIN2_BEPUL: string;
    readonly TITTLE_MAIN2_STATISTIKA: string;
    readonly TITTLE_MAIN2_BARCHA: string;
    readonly TITTLE_MAIN2_STATISTIK: string;
    readonly TITTLE_MAIN2_QOSHIMCHA: string;
    readonly TITTLE_MAIN2_OSON: string;
    readonly TITTLE_MAIN2_BILIMBERISH: string;
    readonly TITTLE_MAIN2_FIKRLAR: string;
    readonly TITTLE_MAIN2_USTOZLAR: string;
    readonly TITTLE_MAIN2_NIMAFIKIRDA: string;
    readonly TITTLE_MAIN2_ONLINETALIM: string;
    readonly TITTLE_MAIN2_PLATFORMAMIZDA: string;
    readonly TITTLE_MAIN2_ROYXAT: string;
    readonly TITTLE_MAIN2_AKKAUNTINGIZ: string;

    //COURSES
    readonly TITTLE_COURSE_XUSHKELIBSIZ: string;
    readonly TITTLE_COURSE_ILM: string;
    readonly TITTLE_COURSE_XOSHBUGUN: string;
    readonly TITTLE_COURSE_BOLIM: string;
    readonly TITTLE_COURSE_BOYICHA: string;
    readonly TITTLE_COURSE_USTOZLAR: string;
    readonly TITTLE_COURSE_BOLIMLAR: string;
    readonly TITTLE_COURSE_YANGIQOSHISH: string;
    readonly TITTLE_COURSE_REYTING: string;
    readonly TITTLE_COURSE_UZBEKCHA: string;
    readonly TITTLE_COURSE_RUSCHA: string;
    readonly TITTLE_COURSE_INGLISCHA: string;
    readonly TITTLE_COURSE_QOZOQCHA: string;
    readonly TITTLE_COURSE_TOJIKCHA: string;
    readonly TITTLE_COURSE_BOLIML: string;
    readonly TITTLE_COURSE_FRONTEND: string;
    readonly TITTLE_COURSE_BACKEND: string;
    readonly TITTLE_COURSE_MOBILE: string;
    readonly TITTLE_COURSE_FLUTTER: string;
    readonly TITTLE_COURSE_SUNIYINTELEKT: string;
    readonly TITTLE_COURSE_KORSATISH: string;
    readonly TITTLE_COURSE_YANGIQURSLAR: string;
    readonly TITTLE_COURSE_BARCHASI: string;
    readonly TITTLE_COURSE_MARKETING: string;
    readonly TITTLE_COURSE_DASTURLASH: string;
    readonly TITTLE_COURSE_BIZNES: string;
    readonly TITTLE_COURSE_DINIY: string;
    readonly TITTLE_COURSE_XORIJIYTIL: string;
    readonly TITTLE_COURSE_MENEJMENT: string;
    readonly TITTLE_COURSE_XARIDQILISH: string;
    readonly TITTLE_COURSE_PROFIL: string;
    readonly TITTLE_COURSE_YANAKORISH: string;
    readonly TITTLE_COURSE_SOM: string;

    //FAQ
    readonly TITTLE_FAQ_KOPBERILADIGON: string;
    readonly TITTLE_FAQ_SAVOLARGA: string;
    readonly TITTLE_FAQ_SAVOLAR: string;
    readonly TITTLE_FAQ_JAVOBLAR: string;
    readonly TITTLE_FAQ_SIZHAMSAVOLYOLLASHINGIZ: string;
    readonly TITTLE_FAQ_BILIMOLUVCHI: string;
    readonly TITTLE_FAQ_OQUVCHI: string;
    readonly TITTLE_FAQ_BILIMULASHUVCHI: string;
    readonly TITTLE_FAQ_OQTUVCHI: string;
    readonly TITTLE_FAQ_BILIM: string;
    readonly TITTLE_FAQ_OQUVCH: string;
    readonly TITTLE_FAQ_BARCHASI: string;
    readonly TITTLE_FAQ_TOLOVLAR: string;
    readonly TITTLE_FAQ_KURSLAR: string;
    readonly TITTLE_FAQ_XARIDQILISH: string;
    readonly TITTLE_FAQ_PROFIL: string;
    readonly TITTLE_FAQ_SHIKOYAT: string;
    readonly TITTLE_FAQ_BOSHQALAR: string;
    readonly TITTLE_FAQ_YANAKORSATISH: string;

    //BLOCK
    readonly TITTLE_BLOCK_ONLINE: string;
    readonly TITTLE_BLOCK_TALIM: string;
    readonly TITTLE_BLOCK_OZBEKISTONDAGI: string;
    readonly TITTLE_BLOCK_ONLAYNOQUV: string;
    readonly TITTLE_BLOCK_TRENINGLARSEMINARLAR: string;
    readonly TITTLE_BLOCK_VIDEONIKORISH: string;
    readonly TITTLE_BLOCK_EDUON: string;
    readonly TITTLE_BLOCK_HISSA: string;
    readonly TITTLE_BLOCK_QOSHGANLAR: string;
    readonly TITTLE_BLOCK_BIZHAQIMIZDA: string;
    readonly TITTLE_BLOCK_EDUONMFAQTORTOMONIDAN: string;
    readonly TITTLE_BLOCK_HOZIRDABU: string;
    readonly TITTLE_BLOCK_OZBEKISTONNINGDAORTIQ: string;
    readonly TITTLE_BLOCK_KURSHAQIDA: string;
    readonly TITTLE_BLOCK_EDUONDAGIHARBIR: string;
    readonly TITTLE_BLOCK_YUZLABKURSLARTALABA: string;
    readonly TITTLE_BLOCK_VIDEOKORISH: string;
    readonly TITTLE_BLOCK_SHOTARUSTAVELI: string;
    readonly TITTLE_BLOCK_ISMINGIZ: string;
    readonly TITTLE_BLOCK_ELEKTRONPOCHTANGOZ: string;
    readonly TITTLE_BLOCK_TELEFONRAQAMINGIZ: string;
    readonly TITTLE_BLOCK_XABARINGIZ: string;
    readonly TITTLE_BLOCK_YUBORISH: string;

    //FOOTERS
    readonly TITTLE_FOOTERS_OQUVCHI: string;
    readonly TITTLE_FOOTERS_SPIKER: string;
    readonly TITTLE_FOOTERS_VEBSAYT: string;
    readonly TITTLE_FOOTERS_BOSHSAHIFA: string;
    readonly TITTLE_FOOTERS_KURSLAR: string;
    readonly TITTLE_FOOTERS_FAQ: string;
    readonly TITTLE_FOOTERS_MALUMOTLAR: string;
    readonly TITTLE_FOOTERS_BIZHAQIMIZDA: string;
    readonly TITTLE_FOOTERS_FOYDALANISH: string;
    readonly TITTLE_FOOTERS_MAXFIYLIK: string;
    readonly TITTLE_FOOTERS_MANZILLAR: string;
    readonly TITTLE_FOOTERS_TOSHKENTSH: string;
    readonly TITTLE_FOOTERS_RUSTAVELI: string;
    readonly TITTLE_FOOTERS_BARCHA: string;

    //Login Pages
    readonly TITTLE_CODE_VERIFY_ERROR: string;
    readonly TITTLE_LOGIN_ERROR: string;
}