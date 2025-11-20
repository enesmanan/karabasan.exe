import random
import os
import sys

isim = ""
skor = 0
oncekifikra = 7
hata = 0


def get_random(max_val):
    return random.randint(0, max_val - 1)


def say(text):
    count = 0
    for c in text:
        if c != ' ':
            count += 1
    return count


def fikra():
    fikra_list = [
        "adamın biri soğuk çay istemiş...\nçaycı çayı getirmiş...\nadam da 'ISIT DA İÇELİM KARDEŞİM!' demiş!",
        "2 laz kuş avlamadaymış...\nbiri 'niye avlanamıyoz' diye dert yanmış...\nöbürü: 'BENCE KÖPEĞİ DAHA YUKARI ATMALIYIZ!",
        "bir grup laz yürüyen merdivenle çıkarken\nelektrikler kesilmiş...\n2 saat süreyle mahsur kalmışlar!!!",
        "30 yaşındaki bir Alman koskoca bir uçağı...\ntek eliyle kaldırmış..\nadam PİLOTMUŞ lan PİLOT!",
        "Temelle Dursun soygundadırlar...\nkaçarlarken polis arkalarından bağırır:\n'DUR KAÇMA OROSPU ÇOCUĞU!!'\nTemel Dursun'a dönerek:\n'Sen kaç! beni tanıdı!'"
    ]
    
    global oncekifikra
    while True:
        rr = get_random(6)
        if rr != oncekifikra:
            oncekifikra = rr
            break
    
    print(fikra_list[rr])


def gul():
    gulme = [
        "eki!eki!eki! köh!köh!köh! ayy nekadar neşeliyim!!",
        "neee? hahhahahahhahhhhayyyy!! kafadan kopardım gene!!   hehe!",
        "kah!keh!koh!küh! hahahahaha!!! hihihihi!! ve de hohoho!",
        "he he he he...",
        "hahahaha!! ay ben ölmiiim emi!"
    ]
    
    rr = get_random(5)
    print(gulme[rr], end='')


def gerizekali():
    r1 = get_random(2)
    if r1 == 1:
        print("\ngeri zekalı taklidi yap bakiim...\nTamam tamam bukadar yeter!!!")
        gul()


def sov():
    sovme = [
        "EEE! mına korum böyle oyunun!! yıkıl köpek!",
        "bana bak! seni adam yerine koyduk karşımıza aldık,.. tööbe tööbee",
        "OHA! OHA! kırsaydın klavyeyi!!",
        "doğru oyna orospu!",
        "GÖT!"
    ]
    
    r1 = get_random(2)
    r2 = get_random(2)
    r3 = get_random(2)
    r4 = get_random(2)
    r5 = get_random(2)
    
    if r1 == 1:
        print(sovme[0])
    if r2 == 1:
        print(sovme[1])
    if r3 == 1:
        print(sovme[2])
    if r4 == 1:
        print(sovme[3])
    if r5 == 1:
        print(sovme[4])


def sesliharf(harf):
    return harf in ['a', 'u', 'e', 'ı', 'ü', 'ö', 'i', 'o']


def asama10():
    print("\nşimdik sana bi fıkra daha:")
    fikra()
    print("Çıkmak için bir tuşa basın.")
    input()
    sys.exit(0)


