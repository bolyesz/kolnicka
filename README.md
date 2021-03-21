# Z nuly do produkcie za 1 deň? Challenge accepted!

Toto je oficiálny repozitár pre online workshop Kôlnička 2021.

## Potrebné technológie a programy

Pri práci na workshope budeme využívať nasledujúce technológie a programy:

- [Node](https://nodejs.org/)
  - verzia LTS
- [Git Bash](https://git-scm.com/downloads)
  - pre Windows používateľov
  - Linux/Mac používateľom stačí pôvodný terminál
- [VSCode](https://code.visualstudio.com/)
  - preferovaný editor, avšak môžete využiť svoj obľúbený

## Spustenie projektu

Na začiatu si potrebujeme vyklonovať tento projekt. Môžete využiť ktorúkoľvek z HTTPS/SSH/GitHub CLI metód.

Do terminálu zadáme príkaz:

```bash
git clone git@github.com:bolyesz/kolnicka.git kolnicka-2021
# alebo
git clone https://github.com/bolyesz/kolnicka.git kolnicka-2021
```

Následne sa presunieme do novo vytvoreného priečinka pomocou tohto príkazu:

```bash
cd kolnicka-2021
```

Keď sa nachádzame v priečinku, pred prvým spustením projektu potrebujeme nainštalovať všetky knižnice. V terminály spustíme nasledujúci príkaz:

```bash
npm install
```

Po inštalácií knižníc môžeme spustiť projekt. Do terminálu zadáme príkaz:

```bash
npm run dev
```

Ak všetko prebehlo úspešne, na obrazovke by sme mali vidieť nasledujúcu hlášku:

```bash
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

Následne si môžeme v internetovom prehliadači otvoriť adresu [http://localhost:3000](http://localhost:3000). Na stránke by sme mali vidieť nápis

```
Ahoj Kôlnička!
```

## Systém checkpointov

Pripravili sme jednoduchý bash script, ktorý by mal pomocť v prípade, ak sa v priebehu workshopu stratíte, prípadne vám program nebude fungovať správne. Pre použitie tohto scriptu treba spustiť nasledujúci príkaz v terminály:

```
./scrips/use-checkpoint.sh {cislo}
```

{cislo} predstavuje konkrétne číslo checkpointu (napr.: 1, 2, 3), na ktorý sa chcete dostať. Napríklad, keď sa chceme dostať na checkpoint 3, spustíme nasledujúci príkaz:

```
./scrips/use-checkpoint.sh 3
```

**POZOR** tento script vymaže, všetky zmeny a súbory, ktoré ste vytvorili.
