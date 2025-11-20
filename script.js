let isim = "";
let skor = 0;
let oncekifikra = 7;
let hata = 0;

let currentStage = null;
let waitingForInput = false;
let inputCallback = null;

const output = document.getElementById('output');
const input = document.getElementById('input');
const prompt = document.getElementById('prompt');

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function say(text) {
    let count = 0;
    for (let c of text) {
        if (c !== ' ') count++;
    }
    return count;
}

function print(text) {
    output.innerHTML += text;
    scrollToBottom();
}

function println(text = '') {
    output.innerHTML += text + '\n';
    scrollToBottom();
}

function scrollToBottom() {
    const terminal = document.querySelector('.terminal-content');
    terminal.scrollTop = terminal.scrollHeight;
}

async function getInput(promptText = '? ') {
    return new Promise((resolve) => {
        prompt.textContent = promptText;
        input.value = '';
        input.focus();
        waitingForInput = true;
        inputCallback = (value) => {
            println(promptText + value);
            resolve(value.trim());
        };
    });
}

function fikra() {
    const fikraList = [
        "adamın biri soğuk çay istemiş...\nçaycı çayı getirmiş...\nadam da 'ISIT DA İÇELİM KARDEŞİM!' demiş!",
        "2 laz kuş avlamadaymış...\nbiri 'niye avlanamıyoz' diye dert yanmış...\nöbürü: 'BENCE KÖPEĞİ DAHA YUKARI ATMALIYIZ!",
        "bir grup laz yürüyen merdivenle çıkarken\nelektrikler kesilmiş...\n2 saat süreyle mahsur kalmışlar!!!",
        "30 yaşındaki bir Alman koskoca bir uçağı...\ntek eliyle kaldırmış..\nadam PİLOTMUŞ lan PİLOT!",
        "Temelle Dursun soygundadırlar...\nkaçarlarken polis arkalarından bağırır:\n'DUR KAÇMA OROSPU ÇOCUĞU!!'\nTemel Dursun'a dönerek:\n'Sen kaç! beni tanıdı!'"
    ];
    
    let rr;
    do {
        rr = getRandom(6);
    } while (rr === oncekifikra);
    
    oncekifikra = rr;
    println(fikraList[rr]);
}

function gul() {
    const gulme = [
        "eki!eki!eki! köh!köh!köh! ayy nekadar neşeliyim!!",
        "neee? hahhahahahhahhhhayyyy!! kafadan kopardım gene!!   hehe!",
        "kah!keh!koh!küh! hahahahaha!!! hihihihi!! ve de hohoho!",
        "he he he he...",
        "hahahaha!! ay ben ölmiiim emi!"
    ];
    
    const rr = getRandom(5);
    print(gulme[rr]);
}

function gerizekali() {
    const r1 = getRandom(2);
    if (r1 === 1) {
        println("\ngeri zekalı taklidi yap bakiim...\nTamam tamam bukadar yeter!!!");
        gul();
    }
}

function sov() {
    const sovme = [
        "EEE! mına korum böyle oyunun!! yıkıl köpek!",
        "bana bak! seni adam yerine koyduk karşımıza aldık,.. tööbe tööbee",
        "OHA! OHA! kırsaydın klavyeyi!!",
        "doğru oyna orospu!",
        "GÖT!"
    ];
    
    const r1 = getRandom(2);
    const r2 = getRandom(2);
    const r3 = getRandom(2);
    const r4 = getRandom(2);
    const r5 = getRandom(2);
    
    if (r1 === 1) println(sovme[0]);
    if (r2 === 1) println(sovme[1]);
    if (r3 === 1) println(sovme[2]);
    if (r4 === 1) println(sovme[3]);
    if (r5 === 1) println(sovme[4]);
}

function sesliharf(harf) {
    return ['a', 'u', 'e', 'ı', 'ü', 'ö', 'i', 'o'].includes(harf);
}

async function asama10() {
    println("\nşimdik sana bi fıkra daha:");
    fikra();
    println("Çıkmak için bir tuşa basın.");
    await getInput('');
    location.reload();
}

