var przyslowia = ["Apetyt rośnie w miarę jedzenia", "Bez pracy nie ma kołaczy", "Biednemu zawsze wiatr w oczy",
"Być kulą u nogi", "Być pracowitym jak pszczoła", "Cel uświęca środki", "Cisza jak makiem zasiał",
"Co cię nie zabije to cię wzmocni", "Co dwie głowy to nie jedna", "Co kraj, to obyczaj",
"Co ma wisieć nie utonie", "Co ma piernik do wiatraka?", "Co się odwlecze to nie uciecze", "Co z oczu to z serca",
"Co za dużo to niezdrowo", "Czego Jaś się nie nauczy tego Jan nie będzie umiał", "Czuć się jak ryba w wodzie", "Czym chata bogata tym gościom rada",
"Darowanemu koniowi w zęby się nie zagląda", "Dla chcącego nic trudnego", "Do wesela się zagoi", "Drzeć z kimś koty", "Dzieci i ryby głosu nie mają",
"Gdy kota nie ma myszy harcują", "Gdy się człowiek spieszy to się diabeł cieszy", "Gdzie kucharek sześć tam nie ma co jeść", "Głupi ma zawsze szczęście",
"Gość w dom Bóg w dom", "Grosz do grosza a będzie kokosza", "Hulaj dusza piekła nie ma", "Idzie luty podkuj buty", "Jajko mądrzejsze od kury",
"Jaka praca taka płaca", "Jak cię widzą tak cię piszą", "Jak kamień w wodę", "Jak Kuba Bogu tak Bóg Kubie", "Jak pies je to nie szczeka bo mu miska ucieka",
"Jak się nie ma co się lubi to się lubi co się ma", "Jak sobie pościelesz tak się wyśpisz", "Jak trwoga to do Boga", "Jedna jaskółka wiosny nie czyni",
"Każdy jest kowalem swego losu", "Kląć jak szewc", "Kłamstwo ma krótkie nogi", "Kogut myślał o niedzieli a w sobotę łeb ucięli", "Komu w drogę temu czas",
"Kto pierwszy ten lepszy", "Kto pod kim dołki kopie ten sam w nie wpada", "Kto pyta nie błądzi", "Kto rano wstaje temu Pan Bóg daje", "Kto się czubi ten się lubi"];

var aktorzy = ["Maciej Sthur","Tomasz Karolak", "Borys Szyc",'Piotr Adamczyk','Artur Żmijewski','Olaf Lubaszenko','Małgorzata Foremniak', 'Bartosz Opania','Michał Żebrowski',
'Cezary Żak','Sonia Bohosiewicz', 'Antoni Pawlicki', 'Jakub Wesołowski','Magdalena Różdżka', 'Agnieszka Dygant', 'Mateusz Damięcki', 'Robert De Niro', 'Al Pacino',
'Kevin Spacey', 'Jack Nicholson', 'Sean Connery', 'Harrison Ford','Samuel L. Jackson','Morgan Freeman','Clint Eastwood','Tom Hanks','James Stewart','Alec Guinness',
'Nicolas Cage','Anthony Hopkins','Michael Caine','Steve Buscemi','Steve McQueen', 'Cary Grant','Marlon Brando', 'Johnny Depp','Christopher Lee', 'Humphrey Bogart','Jodie Foster',
'Brad Pitt','Audrey Hepburn', 'Bruce Willis','Gary Oldman','Christopher Walken','Mel Gibson','Russell Crowe','Dustin Hoffman','Ewan McGregor','Jack Lemmon','Peter Sellers','John Travolta','Edward Norton',
'Gene Hackman','Julia Roberts','Jim Carrey','Bruce Lee','Harvey Keitel','John Cusack','Marilyn Monroe','Jean Reno','Arnold Schwarzenegger','Richard Burton','Paul Newman','Bettie Davis', 'Tom Cruise'];

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

var kategoria = ['przyslowia', 'aktorzy'];
//var kategoria = kategorie.random();

if (kategoria.random() == 'przyslowia')
{
    kategoria = "przysłowia";
    var haslo = przyslowia.random();
}
else
{
    kategoria = "aktorzy";
    var haslo = aktorzy.random();
}
haslo = haslo.toUpperCase();

var haslo_zakryte = "";
var ile_skuch = 0;

var yes = new Audio("sounds/yes.wav");
var no = new Audio("sounds/no.wav");

for (i=0; i<haslo.length; i++)
{
    if (haslo.charAt(i) == " ") haslo_zakryte = haslo_zakryte + " ";
    else haslo_zakryte = haslo_zakryte + "-";
}

function wypisz_kategorie()
{
    document.getElementById("kategoria").innerHTML = '<span style="font-weight:400;"> Kategoria: ' + kategoria + '</span>';
}

function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo_zakryte;
}

window.onload = start;

var litery = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J",
            "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś",
            "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"];

function start()
{

    var tresc_diva = "";

    for (i = 0; i <= 34; i++)
    {
        var id = "lit" + i;
        tresc_diva += '<div class="litera" onclick=sprawdz(' + i + ') id=' + id + '>' + litery[i] + '</div>';
        if ((i+1) % 7 == 0) tresc_diva += '<div style="clear: both;"></div>';
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;

    wypisz_haslo();
    wypisz_kategorie();
}


String.prototype.ustawZnak = function(miejsce, znak)
{
    if (miejsce > (this.length - 1)) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
    var trafiona = false;

    for (i=0; i<haslo.length; i++)
    {
        if (haslo.charAt(i) == litery[nr])
        {
            haslo_zakryte = haslo_zakryte.ustawZnak(i, litery[nr]);
            trafiona = true;
        }

    }

    if (trafiona == true)
    {
        var id = "lit" + nr;

        yes.play();

        document.getElementById(id).style.background = "#003300";
        document.getElementById(id).style.border = "3px solid #00C000";
        document.getElementById(id).style.color = "#00C000";
        document.getElementById(id).style.cursor = "default";

        wypisz_haslo();
    }
    else
    {
        var id = "lit" + nr;

        no.play();

        document.getElementById(id).style.background = "#330000";
        document.getElementById(id).style.border = "3px solid #C00000";
        document.getElementById(id).style.color = "#C00000";
        document.getElementById(id).style.cursor = "default";
        document.getElementById(id).setAttribute("onclick", ";");

        ile_skuch++;
        var zrodlo = "img/s" + ile_skuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="' + zrodlo + '" alt="" />';
    }

    // wygrana
    if (haslo == haslo_zakryte) document.getElementById("alfabet").innerHTML = 'Brawo! Odgadłeś hasło!<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

    // przegrana
    if (ile_skuch >= 9) document.getElementById("alfabet").innerHTML = 'Przegrana!<br/>Prawidłowe hasło: ' + haslo + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}