def asama9():
    global hata, skor
    
    tahmin = get_random(100) + 1
    ustlimit = 100
    altlimit = 1
    hata = 0
    kacinci = 0
    
    print("şimdik sen bi sayı tut, ben bulmaya çalışiim. Ama dürüst ol.\ntahminimde yükselmen gerekirse 'y', düşmem gerekirse 'd' ile yanıt ver.\nsayıyı bulursam 'b' ile yanıt vermen yeterli.")
    
    while True:
        kacinci += 1
        print(f" {tahmin}  ??")
        inp = input("? ").strip()
        
        if not inp:
            continue
        
        inp = inp[0]
        
        if inp == 'y':
            if ustlimit - 1 == tahmin and altlimit + 1 == tahmin:
                sov()
                if hata > 5:
                    break
                else:
                    hata += 1
                    continue
            
            if ustlimit - 1 == tahmin:
                tahmin -= 1
                sov()
                if hata > 5:
                    break
                else:
                    hata += 1
                    continue
            else:
                altlimit = tahmin
                tahmin = get_random(ustlimit - altlimit - 1) + altlimit + 1
                continue
        
        elif inp == 'd':
            if ustlimit - 1 == tahmin and altlimit + 1 == tahmin:
                sov()
                if hata > 5:
                    break
                else:
                    hata += 1
                    continue
            
            if altlimit + 1 == tahmin:
                tahmin += 1
                sov()
                if hata > 5:
                    break
                else:
                    hata += 1
                    continue
            else:
                ustlimit = tahmin
                tahmin = get_random(ustlimit - altlimit - 1) + altlimit + 1
                continue
        
        elif inp == 'b':
            break
        else:
            continue
    
    print(f" {kacinci}  tahminde bildim...")
    if kacinci < skor:
        print("kodum! kodum! kodum! hehehehe!")
    elif kacinci > skor:
        print("lanet olsun! beni geçtin! %100 hile yapmışsındır!")
    else:
        print("hmm... eşitiz galiba...")
    
    asama10()


def asama8():
    global isim, skor
    
    tuttum = get_random(100) + 1
    cikimmi = 1
    simdikitahmin = 0
    tahmin = 0
    kackere = 0
    
    print(f"{isim},\n gel senlen oyun oynayak...\nben şimdik 1 ilen 100 arası bi sayı tutiim...\ntuttum.")
    
    while True:
        kackere += 1
        
        if tuttum == simdikitahmin:
            if kackere <= 3:
                print(f" {kackere}  tahminde nası bildin lan? walla brawo!!")
            elif kackere <= 5:
                print(f" {kackere} . denemede buldun!! tebrik etmek lazım şindi seni...")
            elif kackere <= 10:
                print(f" {kackere} tahminde buldun.. eh..")
            elif kackere <= 20:
                print(f"NİHAYET!!!  bişey  {kackere}  kere sorulmaz ki ama, dimi?!")
            elif kackere <= 30:
                print(f"bir an ümidimi kesmiştim! neytse ki  {kackere}  kerede buldun! aferin!")
            else:
                print(f" {kackere} \ntahminde bulundun...  sen,\n1- Türkçe bilmiyorsun...\n2- Klavye kullanmasını bilmiyorsun...\n3- ya da cinsel yönden bazısorunların var!!!\nE M B E S İ L !")
            
            skor = kackere
            asama9()
            break
        else:
            try:
                simdikitahmin = int(input("tahmin et bakalım..? "))
            except ValueError:
                continue
            
            if simdikitahmin == tahmin:
                print("aynı sayıyı ne giriyon idiot!")
                continue
            elif simdikitahmin > 100 or simdikitahmin < 1:
                print("Abartma! abartma!  1-100 arası dedik!")
                continue
            else:
                if cikimmi == 1 and tahmin > simdikitahmin:
                    tahmin = simdikitahmin
                    print("kendine gel yavrucum!")
                    if tahmin < tuttum:
                        print("yaklaştın, acık daa çık!")
                        continue
                
                if cikimmi == 0 and tahmin < simdikitahmin:
                    tahmin = simdikitahmin
                    print("naaptın sen çuçuum!!")
                    if tahmin < tuttum:
                        print("biraz daa düş!")
                        continue
                
                tahmin = simdikitahmin
                
                if tahmin < tuttum:
                    cikimmi = 1
                    if tahmin <= 21:
                        print("yok pire! çık azcık yaw!..")
                    else:
                        if tuttum - tahmin < 20:
                            print("yaklaştın, acık daa çık!")
                        else:
                            print("çık çık")
                    continue
                
                elif tahmin > tuttum:
                    cikimmi = 0
                    if tahmin >= 80:
                        print("çüşş!!  düşş!")
                    else:
                        if tahmin - tuttum < 20:
                            print("biraz daa düş!")
                        else:
                            print("aşşalara gel aşşalara")
                    continue
                else:
                    continue


