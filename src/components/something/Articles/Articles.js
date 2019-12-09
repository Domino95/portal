import React from 'react';
import styled from 'styled-components';
import './ArticlesStyle.css';
import astma from './astma.png';
import brzuch from './brzuch.jpeg';
import kostka from './kostka.jpg';
import przeziebienie from './przeziebienie.jpeg';
import { useState } from "react";



const Conatiner = styled.div`
max-width: 100%;
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom:10%;
`

const Article = styled.span`
margin-left:auto;
margin-right:auto;
display:block;
width: 80%;
font-size: 1.1rem;
padding:10px;
line-height: 1.5;
vertical-align: baseline;
color: #444;
font-weight: 400;
font-family: "Open Sans", Arial, sans-serif !important;
margin-bottom:5%;
`

const H2 = styled.h2`
font-size:2rem;
font-weight: 700;
    margin: 1.25em 0 .75em;
    padding: 0;
    color:black;
`


const Articles = () => {
    const [article, setArticle] = useState({})
  
    return (
        
        <>
        <Conatiner>

            <div className="imageWrapper"  >
                <img src={przeziebienie} alt=""  />
                <a  onClick={()=> {setArticle('przeziebienie')}} href="#przeziebienie" className="cornerLink" >PRZEZIĘBIENIA</a>
            </div>
            <div className="imageWrapper">
                <img src={astma} alt="" />
                <a onClick={()=> {setArticle('astma')}} href="#astma" className="cornerLink">ASTMA</a>
            </div>
            <div className="imageWrapper">
                <img src={brzuch} alt="" />
                <a onClick={()=> {setArticle('brzuch')}} href="#brzuch" className="cornerLink">BÓL BRZUCHA</a>
            </div>
            <div className="imageWrapper">
                <img src={kostka} alt="" />
                <a onClick={()=> {setArticle('noga')}}  href="#noga" className="cornerLink">SKRĘCENIA</a>
            </div>
        </Conatiner >


        {article === "przeziebienie" ? 
        <Article id="przeziebienie">  
            <H2>Jak odróżnić grypę od przeziębienia?</H2>
            Zanim zdecydujemy o tym, czy powinniśmy udać się do lekarza, musimy znać różnicę między objawami grypy i przeziębienia. W przypadku grypy mamy do czynienia przede wszystkim z wysoką gorączką, bólami mięśni i stawów, w także tak zwanym uczuciem rozbicia. Inaczej objawia się przeziębienie. Przede wszystkim rozwija się znacznie wolniej niż grypa. Jego przebieg jest też łagodniejszy, a gorączka niezbyt wysoka. Bardzo często ma związek z pogodą, więc możemy mieć z nim do czynienia nawet latem w czasie kilku chłodniejszych dni.
            
            <H2>Domowe sposoby na przeziębienie – kiedy mogą okazać się skuteczne?</H2>
            O domowych sposobach na przeziębieniach możemy usłyszeć na każdym kroku, gdy zbliża się okres zimowy lub jesienny. Częste zmiany temperatury w lecie mogą być dla nas jednak również groźne. Początkowe objawy przeziębienia mogą zostać przez nas zlekceważone z powodu pory roku, a to właśnie wtedy domowe sposoby mogą okazać się najskuteczniejsze. Jeśli pozwolimy się rozwinąć infekcji lub jeśli dopadnie nas grypa koniecznie musimy udać się lekarza.
            
           <H2> Jakie są najczęściej stosowane sposoby na przeziębienie?</H2>
            Najczęściej mamy do czynienia oczywiście z herbatą z sokiem malinowym lub mlekiem z czosnkiem, a także rosołem. Często stosowane są również maści rozgrzewające. Przyjrzyjmy się tym metodom i sprawdźmy, dlaczego są one skuteczne w leczeniu początkowych objawów przeziębienia.
            
            <H2>Herbata z imbirem lub sokiem malinowym</H2>
            Po taki napój sięgamy nie bez powodu. Sok z malin charakteryzuje się właściwościami przeciwgorączkowymi, a imbir działa przeciwzapalnie. Jak przygotować taką herbatę, by była najskuteczniejsza? Obierz imbir i pokrój go w drobne plasterki, następnie zalej gorącą herbatą. Przykryj szklankę i pozostaw całość na 15. Następnie dodaj sok malinowy i wymieszaj dokładnie. Możesz również dodać cytrynę i miód.
            
            <H2> Rosół na przeziębienie </H2>
            Rosół na przeziębienie? Czy nie brzmi to jak mit? Badacze z University of Nebrasca Medical Center postanowili rozwiązać tę zagadkę. Grupa pijąca bulion czuła się znacznie lepiej niż ta, która go nie spożywała. Czy to znaczy, że rosół to lekarstwo na przeziębienie. Okazuje się, że nie do końca. Nie leczy on infekcji, ale poprawia nam nastrój. Wszystko za sprawą karmozyny, którą posiada w swoim składzie.
            
            <H2>Mleko z miodem lub czosnkiem na przeziębienie</H2>
            Nie każdy jest fanem tego połączenia smaków, jednak trudno odmówić skuteczność tej metodzie. Czosnek jest uznawany za naturalny antybiotyk ze względu na swoje właściwości przeciwzapalne i przeciwwirusowe. Miód również charakteryzuje się podobnymi właściwościami, a ponadto łagodzi kaszel i ból gardła. Więcej o tych domowych sposobów na przeziębienie znajdziesz na: http://pelavo.pl/naturalne-sposoby-na-przeziebienie-i-grype.html .
            
           <H2> Maść rozgrzewająca na przeziębienie</H2>
            Maść rozgrzewającą stosuje się przede wszystkim w celu złagodzenia kataru i kaszlu. Wciera się w klatkę piersiową i plecy kilka razy dziennie. Warto wybierać maści zawierające ekstrakt z eukaliptusa i mentolu.

        </Article>
        :null}




{article === "astma" ? 
        <Article id="astma">
     <H2>Główne objawy astmy</H2>
Objawy astmy możemy podzielić na podmiotowe i przedmiotowe. Te pierwsze to symptomy, które odczuwa pacjent i jest w stanie je opisać. Należą do nich:

kaszel - dominujący objaw astmy, zwłaszcza w astmie dziecięcej. Suchy i męczący kaszel często występuje w nocy lub po bardziej intensywnym wysiłku. W trakcie ataku kaszlu może wydzielać się trudna do wykrztuszenia plwocina,
świsty - ich występowanie to sygnał, że doszło do zwężenia dróg oddechowych. Zwykle towarzyszy im uczucie duszności,
duszności - występują wraz z kaszlem i świszczącym oddechem. Mogą pojawić się nad ranem lub w nocy, przebiegają z różnym natężeniem,
obniżona wydolność wysiłkowa - zadyszka po wejściu po schodach, czy innym niewielkim wysiłku to pierwszy dostrzegalny objaw.
Powyższym objawom towarzyszyć może uczucie niepokoju. Osoby zmagające się z nocnymi napadami astmy rzadko się wysypiają, przez co stają się senne i rozdrażnione. Wspomniano wcześniej, że astma przeważnie miewa podłoże alergiczne, stąd wielu astmatyków uskarża się na symptomy alergii, takie jak: alergiczny nieżyt nosa, alergiczne zapalenie spojówek. Nierzadko astmatycy chorują na atopowe zapalenie skóry.
     
       <H2>Na czym polega astma oskrzelowa? </H2> 
Astma oskrzelowa (gr. asthma oznaczające zadyszkę), nazywana też dychawicą oskrzelową, jest przewlekłą chorobą zapalną atakującą drogi oddechowe, w której uczestniczy wiele komórek i substancji przez nie uwalnianych. Na świecie na astmę może chorować ponad 300 milionów ludzi, a częstość występowania tego schorzenia z roku na rok rośnie. Choroba ma zmienny przebieg, a towarzyszą jej różnorodne i nawracające objawy. Charakteryzują ją trzy główne cechy:

obturacja oskrzeli, która ustępuje spontanicznie lub pod wpływem leczenia
stan zapalny błony śluzowej oskrzeli,
nadreaktywność oskrzeli na różne czynniki zewnętrzne.
W większości przypadków astma oskrzelowa ma podłoże alergiczne i występuje z innymi chorobami atopowymi. Szacuje się, że w Polsce na astmę mogą chorować nawet 4 miliony osób.





<H2>Jakie są przyczyny astmy oskrzelowej? </H2>
Przyczyna rozwoju tej choroby nie jest jednoznaczna. Lekarze są zdania, że astma oskrzelowa jest wynikiem kilku nakładających się na siebie czynników. Z jednej strony wskazuje się na wpływ środowiska. Zanieczyszczenie powietrza i zła jakość powietrza, kontakt z alergenami, dymem papierosowym oraz lotnymi związkami organicznymi – to tylko niektóre czynniki, które mogą przyczynić się do rozwoju choroby i nasilać jej objawy. Do głosu dochodzi również odwrotna hipoteza, tzw. hipoteza higieniczna. Mówi ona o tym, że wzrost zachorowań na astmę może być związany z ograniczonym kontaktem organizmu z infekcjami i wirusami w dzieciństwie.
Nie bez znaczenia są także pewne czynniki genetyczne. Występowanie astmy u rodziców rodzi duże prawdopodobieństwo zachorowania u dzieci.

Astmę oskrzelową różnicuje się m.in. ze względu na czynniki ją zaostrzające. U większości pacjentów choroba ma charakter atopowy, co oznacza, że uciążliwe objaw nasilają się w następstwie kontaktu z alergenem. Ten typ astmy rozwija się jeszcze w dzieciństwie i przebiega bardziej łagodnie. Rzadziej diagnozuje się astmę nieatopową, która rozwija się w wieku dorosłym.

<H2>Rozpoznanie astmy oskrzelowej </H2>
Postawienie diagnozy przede wszystkim wymaga przeprowadzenia szczegółowego wywiadu medycznego. Pacjent musi udzielić lekarzowi wyczerpujących informacji na temat swojego stanu zdrowia oraz występujących objawów, które mogą naprowadzić na właściwe tory. Ważne jest to, czy u pacjenta nie występują objawy alergii oraz czy zdarzały się w najbliższej rodzinie przypadki zachorowania na astmę. Ponadto w diagnostyce istotne są badania, takie jak:

spirometria – pozwala zmierzyć objętość i pojemność płuc, a także przepływ powietrza w płucach i oskrzelach na różnych etapach cyklu oddechowego,
szczytowy przepływ wydechowy (PEF),
ocena natężonej objętości wydechowej pierwszosekundowej (FEV1),
ocena natężonej pojemności życiowej (FVC).
Zasadne jest również wykonanie punktowych testów alergicznych oraz badań laboratoryjnych sprawdzających miano przeciwciał IgE całkowitych i swoistych. Może się bowiem okazać, że napady astmy oskrzelowej są rezultatem kontaktu z alergenem.


<H2>Jak przebiega leczenie astmy oskrzelowej? </H2>
Astma oskrzelowa jest poważną chorobą przewlekłą, której nie da się wyleczyć. Jednak przestrzeganie zaleceń lekarza, zmiana nawyków i regularne przyjmowanie leków pozwala kontrolować chorobę i ograniczać ilość napadów astmy.

Większość leków przeciwastmatycznych ma postać wziewną, zatem docierają bezpośrednio do oskrzeli. Są to m.in. glikokortykosteroidy wziewne, które łagodzą stan zapalny w drogach oskrzelowych i zmniejszają częstość zaostrzeń choroby. U części chorych przy zaostrzeniu astmy podaje się glikokortykosteroidy doustnie, jednak tylko do momentu uzyskania poprawy. Inne preparaty  stosowane doraźnie to beta2-mimetyki, które rozszerzają oskrzela, leki przeciwcholinergiczne, czy metyloksantyny.

Jeżeli nie potrafisz znaleźć potrzebnego leku, skorzystaj z wygodnej i intuicyjnej wyszukiwarki KtoMaLek.pl. Nie tylko wskaże Ci apteki, w których dany preparat jest dostępny, ale również umożliwi jego rezerwację.

Farmakoterapia nie przyniesie rezultatów bez zmiany stylu życia. Palenie przy tej chorobie jest całkowicie zabronione. Ważne jest też unikanie kontaktu z czynnikami, które wywołują zaostrzenia astmy oskrzelowej. Dotyczy to przede wszystkim chorych, u których astma ma podłoże alergiczne. Część badań wskazuje, że otyłość może być czynnikiem wyzwalającym astmę oraz utrudniającym kontrolę tej choroby. Dlatego prócz przyjmowania leków należy zmienić dietę na zdrowszą i odpowiednio zbilansowaną, aby kontrolować masę ciała.

W celu uzupełnienia kuracji wziewnymi glikokortykosterydami warto zastosować suplementy diety wzmacniające organizm poprzez zwiększenie odporności. Na rynku aptecznym dostępne są nowoczesne, wieloskładnikowe preparaty, których substancje aktywne pomagają w utrzymaniu prawidłowego stanu błon śluzowych (w tym błon śluzowych w płucach) np. AdCort.
        </Article> : null}


{article === "brzuch" ? 
<Article id="brzuch"> 
<H2>Ból brzucha – dobrze, że czasem boli</H2>
Nie sposób polubić się z bólem brzucha, jednak warto mieć świadomość, że jest to ważny objaw z punktu widzenia diagnostyki. Ból, niezależnie od jego położenia, zmusza nas do odkrycia jego źródła, często choroby, która jest przyczyną nieprzyjemnych objawów.  Utrzymujący się ból brzucha może wskazywać na różne zaburzenia czynności układu pokarmowego lub choroby narządów jamy brzusznej. Pomocy najlepiej szukać u lekarza rodzinnego, który na podstawie badań i wywiadu medycznego podejmie leczenie lub skieruje nas na dalszą diagnostykę do specjalisty.



<H2>Różne oblicza bólu brzucha </H2>
Samo stwierdzenie, że „boli nas brzuch” to zbyt mało, by postawić prawidłową diagnozę. Dokładny opis dolegliwości może pomóc lekarzowi w ustaleniu, gdzie leży problem. Podstawą jest określenie lokalizacji bólu. Czy odczuwamy dyskomfort w górnej lub dolnej, prawej lub lewej części brzucha? Istotny jest również czas trwania bólu. Jeżeli pojawił się nagle, może być to objaw niedrożności przewodu pokarmowego, a nawet perforacji, co jest już stanem zagrażającym życiu. Nagły ból o charakterze kolkowy najczęściej wskazuje na kamicę żółciową lub kolkę nerkową. Bywa również tak, że ból towarzyszy nam przez dłuższy czas lub ma skłonność do nawracania. Nie jest tak intensywny, ja te wymienione wcześniej, jednak w dłuższej perspektywie jest uciążliwy. Tak przeważnie objawia się choroba wrzodowa.

Oprócz lokalizacji i charakteru bólu, należy zwrócić uwagę na różne czynniki, które wpływają na zaostrzenie lub złagodzenie objawów. Ból może się nasilać na czczo lub podczas schylania, a słabnąć po posiłku lub oddaniu stolca. Wszystkie te informacje warto przekazać lekarzowi.



<H2>Najczęściej diagnozowane przyczyny bólu brzucha</H2>
Większość przypadków bólu brzucha to prozaiczne, codzienne dolegliwości, które nie stanowią dużego zagrożenia, jednak często są źródłem dyskomfortu. Kiedy może boleć nas brzuch?

<H2>Niestrawność po posiłku</H2>
Dominującą przyczyną przemijającego bólu brzucha jest niestrawność. Pojawia się, gdy zjemy zbyt obfity, tłusty posiłek, a także, gdy jemy w pośpiechu i nieregularnie. W niestrawności odczuwamy nie tylko ból brzucha, często towarzyszą jej wzdęcia, odbijanie się, nudności i uczucie pełności, które może utrzymywać się do kilku godzin po posiłku.

<H2>Ból menstruacyjny</H2>
Ból podczas miesiączki towarzyszy każdej kobiecie w wieku rozrodczym. Wraz z bólem pojawia się comiesięczne krwawienie z dróg rodnych. Stan ten spowodowany jest przemianami hormonalnymi zachodzącymi w organizmie kobiety. Z początkiem cyklu endometrium wyściełające macicę zaczyna siłę łuszczyć, czemu sprzyjają bolesne skurcze mięśni macicy. U niektórych kobiet ból bywa tak silny, że promieniuje aż do pleców. Może trwać od kilku dni.

<H2>Jelitówka, czyli grypa żołądkowa</H2>
Choć określana mianem grypy, jelitówka z typową grypą ma niewiele wspólnego. Wywołują ją rotawirusy, noro- i adenowirusy, a także niektóre grzyby, pasożyty i bakterie. Objawy pojawiają się gwałtownie. Osoba chora skarży się na kłujący ból brzusza, nudności i wymioty, a często również obfite i wodniste biegunki. Dolegliwości te bardzo osłabiają organizm.


<H2>Wrzody żołądka i dwunastnicy </H2>
W przypadku wrzodów chory może odczuwać piekący ból w okolicy nadbrzusza, któremu często towarzyszy uczucie rozpierania i pełności po posiłku. Zdarza się jedna, że choroba nie daje żadnych objawów.


<H2>Zapalenie wyrostka robaczkowego</H2>
Stan zapalny wyrostka robaczkowego najczęściej wywołują kamienie kałowe, zatykające światło wyrostka. Zapalenie może się również rozwinąć na skutek zmian guzowatych i owrzodzeń w świetle wyrostka lub obecności pasożytów. Chory odczuwa uporczywy ból, który z początku rozlany jest na cała jamę brzuszną. Z czasem można go zlokalizować po prawej stronie tułowia, powyżej pachwiny. Dodatkowymi objawami są: podwyższona temperatura, nudności i wymioty, utrata apetytu. Stan ten wymaga natychmiastowej interwencji lekarskiej.

<H2>Ostre zapalenie pęcherzyka żółciowego </H2>
Zapalenie pęcherzyka żółciowego jest powikłaniem kamicy żółciowej. W przebiegu tej choroby kamienie żółciowe gromadzą się w pęcherzyku żółciowym lub drogach żółciowych. Typowym objawem tego stanu zapalnego jest utrzymująca się przez kilka godzin kolka żółciowa. Ból odczuwany jest w prawym nadbrzuszu i nasila się przy głębszym wdechu.

<H2>Jak radzić sobie z bólem brzucha? </H2>
Ból brzucha możemy próbować łagodzić na własną rękę, o ile nie podejrzewamy żadnego poważniejszego schorzenia. Skuteczne w walce z bólem są leki przeciwbólowe z grupy niesteroidowych leków przeciwzapalnych (NLPZ), do których zalicza się m.in. ibuprofen (Ibalgin Maxi, Ibumax, Ibuprom, MIG, Nurofen), naproksen (Naxii, Aleve), czy działający przeciwbólowo paracetamol (Apap, Panadol, Codipar). Trzeba jednak pamiętać, że leki z grupy NLPZ mogą działać drażniąca na śluzówkę żołądka i nie są wskazane przy chorobie wrzodowej. Ulgę w bólu mogą przynieść także preparaty rozkurczowe na bazie drotaweryny (np. No-Spa, Deespa, Spastyna Max) oraz butylobromku hioscyny (Buscopan, Scopolan).

Jeżeli przyczyną dyskomfortu jest niestrawność, pomocne mogą się okazać napary z ziół zwiększających wydzielanie soków trawiennych i działających rozkurczowo na mięśnie układu pokarmowego, takich jak: koszyczek rumianku, mięta pieprzowa, korzeń mniszka, koper włoski. Rozluźniająco na brzuch zadziała też ciepły okład i leżenie w pozycji z podkurczonymi nogami. Warto również sięgnąć po siemię lniane znane przede wszystkim z dobroczynnego działania w chorobie wrzodowej. Zawarte w nasionach śluzy powlekają błony śluzowe przełyku, żołądka i częściowo dwunastnicy, chroniąc je przed agresywnym działaniem  kwasu solnego.

Jeśli mimo podjętych działań ból nadal się utrzymuje lub nasila i występują inne, niepokojące objawy, takie jak: podwyższona temperatura, nudności i wymioty, krew w stolcu, zatrzymanie stolca oraz ból, który uniemożliwia sen, należy skonsultować się z lekarzem.
</Article> : null }

{article === "noga" ? 
<Article id="noga">
<H2>Skręcenie stawu skokowego</H2>
Nazywane również skręceniem kostki, należy do najczęstszych urazów ortopedycznych. Według statystyk rocznie dochodzi do około 350 tys. wypadków tego typu. Najczęściej występują one u sportowców – jeżeli biegasz pewnie nie raz zdarzyło Ci się krzywo stanąć i niebezpiecznie nadwyrężyć kostkę. Takie wykręcenie, w zależności od siły, może spowodować różne uszkodzenia stawu skokowego.

<H2>Stopnie skręcenia stawu – jak rozpoznać i jakie podjąć działania? </H2>

Możemy wymienić trzy stopnie skręcenia stawu skokowego. Różnią się one przede wszystkim wielkością uszkodzeń oraz ograniczeniem zakresu ruchów, który się z nimi wiąże. Do najmniej niebezpiecznych i najczęściej występujących należy pierwszy stopień z którym możemy mieć do czynienia w wyniku wykręcenia stopy nawet w trakcie zwykłego chodu. Dochodzi wówczas do lekkiego nadwyrężenia torebki stawowej i więzadeł. Ból, który odczuwamy jest niewielki i nie przeszkadza nam w przemieszczaniu się. Czasem pojawia się obrzęk, zazwyczaj wokół kostki zewnętrznej. Ten stopień skręcenia w większości przypadków nie wymaga konsultacji ortopedycznej. Wystarczy, że unieruchomimy kostkę, odciążymy ją i będziemy stosować zimne okłady zmniejszające ból i stan zapalny. Sytuacja może się jednak zmienić, gdy zaobserwujemy, że obrzęk narasta – wówczas należy skonsultować się z ortopedą.

Dwa kolejne stopnie skręcenia stawu skokowego związane są z poważniejszymi uszkodzeniami jego struktury. Stopień drugi polega na częściowym przerwaniu więzadeł i torebki stawowej. Natężenie bólu jest średnie, choć na początku może być na tyle duże, że utrudnia chodzenie. Możemy też zaobserwować szybki rozwój obrzęku i pojawienie się krwiaka. W stopniu trzecim dochodzi do całkowitego rozerwania więzadeł i torebki stawowej. Ból nie zawsze jest większy niż przy stopniu drugim, ale jest on długotrwały i jego intensywność wzrasta podczas nacisku na stopę uniemożliwiając normalnie poruszanie się. Pojawiający się obrzęk i krwiak są bardzo widoczne i mogą obejmować cały obszar stawu. Stopień drugi i trzeci wymagają interwencji lekarza ortopedy, a ich nieprawidłowe leczenie może być przyczyną przewlekłej niestabilności stawu skokowego.

<H2>Jak odróżnić skręcenie od zwichnięcia</H2>

Zwichnięcie stawu skokowego często mylone jest z jego skręceniem. Zwichnięcie jest jednak znacznie poważniejszym urazem, związanym nie tylko z nadwyrężeniem elementów stawu, ale z przemieszczeniem struktur stawowych względem siebie. Zwichnięcie wymaga zazwyczaj interwencji chirurga, a później rehabilitanta. Niektóre z objawów zwichnięcia mogą być podobne do skręcenia kostki: opuchlizna, krwiaki, sińce. Dla zwichnięć charakterystyczne są przede wszystkim zniekształcenia, które wiążą się z przesunięciem kości względem siebie oraz silny ból, nawet w trakcie spoczynku. W przypadku podejrzenia zwichnięcia należy jak najszybciej udać się do ortopedy.

Należy pamiętać, że każdy źle leczony uraz stawu skokowego może wiązać się z późniejszymi problemami i koniecznością leczenia chirurgicznego. Jeżeli po urazie zauważasz u siebie niepokojące objawy ze strony narządu ruchu jak opuchnięcie czy krwiaki zapraszamy na konsultacje ortopedyczne do naszego Centrum Medycznego. Doświadczenie naszych lekarzy ortopedów i najnowocześniejszy sprzęt umożliwią właściwą diagnozę i wdrożenie odpowiedniego leczenia.
</Article>: null }






</>
    )
} 




export default Articles;