async function asama9() {
    let tahmin = getRandom(100) + 1;
    let ustlimit = 100;
    let altlimit = 1;
    hata = 0;
    let kacinci = 0;
    
    println("şimdik sen bi sayı tut, ben bulmaya çalışiim. Ama dürüst ol.\ntahminimde yükselmen gerekirse 'y', düşmem gerekirse 'd' ile yanıt ver.\nsayıyı bulursam 'b' ile yanıt vermen yeterli.");
    
    while (true) {
        kacinci++;
        println(` ${tahmin}  ??`);
        const inp = (await getInput('? '))[0];
        
        if (!inp) continue;
        
        if (inp === 'y') {
            if (ustlimit - 1 === tahmin && altlimit + 1 === tahmin) {
                sov();
                if (hata > 5) break;
                else {
                    hata++;
                    continue;
                }
            }
            
            if (ustlimit - 1 === tahmin) {
                tahmin--;
                sov();
                if (hata > 5) break;
                else {
                    hata++;
                    continue;
                }
            } else {
                altlimit = tahmin;
                tahmin = getRandom(ustlimit - altlimit - 1) + altlimit + 1;
                continue;
            }
        } else if (inp === 'd') {
            if (ustlimit - 1 === tahmin && altlimit + 1 === tahmin) {
                sov();
                if (hata > 5) break;
                else {
                    hata++;
                    continue;
                }
            }
            
            if (altlimit + 1 === tahmin) {
                tahmin++;
                sov();
                if (hata > 5) break;
                else {
                    hata++;
                    continue;
                }
            } else {
                ustlimit = tahmin;
                tahmin = getRandom(ustlimit - altlimit - 1) + altlimit + 1;
                continue;
            }
        } else if (inp === 'b') {
            break;
        } else {
            continue;
        }
    }
    
    println(` ${kacinci}  tahminde bildim...`);
    if (kacinci < skor) {
        println("kodum! kodum! kodum! hehehehe!");
    } else if (kacinci > skor) {
        println("lanet olsun! beni geçtin! %100 hile yapmışsındır!");
    } else {
        println("hmm... eşitiz galiba...");
    }
    
    await asama10();
}

async function asama8() {
    const tuttum = getRandom(100) + 1;
    let cikimmi = 1;
    let simdikitahmin = 0;
    let tahmin = 0;
    let kackere = 0;
    
    println(`${isim},\n gel senlen oyun oynayak...\nben şimdik 1 ilen 100 arası bi sayı tutiim...\ntuttum.`);
    
    while (true) {
        kackere++;
        
        if (tuttum === simdikitahmin) {
            if (kackere <= 3) {
                println(` ${kackere}  tahminde nası bildin lan? walla brawo!!`);
            } else if (kackere <= 5) {
                println(` ${kackere} . denemede buldun!! tebrik etmek lazım şindi seni...`);
            } else if (kackere <= 10) {
                println(` ${kackere} tahminde buldun.. eh..`);
            } else if (kackere <= 20) {
                println(`NİHAYET!!!  bişey  ${kackere}  kere sorulmaz ki ama, dimi?!`);
            } else if (kackere <= 30) {
                println(`bir an ümidimi kesmiştim! neytse ki  ${kackere}  kerede buldun! aferin!`);
            } else {
                println(` ${kackere} \ntahminde bulundun...  sen,\n1- Türkçe bilmiyorsun...\n2- Klavye kullanmasını bilmiyorsun...\n3- ya da cinsel yönden bazısorunların var!!!\nE M B E S İ L !`);
            }
            
            skor = kackere;
            await asama9();
            break;
        } else {
            const inp = await getInput("tahmin et bakalım..? ");
            simdikitahmin = parseInt(inp);
            
            if (isNaN(simdikitahmin)) continue;
            
            if (simdikitahmin === tahmin) {
                println("aynı sayıyı ne giriyon idiot!");
                continue;
            } else if (simdikitahmin > 100 || simdikitahmin < 1) {
                println("Abartma! abartma!  1-100 arası dedik!");
                continue;
            } else {
                if (cikimmi === 1 && tahmin > simdikitahmin) {
                    tahmin = simdikitahmin;
                    println("kendine gel yavrucum!");
                    if (tahmin < tuttum) {
                        println("yaklaştın, acık daa çık!");
                        continue;
                    }
                }
                
                if (cikimmi === 0 && tahmin < simdikitahmin) {
                    tahmin = simdikitahmin;
                    println("naaptın sen çuçuum!!");
                    if (tahmin < tuttum) {
                        println("biraz daa düş!");
                        continue;
                    }
                }
                
                tahmin = simdikitahmin;
                
                if (tahmin < tuttum) {
                    cikimmi = 1;
                    if (tahmin <= 21) {
                        println("yok pire! çık azcık yaw!..");
                    } else {
                        if (tuttum - tahmin < 20) {
                            println("yaklaştın, acık daa çık!");
                        } else {
                            println("çık çık");
                        }
                    }
                    continue;
                } else if (tahmin > tuttum) {
                    cikimmi = 0;
                    if (tahmin >= 80) {
                        println("çüşş!!  düşş!");
                    } else {
                        if (tahmin - tuttum < 20) {
                            println("biraz daa düş!");
                        } else {
                            println("aşşalara gel aşşalara");
                        }
                    }
                    continue;
                } else {
                    continue;
                }
            }
        }
    }
}