def asama7():
    global isim
    
    print(f"memleket nere {isim}?")
    memleket = input("? ").strip()
    
    memleketuzunluk = len(memleket)
    son1karakter = memleket[memleketuzunluk - 1]
    son2karakter = memleket[memleketuzunluk - 2]
    son3karakter = memleket[memleketuzunluk - 3]
    
    if not sesliharf(son1karakter):
        if not sesliharf(son2karakter):
            karakter = son3karakter
        else:
            karakter = son2karakter
    else:
        karakter = son1karakter
    
    if karakter in ['u', 'o']:
        print(f"madem {memleket}lusun,\n buralara ne b*k yemeye geldin?! Ayrıca\n{memleket}dan\n   adam falan çıkmaz!")
    elif karakter in ['ü', 'ö']:
        print(f"heheheh!{memleket}den\n top çıkarmış diyolar!?!")
    elif karakter in ['a', 'ı']:
        print(f"naaaber pis\n{memleket}lı!")
    elif karakter in ['e', 'i']:
        print(f"nea!? {memleket}den\n      adam çıkmaz ki beah!!!  hihöhöhö!!")
    
    print()
    gul()
    print(f"\nneyse {isim},\n kusura bakma...")
    asama8()


def asama6():
    global isim
    
    print("bak sana şindi konuyla ilgili bir fıkra...\n")
    fikra()
    gul()
    
    atasozu = [
        "yani sakla samanı gelir zamanı.",
        "yani arkadaşlarımızı dikkatli seçmemiz lazım.",
        "buradan alınacak ders: Göte giren şemsiye açılmaz.."
    ]
    
    rr2 = get_random(3)
    print(f"\n{atasozu[rr2]}")
    gul()
    print()
    asama7()


