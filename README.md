# PIGK-lab
[Github pages](https://tybur3.github.io/PIGK-lab/)


### Zadania do wykonania w ramach laboratoriów 1
Proszę zaprojektować stronę internetową bazując na szablonie HTML zawartym w pliku Lab_1.zip. Zawartość strony internetowej należy wypełnić tekstem typu Lorem Impsum. Tekst generujemy przy wykorzystaniu darmowych generatorów testowej zawartości dla strony. Wygląd graficzny poszczególnych elementów strony internetowej można zaprojektować w dowolnym programie graficznym typu Gimp, Photoshop, Expression Designer, Inkspace. Wmiarę możliwości większość projektu staramy się zrobić wykorzystując możliwości kaskadowych arkuszy styli. W projekcie należy uwzględnić dobór odpowiednich elementów graficznych dla elementów menu, odsyłaczy, list zwykłych oraz list punktowanych. Wszystkie modyfikacje strony (wygląd), jeżeli jest to możliwe, należy zrealizować wyłącznie poprzez modyfikację kaskadowych arkuszy styli CSS. 

### Zadania do wykonania w ramach laboratoriów 2
1. Dla utworzonej strony na podstawie załączonego szablonu (poprzednia instrukcja 
laboratoryjna), proszę dobrać układ kolorów dla widgetów biblioteki jQuery UI. Zadanie 
należy zrealizować wykorzystując do tego ThemeRoller: https://jqueryui.com/themeroller/
* W pierwszej kolejności dobieramy najbardziej pasujący układ kolorów z galerii,
* Następnie edytujemy wybrany układ kolorów zgodnie z wymaganiami projektowanej 
strony
* Po przygotowaniu wyglądu, szablon pobieramy do katalogu projektu (wybranie Download theme powoduje przejście do punktu 2, gdzie mamy dołączony zmodyfikowany szablon).

2. Na następnym etapie należy pobrać bibliotekę jQery UI, wykorzystując do tego Download 
Builder: https://jqueryui.com/download/

Narzędzie umożliwia skomponowanie zawartości biblioteki według własnych potrzeb, elementy biblioteki nie używane, mogą być pominięte w budowaniu źródeł do pobrania. W przypadku naszego projektu pobieramy pełną wersję.

3. Po pobraniu biblioteki, wszystkie źródła należy rozpakować do odpowiedniego podkatalogu 
(np. jQuery) w katalogu naszego projektu ze stroną internetową, następnie dołączamy źródła 
biblioteki i wymagane pliki szablonu (css) do projektowanej strony internetowej. Poniżej 
przedstawiono wycinek kodu:

4. W części centralnej strony proszę umieścić widget accordion z czterema częściami 
rozwijanymi (domyślna zawartość)
Sposób definiowania kodu html dla widgetu oraz odpowiedniego kodu jQuery można znaleźć 
pod adresem: https://jqueryui.com/accordion/ - link do podglądu źródeł

5. W pierwszej części accordion, proszę dodać widget tabs z 2 zakadkami, nagłówki zakładek to 
tabela oraz Sterowanie

6. W pierwszej zakładce proszę utworzyć tabelę złożoną z trzech kolumn o dowolnej zawartości, 
tabela powinna zawierać jakieś przykładowe dane. Tabelę należy tak sformatować aby 
wyświetlała się po lewej stronie z uwzględnieniem właściwego marginesu. (tabela musi być 
inna niż przykładowa ze strony jQuery)

7. Poniżej utworzonej tabeli proszę dodać przycisk Dodaj nowy ……… (zależnie od zawartości 
tabeli). Przycisk ma aktywować okno modalne z formularzem dodającym dane dla nowego 
wiersza w tabeli oraz posiadać dwa przyciski: Dodaj, Anuluj.
Przykład takiego rozwiązania można znaleźć pod adresem: 
https://jqueryui.com/dialog/#modal-form

8. Dla jednej z kolumn tabeli, należy w oknie modalnym dodać widget Controlgroup 
umożliwiający wybór jednej pozycji z wielu.

9. Należy zdefiniować animację pokazywania oraz chowania okna dialogowego odmienną w 
stosunku do tej, którą można odnaleźć w przykładzie ze strony jQuery.

10. W formularzu należy zastosować dowolną walidację danych:
a. W przypadku błędnie wpisanej wartości, pola edycyjne mają być zabarwione na kolor 
ostrzegawczy (zgodny z przyjętą kolorystyką strony),
b. W przypadku poprawnej wartości, pola mają być oznaczone kolorem 
potwierdzającym prawidłowe wypełnienie formularza),