async function asama7() {
    println(`memleket nere ${isim}?`);
    const memleket = await getInput('? ');
    
    const memleketuzunluk = memleket.length;
    const son1karakter = memleket[memleketuzunluk - 1];
    const son2karakter = memleket[memleketuzunluk - 2];
    const son3karakter = memleket[memleketuzunluk - 3];
    
    let karakter;
    
    if (!sesliharf(son1karakter)) {
        if (!sesliharf(son2karakter)) {
            karakter = son3karakter;
        } else {
            karakter = son2karakter;
        }
    } else {
        karakter = son1karakter;
    }
    
    if (karakter === 'u' || karakter === 'o') {
        println(`madem ${memleket}lusun,\n buralara ne b*k yemeye geldin?! Ayrıca\n${memleket}dan\n   adam falan çıkmaz!`);
    } else if (karakter === 'ü' || karakter === 'ö') {
        println(`heheheh!${memleket}den\n top çıkarmış diyolar!?!`);
    } else if (karakter === 'a' || karakter === 'ı') {
        println(`naaaber pis\n${memleket}lı!`);
    } else if (karakter === 'e' || karakter === 'i') {
        println(`nea!? ${memleket}den\n      adam çıkmaz ki beah!!!  hihöhöhö!!`);
    }
    
    println();
    gul();
    println(`\nneyse ${isim},\n kusura bakma...`);
    await asama8();
}

async function asama6() {
    println("bak sana şindi konuyla ilgili bir fıkra...\n");
    fikra();
    gul();
    
    const atasozu = [
        "yani sakla samanı gelir zamanı.",
        "yani arkadaşlarımızı dikkatli seçmemiz lazım.",
        "buradan alınacak ders: Göte giren şemsiye açılmaz.."
    ];
    
    const rr2 = getRandom(3);
    println(`\n${atasozu[rr2]}`);
    gul();
    println();
    await asama7();
}