def asama5():
    global isim
    
    r1 = get_random(2)
    r2 = get_random(2)
    r3 = get_random(2)
    r4 = get_random(2)
    r5 = get_random(2)
    r6 = get_random(2)
    r7 = get_random(2)
    
    if r1 == 1:
        print(f"{isim}!")
        print("sana gözlerinin çok güzel olduğunu söyleyen olmuşmuydu hiç")
        secim = input("(e/h)? ").strip()
        if secim and secim[0] == 'e':
            print("yalan söylemiş!")
            gul()
        else:
            print("doğrudur. çünkü gözlerin güzel diil!")
            gul()
    
    if r2 == 1:
        print(f"\nyavrum\n{isim}")
        print("ayda 50 milyon kazanmak istermisin?")
        secim2 = input("(e/h)? ").strip()
        if secim2 and secim2[0] == 'e':
            print("o zaman Ay'a gitmen lazım...")
            gul()
        else:
            print("iyi... zaten Ay'da sağlıklı çalışabileceğini sanmıyordum.")
            gul()
    
    if r3 == 1:
        print(f"\n{isim}")
        print("adı nerden geliyo?")
        secim3 = input("? ")
        print("üüüü! baya uzaktan geliyomuş!")
        gul()
    
    if r4 == 1:
        print(f"\n{isim}")
        print("bi sayı tut.\ntuttunmu (e/h)")
        secim4 = input("? ").strip()
        if secim4 and secim4[0] == 'e':
            print("şimdi de bırak!")
            gul()
        else:
            print("bi sayıyı tutamadın allah belanı versin")
            gul()
    
    if r5 == 1:
        if len(isim) > 1 and isim[1] in ['a', 'e', 'o', 'ö', 'ı', 'i', 'u', 'ü']:
            if len(isim) > 2:
                print(f"\n{isim}, sana kısaca {isim[0]}{isim[1]}{isim[2]}oş diyebilirmiyim??")
            else:
                print(f"\n{isim}, sana kısaca {isim[0]}{isim[1]}oş diyebilirmiyim??")
        else:
            if len(isim) > 1:
                print(f"\n{isim}, sana kısaca {isim[0]}{isim[1]}oş diyebilirmiyim??")
            else:
                print(f"\n{isim}, sana kısaca {isim[0]}oş diyebilirmiyim??")
        
        secim5 = input("(e/h)? ").strip()
        if secim5 and secim5[0] == 'e':
            print("iyi... ama ben demek istemiyorum!")
            gul()
        else:
            if len(isim) > 1 and isim[1] in ['a', 'e', 'o', 'ö', 'ı', 'i', 'u', 'ü']:
                if len(isim) > 2:
                    print(f"{isim[0]}{isim[1]}{isim[2]}oş! {isim[0]}{isim[1]}{isim[2]}oş! {isim[0]}{isim[1]}{isim[2]}oş!")
                else:
                    print(f"{isim[0]}{isim[1]}oş! {isim[0]}{isim[1]}oş! {isim[0]}{isim[1]}oş!")
            else:
                if len(isim) > 1:
                    print(f"{isim[0]}{isim[1]}oş! {isim[0]}{isim[1]}oş! {isim[0]}{isim[1]}oş!")
            gul()
    
    if r6 == 1:
        print(f"\nnasılsınız lan\n{isim}?")
        print("iyimisin ki (e/h)")
        secim6 = input("? ").strip()
        if secim6 and secim6[0] == 'e':
            rand6 = get_random(3)
            if rand6 == 0:
                print("niye iyisin? oturduğun yere bir bak bakiim...\njoysitick falan unutmuş olmasınlar?")
            elif rand6 == 1:
                print(f"iyi iyi... sen iyi olmaya devam et\n{isim}!\nuyu da büyü!")
            elif rand6 == 2:
                print(f"böyle bir hayatta nasıl iyi oluyorsunuz ki lan\n{isim}?\nbize de söyle yolunu biz de iyi olalım..")
        else:
            rand62 = get_random(3)
            if rand62 == 0:
                print("bana ne lan! geber!")
            elif rand62 == 1:
                print("iyi iyi allah kötülük versin! he he he !!")
            elif rand62 == 2:
                print(f"derdini anlat bana! açıl bana yavrucuum! utanma ben doktorum...\nKötü olmana sebep olan şey nedir\n{isim}")
                secim62 = input()
                print(f"{secim62}??\nhahahahahahahaha!!! git allasen yaw! dert  ettiğin şeye bak!")
            gul()
    
    if r7 == 1:
        print(f"\nneyse... {isim}")
        print("       öğrencimisin?")
        secim7 = input("? ").strip()
        if secim7 and secim7[0] == 'e':
            rand7 = get_random(2)
            if rand7 == 0:
                print("wah! wah! wah! çok üzüldüm.. ailenin haberi varmı? ha!haha!!hohoho!!!")
            elif rand7 == 1:
                print("nerde öğrencisin? okulda mı?? hihohohohhohohooo!!!\nespri konuşlandırdım!!")
            gul()
        else:
            rand72 = get_random(2)
            if rand72 == 0:
                print("ulan insan en azından askerden yırtmak için öğrenci olur! Ama sen, tıss!")
            elif rand72 == 1:
                print("hangi işle meşgulsun o vakit?")
                secim72 = input("? ")
                print("siktir lan göt! cümle alem senin ne mal olduğunu biliyor!.")
            gul()
    
    asama6()


def asama4():
    print("oldu olcak kilonu da söyle bari... çok umurumda ya...")
    
    try:
        kilo = int(input("? "))
    except ValueError:
        kilo = 70
    
    if kilo <= 39:
        print("Rüzgarlı havada dışarı falan çıkma hehehe!")
        gerizekali()
    elif kilo >= 40 and kilo <= 59:
        print("o kadar yemiş yersen ishal de olursun, kabız da!")
        gerizekali()
    elif kilo >= 60 and kilo <= 79:
        print("sen normalsin o yüzden dalga geçmiicem... noormaal! noormaal! hehehe!!")
        gerizekali()
    elif kilo >= 80 and kilo <= 99:
        degis = get_random(3)
        if degis == 0:
            print("Lütfen, oturduğun koltuk sağlam kalsın!")
        elif degis == 1:
            print("Maaşşallaaah! damızlıkmısın? hangi çiftlikte yetiştin? keh!keh!keh!!.")
        elif degis == 2:
            print("Duba! dikkat et benim üstüme düşme!")
        gerizekali()
    elif kilo >= 100:
        print("Anlamıştım... 2 saattir klavyenin anasını ağlattın")
        gerizekali()
    
    print()
    asama5()


