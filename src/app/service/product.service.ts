import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    
    constructor(private http: HttpClient){}
    
    jsonUrl:string = "http://localhost:3000/json/list";

    getAll():Observable<Product[]> {
        return this.http.get<Product[]>(this.jsonUrl);
    }

    getOne(id: string | number): Observable<Product>{
        return this.http.get<Product>( `${this.jsonUrl}/${id}` );
    }
    
    create(product: Product): Observable<any> {
        return this.http.post<Product>(this.jsonUrl,product);
    }
    
    update(product: Product): Observable<any>{
        return this.http.put( `${this.jsonUrl}/${product.id}`, product );
    }
    remove(product: Partial<Product> | string | number): Observable<any>{
        try{
            const id =
                typeof product === 'string' ? product :
                typeof product === 'number' ? product :
                product.id;
                return this.http.delete( `${this.jsonUrl}/${id}` );
        }
        catch(err){
            console.log(`Error when removing product ${product}:
            'id' is undefined`);
        }
    }

    list: Product[] = [
        { id: 0, name: "Ulrich Tietze -Christoph Schenk", description: "Tudomány - Villamosmérnököknek", title: "Analóg és digitális áramkörök", publisher:"Műszaki Könyvkiadó", releaseYear:1981, catId: 0, image: "assets/img/termeszettudomany-villamosmernok/ulrichtieztechristophschenk-analogesdigitalisaramkorok.jpg", price: 2500, stock: 15, featured: false, active: true },
        { id: 1, name: "Bálint Ágnes", description: "Irodalom - Gyermekkönyv",title: "Szeleburdi család", publisher:"Móra Kiadó", releaseYear:1968, catId:1 , image: "assets/img/gyerek/balintagnes-szeleburdicsalad.jpg", price: 1500, stock: 3, featured: false, active: true },
        { id: 2, name: "Benedek Elek", description: "Irodalom - Gyermekkönyv",title: "Összes meséi III-IV.", publisher:"Szukits Kiadó", releaseYear:2007, catId: 1, image: "assets/img/gyerek/benedekelek-osszesmesei.jpg", price: 3000, stock: 7, featured: false, active: true },
        { id: 3, name: "Fekete István", description: "Irodalom - Gyermekkönyv",title: "Vuk", publisher:"Móra Kiadó", releaseYear:2009, catId: 1, image: "assets/img/gyerek/fekete-istvan-vuk.jpg", price: 1350, stock: 11, featured: false, active: true },
        { id: 4, name: "Lázár Ervin", description:"Irodalom - Gyermekkönyv",title: " A kisfiú meg az oroszlánok", publisher:"Osiris Kiadó", releaseYear:1999, catId: 1, image: "assets/img/gyerek/lazarervin-akisfiumegazoroszlanok.jpg", price: 1100, stock: 2, featured: false, active: true },
        { id: 5, name: "Móra Ferenc", description:"Irodalom - Gyermekkönyv",title:"Sétálni megy Panka",releaseYear:2013, publisher:"Móra Kiadó", catId: 1, image: "assets/img/gyerek/moraferenc-setalnimegypanka.jpg", price: 1890, stock: 1, featured: false, active: true },
        { id: 6, name: "Iványi Antal", description: "Tudomány - Informatika",title:"Informatikai algoritmusok I.",releaseYear:2004, publisher:"ELTE Eötvös Kiadó", catId: 2, image: "assets/img/informatika/informatikaialgoritmusokI.jpg", price: 2490, stock: 23, featured: true, active: true },
        { id: 7, name: "Iványi Antal", description: "Tudomány - Informatika",title:"Informatikai algoritmusok II.", releaseYear:2004, publisher:"ELTE Eötvös Kiadó", catId: 2, image: "assets/img/informatika/informatikaialgoritmusokII.jpg", price: 2490, stock: 23, featured: false, active: true },
        { id: 8, name: "Jakab Zsolt", description: "Tudomány - Informatika",title: "Készíts te is játékprogramot!", releaseYear:2018, publisher: "Saxum Kiadó", catId: 2, image: "assets/img/informatika/jakabzsolt-keszitsteisjatekprogramot.jpg", price: 3000, stock: 5, featured: true, active: true },
        { id: 9, name: "Jon Luis Bentley", description: "Tudomány - Informatika",title:"A programozás gyöngyszemei", releaseYear: 1988, publisher: "Műszaki Könyvkiadó", catId: 2, image: "assets/img/informatika/jonlouisbentley-aprogramozasgyongyszemei.jpg", price: 2300, stock: 4, featured: false, active: true },
        { id: 10, name: "Móricz Atila", description: "Tudomány - Informatika", title:"Programozási alapfeladatok", releaseYear: 2004, publisher: "Computerbooks Kiadó", catId: 2, image: "assets/img/informatika/moriczattila-programozasialapfeladatok.jpg", price: 2000, stock: 10, featured: true, active: true },
        { id: 11, name: "Bércziné dr. Juhos Júlia", description: "Tudomány - Kereskedelem és marketing",title:"Marketing a kereskedelemben",releaseYear: 2005, publisher:"Kereskedelmi és idegenforgalmi továbbképző kft.", catId: 3, image: "assets/img/kereskedelemmarketing/berczinejuhosjulia-marketingakereskedelemben.jpg", price: 2345, stock: 27, featured: false, active: true },
        { id: 12, name: "David Jobber", description: "Tudomány - Kereskedelem és marketing", title:"Európai marketing", releaseYear: 2002, publisher: "Akadémiai Kiadó Zrt", catId: 3, image: "assets/img/kereskedelemmarketing/davidjobber-eurőpaimarketing.jpg", price: 1890, stock: 31, featured: false, active: true },
        { id: 13, name: "Gondi-Ivánkai", description: "Tudomány - Kereskedelem és marketing", title:"Marketing kezdőknek és haladoknak", releaseYear: 1995, publisher: "Budapest", catId: 3, image: "assets/img/kereskedelemmarketing/gondi-ivankai-marketingkezdoknekeshaladoknak.jpg", price: 3210, stock: 55, featured: false, active: true },
        { id: 14, name: "Törőcsik Mária", description: "Tudomány - Kereskedelem és marketing",title:"Kereskedelmi marketing", releaseYear: 1998, publisher: "Közgazdasági és jogi könyvkiadó", catId: 3, image: "assets/img/kereskedelemmarketing/töröcsikmaria-kereskedelmimarketing.jpg", price: 4000, stock: 22, featured: false, active: true },
        { id: 15, name: "Veres Zoltán", description: "Tudomány - Kereskedelem és marketing",title:"A marketing alapjai", releaseYear: 2007, publisher: "Perfekt Zrt.", catId: 3, image: "assets/img/kereskedelemmarketing/vereszoltan-amarketingalapjai.jpg", price: 1780, stock: 13, featured: true, active: true },
        { id: 16, name: "Michael Cole- Sheila R.Cole", description: "Tudomány - Pszichológia,pedagógia", title:"Fejlődéslélektan", releaseYear: 2006, publisher: "Osiris Kiadó", catId: 4, image: "assets/img/pedagogiapszichologia/cole-cole-fejlodeslelektan.jpg", price: 5790, stock: 43, featured: false, active: true },
        { id: 17, name: "Dr. Czeizel Endre", description: "Tudomány - Pszichológia,pedagógia",title:"Sors és tehetség", releaseYear: 2004, publisher: "Urbis Könyvkiadó", catId: 4, image: "assets/img/pedagogiapszichologia/drczeizelendre-sorsestehetseg.jpg", price: 1990, stock: 1, featured: true, active: true },
        { id: 18, name: "Hidas György-Raffai Jenő-Vollner Judit", description: "Tudomány - Pszichológia,pedagógia",title:"Lelki köldökzsinór", releaseYear: 2005, publisher:"Helikon Kiadó", catId: 4, image: "assets/img/pedagogiapszichologia/drtothlaszlo-pszichologiaatanitasban.jpg", price: 2290, stock: 11, featured: false, active: true },
        { id: 19, name: "Dr.Tóth László", description: "Tudomány - Pszichológia,pedagógia",title:"Pszichológia a tanításban", releaseYear: 2013, publisher:"Pedellus Tankönyvkiadó", catId: 4, image: "assets/img/pedagogiapszichologia/drtothlaszlo-.jpg", price: 4500, stock: 1, featured: true, active: true },
        { id: 20, name: "Philip Zimbardo", description: "Tudomány - Pszichológia,pedagógia", title:"Pszichológia mindenkinek", releaseYear: 2018, publisher:"Libri Kiadó", catId: 4, image: "assets/img/pedagogiapszichologia/philipzimbardo-pszichológiamindenkinek (2).jpg", price: 3550, stock: 9, featured: false, active: true },
        { id: 21, name: "Benke József", description: "Tudomány - Orvostudomány",title:"Az orvostudomány története", releaseYear: 2009, publisher: "Medicina Könyvkiadó", catId: 5, image: "assets/img/orvostudomany/benkejozsef-azorvostudomanytortenete.jpg", price: 3500, stock: 3, featured: false, active: true },
        { id: 22, name: "Vizi E. Szilveszter", description: "Tudomány - Orvostudomány",title:"Orvostudomány" , releaseYear: 2001, publisher:"Magyar Tudományos Akadémia", catId: 5, image: "assets/img/orvostudomany/vizieszilveszter-orvostudomany.jpg", price: 2550, stock: 4, featured: false, active: true },
        { id: 23, name: "Mihály András", description: "Tudomány - Orvostudomány", title:"Anatómia", releaseYear: 2003, publisher: "APC Stúdió", catId: 5, image: "assets/img/orvostudomany/mihalyandras-anatomia.jpg", price: 2200, stock: 2, featured: false, active: true },
        { id: 24, name: "Kálmán Mihály-Kovács Ákos", description: "Tudomány - Orvostudomány",title:"Az elsődleges gyermekorvoslás gyakorlata", releaseYear: 2018, publisher: "Házi Gyermekorvosok Egyesülete", catId: 5, image: "assets/img/orvostudomany/kalmanmihaly-azelsodlegesgyermekorvoslásgyakorlata.jpg", price: 1500, stock: 105, featured: false, active: true },
        { id: 25, name: "Tulassay Tivadar", description: "Tudomány - Orvostudomány", title:"Gyermekorvosi differenciáldiagnosztika" , releaseYear: 2020, publisher: "Medicina Könyvkiadó", catId: 5, image: "assets/img/orvostudomany/tulassaytivadar-gyermekorvosidifferencialdiagnosztika.jpg", price: 4000, stock: 10, featured: false, active: true },
        { id: 26, name: "Csapodi Csaba-Csapodiné Gárdonyi Klára ", description: "Egyéb- Művészet", title:"Bibliotheca Corviniana", releaseYear: 1967, publisher: "Magyar Helikon", catId: 6, image: "assets/img/muveszet/csapodicsaba-bibliothecacorviniana.jpg", price: 2999, stock: 4, featured: false, active: true },
        { id: 27, name: "Jeannine Auboyer", description: "Egyéb- Művészet",title:"A korai reneszánsz", releaseYear: 1991, publisher:"Corvina Kiadó", catId: 6, image: "assets/img/muveszet/jeannineauboyer-akoraireneszansz.jpg", price: 2000, stock: 3, featured: false, active: true },
        { id: 28, name: "Baji Etelka-Csorba László", description: "Egyéb- Művészet",title:"Kastélyok és mágnások", releaseYear: 2006, publisher:"Medicina Könyvkiadó", catId: 6, image: "assets/img/muveszet/bajietelkacsorbalaszlo-kastelyokesmagnasok.jpg", price: 3000, stock: 1, featured: false, active: true },
        { id: 29, name: "Christoph Heinrich", description: "Egyéb- Művészet",title:"Monet", releaseYear: 2010, publisher:"Taschen-Vince Kiadó", catId: 6, image: "assets/img/muveszet/christophheinric-monet.jpg", price: 2990, stock: 8, featured: false, active: true },
        { id: 30, name: "Bartók Béla-Kodály Zoltán", description: "Egyéb- Művészet", title:"Népdalok", releaseYear: 1987, publisher:"Állami Könyvterjesztő Vállalat", catId: 6, image: "assets/img/muveszet/bartokkodaly-nepdalok.jpg", price: 1100, stock: 2, featured: false, active: true },
        { id: 31, name: "Arthur C. Clarke", description: "Egyéb-Scifi",title:"2001 / Űrodisszeia", releaseYear: 1994, publisher:"Szukits Könyvkiadó", catId: 7, image: "assets/img/scifi/arthurcclarke-2001urodisszeia.jpg", price: 990, stock: 12, featured: false, active: true },
        { id: 32, name: "Alan Dean Foster", description: "Egyéb-Scifi",title:"A nyolcadik utas: a Halál", releaseYear: 2015, publisher:"Agave Könyvek", catId: 7, image: "assets/img/scifi/alandelainfoster-aliennyolcadikutasahalal.jpg", price: 970, stock: 21, featured: false, active: true },
        { id: 33, name: "Alan Dean Foster", description: "Egyéb-Scifi",title:"Az ébredő Erő", releaseYear: 2016, publisher:"Szukits Könyvkiadó", catId: 7, image: "assets/img/scifi/alandelainfoster-azebredoero.jpg", price: 1110, stock: 22, featured: false, active: true },
        { id: 34, name: "Lawrence M. Krauss", description: "Egyéb-Scifi",title:"A Star Trek fizikája", releaseYear: 2008, publisher:"Cartaphilus Kiadó", catId: 7, image: "assets/img/scifi/lawrencemkrauss-astartrekfizikaja.jpg", price: 1050, stock: 31, featured: false, active: true },
        { id: 35, name: "Brian Herbert-Kevin J. Anderson", description: "Egyéb-Scifi",title:"A Dűne homokférgei", releaseYear: 2008, publisher:"Szukits Könyvkiadó", catId: 7, image: "assets/img/scifi/brianherbertkevinjanderson-adunehomokfergei.jpg", price: 1000, stock: 15, featured: false, active: true },
        { id: 36, name: "Jane Austen", description: "Irodalom - Szépirodalom, regény",title:"Büszkeség és balítélet", releaseYear: 2007, publisher:"Ulpius-ház Könyvkiadó", catId: 8, image: "assets/img/szepirodalom-regeny/janeausten-buszkesegesbalitelet.jpg", price: 2013, stock: 13, featured: false, active: true },
        { id: 37, name: "Henryk Sienkiewicz", description: "Irodalom - Szépirodalom, regény",title:"Quo vadis", releaseYear: 2011, publisher:"Fapadoskönyv Kiadó", catId: 8, image: "assets/img/szepirodalom-regeny/henryksienkiewicz-quovadis.jpg", price: 2550, stock: 4, featured: false, active: true },
        { id: 38, name: "Philippe Pozzo di Borgo", description: "Irodalom - Szépirodalom, regény", title:"Életrevalók", releaseYear: 2012, publisher: "Sanoma Kiadó", catId: 8, image: "assets/img/szepirodalom-regeny/philippepozzodiborgo-eletrevalok.jpg", price: 2490, stock: 35, featured: false, active: true },
        { id: 39, name: "N. H. Kleinbaum", description: "Irodalom - Szépirodalom, regény",title:"Holt Költők Társasága" , releaseYear: 2005, publisher:"Lazi Kiadó", catId: 8, image: "assets/img/szepirodalom-regeny/nhkleinbaum-holtkoltoktarsasaga.jpg", price: 1590, stock: 11, featured: false, active: true },
        { id: 40, name: "Wass Albert ", description: "Irodalom - Szépirodalom, regény", title: "Elvész a nyom", releaseYear: 2000, publisher:"Kráter Kiadó", catId: 8, image: "assets/img/szepirodalom-regeny/wassalbert-elveszanyom.jpg", price: 1330, stock: 13, featured: false, active: true },
        { id: 41, name: "Arany János", description: "Irodalom - Szépirodalom, vers",title:"Arany János összes költeményei", releaseYear: 1983, publisher: "Helikon Kiadó", catId: 9, image: "assets/img/szepirodalom-vers/aranyjanos-osszeskoltemenyei.jpg", price: 1930, stock: 15, featured: false, active: true },
        { id: 42, name: "Babits Mihály", description: "Irodalom - Szépirodalom, vers",title: "Babits Mihály összegyűjtött versei", releaseYear: 1974, publisher: "Szépirodalmi Könyvkiadó", catId: 9, image: "assets/img/szepirodalom-vers/babitsmihaly-osszesgyujtottversei.jpg", price: 1930, stock: 12, featured: false, active: true },
        { id: 43, name: "József Attila", description: "Irodalom - Szépirodalom, vers", title:"József Attila összes versei", releaseYear: 1992, publisher:"Századvég Kiadó", catId: 9, image: "assets/img/szepirodalom-vers/jozsefattila-osszesversei.jpg", price: 1930, stock: 6, featured: false, active: true },
        { id: 44, name: "Radnóti Miklós", description: "Irodalom - Szépirodalom, vers", title:"Radnóti Miklós összes versei és műfordításai",releaseYear: 1974, publisher: "Szépirodalmi Könyvkiadó", catId: 9, image: "assets/img/szepirodalom-vers/radnotimiklos-osszesverseiesmuforditasai.jpg", price: 1930, stock: 7, featured: false, active: true },
        { id: 45, name: "Petőfi Sándor", description: "Irodalom - Szépirodalom, vers",title:"Petőfi Sándor válogatott versek", releaseYear: 1991, publisher: "Európa Könyvkiadó", catId: 9, image: "assets/img/szepirodalom-vers/petofisandor-valogatottversek.jpg", price: 1930, stock: 25, featured: false, active: true },
        { id: 46, name: "Dr. Pattantyús Á. Géza", description: "Tudomány - Villamosmérnököknek",title:"Gépész- és villamosmérnökök kézikönyve 1", releaseYear: 1971, publisher:"Műszaki Könyvkiadó", catId: 0, image: "assets/img/termeszettudomany-villamosmernok/drpattantyúsgeza-gepeszesvillamosmernokokkezikonyve.jpg", price: 1440, stock: 2, featured: false, active: true },
        { id: 47, name: "Bilicz Sándor", description: "Tudomány - Villamosmérnököknek", title:"A matematika villamosmérnöki alkalmazásairól példákon keresztül", releaseYear: 2016, publisher:"Typotex Kiadó", catId: 0, image: "assets/img/termeszettudomany-villamosmernok/biliczsandor-amatematikavillamosmernokialkalmazasairolpeldakonkeresztul.jpg", price: 2000, stock: 5, featured: false, active: true },
        { id: 48, name: "dr.Csáki Frigyes-Bars Ruth", description: "Tudomány - Villamosmérnököknek",title:"Automatika", releaseYear: 1969, publisher: "Tankönyvkiadó", catId: 10, image: "assets/img/termeszettudomany-villamosmernok/drcsakifrigyesbarruth-automatika.jpg", price: 2990, stock: 15, featured: false, active: true },
        { id: 49, name: "Simonyi Károly", description: "Tudomány - Villamosmérnököknek",title:"Villamosságtan", releaseYear: 1964, publisher:"Akadémiai Kiadó", catId: 10, image: "assets/img/termeszettudomany-villamosmernok/simonyikaroly-villamossagtan.jpg", price: 1990, stock: 4, featured: false, active: true }
    ];
}