11. W drugiej zakładce widgetu tabs (Sterowanie), proszę dodać trzy widgety Slider ułożone 
pionowo. Widgety mają służyć do ustawiania parametrów pracy klimatyzacji:
a. Temperatury: 15 – 25 stopni, zmiana koloru od niebieskiego do czerwonego
b. Wilgotności: 0 – 100%, zmiana koloru od szarego do niebieskiego 
c. Jakości powietrza: zmiana koloru zgodnie z opisem dla AIQ (Air Quality Index), 
wybieramy kolory skrajne, zakres wartości 0 – 500.
Do reprezentacji rodzaju parametrów można użyć ikon z Internetu. 
Podczas przesuwania Slidera, automatycznie ma się zmieniać kolor Slidera. Przykład 
podobnego rozwiązania można odnaleźć pod adresami, ale dotyczą wyboru koloru:
* https://jqueryui.com/slider/#colorpicker
* https://jqueryui.com/slider/#multiple-vertical

### Zadania do wykonania w ramach laboratoriów 3

1. Dla widgetu Accordion proszę podmienić/zmodyfikować animację zmieniającą widoczność 
poszczególnych fragmentów widgetu.

2. Dla widgetu Tabs proszę wprowadzić animację pokazującą wybraną zakładkę (jej zawartość). 
Powyżej proszę dodać przycisk otwierający okno dialogowe z formularzem umożliwiającym 
dodanie nowej zakładki dla widgetu Tabs. Podobne rozwiązanie można znaleźć na stronie: 
https://jqueryui.com/tabs/#manipulation.

3. Proszę zmienić zachowanie widgetu Tabs, tak aby przełączał się po najechaniu kursorem 
myszy.

4. Proszę włączyć możliwość sortowania kolejności zakładek, przykład: 
https://jqueryui.com/tabs/#sortable

5. Dla utworzonej tabeli z poprzednich zajęć laboratoryjnych proszę dodać w nagłówku 
checkBoxRadio umożliwiający włączenie zabarwienia dla wierszy parzystych. Włączenie 
zabarwienia powinno odbyć się w formie animacji trwającej około 0.5 s. Podpowiedź: do 
realizacji zadania można wykorzystać funkcję jQuery toogleClass(), wybór właściwych wierszy 
można zrealizować jedną z funkcji operującej na kolekcji elementów.

6. Dla tabeli z punktu 5 proszę dodać animację podświetlającą wiersz nad którym znajduje się 
kursor myszy. Należy zmienić kolor tła wiesza, kolor czcionki oraz grubość obramowania. W
czasie animacji rozmiar wiersza nie może ulec zmianie. Zmiana koloru powinna być inna dla 
wierszy parzystych, jak i nieparzystych. Podpowiedź: wszystkie zmiany można wykonać 
podobnie jak w przykładzie z wykładów. Aby uzyskać brak zmiany rozmiaru wiersza -
zwiększając grubość obramowania np. można zmniejszyć padding. Sumarycznie należy uzyskać 
tą samą ilość pikseli.

7. Dla zadania z poprzednich laboratoriów (punkt 7) proszę zdefiniować animację polegającą na 
płynnym wstawieniu nowego wiersza do tabeli. Podpowiedź: Wstawiamy wiersz jako ukryty
(trzeba sprawdzić, co należy zrobić z wysokością wiersza), następnie wykorzystujemy funkcję 
jQuery show() z odpowiednio dobrną animacją pokazującą dodany wiersz.

8. Proszę rozszerzyć zadanie z punktu 7 o usuwanie wiersza.

9. Proszę dodać przycisk do każdego wiersza umożliwiający chwilowe chowanie wybranych 
wierszy. W Nagłówku tabeli natomiast proszę dodać przycisk pokazujący wszystkie wiersze.
(Czy da się zrobić to samo zadanie dla kolumn?)

10. Dla zadania 10 z poprzednich laboratoriów proszę zastosować jakąś prostą animację 
sygnalizującą błędnie wprowadzone dane do formularza (według własnego pomysłu). Np.
animacja polegająca na pojawieniu się obramowania czerwonego dla pola edycyjnego, drżenie 
pola edycyjnego (funkcje easing). Po wprowadzeniu poprawnej wartości – przejście z koloru 
czerwonego do np. zielonego (czas trwania 0.7 s).
