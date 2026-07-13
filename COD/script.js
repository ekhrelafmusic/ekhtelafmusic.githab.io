// دیتابیس جامع آهنگ‌ها - تصویر تمام آهنگ‌ها به اختلاف.jpg تغییر یافت و مسیر موزیک‌ها بدون پوشه tracks شد
const musicDatabase = {
    pishro: {
        name: "رضا پیشرو",
        tracks: [
            { id: "tariki", title: "آهنگ تاریکی رضا پیشرو", img: "اختلاف.jpg", audio: "pishro-tariki.mp3" },
            { id: "ghabreston", title: "آهنگ قبرستون هیپ هاپ رضا پیشرو", img: "اختلاف.jpg", audio: "ghabreston.mp3" },
            { id: "ghabil", title: "آهنگ قابیل رضا پیشرو", img: "اختلاف.jpg", audio: "pishro-ghabil.mp3" },
            { id: "zombie", title: "آهنگ زامبی رضا پیشرو", img: "اختلاف.jpg", audio: "pishro-zombie.mp3" },
            { id: "asare_manfi", title: "آهنگ اثر منفی رضا پیشرو", img: "اختلاف.jpg", audio: "pishro-asare-manfi.mp3" },
            { id: "jengir", title: "آهنگ جن‌گیر رضا پیشرو", img: "اختلاف.jpg", audio: "pishro-jengir.mp3" },
            { id: "tehran", title: "آهنگ تهران رضا پیشرو", img: "اختلاف.jpg", audio: "pishro-tehran.mp3" },
            { id: "batel_shod", title: "آهنگ باطل شد رضا پیشرو", img: "اختلاف.jpg", audio: "batel_shod.mp3" },
            { id: "bale_ghorban", title: "آهنگ بله قربان رضا پیشرو", img: "اختلاف.jpg", audio: "pishro-bale-ghorban.mp3" }
        ]
    },
    putak: {
        name: "پوریا پوتک",
        tracks: [
            { id: "kanashi", title: "آهنگ کاناشی پوریا پوتک", img: "اختلاف.jpg", audio: "putak-kanashi.mp3" },
            { id: "holy_shit", title: "آهنگ holy shit پوریا پوتک", img: "اختلاف.jpg", audio: "holy_shit.mp3" },
            { id: "bi_hes", title: "آهنگ بی حس پوریا پوتک", img: "اختلاف.jpg", audio: "putak-bi-hes.mp3" },
            { id: "release_boy", title: "آهنگ ریلیز بوی پوریا پوتک", img: "اختلاف.jpg", audio: "putak-release-boy.mp3" },
            { id: "paria", title: "آهنگ پریا پوریا پوتک", img: "اختلاف.jpg", audio: "putak-paria.mp3" },
            { id: "lanati", title: "آهنگ لعنتی پوریا پوتک", img: "اختلاف.jpg", audio: "putak-lanati.mp3" }
        ]
    },
    tataloo: {
        name: "امیر تتلو",
        tracks: [
            { id: "vagon", title: "آهنگ واگن امیر تتلو", img: "اختلاف.jpg", audio: "tataloo-vagon.mp3" },
            { id: "raftam", title: "آهنگ رفتم که رفتم امیر تتلو", img: "اختلاف.jpg", audio: "tataloo-raftam.mp3" },
            { id: "navazesh1", title: "آهنگ نوازش ۱ امیر تتلو", img: "اختلاف.jpg", audio: "tataloo-navazesh1.mp3" },
            { id: "navazesh2", title: "آهنگ نوازش ۲ امیر تتلو", img: "اختلاف.jpg", audio: "tataloo-navazesh2.mp3" },
            { id: "male_man_bash", title: "آهنگ مال من باش امیر تتلو", img: "اختلاف.jpg", audio: "tataloo-malemanbash.mp3" },
            { id: "taziandeh", title: "آهنگ تازیانه امیر تتلو", img: "اختلاف.jpg", audio: "tataloo-taziyaneh.mp3" },
            { id: "man_ba_nadarim", title: "آهنگ من باهات قهرم امیر تتلو", img: "اختلاف.jpg", audio: "tataloo-manbahatghahram.mp3" },
            { id: "parvaz", title: "آهنگ پرواز امیر تتلو", img: "اختلاف.jpg", audio: "tataloo-parvaz.mp3" },
            { id: "goli", title: "آهنگ پریشب امیر تتلو", img: "اختلاف.jpg", audio: "tataloo-parishab.mp3" },
            { id: "har_vaght_ke_boodi", title: "آهنگ هر وقت که بودی امیر تتلو", img: "اختلاف.jpg", audio: "tataloo-har-vaght-ke-boodi.mp3" },
            { id: "to_bezar_boro_mano", title: "آهنگ تو بذار برو منو امیر تتلو", img: "اختلاف.jpg", audio: "tataloo-to-bezar-boro-mano.mp3" },
            { id: "hanoozam", title: "آهنگ هنوزم امیر تتلو", img: "اختلاف.jpg", audio: "tataloo-hanoozam.mp3" }
        ]
    },
    haydeh: {
        name: "هایده",
        tracks: [
            { id: "shanehayat", title: "آهنگ شانه هایت را برای گریه کجاست هایده", img: "اختلاف.jpg", audio: "haydeh-shanehayat.mp3" },
            { id: "soghati", title: "آهنگ سوغاتی (وقتی میای صدای پات) هایده", img: "اختلاف.jpg", audio: "haydeh-soghati.mp3" },
            { id: "roozaye_roshan", title: "آهنگ روزای روشن خداحافظ هایده", img: "اختلاف.jpg", audio: "haydeh-roozaye-roshan.mp3" },
            { id: "faryad", title: "آهنگ فریاد هایده", img: "اختلاف.jpg", audio: "haydeh-faryad.mp3" },
            { id: "vafaye_del", title: "آهنگ وفای دل هایده", img: "اختلاف.jpg", audio: "haydeh-vafaye-del.mp3" },
            { id: "ashianegh", title: "آهنگ آشیانه هایده", img: "اختلاف.jpg", audio: "haydeh-ashianegh.mp3" },
            { id: "raavi", title: "آهنگ راوی هایده", img: "اختلاف.jpg", audio: "haydeh-raavi.mp3" },
            { id: "zendeghi", title: "آهنگ زندگی هایده", img: "اختلاف.jpg", audio: "zendeghi.mp3" },
            { id: "salam", title: "آهنگ سلام من به تو هایده", img: "اختلاف.jpg", audio: "haydeh-salam.mp3" },
            { id: "bahar_bahar", title: "آهنگ بهار بهار باز اومده دوباره هایده", img: "اختلاف.jpg", audio: "haydeh-bahar.mp3" },
            { id: "shab_eshgh", title: "آهنگ شب عشق هایده", img: "اختلاف.jpg", audio: "haydeh-shab-eshgh.mp3" },
            { id: "saghar", title: "آهنگ ساغر هستی هایده", img: "اختلاف.jpg", audio: "haydeh-saghar.mp3" },
            { id: "ghesseye_man", title: "آهنگ قصه من هایده", img: "اختلاف.jpg", audio: "haydeh-ghesseye-man.mp3" },
            { id: "golvajeh", title: "آهنگ گلواژه هایده", img: "اختلاف.jpg", audio: "haydeh-golvajeh.mp3" },
            { id: "delam_mikhad", title: "آهنگ دلم می‌خواد به اصفهان برگردم هایده", img: "اختلاف.jpg", audio: "haydeh-delam-mikhad.mp3" }
        ]
    },
    homeyra: {
        name: "حمیرا",
        tracks: [
            { id: "sabram_ata_kon", title: "آهنگ صبرم عطا کن حمیرا", img: "اختلاف.jpg", audio: "homeyra-sabram.mp3" },
            { id: "darya_kenar", title: "آهنگ دریا کنار حمیرا", img: "اختلاف.jpg", audio: "homeyra-darya.mp3" },
            { id: "gozashteh", title: "آهنگ سرگذشت حمیرا", img: "اختلاف.jpg", audio: "homeyra-gozashteh.mp3" },
            { id: "sarnevesht", title: "آهنگ سرنوشت حمیرا", img: "اختلاف.jpg", audio: "homeyra-sarnevesht.mp3" },
            { id: "bahar_bahare", title: "آهنگ بهار بهاره امسال حمیرا", img: "اختلاف.jpg", audio: "homeyra-bahar.mp3" },
            { id: "vaghtm_ke_rafti", title: "آهنگ وقتی که رفتی حمیرا", img: "اختلاف.jpg", audio: "homeyra-rafti.mp3" },
            { id: "khodahafezi", title: "آهنگ لحظه خداحافظی حمیرا", img: "اختلاف.jpg", audio: "homeyra-khodahafezi.mp3" }
        ]
    },
    andy: {
        name: "اندی",
        tracks: [
            { id: "dokhtar_irooni", title: "آهنگ دختر ایرونی اندی", img: "اختلاف.jpg", audio: "andy-dokhtar.mp3" },
            { id: "khoshgela", title: "آهنگ خوشگلا باید برقصن اندی", img: "اختلاف.jpg", audio: "andy-khoshgela.mp3" },
            { id: "ameneh", title: "آهنگ آمنه اندی", img: "اختلاف.jpg", audio: "andy-ameneh.mp3" },
            { id: "bela", title: "آهنگ بلا اندی", img: "اختلاف.jpg", audio: "andy-bela.mp3" },
            { id: "khoshgel", title: "آهنگ خوشگل محلمون اندی", img: "اختلاف.jpg", audio: "andy-mahale.mp3" },
            { id: "cheshmat", title: "آهنگ چشمای ناز اندی", img: "اختلاف.jpg", audio: "andy-cheshmat.mp3" },
            { id: "tavalod", title: "آهنگ تولد اندی", img: "اختلاف.jpg", audio: "andy-tavalod.mp3" },
            { id: "shab", title: "آهنگ شب عاشقی اندی", img: "اختلاف.jpg", audio: "andy-shab.mp3" },
            { id: "yar", title: "آهنگ یار سبزه اندی", img: "اختلاف.jpg", audio: "andy-yar.mp3" },
            { id: "vadaa", title: "آهنگ وداع اندی", img: "اختلاف.jpg", audio: "andy-vadaa.mp3" },
            { id: "jadeh", title: "آهنگ گذشته باران اندی", img: "اختلاف.jpg", audio: "andy-baran.mp3" },
            { id: "to", title: "آهنگ تو نباشی اندی", img: "اختلاف.jpg", audio: "andy-to.mp3" },
            { id: "tab", title: "آهنگ تب و تاب اندی", img: "اختلاف.jpg", audio: "andy-tab.mp3" },
            { id: "che_khoshgel", title: "آهنگ چه خوشگل شدی اندی", img: "اختلاف.jpg", audio: "andy-che-khoshgel.mp3" },
        ]
    },
    moein: {
        name: "معین",
        tracks: [
            { id: "hamsafar", title: "آهنگ سفر معین", img: "اختلاف.jpg", audio: "moein-hamsafar.mp3" },
            { id: "kabeh", title: "آهنگ کعبه معین", img: "اختلاف.jpg", audio: "moein-kabeh.mp3" },
            { id: "parandeh", title: "آهنگ پرنده معین", img: "اختلاف.jpg", audio: "moein-parandeh.mp3" },
            { id: "parichehr", title: "آهنگ پریچهر معین", img: "اختلاف.jpg", audio: "moein-parichehr.mp3" },
            { id: "delsookhteh", title: "آهنگ دلسوخته معین", img: "اختلاف.jpg", audio: "moein-delsookhteh.mp3" },
            { id: "yeki", title: "آهنگ یکی را دوست میدارم معین", img: "اختلاف.jpg", audio: "moein-yeki.mp3" },
            { id: "shabayeraftan", title: "آهنگ شبای رفتن تو معین", img: "اختلاف.jpg", audio: "moein-shabaye-raftan.mp3" },
            { id: "naneh", title: "آهنگ ننه معین", img: "اختلاف.jpg", audio: "moein-naneh.mp3" },
            { id: "tamana", title: "آهنگ تمنا معین", img: "اختلاف.jpg", audio: "moein-tamana.mp3" },
            { id: "sobh", title: "آهنگ صبحت بخیر عزیزم معین", img: "اختلاف.jpg", audio: "moein-sobh.mp3" },
            { id: "khooneh", title: "آهنگ خونه آرزو معین", img: "اختلاف.jpg", audio: "moein-khooneh.mp3" },
            { id: "bigharar", title: "آهنگ بیقرار معین", img: "اختلاف.jpg", audio: "moein-bigharar.mp3" },
            { id: "bahaneh", title: "آهنگ بهانه معین", img: "اختلاف.jpg", audio: "moein-bahaneh.mp3" }
        ]
    },
    mahasti: {
        name: "مهستی",
        tracks: [
            { id: "meykhaneh", title: "آهنگ میخانه بی شراب مهستی", img: "اختلاف.jpg", audio: "mahasti-meykhameh.mp3" },
            { id: "bia", title: "آهنگ بیا بنویسیم روی خاک مهستی", img: "اختلاف.jpg", audio: "mahasti-bia.mp3" },
            { id: "delam", title: "آهنگ دلم تنگه مهستی", img: "اختلاف.jpg", audio: "mahasti-delam.mp3" },
            { id: "ghamat", title: "آهنگ قامت ناز مهستی", img: "اختلاف.jpg", audio: "mahasti-ghamat.mp3" },
            { id: "asir", title: "آهنگ اسیر مهستی", img: "اختلاف.jpg", audio: "mahasti-asir.mp3" },
            { id: "harfaye", title: "آهنگ حرفای قشنگ مهستی", img: "اختلاف.jpg", audio: "mahasti-harfaye.mp3" },
            { id: "sarab", title: "آهنگ  بی محبت مهستی", img: "اختلاف.jpg", audio: "mahasti-sarab.mp3" },
            { id: "toro", title: "آهنگ تو را کجا پیدا کنم مهستی", img: "اختلاف.jpg", audio: "mahasti-toro.mp3" },
            { id: "degar", title: "آهنگ dگر چه می‌خواهی مهستی", img: "اختلاف.jpg", audio: "mahasti-degar.mp3" },
            { id: "khodahafez", title: "آهنگ خدانگهدار مهستی", img: "اختلاف.jpg", audio: "mahasti-khodahafez.mp3" },
            { id: "aziz", title: "آهنگ عزیزم مهستی", img: "اختلاف.jpg", audio: "mahasti-aziz.mp3" },
            { id: "donya", title: "آهنگ دنیای با تو بودن مهستی", img: "اختلاف.jpg", audio: "mahasti-donya.mp3" },
            { id: "fadat", title: "آهنگ فدات شم مهستی", img: "اختلاف.jpg", audio: "mahasti-fadat.mp3" },
            { id: "taneh", title: "آهنگ طعنه مهستی", img: "اختلاف.jpg", audio: "mahasti-taneh.mp3" },
            { id: "mosafer", title: "آهنگ مسافر مهستی", img: "اختلاف.jpg", audio: "mahasti-mosafer.mp3" }
        ]
    },
    dariush: {
        name: "داریوش اقبالی",
        tracks: [
            { id: "donyaye_in_roozaye_man", title: "آهنگ دنیای این روزای من داریوش", img: "اختلاف.jpg", audio: "donyaye_in_roozaye_man.mp3" },
            { id: "dastaye_to", title: "آهنگ دستای تو داریوش", img: "اختلاف.jpg", audio: "dariush-dastaye-to.mp3" },
            { id: "shaghayegh", title: "آهنگ شقایق داریوش", img: "اختلاف.jpg", audio: "dariush-shaghayegh.mp3" },
            { id: "booyegandom", title: "آهنگ بوی گندم داریوش", img: "اختلاف.jpg", audio: "dariush-booyegandom.mp3" },
            { id: "yavar", title: "آهنگ یاور همیشه مؤمن داریوش", img: "اختلاف.jpg", audio: "dariush-yavar.mp3" },
            { id: "cheshme_man", title: "آهنگ چشم من داریوش", img: "اختلاف.jpg", audio: "dariush-cheshme-man.mp3" },
            { id: "faryad", title: "آهنگ فریاد زیر آب داریوش", img: "اختلاف.jpg", audio: "dariush-faryad.mp3" },
            { id: "sham", title: "آهنگ شام مهتاب داریوش", img: "اختلاف.jpg", audio: "dariush-sham.mp3" },
            { id: "vatan", title: "آهنگ دوباره می‌سازمت وطن داریوش", img: "اختلاف.jpg", audio: "dariush-vatan.mp3" },
            { id: "parandeh", title: "آهنگ پرنده مهاجر داریوش", img: "اختلاف.jpg", audio: "dariush-parandeh.mp3" },
            { id: "sal2000", title: "آهنگ سال ۲۰۰۰ داریوش", img: "اختلاف.jpg", audio: "dariush-sal2000.mp3" },
            { id: "ali", title: "آهنگ علی کنکوری داریوش", img: "اختلاف.jpg", audio: "dariush-ali.mp3" },
            { id: "jangal", title: "آهنگ جنگل داریوش", img: "اختلاف.jpg", audio: "dariush-jangal.mp3" },
            { id: "roozgar", title: "آهنگ روزگار غریب داریوش", img: "اختلاف.jpg", audio: "dariush-roozgar.mp3" },
            { id: "ghalandar", title: "آهنگ قلندر داریوش", img: "اختلاف.jpg", audio: "dariush-ghalandar.mp3" }
        ]
    },
    poori: {
        name: "گاد پوری",
        tracks: [
            { id: "hajam-ni", title: "آهنگ هیجام نی گاد پوری", img: "اختلاف.jpg", audio: "poori-hajam-ni.mp3" },
            { id: "bang", title: "آهنگ بنگ بنگ گاد پوری", img: "اختلاف.jpg", audio: "poori-bang-bang.mp3" },
            { id: "balam", title: "آهنگ بالام گاد پوری", img: "اختلاف.jpg", audio: "poori-balam.mp3" },
            { id: "hela", title: "آهنگ هلا گاد پوری", img: "اختلاف.jpg", audio: "poori-hela.mp3" },
            { id: "ashghal", title: "آهنگ آشغال گاد پوری", img: "اختلاف.jpg", audio: "poori-ashghal.mp3" },
            { id: "doshman", title: "آهنگ دشمنو دوست دارم من گاد پوری", img: "اختلاف.jpg", audio: "poori-doshman.mp3" },
            { id: "win", title: "آهنگ وین گادپوری", img: "اختلاف.jpg", audio: "poori-win.mp3" },
            { id: "troy", title: "آهنگ تروی گاد پوری", img: "اختلاف.jpg", audio: "poori-troy.mp3" },
            { id: "bozkesh", title: "آهنگ بزکش گاد پوری", img: "اختلاف.jpg", audio: "poori-bozkesh.mp3" },
        ]
    },
    hiphopologist: {
        name: "هیپاپولوژیست",
        tracks: [
            { id: "nabz", title: "آهنگ نبض هیپاپولوژیست", img: "اختلاف.jpg", audio: "doctor-nabz.mp3" },
            { id: "ghors", title: "آهنگ قرص هیپاپولوژیست", img: "اختلاف.jpg", audio: "doctor-ghors.mp3" },
            { id: "roz", title: "آهنگ رز هیپاپولوژیست", img: "اختلاف.jpg", audio: "doctor-roz.mp3" },
            { id: "shakak", title: "آهنگ لا مامورا هیپاپولوژیست", img: "اختلاف.jpg", audio: "doctor-la-mamura.mp3" },
            { id: "kapsool", title: "آهنگ تکذیب هیپاپولوژیست", img: "اختلاف.jpg", audio: "doctor-takzib.mp3" },
            { id: "noskheh", title: "آهنگ نسخ نسخه هیپاپولوژیست", img: "اختلاف.jpg", audio: "doctor-noskheh.mp3" },
            { id: "5sobh", title: "آهنگ ۵ صبح هیپاپولوژیست", img: "اختلاف.jpg", audio: "doctor-5sobh.mp3" },
            { id: "serum", title: "آهنگ سوگند هیپاپولوژیست", img: "اختلاف.jpg", audio: "doctor-sogand.mp3" },
            { id: "cetirizine", title: "آهنگ بز هیپاپولوژیست", img: "اختلاف.jpg", audio: "doctor-BOZ.mp3" },
            { id: "tetra", title: "آهنگ بلاد پارتی هیپاپولوژیست", img: "اختلاف.jpg", audio: "doctor-belaad-party.mp3" },
            { id: "aspirin", title: "آهنگ اکس  هیپاپولوژیست", img: "اختلاف.jpg", audio: "doctor-EX.mp3" },
        ]
    },
    talkdown: {
        name: "talk down",
        tracks: [
            { id: "cheft", title:"آهنگ مرحبا تاک دون" , img: "اختلاف.jpg", audio: "talkdown-marhaba.mp3" },
            { id: "shekar", title: "آهنگ باربی بندر تاک دون", img: "اختلاف.jpg", audio: "talkdown-shekar.mp3" },
            { id: "faza", title: "آهنگ فضا تاک دون", img: "اختلاف.jpg", audio: "talkdown-faza.mp3" },
            { id: "chaloos", title: "آهنگ چالوس تاک دون", img: "اختلاف.jpg", audio: "talkdown-chaloos.mp3" },
            { id: "didi", title: "آهنگ دیدی تاک دون", img: "اختلاف.jpg", audio: "talkdown-didi.mp3" },
            { id: "zood", title: "آهنگ زود باش تاک دون", img: "اختلاف.jpg", audio: "talkdown-zood.mp3" },
            { id: "dige", title: "آهنگ دیگه نمیتونم تاک دون", img: "اختلاف.jpg", audio: "talkdown-dige.mp3" },
            { id: "tanhaei", title: "آهنگ تنهایی تاک دون", img: "اختلاف.jpg", audio: "talkdown-tanhaei.mp3" },
            { id: "hanooz", title: "آهنگ هنوزم تاک دون", img: "اختلاف.jpg", audio: "talkdown-hanooz.mp3" },
            { id: "bahar", title: "آهنگ بهار اومد تاک دون", img: "اختلاف.jpg", audio: "talkdown-bahar.mp3" }
        ]
    },
    sorena: {
        name: "علی سورنا",
        tracks: [
            { id: "majnoon", title: "آهنگ مجنون شهر علی سورنا", img: "اختلاف.jpg", audio: "sorena-majnoon.mp3" },
            { id: "khooneh", title: "آهنگ خونه خورشید علی سورنا", img: "اختلاف.jpg", audio: "sorena-khooneh.mp3" },
            { id: "nakhoda", title: "آهنگ ناخدا جلال علی سورنا", img: "اختلاف.jpg", audio: "sorena-nakhoda.mp3" },
            { id: "kavir", title: "آهنگ کویر علی سورنا", img: "اختلاف.jpg", audio: "sorena-kavir.mp3" },
            { id: "gorg", title: "آهنگ گرگ و میش علی سورنا", img: "اختلاف.jpg", audio: "sorena-gorg.mp3" },
            { id: "keshti", title: "آهنگ کشتی علی سورنا", img: "اختلاف.jpg", audio: "sorena-keshti.mp3" },
            { id: "masti", title: "آهنگ مستی علی سورنا", img: "اختلاف.jpg", audio: "sorena-masti.mp3" },
            { id: "taryag", title: "آهنگ تریاق علی سورنا", img: "اختلاف.jpg", audio: "sorena-taryag.mp3" },
            { id: "pak", title: "آهنگ پاک علی سورنا", img: "اختلاف.jpg", audio: "sorena-pak.mp3" },
            { id: "maryam", title: "آهنگ مریم علی سورنا", img: "اختلاف.jpg", audio: "sorena-maryam.mp3" },
            { id: "bad", title: "آهنگ توربین علی سورنا", img: "اختلاف.jpg", audio: "sorena-turbin.mp3" },
            { id: "negar", title: "آهنگ نگار علی سورنا", img: "اختلاف.jpg", audio: "sorena-negar.mp3" }
        ]
    },
    shayea: {
        name: "شایع",
        tracks: [
            { id: "telo", title: "آهنگ تلو شایع", img: "اختلاف.jpg", audio: "shayea-telo.mp3" },
            { id: "yemoghehaei", title: "آهنگ یه موقع هایی شایع", img: "اختلاف.jpg", audio: "shayea-yemoghehaei.mp3" },
            { id: "hame", title: "آهنگ غول شایع", img: "اختلاف.jpg", audio: "shayea-ghool.mp3" },
            { id: "aks", title: "آهنگ عکس شایع", img: "اختلاف.jpg", audio: "shayea-aks.mp3" },
            { id: "kerm", title: "آهنگ کرم شایع", img: "اختلاف.jpg", audio: "shayea-kerm.mp3" },
            { id: "tangi", title: "آهنگ تنگی نفس شایع", img: "اختلاف.jpg", audio: "shangi-breath.mp3" },
            { id: "sarpam", title: "آهنگ سرپام شایع", img: "اختلاف.jpg", audio: "shayea-sarpam.mp3" },
            { id: "parvaz", title: "آهنگ پرواز شایع", img: "اختلاف.jpg", audio: "shayea-parvaz.mp3" },
            { id: "seel", title: "آهنگ سیل شایع و مهراد هیدن", img: "اختلاف.jpg", audio: "shayea-seel.mp3" },
            { id: "sheleshkon", title: "آهنگ شلش کن شایع", img: "اختلاف.jpg", audio: "shayea-sheleshkon.mp3" },
            { id: "montazer", title: "آهنگ عصبانی  شایع", img: "اختلاف.jpg", audio: "shayea-asabani.mp3" },
            { id: "refigh", title: "آهنگ رفیق فابریک شایع", img: "اختلاف.jpg", audio: "shayea-refigh.mp3" },
            { id: "jashnist", title: "آهنگ اینجانب شایع", img: "اختلاف.jpg", audio: "shayea-injaneb.mp3" }
        ]
    },
    ebi: {
        name: "ابی",
        tracks: [
            { id: "khalij", title: "آهنگ خلیج فارس ابی", img: "اختلاف.jpg", audio: "ebi-khalij.mp3" },
            { id: "setareh", title: "آهنگ ستاره های سربی ابی", img: "اختلاف.jpg", audio: "ebi-setareh.mp3" },
            { id: "pich", title: "آهنگ پیچک ابی", img: "اختلاف.jpg", audio: "ebi-pichak.mp3" },
            { id: "mohtaj", title: "آهنگ محتاج ابی", img: "اختلاف.jpg", audio: "ebi-mohtaj.mp3" },
            { id: "poost", title: "آهنگ پوست شیر ابی", img: "اختلاف.jpg", audio: "ebi-poost.mp3" },
            { id: "derakht", title: "آهنگ به تو نامه می‌نویسم ابی", img: "اختلاف.jpg", audio: "ebi-be-to-nameh.mp3" },
            { id: "shab", title: "آهنگ شب‌زده ابی", img: "اختلاف.jpg", audio: "ebi-shabzadeh.mp3" },
            { id: "ghesseh", title: "آهنگ قصه عشق ابی", img: "اختلاف.jpg", audio: "ebi-ghesseh.mp3" },
            { id: "ghoresh", title: "آهنگ گریه نکن ابی", img: "اختلاف.jpg", audio: "ebi-geryeh.mp3" },
            { id: "khanom", title: "آهنگ خانم گل ابی", img: "اختلاف.jpg", audio: "ebi-khanomgol.mp3" },
            { id: "medad", title: "آهنگ مداد رنگی ابی", img: "اختلاف.jpg", audio: "ebi-medad.mp3" },
            { id: "shekar", title: "آهنگ شکار ابی", img: "اختلاف.jpg", audio: "ebi-shekar.mp3" },
            { id: "navazesh", title: "آهنگ نوازش ابی", img: "اختلاف.jpg", audio: "ebi-navazesh.mp3" },
            { id: "asl", title: "آهنگ عسل ابی", img: "اختلاف.jpg", audio: "ebi-asal.mp3" },
            { id: "hambadam", title: "آهنگ همدم ابی", img: "اختلاف.jpg", audio: "ebi-hamdam.mp3" }
        ]
    },
    ghomayshi: {
        name: "سیاوش قمیشی",
        tracks: [
            { id: "jazireh", title: "آهنگ جزیره سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-jazireh.mp3" },
            { id: "baroon", title: "آهنگ بارون سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-baroon.mp3" },
            { id: "fereshteh", title: "آهنگ فرشته سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-fereshteh.mp3" },
            { id: "ghab", title: "آهنگ قاب شیشه ای سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-ghab.mp3" },
            { id: "ghol", title: "آهنگ قول سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-ghol.mp3" },
            { id: "parandeh", title: "آهنگ پرنده سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-parandeh.mp3" },
            { id: "neghab", title: "آهنگ نقاب سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-neghab.mp3" },
            { id: "alaki", title: "آهنگ الکی سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-alaki.mp3" },
            { id: "taghdir", title: "آهنگ تردید سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-tardid.mp3" },
            { id: "panjereh", title: "آهنگ پنجره سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-panjereh.mp3" },
            { id: "bad", title: "آهنگ بی سرزمین تر از باد سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-bad.mp3" },
            { id: "khatereh", title: "آهنگ خاطره سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-khatereh.mp3" },
            { id: "darya", title: "آهنگ دریا مغرب سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-darya.mp3" },
            { id: "deltangi", title: "آهنگ دلتنگی سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-deltangi.mp3" },
            { id: "parvaz", title: "آهنگ پرواز سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-parvaz.mp3" },
            { id: "ghesseh", title: "آهنگ قصه گل و تگرگ سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-ghesseh.mp3" },
            { id: "khastegi", title: "آهنگ خستگی سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-khastegi.mp3" },
            { id: "ghrooub", title: "آهنگ غروب سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghrooub.mp3" },
            { id: "safar", title: "آهنگ سفر سیاوش قمیشی", img: "اختلاف.jpg", audio: "ghomayshi-safar.mp3" },
        ]
    },
    hosseintm: {
        name: "حسین تی ام",
        tracks: [
            { id: "keshavarza", title: "آهنگ کشاورزا حسین تی ام", img: "اختلاف.jpg", audio: "keshavarza.mp3" },
            { id: "nemibinamet", title: "آهنگ نمیبینمت حسین تی ام", img: "اختلاف.jpg", audio: "nemibinamet.mp3" },
            { id: "kareshomani", title: "آهنگ کار شما نی حسین تی ام", img: "اختلاف.jpg", audio: "kareshomani.mp3" },
            { id: "pistol", title: "آهنگ پیستول حسین تی ام", img: "اختلاف.jpg", audio: "pistol.mp3" },
            { id: "business", title: "آهنگ بیزینس حسین تی ام", img: "اختلاف.jpg", audio: "business.mp3" },
            { id: "jengir", title: "آهنگ جنگیر حسین تی ام", img: "اختلاف.jpg", audio: "jengir_tm.mp3" }
        ]
    },
    special: {
        name: "ویژه",
        tracks: [
            { id: "manam_kourosh", title: "آهنگ منم کوروش و پادشاه جهان به شاهی من شادمان مردمان از مصفا", img: "اختلاف.jpg", audio: "kourosh.mp3" },
            { id: "vaveyla", title: "آهنگ Vaveyla گاد پوری و شایع و خلوت", img: "اختلاف.jpg", audio: "vaveyla.mp3" }
        ]
    }
};

