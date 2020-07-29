import Head from "next/head";
import TMHead from "../components/TMHead";

const Regulamin = () => {
  return (<>
      <TMHead></TMHead>
        <div className="container policy">
          <div className="section-title text-center">
            <h2>Regulamin Portalu TerminyMedyczne.pl</h2>
          </div>
          <div>
            <p>Data ostatniej aktualizacji: 20.07.2020</p>
            <h5>Postanowienia ogólne</h5>
            <p>
            <ul>
                <li>Niniejszy Regulamin określa zasady korzystania z usług portalu internetowego TerminyMedyczne.pl, zwanego dalej Portalem.</li>
                <li>Użytkownikiem Portalu (zwanym dalej „Użytkownikiem”) jest każda osoba korzystająca ze strony internetowej www.TerminyMedyczne.pl</li>
                <li>Celem Portalu jest wspomaganie komunikacji pomiędzy lekarzami a pacjentami za pośrednictwem intuicyjnej wyszukiwarki, za pomocą której Użytkownicy mogą szybko odnaleźć przystępne i łatwo zrozumiałe wyjaśnienia specjalistycznych terminów i skrótów medycznych. Baza rekordów jest systematycznie rozbudowywana przez lekarzy.</li>
                <li>Usługi Portalu świadczone są przez osoby fizyczne: lek. Małgorzatę Jolantę Łukaszewicz i lek. Konrada Adama Janika, zwanych dalej Właścicielami Portalu.</li>
                <li>Usługi Portalu obejmują:
                    <ul>
                        <li>wyszukiwanie przystępnych, zrozumiałych objaśnień specjalistycznych terminów oraz skrótów medycznych, opracowywanych przez lekarzy;</li>
                        <li>artykuły na blogu usprawniające komunikację lekarz-pacjent.</li>
                    </ul>
                </li>
                <li>Korzystanie z portalu jest bezpłatne.</li>
                <li>Portal nie zawiera treści o charakterze reklamowym odnoszących się do podmiotów leczniczych ani usług leczniczych w rozumieniu Ustawy z dnia 15 kwietnia 2011 roku o działalności leczniczej oraz art. 63 Kodeksu Etyki Lekarskiej.</li>
                <li>Właściciele Portalu mają możliwość zmiany lub aktualizacji Regulaminu użytkowania Portalu w dowolnym momencie, szczególnie w przypadku zmiany sytuacji prawnej. Na stronie www.TerminyMedyczne.pl/regulamin zawsze można wyświetlić aktualny Regulamin Portalu. Zaleca się, aby Użytkownicy we własnym interesie odwiedzali tę stronę w regularnych odstępach czasu, aby sprawdzić, czy warunki użytkowania są aktualne.</li>
                <li>Przed rozpoczęciem korzystania z Usług serwisu TerminyMedyczne.pl Użytkownik zobowiązany jest do zapoznania się z niniejszym Regulaminem.</li>
                <li>Niniejszy Regulamin jest udostępniany Użytkownikowi przed realizacją Usług.</li>
            </ul>
            </p>
            <h5>Zastrzeżenia, zapewnienia, wyłączenie odpowiedzialności</h5>
            <p>
            <ul>
                <li>Właściciele Portalu są właścicielami praw autorskich do wszelkich treści o charakterze edukacyjnym udostępnionych w Portalu.</li>
                <li>Wszystkie treści publikowane na stronie są chronione prawem autorskim na podstawie Ustawy z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych.</li>
                <li>Treści udostępniane są Użytkownikom do osobistego użytku w celach edukacyjnych.  Jakiekolwiek inne, niż opisane powyżej, wykorzystywanie w całości lub we fragmentach treści udostępnionych materiałów i informacji (np. kopiowanie, powielanie, przetwarzanie, publikowanie), wymaga zgody Właścicieli Portalu wyrażonej na piśmie.</li>
                <li>Właściciele Portalu dokładają wszelkich starań, by treści edukacyjne pozbawione były jakichkolwiek błędów i pomyłek.</li>
                <li>Pomimo starannej kontroli zamieszczanych treści Właściciele Portalu nie ponoszą żadnej odpowiedzialności za kompletność, aktualność i dokładność treści zamieszczanych na portalu.</li>
                <li>Treści zamieszczone na Portalu mają wartość edukacyjną. Treści te nie stanowią ani nie zastępują porady lekarskiej. Nie stanowią ani nie zastępują również opinii, orzeczenia lub informacji o stanie zdrowia określonego pacjenta w rozumieniu Ustawy z dnia 5 grudnia 1996 r. o zawodach lekarza i lekarza dentysty. Nie należy na ich podstawie podejmować decyzji terapeutycznych</li>
                <li>Właściciele serwisu nie ponoszą odpowiedzialności za decyzje oraz poniesione przez użytkowników szkody. Wszelkie roszczenia prawne wobec Właścicieli Portalu dotyczące ewentualnych szkód wynikających z nieprawidłowego korzystania z Portalu są wykluczone.</li>
            </ul>
            </p>
            <h5>Udostępnianie linku do Portalu</h5>
            <p>
            <ul>
                <li>Właściciele Portalu udostępniają bezpłatnie na życzenie odpowiednie teksty i grafiki w celu zintegrowania linku internetowego do strony głównej Portalu z innymi witrynami.</li>
            </ul>
            </p>
            <h5>Dane kontaktowe</h5>
            <p>
            <ul>
                <li>Właścicielem Portalu TerminyMedyczne.pl są osoby fizyczne: lek. Konrad Janik oraz lek. Małgorzata Łukaszewicz.</li>
                <li>Wszelkie uwagi, reklamacje, komentarze (zwłaszcza do poprawności lub stopnia zrozumienia objaśnień), pytania lub nieprawidłowości związane z działaniem Portalu Użytkownik może kierować na adres e-mail: <a href="mailto:kontakt@terminymedyczne.pl">kontakt@terminymedyczne.pl</a>.</li>
            </ul>
            </p>
            <h5>Ochrona danych Użytkownika</h5>
            <p>
            <ul>
                <li>Informacje dotyczące ochrony danych Użytkownika znajdują się w Polityce Prywatności Portalu, która stanowi załącznik do niniejszego Regulaminu i której aktualna wersja jest dostępna na stronie: www.TerminyMedyczne.pl/polityka-prywatnosci</li>
            </ul>
            </p>
            <div className="text-center">
            <p>Copyright © 2020 Konrad Janik i Małgorzata Łukaszewicz</p>
            </div>
        </div>
        </div>
        </>
  )
}

export default Regulamin;