async function asama5() {
    const r1 = getRandom(2);
    const r2 = getRandom(2);
    const r3 = getRandom(2);
    const r4 = getRandom(2);
    const r5 = getRandom(2);
    const r6 = getRandom(2);
    const r7 = getRandom(2);
    
    if (r1 === 1) {
        println(`${isim}!`);
        println("sana gözlerinin çok güzel olduğunu söyleyen olmuşmuydu hiç");
        const secim = (await getInput("(e/h)? "))[0];
        if (secim === 'e') {
            println("yalan söylemiş!");
            gul();
        } else {
            println("doğrudur. çünkü gözlerin güzel diil!");
            gul();
        }
    }
    
    if (r2 === 1) {
        println(`\nyavrum\n${isim}`);
        println("ayda 50 milyon kazanmak istermisin?");
        const secim2 = (await getInput("(e/h)? "))[0];
        if (secim2 === 'e') {
            println("o zaman Ay'a gitmen lazım...");
            gul();
        } else {
            println("iyi... zaten Ay'da sağlıklı çalışabileceğini sanmıyordum.");
            gul();
        }
    }
    
    if (r3 === 1) {
        println(`\n${isim}`);
        println("adı nerden geliyo?");
        await getInput("? ");
        println("üüüü! baya uzaktan geliyomuş!");
        gul();
    }
    
    if (r4 === 1) {
        println(`\n${isim}`);
        println("bi sayı tut.\ntuttunmu (e/h)");
        const secim4 = (await getInput("? "))[0];
        if (secim4 === 'e') {
            println("şimdi de bırak!");
            gul();
        } else {
            println("bi sayıyı tutamadın allah belanı versin");
            gul();
        }
    }
    
    if (r5 === 1) {
        if (isim.length > 1 && ['a', 'e', 'o', 'ö', 'ı', 'i', 'u', 'ü'].includes(isim[1])) {
            if (isim.length > 2) {
                println(`\n${isim}, sana kısaca ${isim[0]}${isim[1]}${isim[2]}oş diyebilirmiyim??`);
            } else {
                println(`\n${isim}, sana kısaca ${isim[0]}${isim[1]}oş diyebilirmiyim??`);
            }
        } else {
            if (isim.length > 1) {
                println(`\n${isim}, sana kısaca ${isim[0]}${isim[1]}oş diyebilirmiyim??`);
            } else {
                println(`\n${isim}, sana kısaca ${isim[0]}oş diyebilirmiyim??`);
            }
        }
        
        const secim5 = (await getInput("(e/h)? "))[0];
        if (secim5 === 'e') {
            println("iyi... ama ben demek istemiyorum!");
            gul();
        } else {
            if (isim.length > 1 && ['a', 'e', 'o', 'ö', 'ı', 'i', 'u', 'ü'].includes(isim[1])) {
                if (isim.length > 2) {
                    println(`${isim[0]}${isim[1]}${isim[2]}oş! ${isim[0]}${isim[1]}${isim[2]}oş! ${isim[0]}${isim[1]}${isim[2]}oş!`);
                } else {
                    println(`${isim[0]}${isim[1]}oş! ${isim[0]}${isim[1]}oş! ${isim[0]}${isim[1]}oş!`);
                }
            } else {
                if (isim.length > 1) {
                    println(`${isim[0]}${isim[1]}oş! ${isim[0]}${isim[1]}oş! ${isim[0]}${isim[1]}oş!`);
                }
            }
            gul();
        }
    }
    
    if (r6 === 1) {
        println(`\nnasılsınız lan\n${isim}?`);
        println("iyimisin ki (e/h)");
        const secim6 = (await getInput("? "))[0];
        if (secim6 === 'e') {
            const rand6 = getRandom(3);
            if (rand6 === 0) {
                println("niye iyisin? oturduğun yere bir bak bakiim...\njoysitick falan unutmuş olmasınlar?");
            } else if (rand6 === 1) {
                println(`iyi iyi... sen iyi olmaya devam et\n${isim}!\nuyu da büyü!`);
            } else if (rand6 === 2) {
                println(`böyle bir hayatta nasıl iyi oluyorsunuz ki lan\n${isim}?\nbize de söyle yolunu biz de iyi olalım..`);
            }
        } else {
            const rand62 = getRandom(3);
            if (rand62 === 0) {
                println("bana ne lan! geber!");
            } else if (rand62 === 1) {
                println("iyi iyi allah kötülük versin! he he he !!");
            } else if (rand62 === 2) {
                println(`derdini anlat bana! açıl bana yavrucuum! utanma ben doktorum...\nKötü olmana sebep olan şey nedir\n${isim}`);
                const secim62 = await getInput();
                println(`${secim62}??\nhahahahahahahaha!!! git allasen yaw! dert  ettiğin şeye bak!`);
            }
            gul();
        }
    }
    
    if (r7 === 1) {
        println(`\nneyse... ${isim}`);
        println("       öğrencimisin?");
        const secim7 = (await getInput("? "))[0];
        if (secim7 === 'e') {
            const rand7 = getRandom(2);
            if (rand7 === 0) {
                println("wah! wah! wah! çok üzüldüm.. ailenin haberi varmı? ha!haha!!hohoho!!!");
            } else if (rand7 === 1) {
                println("nerde öğrencisin? okulda mı?? hihohohohhohohooo!!!\nespri konuşlandırdım!!");
            }
            gul();
        } else {
            const rand72 = getRandom(2);
            if (rand72 === 0) {
                println("ulan insan en azından askerden yırtmak için öğrenci olur! Ama sen, tıss!");
            } else if (rand72 === 1) {
                println("hangi işle meşgulsun o vakit?");
                await getInput("? ");
                println("siktir lan göt! cümle alem senin ne mal olduğunu biliyor!.");
            }
            gul();
        }
    }
    
    await asama6();
}

async function asama4() {
    println("oldu olcak kilonu da söyle bari... çok umurumda ya...");
    const kiloStr = await getInput("? ");
    const kilo = parseInt(kiloStr);
    
    if (isNaN(kilo)) {
        await asama4();
        return;
    }
    
    if (kilo <= 39) {
        println("Rüzgarlı havada dışarı falan çıkma hehehe!");
        gerizekali();
    } else if (kilo >= 40 && kilo <= 59) {
        println("o kadar yemiş yersen ishal de olursun, kabız da!");
        gerizekali();
    } else if (kilo >= 60 && kilo <= 79) {
        println("sen normalsin o yüzden dalga geçmiicem... noormaal! noormaal! hehehe!!");
        gerizekali();
    } else if (kilo >= 80 && kilo <= 99) {
        const degis = getRandom(3);
        if (degis === 0) {
            println("Lütfen, oturduğun koltuk sağlam kalsın!");
        } else if (degis === 1) {
            println("Maaşşallaaah! damızlıkmısın? hangi çiftlikte yetiştin? keh!keh!keh!!.");
        } else if (degis === 2) {
            println("Duba! dikkat et benim üstüme düşme!");
        }
        gerizekali();
    } else if (kilo >= 100) {
        println("Anlamıştım... 2 saattir klavyenin anasını ağlattın");
        gerizekali();
    }
    
    println();
    await asama5();
}