const urlParams = new URLSearchParams(window.location.search);
const path = window.location.pathname.toLowerCase();

// مدیریت رندر کردن صفحه خواننده‌ها (artists)
if (path.includes('artists')) {
    const artistId = urlParams.get('id');
    const artist = musicDatabase[artistId];
    const container = document.getElementById('tracks-container');
    
    if (artist && container) {
        document.getElementById('artist-title').textContent = `آهنگ‌های ${artist.name}`;
        container.innerHTML = ''; 
        
        if (artist.tracks && artist.tracks.length > 0) {
            artist.tracks.forEach(track => {
                container.innerHTML += `
                    <div class="music-card" style="margin-bottom: 20px;">
                        <img src="${track.img}" alt="${track.title}">
                        <a href="player.html?artist=${artistId}&track=${track.id}">${track.title}</a>
                    </div>
                `;
            });
        } else {
            container.innerHTML = `<p style="text-align:center; font-size: 20px; color: #f3a863; margin-top: 40px;">هنوز آهنگی برای این خواننده قرار داده نشده است.</p>`;
        }
        
        container.innerHTML += `
            <div style="text-align: center; margin: 30px 0; font-size: 18px; color: #f3a863; font-weight: bold; background-color: #333030; padding: 15px; border-radius: 8px; border: 1px dashed #a76997;">
                به زودی آهنگ های جدید اضافه میشه
            </div>
        `;
    } else if (container) {
        document.getElementById('artist-title').textContent = "خواننده یافت نشد";
    }
}