def asama3():
    while True:
        print("boyun kaç cm senin?")
        try:
            boyu = int(input("? "))
        except ValueError:
            continue
        
        if boyu <= 99:
            print("Deden pigmelerin hangi kavminden lan?")
            break
        elif boyu >= 100 and boyu <= 149:
            print("Kısa boylu olman önemli diil, diyeceğimi sanıyorsan yanılıyorsun pis cüce!")
            break
        elif boyu >= 150 and boyu <= 169:
            print("Bacaklarına biraz gübre ektir. Faydası olur. kah!kih!koh!")
            break
        elif boyu >= 170 and boyu <= 189:
            print("iyi... bana ne... sorduk mu?!")
            break
        elif boyu >= 190 and boyu <= 209:
            print("Oha! fasülye sırığı!")
            break
        elif boyu >= 210:
            print("Yok deve!! kaç santim dedik, milim demedik!")
            continue
    
    print()
    asama4()


def asama2():
    while True:
        print("kaç yaşındasın?")
        try:
            yas = int(input("? "))
        except ValueError:
            continue
        
        if yas >= 99:
            print("Kafa bulma lan göt")
            continue
        
        if yas <= 4:
            print("çok küçükmüşsün be! sen git anan gelsin lan lavuk!")
        elif yas >= 5 and yas <= 9:
            print("sütünü içtin mi yavrum?")
            secim = input("(e/h)? ").strip()
            if secim and secim[0] == 'e':
                print("Beynine pek etkisi olmamış, git biraz da PEPSı iç!")
            else:
                print("bok iç o zaman!")
        elif yas >= 10 and yas <= 17:
            print("iyi iyi 18ine pek bişi kalmamış... Uyu da büyü!")
        elif yas >= 18 and yas <= 24:
            print("Oy kullancanmı genç?")
            secim = input("(e/h)? ").strip()
            if secim and secim[0] == 'e':
                print("ver de gör ebeninkini!")
            else:
                print("Ulan sen ne biçim Tee.Cee vatandaşısın? Hayvan!...")
        elif yas >= 25 and yas <= 39:
            print("vayy! naber morruk? Nerde eski programcılar dimi mirim?")
        elif yas >= 40 and yas <= 59:
            print("Yuh! bayağı yaşlısın... yaşlılar muhattabım diildir.. Git estetik yaptır gel...")
        elif yas >= 60 and yas <= 98:
            print("Ulan bunak! Klavyeyi nası görüyon? Geber de helvanı yiyelim. hehehe!")
        
        break
    
    print()
    asama3()


def asama1():
    global isim
    
    print("senin adın ne güzelim")
    isim = input("? ").strip()
    print()
    
    char_count = say(isim)
    
    if char_count <= 2:
        print(f"Uzak doğudan mısın yoksa başka bir gezegenden mi?\n {char_count}\n harfli ismini biraz zor telafuz ediyorum da...\n{isim[0] if len(isim) > 0 else ''}...\n{isim[0] if len(isim) > 0 else ''}h{isim}!!!\neee.. olmadı galiba... hehehehehee!")
    elif char_count >= 8:
        print("maaşşallaaaah!\nnüfus memuru ananı babanı pek sevmiyormuş galiba!!!")
        gul()
    
    print(f"{isim}...")
    asama2()


def asama0():
    print("PORTED BY XAVA\nmerhaba\nben karabasan...")
    asama1()


def main():
    random.seed(os.getpid())
    asama0()


if __name__ == "__main__":
    main()

