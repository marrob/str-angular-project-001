import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    list: Product[] = [
        { id: 0, name: "Ulrich Tietze -Christoph Schenk", description: "Cím: Analóg és digitális áramkörök, Év: 1981, Kiadó: Műszaki Könyvkiadó", catId: 0, image: "assets/img/termeszettudomany-villamosmernok/ulrichtieztechristophschenk-analogesdigitalisaramkorok.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 1, name: "Bálint Ágnes", description: "Cím: Szeleburdi család, Év: 1968, Kiadó: Móra", catId:1 , image: "assets/img/gyerek/balintagnes-szeleburdicsalad.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 2, name: "Benedek Elek", description: "Cím: Összes meséi III-IV., Év: 2007, Kiadó: Szukits Kiadó", catId: 1, image: "assets/img/gyerek/benedekelek-osszesmesei.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 3, name: "Fekete István", description: "Cím: Vuk, Év: 2009, Kiadó: Móra", catId: 1, image: "assets/img/gyerek/fekete-istvan-vuk.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 4, name: "Lázár Ervin", description: "Cím: A kisfiú meg az oroszlánok, Év: 1999, Kiadó: Osiris Kiadó", catId: 1, image: "assets/img/gyerek/lazarervin-akisfiumegazoroszlanok.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 5, name: "Móra Ferenc", description: "Cím: Sétálni megy Panka, Év: 2013, Kiadó: Móra", catId: 1, image: "assets/img/gyerek/moraferenc-setalnimegypanka.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 6, name: "Iványi Antal", description: "Cím: Informatikai algoritmusok I., Év: 2004, Kiadó: ELTE Eötvös Kiadó", catId: 2, image: "assets/img/informatika/informatikaialgoritmusokI.jpg", price: 10, stock: 5, featured: true, active: true },
        { id: 7, name: "Iványi Antal", description: "Cím: Informatikai algoritmusok II., Év: 2004, Kiadó: ELTE Eötvös Kiadó", catId: 2, image: "assets/img/informatika/informatikaialgoritmusokII.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 8, name: "Jakab Zsolt", description: "Cím: Készíts te is játékprogramot!, Év: 2018, Kiadó: Saxum", catId: 2, image: "assets/img/informatika/jakabzsolt-keszitsteisjatekprogramot.jpg", price: 10, stock: 5, featured: true, active: true },
        { id: 9, name: "Jon Luis Bentley", description: "Cím: A programozás gyöngyszemei, Év: 1988, Kiadó: Műszaki Könyvkiadó", catId: 2, image: "assets/img/informatika/jonlouisbentley-aprogramozasgyongyszemei.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 10, name: "Móricz Attila", description: "Cím: Programozási alapfeladatok, Év: 2004, Kiadó: Computerbooks", catId: 2, image: "assets/img/informatika/moriczattila-programozasialapfeladatok.jpg", price: 10, stock: 5, featured: true, active: true },
        { id: 11, name: "Bércziné dr. Juhos Júlia", description: "Cím: Marketing a kereskedelemben, Év: 2005, Kiadó: Kereskedelmi és idegenforgalmi továbbképző kft.", catId: 3, image: "assets/img/kereskedelemmarketing/berczinejuhosjulia-marketingakereskedelemben.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 12, name: "David Jobber", description: "Cím: Európai marketing, Év: 2002, Kiadó: Akadémiai Kiadó Zrt", catId: 3, image: "assets/img/kereskedelemmarketing/davidjobber-eurőpaimarketing.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 13, name: "Gondi-Ivánkai", description: "Cím: Marketing kezdőknek és haladoknak, Év: 1995, Kiadó: Budapest", catId: 3, image: "assets/img/kereskedelemmarketing/gondi-ivankai-marketingkezdoknekeshaladoknak.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 14, name: "Törőcsik Mária", description: "Cím: Kereskedelmi marketing, Év: 1998, Kiadó: Közgazdasági és jogi könyvkiadó", catId: 3, image: "assets/img/kereskedelemmarketing/töröcsikmaria-kereskedelmimarketing.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 15, name: "Veres Zoltán", description: "Cím: A marketing alapjai, Év: 2007, Kiadó: Perfekt Zrt.", catId: 3, image: "assets/img/kereskedelemmarketing/vereszoltan-amarketingalapjai.jpg", price: 10, stock: 5, featured: true, active: true },
        { id: 16, name: "Michael Cole- Sheila R.Cole", description: "Cím: Fejlődéslélektan, Év: 2006, Kiadó: Osiris Kiadó", catId: 4, image: "assets/img/pedagogiapszichologia/cole-cole-fejlodeslelektan.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 17, name: "Dr. Czeizel Endre", description: "Cím: Sors és tehetség, Év: 2004, Kiadó: Urbis Könyvkiadó", catId: 4, image: "assets/img/pedagogiapszichologia/drczeizelendre-sorsestehetseg.jpg", price: 10, stock: 5, featured: true, active: true },
        { id: 18, name: "Hidas György-Raffai Jenő-Vollner Judit", description: "Cím: Lelki köldökzsinór, Év: 2005, Kiadó: Helikon Kiadó", catId: 4, image: "assets/img/pedagogiapszichologia/drtothlaszlo-pszichologiaatanitasban.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 19, name: "Dr.Tóth László", description: "Cím: Pszichológia a tanításban, Év: 2013, Kiadó: Pedellus Tankönyvkiadó", catId: 4, image: "assets/img/pedagogiapszichologia/drtothlaszlo-.jpg", price: 10, stock: 5, featured: true, active: true },
        { id: 20, name: "Philip Zimbardo", description: "Cím: Pszichológia mindenkinek, Év: 2018, Kiadó: Libri Kiadó", catId: 4, image: "assets/img/pedagogiapszichologia/philipzimbardo-pszichológiamindenkinek (2).jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 21, name: "Benke József", description: "Cím: Az orvostudomány története, Év: 2009, Kiadó: Medicina Könyvkiadó", catId: 5, image: "assets/img/orvostudomany/benkejozsef-azorvostudomanytortenete.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 22, name: "Vizi E. Szilveszter", description: "Cím: Orvostudomány , Év: 2001, Kiadó: Magyar Tudományos Akadémia", catId: 5, image: "assets/img/orvostudomany/vizieszilveszter-orvostudomany.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 23, name: "Mihály András", description: "Cím: Anatómia, Év: 2003, Kiadó: APC Stúdió", catId: 5, image: "assets/img/orvostudomany/mihalyandras-anatomia.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 24, name: "Kálmán Mihály-Kovács Ákos", description: "Cím: Az elsődleges gyermekorvoslás gyakorlata, Év: 2018, Kiadó: Házi Gyermekorvosok Egyesülete", catId: 5, image: "assets/img/orvostudomany/kalmanmihaly-azelsodlegesgyermekorvoslásgyakorlata.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 25, name: "Tulassay Tivadar", description: "Cím: Gyermekorvosi differenciáldiagnosztika , Év: 2020, Kiadó: Medicina Könyvkiadó", catId: 5, image: "assets/img/orvostudomany/tulassaytivadar-gyermekorvosidifferencialdiagnosztika.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 26, name: "Csapodi Csaba-Csapodiné Gárdonyi Klára ", description: "Cím: Bibliotheca Corviniana, Év: 1967, Kiadó: Magyar Helikon", catId: 6, image: "assets/img/muveszet/csapodicsaba-bibliothecacorviniana.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 27, name: "Jeannine Auboyer", description: "Cím: A korai reneszánsz, Év: 1991, Kiadó: Corvina Kiadó", catId: 6, image: "assets/img/muveszet/jeannineauboyer-akoraireneszansz.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 28, name: "Baji Etelka-Csorba László", description: "Cím: Kastélyok és mágnások, Év: 2006, Kiadó: Medicina Könyvkiadó", catId: 6, image: "assets/img/muveszet/bajietelkacsorbalaszlo-kastelyokesmagnasok.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 29, name: "Christoph Heinrich", description: "Cím: Monet, Év: 2010, Kiadó: Taschen-Vince Kiadó", catId: 6, image: "assets/img/muveszet/christophheinric-monet.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 30, name: "Bartók Béla-Kodály Zoltán", description: "Cím: Népdalok, Év: 1987, Kiadó: Állami Könyvterjesztő Vállalat", catId: 6, image: "assets/img/muveszet/bartokkodaly-nepdalok.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 31, name: "Arthur C. Clarke", description: "Cím: 2001 / Űrodisszeia, Év: 1994, Kiadó: Szukits Könyvkiadó", catId: 7, image: "assets/img/scifi/arthurcclarke-2001urodisszeia.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 32, name: "Alan Dean Foster", description: "Cím: A nyolcadik utas: a Halál, Év: 2015, Kiadó: Agave Könyvek", catId: 7, image: "assets/img/scifi/alandelainfoster-aliennyolcadikutasahalal.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 33, name: "Alan Dean Foster", description: "Cím: Az ébredő Erő, Év: 2016, Kiadó: Szukits Könyvkiadó", catId: 7, image: "assets/img/scifi/alandelainfoster-azebredoero.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 34, name: "Lawrence M. Krauss", description: "Cím: A Star Trek fizikája, Év: 2008, Kiadó: Cartaphilus Kiadó", catId: 7, image: "assets/img/scifi/lawrencemkrauss-astartrekfizikaja.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 35, name: "Brian Herbert-Kevin J. Anderson", description: "Cím: A Dűne homokférgei, Év: 2008, Kiadó: Szukits Könyvkiadó", catId: 7, image: "assets/img/scifi/brianherbertkevinjanderson-adunehomokfergei.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 36, name: "Jane Austen", description: "Cím: Büszkeség és balítélet, Év: 2007, Kiadó: Ulpius-ház Könyvkiadó", catId: 8, image: "assets/img/szepirodalom-regeny/janeausten-buszkesegesbalitelet.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 37, name: "Henryk Sienkiewicz", description: "Cím:  Quo vadis, Év: 2011, Kiadó: Fapadoskönyv Kiadó", catId: 8, image: "assets/img/szepirodalom-regeny/henryksienkiewicz-quovadis.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 38, name: "Philippe Pozzo di Borgo", description: "Cím: Életrevalók, Év: 2012, Kiadó: Sanoma", catId: 8, image: "assets/img/szepirodalom-regeny/philippepozzodiborgo-eletrevalok.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 39, name: "N. H. Kleinbaum", description: "Cím: Holt Költők Társasága , Év: 2005, Kiadó: Lazi Kiadó", catId: 8, image: "assets/img/szepirodalom-regeny/nhkleinbaum-holtkoltoktarsasaga.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 40, name: "Wass Albert ", description: "Cím: Elvész a nyom, Év: 2000, Kiadó: Kráter Kiadó", catId: 8, image: "assets/img/szepirodalom-regeny/wassalbert-elveszanyom.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 41, name: "Arany János", description: "Cím: Összes költeményei, Év: 1983, Kiadó: Helikon Kiadó", catId: 9, image: "assets/img/szepirodalom-vers/aranyjanos-osszeskoltemenyei.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 42, name: "Babits Mihály", description: "Cím: Összegyűjtött versei, Év: 1974, Kiadó: Szépirodalmi Könyvkiadó", catId: 9, image: "assets/img/szepirodalom-vers/babitsmihaly-osszesgyujtottversei.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 43, name: "József Attila", description: "Cím: József Attila összes versei, Év: 1992, Kiadó: Századvég Kiadó", catId: 9, image: "assets/img/szepirodalom-vers/jozsefattila-osszesversei.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 44, name: "Radnóti Miklós", description: "Cím: Radnóti Miklós összes versei és műfordításai, Év: 1974, Kiadó: Szépirodalmi Könyvkiadó", catId: 9, image: "assets/img/szepirodalom-vers/radnotimiklos-osszesverseiesmuforditasai.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 45, name: "Petőfi Sándor", description: "Cím: Válogatott versek, Év: 1991, Kiadó: Európa Könyvkiadó", catId: 9, image: "assets/img/szepirodalom-vers/petofisandor-valogatottversek.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 46, name: "Dr. Pattantyús Á. Géza", description: "Cím: Gépész- és villamosmérnökök kézikönyve 1, Év: 1971, Kiadó: Műszaki Könyvkiadó", catId: 0, image: "assets/img/termeszettudomany-villamosmernok/drpattantyúsgeza-gepeszesvillamosmernokokkezikonyve.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 47, name: "Bilicz Sándor", description: "Cím: A matematika villamosmérnöki alkalmazásairól példákon keresztül, Év: 2016, Kiadó: Typotex Kiadó", catId: 0, image: "assets/img/termeszettudomany-villamosmernok/biliczsandor-amatematikavillamosmernokialkalmazasairolpeldakonkeresztul.jpg", price: 10, stock: 5, featured: false, active: true },
        { id: 48, name: "dr.Csáki Frigyes-Bars Ruth", description: "Cím: Automatika, Év: 1969, Kiadó: Tankönyvkiadó", catId: 10, image: "assets/img/termeszettudomany-villamosmernok/drcsakifrigyesbarruth-automatika.jpg", price: 0, stock: 5, featured: false, active: true },
        { id: 49, name: "Simonyi Károly", description: "Cím: Villamosságtan, Év: 1964, Kiadó: Akadémiai Kiadó", catId: 10, image: "assets/img/termeszettudomany-villamosmernok/simonyikaroly-villamossagtan.jpg", price: 0, stock: 5, featured: false, active: true },


    ];
    /*
      constructor(data:{}[]) {
        let list = [];
        for (let index = 0; index < data.length; index++) {
          let properties = data[index];
          let product = new Product(properties);
          list[index] = product;
        }
        return(list);
      }*/
}

/* let data= [{"id":213,"catId":526,"name":"Four Eyed Monsters","description":"unleash turn-key communities","image":"Potenti.tiff","price":3723,"stock":65,"featured":true,"active":false},
{"id":206,"catId":496,"name":"Wholly Moses","description":"innovate bleeding-edge infrastructures","image":"Nec.gif","price":191,"stock":2,"featured":false,"active":false},
{"id":141,"catId":841,"name":"Beware the Moon: Remembering 'An American Werewolf in London'","description":"synergize web-enabled infomediaries","image":"PedeMalesuada.tiff","price":8671,"stock":27,"featured":false,"active":true},
{"id":175,"catId":776,"name":"Thing with Two Heads, The","description":"reintermediate proactive paradigms","image":"Amet.tiff","price":5901,"stock":2,"featured":false,"active":true},
{"id":875,"catId":513,"name":"Family Life","description":"recontextualize user-centric action-items","image":"PulvinarLobortisEst.tiff","price":5212,"stock":88,"featured":false,"active":true},
{"id":717,"catId":953,"name":"Barefoot","description":"harness robust experiences","image":"MorbiOdioOdio.jpeg","price":4664,"stock":62,"featured":true,"active":true},
{"id":156,"catId":399,"name":"The Appointments of Dennis Jennings","description":"mesh out-of-the-box web services","image":"Orci.png","price":9083,"stock":46,"featured":true,"active":false},
{"id":454,"catId":204,"name":"Idle Mist (Vana Espuma)","description":"transform bricks-and-clicks relationships","image":"FermentumDonecUt.jpeg","price":9939,"stock":8,"featured":false,"active":false},
{"id":991,"catId":311,"name":"Back to the Future Part II","description":"aggregate ubiquitous eyeballs","image":"Penatibus.png","price":3859,"stock":50,"featured":false,"active":true},
{"id":711,"catId":546,"name":"Lourdes","description":"redefine revolutionary e-markets","image":"Magna.gif","price":6259,"stock":28,"featured":false,"active":true},
{"id":63,"catId":551,"name":"The Story of Alexander Graham Bell","description":"e-enable virtual schemas","image":"RutrumNullaTellus.jpeg","price":8666,"stock":38,"featured":true,"active":false},
{"id":759,"catId":678,"name":"Kill for Me","description":"deploy user-centric infrastructures","image":"EgetElitSodales.tiff","price":6255,"stock":37,"featured":true,"active":false},
{"id":494,"catId":268,"name":"35 Up","description":"seize B2C convergence","image":"IpsumPrimis.png","price":241,"stock":80,"featured":true,"active":true},
{"id":665,"catId":169,"name":"Lathe of Heaven","description":"synthesize world-class e-tailers","image":"MaurisViverra.png","price":1566,"stock":84,"featured":true,"active":true},
{"id":964,"catId":68,"name":"You Again","description":"orchestrate e-business channels","image":"TempusVivamusIn.tiff","price":9942,"stock":53,"featured":true,"active":false},
{"id":458,"catId":279,"name":"Sin of Harold Diddlebock, The","description":"scale vertical portals","image":"In.png","price":9821,"stock":38,"featured":true,"active":false},
{"id":532,"catId":778,"name":"Sacco and Vanzetti (Sacco e Vanzetti)","description":"mesh killer ROI","image":"Risus.jpeg","price":5499,"stock":11,"featured":false,"active":false},
{"id":953,"catId":227,"name":"Antonio Gaudí","description":"exploit rich supply-chains","image":"In.tiff","price":4608,"stock":15,"featured":true,"active":true},
{"id":590,"catId":166,"name":"Immortal Story, The (Histoire immortelle)","description":"implement open-source solutions","image":"FusceCongue.jpeg","price":9502,"stock":51,"featured":true,"active":false},
{"id":895,"catId":2,"name":"Killers","description":"exploit holistic bandwidth","image":"HendreritAtVulputate.tiff","price":8927,"stock":36,"featured":false,"active":false},
{"id":253,"catId":881,"name":"Rape Me (Baise-moi)","description":"maximize enterprise ROI","image":"SemperRutrum.gif","price":9271,"stock":45,"featured":false,"active":false},
{"id":756,"catId":629,"name":"Latin Music USA","description":"evolve best-of-breed systems","image":"MorbiOdio.png","price":47,"stock":97,"featured":true,"active":false},
{"id":178,"catId":55,"name":"Mighty Morphin Power Rangers: The Movie","description":"revolutionize customized supply-chains","image":"AugueVestibulumRutrum.tiff","price":5771,"stock":91,"featured":false,"active":true},
{"id":673,"catId":301,"name":"10","description":"morph out-of-the-box web services","image":"SedJustoPellentesque.jpeg","price":5601,"stock":16,"featured":true,"active":true},
{"id":87,"catId":107,"name":"House Hunting","description":"transform global markets","image":"EgetTempusVel.jpeg","price":3982,"stock":93,"featured":true,"active":false},
{"id":902,"catId":530,"name":"Hardcore","description":"grow customized experiences","image":"NisiVenenatis.tiff","price":7005,"stock":40,"featured":true,"active":false},
{"id":734,"catId":459,"name":"Wittgenstein","description":"matrix web-enabled channels","image":"In.gif","price":1548,"stock":20,"featured":false,"active":false},
{"id":757,"catId":896,"name":"Keys to Tulsa","description":"leverage visionary deliverables","image":"RhoncusMaurisEnim.gif","price":8137,"stock":20,"featured":false,"active":true},
{"id":646,"catId":62,"name":"Artois the Goat","description":"matrix extensible applications","image":"Hendrerit.jpeg","price":7493,"stock":58,"featured":true,"active":false},
{"id":447,"catId":268,"name":"Django the Bastard (Strangers Gundown, The) (Django il bastardo)","description":"transform cutting-edge methodologies","image":"SedVelEnim.png","price":7190,"stock":58,"featured":true,"active":true},
{"id":827,"catId":928,"name":"Bhowani Junction","description":"target clicks-and-mortar niches","image":"VestibulumVelit.jpeg","price":9861,"stock":8,"featured":true,"active":true},
{"id":272,"catId":227,"name":"Castaway","description":"cultivate vertical systems","image":"QuamSollicitudin.tiff","price":3204,"stock":94,"featured":false,"active":false},
{"id":936,"catId":928,"name":"Intact (Intacto)","description":"e-enable holistic infrastructures","image":"Sagittis.jpeg","price":3625,"stock":81,"featured":false,"active":true},
{"id":960,"catId":163,"name":"Autumn Leaves","description":"drive dynamic functionalities","image":"UltricesVel.tiff","price":9067,"stock":53,"featured":false,"active":true},
{"id":602,"catId":801,"name":"It Should Happen to You","description":"synthesize leading-edge supply-chains","image":"AeneanAuctorGravida.jpeg","price":1114,"stock":72,"featured":false,"active":false},
{"id":317,"catId":982,"name":"Kinjite: Forbidden Subjects","description":"e-enable robust markets","image":"UltricesVel.png","price":4758,"stock":67,"featured":true,"active":true},
{"id":230,"catId":493,"name":"Thief of Paris, The (Le voleur)","description":"generate cross-media web services","image":"At.jpeg","price":6836,"stock":7,"featured":true,"active":true},
{"id":986,"catId":683,"name":"Prison Terminal: The Last Days of Private Jack Hall","description":"engage real-time action-items","image":"ConvallisNunc.tiff","price":7925,"stock":55,"featured":false,"active":false},
{"id":980,"catId":822,"name":"Cran d'arrêt","description":"leverage next-generation action-items","image":"Vulputate.tiff","price":4407,"stock":10,"featured":false,"active":true},
{"id":724,"catId":212,"name":"Last Stand, The","description":"incubate 24/7 ROI","image":"IdLuctusNec.gif","price":8514,"stock":24,"featured":false,"active":false},
{"id":191,"catId":968,"name":"Possession of David O'Reilly, The ","description":"iterate rich mindshare","image":"FelisEu.jpeg","price":2375,"stock":28,"featured":false,"active":false},
{"id":188,"catId":769,"name":"Elvis on Tour","description":"envisioneer web-enabled paradigms","image":"SapienQuis.jpeg","price":7475,"stock":41,"featured":true,"active":false},
{"id":289,"catId":336,"name":"Dennis the Menace Christmas, A","description":"synthesize user-centric channels","image":"AnteIpsumPrimis.tiff","price":5689,"stock":28,"featured":false,"active":true},
{"id":428,"catId":437,"name":"Young Winston","description":"incubate innovative architectures","image":"Cursus.jpeg","price":9888,"stock":90,"featured":false,"active":false},
{"id":431,"catId":40,"name":"Lost Boundaries","description":"exploit killer web-readiness","image":"Vestibulum.jpeg","price":2149,"stock":34,"featured":true,"active":false},
{"id":421,"catId":857,"name":"Junior Bonner","description":"integrate customized applications","image":"DuisBibendumMorbi.tiff","price":9764,"stock":61,"featured":true,"active":false},
{"id":117,"catId":931,"name":"Warning for the Joensson Gang (Varning för Jönssonligan)","description":"benchmark clicks-and-mortar e-markets","image":"DapibusDuisAt.jpeg","price":7671,"stock":2,"featured":true,"active":false},
{"id":232,"catId":508,"name":"Meet Wally Sparks","description":"engineer bricks-and-clicks solutions","image":"VehiculaConsequat.jpeg","price":1008,"stock":66,"featured":true,"active":true},
{"id":288,"catId":201,"name":"Heartbeat Detector (Question humaine, La)","description":"orchestrate dynamic technologies","image":"Augue.jpeg","price":8857,"stock":26,"featured":false,"active":false},
{"id":30,"catId":380,"name":"French Fried Vacation 3 (Les bronzés 3: amis pour la vie)","description":"aggregate viral eyeballs","image":"Vestibulum.jpeg","price":8877,"stock":85,"featured":true,"active":true},
{"id":373,"catId":643,"name":"Crime of Passion","description":"harness value-added supply-chains","image":"Volutpat.tiff","price":4815,"stock":56,"featured":false,"active":false},
{"id":903,"catId":46,"name":"Sheena","description":"deploy granular action-items","image":"Eget.tiff","price":75,"stock":32,"featured":false,"active":false},
{"id":175,"catId":813,"name":"Bitter Rice (Riso amaro)","description":"iterate best-of-breed bandwidth","image":"At.tiff","price":7131,"stock":61,"featured":false,"active":false},
{"id":996,"catId":171,"name":"Last Dispatch, The","description":"evolve next-generation action-items","image":"Accumsan.gif","price":1832,"stock":86,"featured":true,"active":false},
{"id":737,"catId":753,"name":"Radio Days","description":"integrate wireless partnerships","image":"Proin.jpeg","price":1085,"stock":40,"featured":true,"active":false},
{"id":553,"catId":725,"name":"Notre jour viendra","description":"evolve robust initiatives","image":"NislUtVolutpat.jpeg","price":3489,"stock":21,"featured":false,"active":false},
{"id":841,"catId":406,"name":"On the Beach","description":"implement bleeding-edge niches","image":"AtDolor.tiff","price":6214,"stock":31,"featured":true,"active":false},
{"id":990,"catId":616,"name":"White Night Wedding (Brúðguminn)","description":"innovate next-generation paradigms","image":"Potenti.tiff","price":3983,"stock":37,"featured":true,"active":false},
{"id":376,"catId":176,"name":"Slammin' Salmon, The","description":"recontextualize plug-and-play synergies","image":"PrimisIn.tiff","price":7860,"stock":17,"featured":true,"active":true},
{"id":574,"catId":197,"name":"Best of Times, The","description":"seize one-to-one ROI","image":"In.tiff","price":7417,"stock":19,"featured":true,"active":true},
{"id":892,"catId":424,"name":"Boys Next Door, The","description":"whiteboard rich synergies","image":"Erat.png","price":8970,"stock":32,"featured":true,"active":true},
{"id":77,"catId":470,"name":"A Follower for Emily","description":"monetize viral schemas","image":"Turpis.jpeg","price":2998,"stock":24,"featured":true,"active":true},
{"id":861,"catId":248,"name":"Pride of the Bowery","description":"streamline holistic web-readiness","image":"MontesNasceturRidiculus.png","price":6471,"stock":98,"featured":true,"active":false},
{"id":354,"catId":158,"name":"Sunday in New York","description":"innovate web-enabled applications","image":"AnteIpsumPrimis.tiff","price":3222,"stock":54,"featured":true,"active":true},
{"id":649,"catId":995,"name":"12 Days of Terror","description":"cultivate B2C web services","image":"NislNunc.jpeg","price":2771,"stock":42,"featured":true,"active":false},
{"id":286,"catId":637,"name":"Sharpe's Sword","description":"reinvent e-business bandwidth","image":"At.gif","price":3777,"stock":55,"featured":false,"active":true},
{"id":309,"catId":213,"name":"Winter Solstice","description":"unleash wireless users","image":"IdLigulaSuspendisse.png","price":3146,"stock":61,"featured":false,"active":false},
{"id":834,"catId":349,"name":"Hardcore","description":"reintermediate B2B web-readiness","image":"UtRhoncusAliquet.gif","price":1647,"stock":82,"featured":false,"active":false},
{"id":386,"catId":601,"name":"Into Great Silence (Die große Stille)","description":"grow sexy e-commerce","image":"PedeUllamcorper.jpeg","price":962,"stock":67,"featured":false,"active":false},
{"id":496,"catId":389,"name":"Peppermint Candy (Bakha satang)","description":"evolve impactful models","image":"Massa.tiff","price":1194,"stock":58,"featured":false,"active":false},
{"id":490,"catId":307,"name":"Late Bloomers","description":"optimize killer supply-chains","image":"Blandit.jpeg","price":5654,"stock":86,"featured":false,"active":true},
{"id":696,"catId":559,"name":"Unreal Dream: The Michael Morton Story, An","description":"innovate magnetic e-tailers","image":"Magna.tiff","price":2638,"stock":5,"featured":true,"active":false},
{"id":540,"catId":705,"name":"I Walk the Line","description":"empower killer bandwidth","image":"VestibulumAnte.jpeg","price":4773,"stock":93,"featured":false,"active":false},
{"id":599,"catId":479,"name":"Hook","description":"incentivize rich partnerships","image":"ElementumNullam.png","price":5301,"stock":50,"featured":true,"active":false},
{"id":533,"catId":506,"name":"Kandahar (Safar e Ghandehar)","description":"mesh customized relationships","image":"AmetSemFusce.gif","price":9909,"stock":53,"featured":false,"active":false},
{"id":768,"catId":886,"name":"Pit and the Pendulum, The","description":"optimize bricks-and-clicks networks","image":"SitAmet.tiff","price":4826,"stock":45,"featured":true,"active":true},
{"id":193,"catId":729,"name":"Chopping Mall (a.k.a. Killbots)","description":"exploit killer paradigms","image":"RidiculusMusVivamus.tiff","price":7237,"stock":28,"featured":true,"active":false},
{"id":879,"catId":701,"name":"Maid of Salem","description":"syndicate 24/7 ROI","image":"Sapien.gif","price":1277,"stock":18,"featured":true,"active":true},
{"id":937,"catId":898,"name":"Castle, The (Das Schloß)","description":"evolve customized solutions","image":"CurabiturConvallis.jpeg","price":1970,"stock":18,"featured":false,"active":false},
{"id":142,"catId":82,"name":"No Distance Left to Run","description":"iterate dynamic interfaces","image":"In.gif","price":2477,"stock":73,"featured":false,"active":true},
{"id":201,"catId":982,"name":"Hotel","description":"extend B2C portals","image":"AccumsanTortor.tiff","price":1670,"stock":7,"featured":false,"active":true},
{"id":553,"catId":671,"name":"Siegfried","description":"embrace best-of-breed relationships","image":"Nam.jpeg","price":4215,"stock":38,"featured":false,"active":true},
{"id":732,"catId":91,"name":"Touching the Void","description":"monetize back-end experiences","image":"CurabiturAt.jpeg","price":8250,"stock":76,"featured":false,"active":false},
{"id":543,"catId":698,"name":"Outbound (Periferic)","description":"engineer cutting-edge metrics","image":"Augue.jpeg","price":5516,"stock":68,"featured":true,"active":false},
{"id":957,"catId":771,"name":"Love Letter ","description":"optimize global networks","image":"LobortisConvallisTortor.jpeg","price":8035,"stock":34,"featured":true,"active":false},
{"id":400,"catId":549,"name":"Love Parade, The","description":"leverage frictionless action-items","image":"QuisqueArcu.png","price":4709,"stock":85,"featured":false,"active":true},
{"id":477,"catId":480,"name":"Score: A Hockey Musical","description":"maximize seamless platforms","image":"ElementumInHac.gif","price":610,"stock":67,"featured":false,"active":true},
{"id":433,"catId":600,"name":"Maleficent","description":"e-enable bricks-and-clicks mindshare","image":"NullaAcEnim.tiff","price":4366,"stock":96,"featured":true,"active":true},
{"id":576,"catId":113,"name":"Dumbo","description":"harness customized experiences","image":"PurusAliquetAt.jpeg","price":4766,"stock":52,"featured":true,"active":true},
{"id":806,"catId":918,"name":"Late Marriage (Hatuna Meuheret)","description":"exploit magnetic communities","image":"ConvallisNunc.gif","price":5037,"stock":97,"featured":false,"active":false},
{"id":606,"catId":351,"name":"Postman, The (Postino, Il)","description":"grow impactful e-commerce","image":"Augue.tiff","price":5207,"stock":52,"featured":false,"active":true},
{"id":780,"catId":970,"name":"Life and Death of Peter Sellers, The","description":"extend open-source experiences","image":"AtNunc.tiff","price":1732,"stock":54,"featured":false,"active":true},
{"id":802,"catId":650,"name":"Nausicaä of the Valley of the Wind (Kaze no tani no Naushika)","description":"empower B2C e-markets","image":"Ut.gif","price":7273,"stock":12,"featured":false,"active":true},
{"id":247,"catId":636,"name":"Storm Center","description":"target frictionless relationships","image":"RisusSemper.jpeg","price":2088,"stock":88,"featured":true,"active":false},
{"id":341,"catId":174,"name":"TV Set, The","description":"maximize e-business web services","image":"NonVelitDonec.tiff","price":5840,"stock":3,"featured":false,"active":false},
{"id":848,"catId":6,"name":"Kremlin Letter, The","description":"reintermediate virtual functionalities","image":"Dolor.tiff","price":1412,"stock":59,"featured":true,"active":false},
{"id":665,"catId":243,"name":"Hud","description":"monetize dynamic communities","image":"LaoreetUtRhoncus.tiff","price":2184,"stock":93,"featured":true,"active":false},
{"id":799,"catId":684,"name":"Club Dread","description":"reinvent one-to-one schemas","image":"VestibulumAcEst.png","price":2088,"stock":89,"featured":false,"active":false},
{"id":185,"catId":340,"name":"As it is in Heaven (Så som i himmelen)","description":"embrace clicks-and-mortar e-commerce","image":"InTempor.jpeg","price":7326,"stock":33,"featured":true,"active":true},
{"id":604,"catId":670,"name":"It Happened at the World's Fair","description":"enhance robust e-markets","image":"AcEst.gif","price":8308,"stock":94,"featured":false,"active":true}];
 */





//const list = new ProductServiceService(data);