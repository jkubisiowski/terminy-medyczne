import Layout from "../components/Layout";
import groq from "groq";
import {useEffect, useState} from "react";
import client from "../client";

const Policy = () => {
  return (
      <section className="hero-area term">
        <div className="container">
          <div className="section-title text-center">
            <h2>Polityka prywatności</h2>
          </div>
          <div>
            <h4>Drogi Użytkowniku!</h4>
            <p><b>Czego dotyczy niniejsza polityka prywatności?</b>
            <br></br>
            Przeglądając stronę internetową www.terminymedyczne.pl, jesteś jej Użytkownikiem. Chcemy, abyś w czasie korzystania z naszej strony internetowej czuł się bezpiecznie i nie musiał obawiać się o swoją prywatność. Dlatego też stworzyliśmy niniejszą politykę prywatności. Wyjaśnia ona, w jaki sposób właściciele strony wykorzystują i przetwarzają dane osobowe, które zbieramy od Ciebie podczas korzystania z naszej strony internetowej.</p>
            <p>Poniżej znajdziesz informacje o zasadach przetwarzania przez nas Twoich danych osobowych oraz o plikach cookie, które są wykorzystywane przez portal terminymedyczne.pl (dla ułatwienia zwany dalej Portalem) i jego podstrony. Informacje te zostały opracowane z uwzględnieniem rozporządzenia o ochronie danych osobowych (RODO) i stanowią komplet informacji, które osoby, których dane dotyczą, powinny otrzymać w związku z RODO.</p>
            <p><b>Kto jest administratorem danych osobowych i jak się z nim skontaktować?</b>
            <br></br>
            Administratorem danych osobowych jest twórca Portalu, lek. Konrad Adam Janik, osoba fizyczna, zamieszkały pod adresem: ul. Lea 5/10, 30-046 Kraków (zwany dalej Administratorem). Z Administratorem możesz skontaktować się za pośrednictwem poczty tradycyjnej lub poczty elektronicznej na adres: <a href="mailto:kontakt@terminymedyczne.pl">kontakt@terminymedyczne.pl</a>.
            <br></br>
            Jeśli masz jakiekolwiek pytania dotyczące polityki prywatności naszej firmy, danych, które posiadamy na Twój temat lub chcesz skorzystać z jednego z przysługujących Ci praw do ochrony danych, skontaktuj się z Administratorem danych osobowych za pośrednictwem poczty tradycyjnej lub poczty elektronicznej na adres: <a href="mailto:kontakt@terminymedyczne.pl">kontakt@terminymedyczne.pl</a>. 
            </p>
            <p><b>W jakim celu i jak zbieramy i przetwarzamy dane osobowe?</b>
            <br></br>
            Celami zbierania przetwarzania danych osobowych są:
                <ul>
                    <li>przesyłanie newslettera zainteresowanym osobom – ze względu na wyrażenie przez Użytkownika zgody na przetwarzanie swoich danych osobowych w określonym celu (art. 6 ust. 1 lit. a RODO)</li>
                    <li>identyfikacja nadawcy oraz obsługa jego zapytania/korespondencji przesłanej na podane na dowolny z podanych na Portalu adres e-mail - ze względu na wyrażenie zgody przez Użytkownika (art. 6 ust. 1 lit. a RODO). </li>
                    <li>świadczenie usług drogą elektroniczną w zakresie udostępniania Użytkownikom treści i funkcji Portalu – ze względu na niezbędność przetwarzania do wykonania umowy (art. 6 ust. 1 lit b RODO); </li>
                    <li>cele analityczne i statystyczne – ze względu na uzasadniony interes Administratora (art. 6 ust. 1 lit f RODO), który polega na prowadzeniu analiz aktywności i preferencji Użytkowników w celu poprawy świadczonych usług;</li>
                    <li>cele marketingowe – ze względu na uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO) polegający na promowaniu Portalu.</li>
                    <li>ewentualne ustalenie i dochodzenie roszczeń lub obrona przed nimi –ze względu na uzasadniony interes Administratora (art. 6 ust. 1 lit f RODO) polegający na ochronie jego praw;</li>
                </ul>
            </p>
            <p>Pozyskiwanie i przetwarzanie Twoich danych osobowych i informacji o Twoim zachowaniu na stronie odbywa się, gdy:
                <ul>
                    <li>korzystasz z Portalu lub przeglądasz ją za pomocą plików cookie przeglądarki.</li>
                    <li>dobrowolnie rejestrujesz się do newslettera, wprowadzając swoje dane i wyrażając zgodę na wysyłanie Ci ciekawych informacji za pośrednictwem poczty elektronicznej.</li>
                    <li>dobrowolnie kontaktujesz się z nami za pośrednictwem poczty elektronicznej. </li>
                    <li>zapisujemy w urządzeniach końcowych pliki cookie (tzw. „ciasteczka”).</li>
                </ul>
            </p>
            <p><b>Jakie dane zbieramy? </b>
            <br></br>
            Gromadzimy następujące dane, w tym dane osobowe:
                <ul>
                    <li>w przypadku dobrowolnej subskrypcji do newslettera: imię i adres e-mail. Portal w niektórych wypadkach może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu URL strony zawierającej formularz.</li>
                    <li>w przypadku przesłania wiadomości e-mail na jeden z adresów podanych na Portalu: w szczególności adres e-mail, imię i/lub nazwisko Użytkownika, treść wiadomości, informacje pozyskane w toku korespondencji. Podanie tych danych jest dobrowolne.</li>
                    <li>w przypadku reklamacji: w szczególności adres e-mail, imię i/lub nazwisko Użytkownika, treść reklamacji, informacje pozyskane w toku reklamacji, w tym okoliczności zdarzenia będącego jej przyczyną. Podanie tych danych jest dobrowolne. W toku rozpatrywania reklamacji możemy przetwarzać szereg innych informacji, takich jak informacje o korzystaniu przez Użytkownika z usługi, plików cookie lub innych podobnych technologii oraz informacji o jego urządzeniach.</li>
                    <li>nformacje dotyczące urządzenia Użytkownika w celu zapewnienia poprawności działania usług: informacje o parametrach połączenia i sesji, adres IP urządzenia, informacje zawarte w plikach cookie lub innych podobnych technologiach, dane dotyczące sesji, , dane używanej przeglądarki internetowej, dane dotyczące urządzenia, a także dane dotyczące aktywności na Stronie, w tym poszczególnych podstronach, ilości spędzanego czasu na poszczególnych podstronach <b>oraz</b> korzystania z poszczególnych funkcjonalności usług. Informacje te nie zawierają danych dotyczących tożsamości Użytkownika, jednak w połączeniu z innymi informacjami mogą stanowić dane osobowe i w związku z tym Administrator obejmuje je pełną ochroną w zgodzie z RODO.</li>
                </ul>
            </p>
            <p><b>Gdzie przechowujemy Twoje dane?</b>
            <br></br>
            Przechowujemy Twoje dane w bezpieczny sposób na serwach hostingu <a href="https://home.pl/" target="_blank">home.pl</a>.
            </p>
            <p><b>Jak chronione są Twoje dane?</b>
            <br></br>
            Miejsca wprowadzania danych osobowych są chronione w warstwie transmisji (tzw. certyfikat SSL). Dzięki temu dane osobowe wprowadzone na Portalu zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze. Istotnym elementem ochrony danych jest również regularna aktualizacja wszelkiego oprogramowania wykorzystywanego przez Administratora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych.
            </p>
            <p>Administrator na bieżąco prowadzi analizę ryzyka w celu zapewnienia, że dane osobowe przetwarzane są przez niego w sposób bezpieczny – zapewniający przede wszystkim, że dostęp do danych mają jedynie osoby upoważnione, jedynie w zakresie, w jakim jest to niezbędne ze względu na wykonywane przez nie zadania. Administrator dba o to, by wszystkie operacje na danych osobowych były rejestrowane i dokonywane jedynie przez uprawnione podmioty współpracujące, oraz aby te podmioty gwarantowały stosowanie odpowiednich środków ochrony danych.</p>
            <p><b>Komu mogą być przekazywane Twoje dane?</b>
            <br></br>
            W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców, jak:
                <ul>
                    <li>firmy obsługujące serwery,</li>
                    <li>irmy i osoby fizyczne obsługujące i edytujące zawartość Portalu,</li>
                    <li>firmy świadczące usługi informatyczne (IT),</li>
                    <li>firmy świadczące usługi marketingowe i PR,</li>
                    <li>firmy świadczące usługi prawne i doradcze,</li>
                    <li>podmiotom, które zażądają przekazanie tych danych, opierając się na odpowiednich przepisach prawa.</li>
                </ul>
            </p>
            <h4>Przekazujemy podmiotom zewnętrznym zanonimizowane pliki cookie celem poprawy funkcjonowania serwisu i zwiększenia jego atrakcyjności.</h4>
            <p>Stosujemy analizę statystyczną ruchu na stronie poprzez Google Analytics (Google Inc. z siedzibą w USA). Nie przekazujemy do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.
            <br></br>
            <b>Szczegółowe informacje o zakresie i zasadach zbierania danych w związku z tą usługą można znaleźć pod linkiem: </b><a href="https://www.google.com/intl/pl/policies/privacy/partners" target="_blank">https://www.google.com/intl/pl/policies/privacy/partners</a></p>
            <p>Przesyłamy newsletter za pomocą platformy do e-mail marketingu MailChimp, dlatego jeżeli zdecydujesz się na subskrypcję newslettera, to odbiorcą Twoich danych jest The Rocket Science Group LLC z siedzibą w Atlancie, USA. W związku z przesyłaniem newslettera poprzez platformę MailChimp, dane osobowe są przekazywane poza Unię Europejską do Stanów Zjednoczonych Ameryki. Dane są bezpieczne, ponieważ są chronione programem „Tarczy Prywatności UE-USA” (Decyzja Wykonawcza Komisji (UE) 2016/1250 z dnia 12 lipca 2016 r. w sprawie adekwatności ochrony zapewnianej przez Tarczę Prywatności UE-USA).
             <br></br>
             Więcej informacji znajduje się pod adresem: <a href="https://mailchimp.com/help/about-mailchimp-and-the-gdpr/" target="_blank">https://mailchimp.com/help/about-mailchimp-and-the-gdpr/</a>
             <br></br>
             <b>Stosujemy rozwiązanie automatyzujące działanie Portalu w odniesieniu do Użytkowników, np. mogące przesłać maila do Ciebie, o ile wyraziłeś zgodę na otrzymywanie newslettera.</b>
            </p>
            <h4>Administrator przetwarza dane osobowe Użytkowników odwiedzających profile Administratora prowadzone w mediach społecznościowych (Facebook, Instagram). Dane te są przetwarzane wyłącznie w związku z prowadzeniem profilu, w tym w celu informowania Użytkowników o aktywności Administratora oraz promowaniu różnego rodzaju wydarzeń, usług oraz produktów. </h4>
            <p>Masz prawo zgłoszenia sprzeciwu wobec przetwarzania jego danych osobowych w celach marketingowych, np. do zaprzestania wysyłania Ci newslettera – w tym celu kliknij tutaj.</p>
            <p><b>Jakie masz prawa do ochrony danych? </b>
            <br></br>
            Chcielibyśmy mieć pewność, że jesteś w pełni świadomy/a wszystkich swoich praw do ochrony danych. Jako użytkownik naszego Portalu masz prawo do: 
                <ul>
                    <li>dostępu do danych osobowych - masz prawo zażądać od Administratora potwierdzenia, czy przetwarzane są Twoje dane osobowe, oraz do uzyskania dostępu do tych danych.</li>
                    <li>otrzymania kopii danych – uzyskania kopii Twoich danych podlegających przetwarzaniu, przy czym pierwsza kopia jest bezpłatna. Za kolejne kopie Administrator może nałożyć opłatę wynikającą z kosztów administracyjnych. </li>
                    <li>sprostowania danych - masz prawo zażądać od Administratora poprawienia wszelkich danych dotyczących Ciebie, które uważasz za nieprawidłowe lub do uzupełnienia niekompletnych danych.</li>
                    <li>usunięcia danych - masz prawo zażądać od Administratora usunięcia Twoich danych osobowych, jeżeli Administrator nie ma już podstawy prawnej do ich przetwarzania lub dane nie są już niezbędne do celów przetwarzania.</li>
                    <li>ograniczenia przetwarzania danych - masz prawo zażądać, aby Administrator danych ograniczył przetwarzanie Twoich danych osobowych w następujących sytuacjach: gdy kwestionujesz prawidłowość danych osobowych – na okres pozwalający Administratorowi sprawdzić prawidłowość tych danych; gdy przetwarzanie jest niezgodne z prawem, a sprzeciwiasz się ich usunięciu, żądając ograniczenia ich wykorzystania; gdy Administrator nie potrzebuje już tych danych, ale są one Tobie potrzebne do ustalenia, dochodzenia lub obrony roszczeń; gdy wniesiesz sprzeciw wobec przetwarzania – do czasu stwierdzenia, czy prawnie uzasadnione podstawy po stronie Administratora są nadrzędne wobec podstaw Twojego sprzeciwu.</li>
                    <li>przenoszenia danych - masz prawo zażądać, aby Administrator danych przekazał Twoje dane w <b>powszechnie używanym formacie</b> bezpośrednio do Ciebie lub innemu administratorowi.</li>
                    <li>do sprzeciwu wobec przetwarzania danych - Masz prawo sprzeciwić się przetwarzaniu Twoich danych osobowych przez Administratora danych w prawnie uzasadnionych celach, z przyczyn związanych z Twoją szczególną sytuacją, w tym wobec profilowania. Jeżeli według Administratora Twoje interesy będą nadrzędne do interesów Administratora, Administrator będzie zobowiązany zaprzestać przetwarzania Twoich danych w tych celach.</li>
                    <li>do cofnięcia wyrażonej zgody w każdym momencie i bez podawania przyczyny. Przetwarzanie danych osobowych dokonane przed cofnięciem zgody nadal pozostanie zgodne z prawem. Cofnięcie zgody spowoduje zaprzestanie przetwarzania przez Administratora danych osobowych w celu, w którym zgoda ta została wyrażona.</li>
                </ul>
                Aby skorzystać z wyżej wymienionych praw, skontaktuj się z Administratorem, wykorzystując podane wyżej dane kontaktowe i poinformuj go, z którego prawa i w jakim zakresie chcesz skorzystać.
            </p>
            <p><b>Co to są pliki cookie?</b>
            <br></br>
            Portal korzysta z plików cookie. Są to dane informatyczne, a w szczególności niewielkie pliki tekstowe zapisywane na urządzeniu końcowym osoby odwiedzającej Portal. Przeznaczone są do korzystania ze stron internetowych Portalu. Informacje zbierane przy pomocy ciasteczek wykorzystywane są dla prawidłowego działania Portalu i jego funkcji, w celu dostosowania zawartości Portalu do preferencji użytkowników, optymalizacji korzystania z Portalu oraz w celach statystycznych i analitycznych, jak również w celach realizacji celów określonych powyżej w części "Istotne techniki marketingowe". Kiedy odwiedzasz nasze strony internetowe, możemy automatycznie zbierać od Ciebie informacje za pomocą plików cookie lub podobnych technologii.
            </p>
            <p>W ramach Portalu stosowane są „stałe” pliki cookie - przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookie lub do czasu ich usunięcia przez Użytkownika. </p>
            <p>Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookie w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie - przeglądarka internetowa umożliwia usunięcie plików cookie. Możliwe jest także automatyczne blokowanie plików cookie - szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej. Ograniczenia stosowania plików cookie mogą jednak wpłynąć na niektóre funkcjonalności Portalu, co może utrudniać lub uniemożliwiać korzystanie z Portalu.</p>
            <p>Pliki cookie zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA).</p>
            <p><b>Jak długo przetwarzane są Twoje dane?</b>
            <br></br>
            Twoje dane osobowe przetwarzane będą przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami. Okres przetwarzania danych zależy od rodzaju świadczonej usługi i celu ich przetwarzania.
            </p>
            <p><b>Dane podane w celu realizacji usługi newslettera są przechowywane do czasu zakończenia usługi realizacji newslettera, np. w przypadku wycofania zgody na jego wysyłkę.
            <br></br>
            Dane otrzymane na drodze korespondencji/reklamacji są przetwarzane przez czas niezbędny do satysfakcjonującego zakończenia korespondencji/rozpatrzenia reklamacji, a następnie są archiwizowane, w razie konieczności obrony przed ewentualnymi roszczeniami wobec właścicieli Portalu. 
            <br></br>
            Dane statystyczne i analityczne są przetwarzane w ramach bieżących działań Administratora, lecz nie dłużej niż przez 60 dni od otrzymania informacji. Po tym czasie Administrator może dalej przetwarzać ogólne dane statystyczne, które będą pozbawione jakichkolwiek informacji dotyczących poszczególnych użytkowników.</b>
            <br></br>
            Okres dostępności danych statystycznych w narzędziach Google Analytics, MailChimp dostarczanych przez zewnętrznych dostawców rozwiązań analitycznych może być dłuższy niż 60 dni, i pozostaje to poza zakresem decyzyjnym Administratora.
            Inne dane osobowe przechowywane są przez okres niezbędny do realizacji celu, w którym zostały zebrane.
            Po upływie okresu przetwarzania dane są nieodwracalnie usuwane lub anonimizowane.
            </p>
            <p><b>Linki do innych stron internetowych</b>
            <br></br>
            Nasz Portal zawiera linki do innych, zewnętrznych stron internetowych. Nasza polityka prywatności dotyczy tylko naszej strony internetowej, dlatego po kliknięciu linku do innej strony internetowej należy zapoznać się z jej polityką prywatności, która na niej obowiązuje.
            </p>
            <p><b>Jak zmienia się nasza Polityka prywatności?</b>
            <br></br>
            Administrator regularnie sprawdza politykę prywatności Portalu i zgodnie z bieżącymi potrzebami i regulacjami prawnymi umieszcza wszelkie aktualizacje na stronie internetowej: <a href="https://terminymedyczne.pl/polityka-prywatnosci" target="_blank">www.terminymedyczne.pl/polityka-prywatnosci</a>. 
Niniejsza polityka prywatności została ostatnio zaktualizowana w dniu 31 lipca 2020 r.</p>
            <p><b>Jak skontaktować się z organem ochrony danych?</b>
            <br></br>
            Jeżeli chcesz zgłosić skargę lub uważasz, że nie odnieśliśmy się do Twojego problemu w zadowalający sposób, możesz skontaktować się z Prezesem Urzędu Ochrony Danych Osobowych, dostępnym korespondencyjnie: ul. Stawki 2, 00-193 Warszawa, lub poprzez elektroniczną skrzynkę podawczą dostępną na stronie: <a href="https://www.uodo.gov.pl/pl/p/kontakt" target="_blank">https://www.uodo.gov.pl/pl/p/kontakt</a>, jak również telefonicznie pod numerem (22) 531 03 00.</p>
            </div>
        </div>
      </section>
  )
}

export default Policy;
