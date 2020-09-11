import React from 'react';

function personalMessage(phoneNumber) {
  let message = '';
  switch (phoneNumber) {
    case '77 599 67 67': // Sybile
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Hey Sybile beuneulé bakhoul
          </span>
          <span style={{ marginBottom: '5px' }}>
            Yow fo riffé la beug kham?
          </span>
          <span style={{ marginBottom: '5px' }}>
            geumeul Yallah li application bou mey tester rek la
          </span>
          <span className='text-center' role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    case '77 349 99 05': // Andrea
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Hey Andrea beuneulé bakhoul
          </span>
          <span style={{ marginBottom: '5px' }}>
            Yow fo riffé la beug kham? Demal lékeu gniankantang ak doutirr mo
            geune
          </span>
          <span style={{ marginBottom: '5px' }}>
            geumeul Yallah li application bou mey tester rek la
          </span>
          <span className='text-center' role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    case '77 698 45 75': // Johana
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Hey Johanna Bayil beuneulé
          </span>
          <span style={{ marginBottom: '5px' }}>
            " L'espoir fait vivre mais la Faim Tue
          </span>
          <span>
            Reste affamé dans la dignité "{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 794 61 65': // Ayo BA
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Cher Monsieur Ayo Ba, Sachez que
          </span>
          <span style={{ marginBottom: '5px' }}>
            " L'espoir fait vivre mais la Faim Tue
          </span>
          <span>
            Restons affamé dans la dignité "{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '78 018 67 52': // Zahra
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Yow Zahra demal Fane fadjou dji
          </span>
          <span style={{ marginBottom: '5px' }}>
            Sa yaram nekhoul, il n'y a rien de gratuit ici
          </span>
          <span>
            je voulais juste tester l'appli "{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 757 31 15': // Astou Diallo
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>Hey Astou ya beuneulé</span>
          <span style={{ marginBottom: '5px' }}>
            Mey wakh ngua def sa commande bou reuy bi di esperer ak rifeul
          </span>
          <span style={{ marginBottom: '5px' }}>
            geumeul Yallah li application bou mey tester rek la
          </span>
          <span className='text-center' role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    case '78 161 35 26': // Franc Tete
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Mister Franc yow mom nala livrel sa commande
          </span>
          <span style={{ marginBottom: '5px' }}>
            Nandité ngua, l'application est juste en phase de test{' '}
            <span role='img' aria-label='sheep'>
              😉
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 792 55 99': // Eva
    case '77 969 73 52': // Eva
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Chere Mademoiselle Eva, Sachez que
          </span>
          <span style={{ marginBottom: '5px' }}>
            " L'espoir fait vivre mais la Faim Tue
          </span>
          <span>
            Restons affamé dans la dignité "{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 354 79 29': // Ladyja
    case '77 477 39 81': // Ladyja
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Kholal ma Peulh bou bone bii mom
          </span>
          <span style={{ marginBottom: '5px' }}>
            gueneul fi il n'y a rien pour toi ak sa colopatie
          </span>
          <span style={{ marginBottom: '5px' }}>
            do fi wané deh{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 487 25 65': // Jacky
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Jacky Bonbon yow ak sa eumbeu fot bi sagn ngua fi lekeu hamburger?
          </span>
          <span style={{ marginBottom: '5px' }}>
            demal defi regime mo geune{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 439 82 00': // Nana
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Hey Takou Nana Sucrée yow wakhoumala ngua bayii yapeu?
          </span>
          <span style={{ marginBottom: '5px' }}>
            En plus yow ak sa eumbeu fot bou reuy bi sagn ngua fi lékeu Burger?
          </span>
          <span style={{ marginBottom: '5px' }}>
            demal regime way{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 265 40 43': // souley
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Ha Serigne Souley fo riffé ba def sa commande bou reuy bi?
          </span>
          <span style={{ marginBottom: '5px' }}>
            li deh application en phase test la
          </span>
          <span style={{ marginBottom: '5px' }}>
            boussi tegu sa khel{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 455 41 13': // Don Jon
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Don Ablaye John li dou application de rencontre
          </span>
          <span style={{ marginBottom: '5px' }}>
            tout le monde sais que khotou tate mola geuneul Burger
          </span>
          <span style={{ marginBottom: '5px' }}>
            dougal Instagram mo geune{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '78 428 62 33': // Baida
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Boy Bouboulaye demal defi abdominaux
          </span>
          <span style={{ marginBottom: '5px' }}>
            Mo geune ngay set fi ngay léké Buger ak sa birr bou reuy{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '78 147 35 57': // Anta
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Hey Anta Boukhou Beignet ya beug waneu té euleuwlé
          </span>
          <span style={{ marginBottom: '5px' }}>
            khamouma fo riffé mais dofi sourré li gay beuneulé yeup
          </span>
          <span role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    case '78 127 17 36': // Annie
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Yiii!!! Annie Burger bi mounoula sourr li ngay beuneulé yeup
          </span>
          <span style={{ marginBottom: '5px' }}>
            Demal Eglise kharr que le corps du Christ te rassasie mo geuneu
            yombeu
          </span>

          <span role='img' aria-label='sheep' className='text-center'>
            😂
          </span>
        </div>,
      ];
      break;
    case '77 719 34 97': //Nafi Amar
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Desolé, on livre pas de Burger au race ndama
          </span>
          <span style={{ marginBottom: '5px' }}>
            Ngay melni potou Gloria dokhal fowi{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 195 73 31': // Mame Fatou Agne
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Hey mon coeur koula bayii ngua placer fi commande di diay beuneulé?
          </span>
          <span style={{ marginBottom: '5px' }}>
            respectel régime bii way{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 882 71 71': // Faye
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Ibrahima Diougual Dambale Faye so gagner sa competition Long Dion
            bou Gambi réne gniou livrer la sa commande
          </span>
          <span className='text-center' role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    case '76 786 46 50': // Eduarda
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>Weuh!!! yow nak ya osé</span>
          <span style={{ marginBottom: '5px' }}>
            Ya def sa commande bou reuy bi ba togu di diay fokolé?
          </span>
          <span style={{ marginBottom: '5px' }}>
            Hamburger bi deh dangua koy lékeu rek constiper à vie
          </span>
          <span>
            Gnioussoul félé{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 236 02 79': // Aissatou
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Hey way!!! teyal Aissatou bou beuneulé bi mom
          </span>
          <span style={{ marginBottom: '5px' }}>
            ak sa kholou petit pois bi khamgua kene dou la livré Burger
          </span>
          <span style={{ marginBottom: '5px' }}>
            khamouma fo riffé mais doffi sourré
          </span>
          <span role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    case '78 167 72 22': // Lydie Diagne
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Hey Lydie Diagne ya beuneulé !!!
          </span>
          <span style={{ marginBottom: '5px' }}>
            Mey wakh ngua def sa commande bou reuy bi
          </span>
          <span style={{ marginBottom: '5px' }}>
            khamouma fo riffé mais doffi sourré
          </span>
          <span style={{ marginBottom: '5px' }}>
            Fi amoul dara lougniouy méyé{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 325 43 36': // khalil
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            El Capo yow sa burger mongui ley khar Maroc
          </span>
          <span style={{ marginBottom: '5px' }}>So demoul doko lekeu</span>
          <span role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    case '77 868 66 43': // Abdou
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Bene copain sou riffé dey merr di youkhou galé bi "DAMA RIFF"
          </span>
          <span style={{ marginBottom: '5px' }}>
            yayam diogu diokh ko tiérré mou cissou né "ANI MEEEW"
          </span>
          <span role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    // ***********************************************************************************
    //                                     PIEGE
    // ***********************************************************************************
    case '78 601 85 13': // Khar
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Yow mom khar sa beug lékeu fo dem woné ko
          </span>
          <span style={{ marginBottom: '5px' }}>
            Fi amoul béne Burger bougniou ley mey
          </span>
          <span style={{ marginBottom: '5px' }}>
            Ngay melni potou Gloria nonou{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 459 71 07': // Nathalie
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Oubliez cette commande Pleine de mauvaises graisses
          </span>
          <span style={{ marginBottom: '5px' }}>
            Vous avez été selectionné pour suivre un régime banane qui consiste
            à consommer 3 bananes par jour
          </span>
          <span className='text-center' role='img' aria-label='sheep'>
            Merci d'avoir testé l'App Nath 😂
          </span>
        </div>,
      ];
      break;
    case '77 684 68 80': // Angelique
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Angélique diminue la bouffe ou tu finiras par exploser
          </span>
          <span style={{ marginBottom: '5px' }}>Pas de burger pour toi</span>
          <span style={{ marginBottom: '5px' }}>
            Ngay melni Potou gloria{' '}
            <span className='text-center' role='img' aria-label='sheep'>
              😂
            </span>
          </span>
          <span style={{ marginBottom: '5px' }}>De la part de Stella!</span>
        </div>,
      ];
      break;
    case '77 066 11 63': // Sidy
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Alors Anus Ecarlate... on cherche à bouffer un Hamburger
            gratuitement ?!!..
          </span>
          <span style={{ marginBottom: '5px' }}>
            Apprend que rien n'est gratuit dans ce monde..
          </span>
          <span>
            fou le camp way !!!{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 782 89 64': // Yaya
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Moh way Yakhou Boune fo riffé
          </span>
          <span style={{ marginBottom: '5px' }}>
            demal ci keba mou defaral la sow tiakry ak touti couscous mo geuneu
            yombeu{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '78 272 67 70': // Keba
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Way Bandit dem Ngay mola geuneul lekeu ci adouna
          </span>
          <span style={{ marginBottom: '5px' }}>
            Diakhoul gniou ley livrel Burger
          </span>
          <span className='text-center' role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    case '77 774 60 67': // Raf
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Mister Raf yow amo solution
          </span>
          <span style={{ marginBottom: '5px' }}>dofi léké burger</span>
          <span role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    case '78 473 52 90': // Gerard
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Mister G rien n'est gratuit dans ce monde à part l'air que tu
            respires
          </span>
          <span style={{ marginBottom: '5px' }}>
            Je teste juste l'application{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 868 53 45': // Abraham
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Bene copain mo wakh dey regime Banane genre 3 bananes par jour
          </span>
          <span style={{ marginBottom: '5px' }}>
            Mou ndieunde beneu sakou banana
          </span>
          <span style={{ marginBottom: '5px' }}>
            Premier jour mou lékeu banana yi yeup
          </span>
          <span role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    case '77 183 73 86': // Wagane
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Yiii!!! 50% Burger bi sourroula
          </span>
          <span style={{ marginBottom: '5px' }}>on ne peut pas te nourrir</span>
          <span style={{ marginBottom: '5px' }}>setil fénéne</span>
          <span role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    case '77 193 98 80': // Yeni
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Boy Thiaga dou fi léké burger
          </span>
          <span style={{ marginBottom: '5px' }}>
            Togual Mbour di lale rek yow{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 481 07 88': // Fat Mbacké
    case '77 199 26 10': // Fat Mbacké
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Fatou Dotom Mbacké gueneul fii ngay diaye beuneulé
          </span>
          <span style={{ marginBottom: '5px' }}>
            Sou féké commande bi ngay khar deh mom wanna go
          </span>
          <span style={{ marginBottom: '5px' }}>
            ak sa kanam di ma saf mayonaise{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 117 36 34': // Stephen
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Desolé, on ne peut pas te livrer ta commande
          </span>
          <span style={{ marginBottom: '5px' }}>
            Tu es devenu trop gros et gras
          </span>
          <span style={{ marginBottom: '5px' }}>Fait un régime adapté</span>
        </div>,
      ];
      break;
    case '78 016 75 55': //Toumani
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Hey way Toumi ya fouy té beug lou yombeu
          </span>
          <span style={{ marginBottom: '5px' }}>
            Ici c'est pas les restos du coeur, rien n'est gratuit
          </span>
          <span style={{ marginBottom: '5px' }}>
            beug lou yombeu ba deuk ma yombé{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 059 44 65': // Marie Laine
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Hey Lonko bayil beugeu lou yombeu
          </span>
          <span style={{ marginBottom: '5px' }}>
            del guéné khaliss ney bakhoul, rien n'est gratuit ici
          </span>
          <span style={{ marginBottom: '5px' }}>
            damay tester application bi rek{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 812 62 92': // Satoucha
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Hey Satoucha bayil beuneulé
          </span>
          <span style={{ marginBottom: '5px' }}>
            régimal ngay out fi ngay wané
          </span>
          <span style={{ marginBottom: '5px' }}>
            rien n'est gratuit ici je teste juste l'application{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 334 39 51': // Mina
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Teyal Thiouss yow... beuneulé ba deh teg si fokalé
          </span>
          <span style={{ marginBottom: '5px' }}>
            rien n'est gratuit ici je teste juste l'application
          </span>
          <span style={{ marginBottom: '5px' }}>
            athia way{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 201 34 84': // Strellita
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Strellita Bayil beugeu lou yomb ak beuneulé
          </span>
          <span style={{ marginBottom: '5px' }}>
            Rien n'est gratuit en plus un régime Banane ne te fera pas trop de
            mal{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '77 762 58 16': // Bb Rose
    case '77 134 84 21': // Cecilya Mendy
    case '77 403 85 48': // Juliette Mendy
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Desolé on offre pas de Burger au Ndiago
          </span>
          <span style={{ marginBottom: '5px' }}>
            Parce que Ndiago khamoul lekeu bou bakh, on vous propose du
            "Printaw" à la place
          </span>
          <span className='text-center' role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    case '77 746 86 62': // Joy
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Regardez moi une fille affamée la qui refuse de faire un regime!!!
          </span>
          <span style={{ marginBottom: '5px' }}>
            Faut quitter la way il n'y a rien de gratuit pour toi ici Joy{' '}
            <span className='text-center' role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
    case '78 437 85 20': // Astou Gueye
    case '77 900 70 50': // Mamy Ndiaye
    case '77 815 16 89': // Kine
    case '77 749 56 23': // Astou Ndiaye
    case '78 561 49 61': // Awa Mbene
    case '77 966 05 48': // Diatou
    case '77 160 68 48': // Penda
    case '77 480 38 08': // Nadia
    case '77 879 48 28': // Nadia
    case '78 203 61 77': // Khadija Cissé
    case '78 339 55 10': // Marie
    case '77 217 93 87': // Yacine
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Hey way!!! yow nak ya fouy deug té beug waneu
          </span>
          <span style={{ marginBottom: '5px' }}>
            Mey wakh ngua def sa commande bou reuy bi di diaye beuneulé
          </span>
          <span style={{ marginBottom: '5px' }}>
            khamouma fo riffé mais doffi sourré
          </span>
          <span role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;
    case '77 419 84 85': // Massoukha
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            Moh!!! yow Massou Bombé la commercante ya beug lou tombeu rek
          </span>
          <span style={{ marginBottom: '5px' }}>
            toi même tu n'offres rien de gratuit à tes clients alors rien est
            gratuit ici aussi
          </span>
          <span role='img' aria-label='sheep'>
            😂
          </span>
        </div>,
      ];
      break;

    default:
      message = [
        <div className='message-body' key='personal-message'>
          <span style={{ marginBottom: '5px' }}>
            " L'espoir fait vivre mais la Faim tue
          </span>
          <span style={{ marginBottom: '5px' }}>
            Restons affamé dans la dignité "
          </span>
          <span
            className='text-right font-italic'
            style={{ fontSize: '0.9rem' }}
          >
            Yves De La Molle Fesse
          </span>
          <span>
            Merci d'avoir testé l'Application je te dois personnellement un
            Burger{' '}
            <span role='img' aria-label='sheep'>
              😂
            </span>
          </span>
        </div>,
      ];
      break;
  }

  return message;
}

export default personalMessage;