async function asama3() {
    while (true) {
        println("boyun kaç cm senin?");
        const boyuStr = await getInput("? ");
        const boyu = parseInt(boyuStr);
        
        if (isNaN(boyu)) continue;
        
        if (boyu <= 99) {
            println("Deden pigmelerin hangi kavminden lan?");
            break;
        } else if (boyu >= 100 && boyu <= 149) {
            println("Kısa boylu olman önemli diil, diyeceğimi sanıyorsan yanılıyorsun pis cüce!");
            break;
        } else if (boyu >= 150 && boyu <= 169) {
            println("Bacaklarına biraz gübre ektir. Faydası olur. kah!kih!koh!");
            break;
        } else if (boyu >= 170 && boyu <= 189) {
            println("iyi... bana ne... sorduk mu?!");
            break;
        } else if (boyu >= 190 && boyu <= 209) {
            println("Oha! fasülye sırığı!");
            break;
        } else if (boyu >= 210) {
            println("Yok deve!! kaç santim dedik, milim demedik!");
            continue;
        }
    }
    
    println();
    await asama4();
}

async function asama2() {
    while (true) {
        println("kaç yaşındasın?");
        const yasStr = await getInput("? ");
        const yas = parseInt(yasStr);
        
        if (isNaN(yas)) continue;
        
        if (yas >= 99) {
            println("Kafa bulma lan göt");
            continue;
        }
        
        if (yas <= 4) {
            println("çok küçükmüşsün be! sen git anan gelsin lan lavuk!");
        } else if (yas >= 5 && yas <= 9) {
            println("sütünü içtin mi yavrum?");
            const secim = (await getInput("(e/h)? "))[0];
            if (secim === 'e') {
                println("Beynine pek etkisi olmamış, git biraz da PEPSı iç!");
            } else {
                println("bok iç o zaman!");
            }
        } else if (yas >= 10 && yas <= 17) {
            println("iyi iyi 18ine pek bişi kalmamış... Uyu da büyü!");
        } else if (yas >= 18 && yas <= 24) {
            println("Oy kullancanmı genç?");
            const secim = (await getInput("(e/h)? "))[0];
            if (secim === 'e') {
                println("ver de gör ebeninkini!");
            } else {
                println("Ulan sen ne biçim Tee.Cee vatandaşısın? Hayvan!...");
            }
        } else if (yas >= 25 && yas <= 39) {
            println("vayy! naber morruk? Nerde eski programcılar dimi mirim?");
        } else if (yas >= 40 && yas <= 59) {
            println("Yuh! bayağı yaşlısın... yaşlılar muhattabım diildir.. Git estetik yaptır gel...");
        } else if (yas >= 60 && yas <= 98) {
            println("Ulan bunak! Klavyeyi nası görüyon? Geber de helvanı yiyelim. hehehe!");
        }
        
        break;
    }
    
    println();
    await asama3();
}

async function asama1() {
    println("senin adın ne güzelim");
    isim = await getInput("? ");
    println();
    
    const charCount = say(isim);
    
    if (charCount <= 2) {
        println(`Uzak doğudan mısın yoksa başka bir gezegenden mi?\n ${charCount}\n harfli ismini biraz zor telafuz ediyorum da...\n${isim[0] || ''}...\n${isim[0] || ''}h${isim}!!!\neee.. olmadı galiba... hehehehehee!`);
    } else if (charCount >= 8) {
        println("maaşşallaaaah!\nnüfus memuru ananı babanı pek sevmiyormuş galiba!!!");
        gul();
    }
    
    println(`${isim}...`);
    await asama2();
}

async function asama0() {
    println("PORTED BY XAVA\nmerhaba\nben karabasan...");
    await asama1();
}

input.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter' && waitingForInput && inputCallback) {
        e.preventDefault();
        const value = input.value;
        waitingForInput = false;
        const callback = inputCallback;
        inputCallback = null;
        callback(value);
    }
});

window.addEventListener('load', async () => {
    await asama0();
});