// مدیریت رندر کردن صفحه ریمیکس‌ها (remix)
if (path.includes('remix')) {
    const container = document.getElementById('tracks-container');
    const specialTracks = musicDatabase['special']; 
    
    if (specialTracks && container) {
        container.innerHTML = ''; 
        
        const vaveylaTrack = specialTracks.tracks.find(t => t.id === 'vaveyla');
        
        if (vaveylaTrack) {
            container.innerHTML += `
                <div class="music-card" style="margin-bottom: 20px;">
                    <img src="${vaveylaTrack.img}" alt="${vaveylaTrack.title}">
                    <a href="player.html?artist=special&track=${vaveylaTrack.id}">${vaveylaTrack.title}</a>
                </div>
            `;
        }
        
        container.innerHTML += `
            <div style="text-align: center; margin: 30px 0; font-size: 18px; color: #f3a863; font-weight: bold; background-color: #333030; padding: 15px; border-radius: 8px; border: 1px dashed #a76997;">
                به زودی ریمکس های خفن دیگه هم اضافه میشه
            </div>
        `;
    }
}

// مدیریت رندر کردن صفحه پخش تک‌آهنگ (player)
if (path.includes('player')) {
    const artistId = urlParams.get('artist');
    const trackId = urlParams.get('track');
    
    if (musicDatabase[artistId]) {
        const track = musicDatabase[artistId].tracks.find(t => t.id === trackId);
        
        if (track) {
            document.title = `${track.title} | اختلاف موزیک`;
            document.getElementById('player-title').textContent = track.title;
            document.getElementById('player-img').src = track.img;
            document.getElementById('player-img').alt = track.title;
            
            const audioPlayer = document.getElementById('player-audio');

            // آدرس ثابت سرور پرسرعت و نیم‌بهای نما هاب
            const onlineStorage = "https://dl.namahub.ir/api/download/kourosh505/";
            audioPlayer.src = onlineStorage + track.audio;
            
            const downloadBtn = document.getElementById('download-link');
            downloadBtn.href = onlineStorage + track.audio;
        }
    }
}