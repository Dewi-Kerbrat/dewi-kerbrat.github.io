(function () {
  'use strict';

  Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  });

  const frenchText = `
    {
      "title": "Remplissez en ligne votre déclaration numérique bilingue :",
      "success": "L'attestation est générée sur votre appareil !",
      "failure": "Veuillez corriger les champs",
      "clear": "Le formulaire et son contenu ont été effacé de votre appareil",
      "explication": "Tous les champs sont obligatoires.",
      "firstname": {
        "label": "Prénom",
        "invalid": "Un prénom est nécéssaire."
      },
      "lastname": {
        "label": "Nom",
        "invalid": "Un nom est nécéssaire."
      },
      "birthday": {
        "label": "Date de Naissance",
        "invalid": "Une date est nécéssaire."
      },
      "birthplace": {
        "label": "Lieu de Naissance",
        "invalid": "Un lieu de naissance est nécéssaire."
      },
      "address": {
        "label": "Adresse",
        "invalid": "Une adresse est nécéssaire.",
        "placeholder": "999 rue du Siam"
      },
      "city": {
        "label": "Ville",
        "invalid": "Une ville est nécéssaire."
      },
      "postal": {
        "label": "Code Postal",
        "invalid": "Veuillez respecter le format. Ex : 29200."
      },
      "datesortie": {
        "label": "Date de Sortie",
        "invalid": "Une date est nécéssaire."
      },
      "heuresortie": {
        "label": "Heure de Sortie",
        "invalid": "Une heure est nécéssaire."
      },
      "motifs": {
        "legend": "Choisissez un motif de déplacement",
        "invalid": "Veuillez choisir un motif",
        "paragraph": "Certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par le décret n°2020-1310 du 29 octobre 2020 prescrivant les mesures générales nécessaires pour faire face à l'épidémie de Covid19 dans le cadre de l'état d'urgence sanitaire.",
        "travail": "Déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle ou un établissement d’enseignement ou de formation, déplacements professionnels ne pouvant être différés ;",
        "achats": "Déplacements pour effectuer des achats de fournitures nécessaires à l'activité professionnelle, des achats de première nécessité ;",
        "sante": "Consultations, examens et soins ne pouvant être assurés à distance et l’achat de médicaments ;",
        "famille": "Déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables et précaires ou la garde d'enfants ;",
        "handicap": "Déplacement des personnes en situation de handicap et leur accompagnant ;",
        "sport": "Déplacements brefs, dans la limite d'une heure quotidienne et dans un rayon maximal d'un kilomètre autour du domicile, liés soit à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive collective et de toute proximité avec d'autres personnes, soit à la promenade avec les seules personnes regroupées dans un même domicile, soit aux besoins des animaux de compagnie ;",
        "convocation": "Convocation judiciaire ou administrative et pour se rendre dans un service public ;",
        "missions": "Participation à des missions d'intérêt général sur demande de l'autorité administrative ;",
        "enfants": "Déplacement pour chercher les enfants à l’école et à l’occasion de leurs activités périscolaires."
      },
      "storedata": "Mon appareil se souvient de moi.",
      "generate": "Générer mon Attestation",
      "cleardata": "Effacer le formulaire et son contenu sauvegadé sur mon appareil"

    }`;
  const brezhonegText = `
    {
      "title": "Leugnit enlinenn ho tisklêriadur niverel divyezhek :",
      "success": "Ganet eo bet ho testeni war ho penveg !",
      "failure": "Reizhit ar maeziennoù mar plij",
      "clear": "Diverket eo bet ar furmskrid hag e endalc'had diwar ho penveg",
      "explication": "Ret eo leuniañ an holl vaeziennoù",
      "firstname": {
        "label": "Anv-bihan",
        "invalid": "Anv-bihan ret"
      },
      "lastname": {
        "label": "Anv",
        "invalid": "Anv ret"
      },
      "birthday": {
        "label": "Deiziad ganedigezh",
        "invalid": "Deiziad ret"
      },
      "birthplace": {
        "label": "Lec'h ganedigezh",
        "invalid": "Lec'h ganedigezh ret"
      },
      "address": {
        "label": "Chomlec'h",
        "invalid": "Chomlec'h ret",
        "placeholder": "999 straed Siam"
      },
      "city": {
        "label": "Kêr",
        "invalid": "Kêr ret"
      },
      "postal": {
        "label": "Kod post",
        "invalid": "Grit diouzh ar furmad mar plij. Sk. 29200"
      },
      "datesortie": {
        "label": "Deiziad mont er-maez",
        "invalid": "Deiziad ret"
      },
      "heuresortie": {
        "label": "Eur mont er-maez",
        "invalid": "Eur ret"
      },
      "motifs": {
        "legend": "Dibabit un abeg dilec'hiañ",
        "invalid": "Dibabit un abeg mar plij",
        "paragraph": "A desteni eo liammet ma dilec’hiadenn ouzh an abeg da-heul (askañ al logell) aotreet diouzh ar reolennoù  hollek rekis evit talañ ouzh epidemiezh ar C’hovid 19 e stern ar stad a zifrae yec’hedel.",
        "travail": "Dilec’hiadennoù etre an ti-annez hag al lec’h labour pe ul lec’h kelenn pe  stummañ, dilec’hiadennoù micherel na c’hallont ket bezañ ampellet, dilec’hiadennoù evit ur genstrivadeg pe un arnodenn ;",
        "achats": "Dilec’hiadennoù evit prenañ dafar ret d’an obererezh micherel, prenañ traoù a zo ezhomm groñs anezho er stalioù a chom aotreet o obererezh, mont da gerc’hat urzhiadoù hag an degasadennoù e ti an dud ;",
        "sante": "Kuzuliadennoù, imbourc’hioù ha prederioù na c’hallont ket bezañ graet a-bell na bezañ ampellet ha prenañ louzeier ;",
        "famille": "Dilec’hiadennoù evit abegoù familh ret-groñs, evit harpañ tud klañvus ha bresk pe evit diwall bugale ;",
        "handicap": "Dilec’hiadennoù an dud nammet hag o ambrouger ;",
        "sport": "Dilec’hiadennoù berr, un eurvezh-pad bemdez hag ur c’hilometr hed tro-dro d’an ti-annez d’ar muiañ, liammet ouzh embregerezh-korf an den en e-unan, difennet-groñs e chom ar pleustradennoù sport a-stroll pe chom tost da dud all, pe ouzh mont da vale gant an dud o vevañ er memes ti-annez hepken, pe ouzh ezhommoù al loened-ti ;",
        "convocation": "Lizher kengalv melestradurel pe a-berzh ar justis hag evit mont en ur servij publik ;",
        "missions": "Kemer perzh e kefridioù a laz hollek diwar c’houlenn an aotrouniezh velestradurel",
        "enfants": "Dilec’hiadenn evit mont d’ar skol da gerc’hat ar vugale ha da-geñver o obererezhioù troskol."
      },
      "storedata": "Ma benveg en deus soñj ac'hanon",
      "generate": "Genel ma zesteni",
      "cleardata": "Diverkañ ar furmskrid hag e endalc'had saveteet war ma benveg"

    }`;
  const forms = document.getElementsByClassName('needs-validation');
  const firstname = document.querySelector('input[id=firstname]');
  const lastname = document.querySelector('input[id=lastname]');
  const birthday = document.querySelector('input[id=birthday]');
  const birthplace = document.querySelector('input[id=birthplace]');
  const address = document.querySelector('input[id=address]');
  const city = document.querySelector('input[id=city]');
  const postal = document.querySelector('input[id=postal]');
  const datesortie = document.querySelector('input[id=datesortie]');
  const heuresortie = document.querySelector('input[id=heuresortie]');
  const travail = document.querySelector('input[value=travail]');
  const achats = document.querySelector('input[value=achats]');
  const sante = document.querySelector('input[value=sante]');
  const famille = document.querySelector('input[value=famille]');
  const handicap = document.querySelector('input[value=handicap]');
  const sport = document.querySelector('input[value=sport]');
  const convocation = document.querySelector('input[value=convocation]');
  const missions = document.querySelector('input[value=missions]');
  const enfants = document.querySelector('input[value=enfants]');
  const storedata = document.querySelector('input[value=storedata]');
  const raisons = document.querySelectorAll('input[name=field-reason]');
  const divMotif = document.querySelector('#motifsDiv');
  const motifsNotValid = document.querySelector('#motifsNotValid');
  const cleardata = document.querySelector('#cleardata');
  const bzh = document.querySelector("#bzh");
  const labBzh = document.querySelector("#labBzh");
  const fr = document.querySelector("#fr");
  const labFr = document.querySelector("#labFr");

  window.addEventListener('load', function() {
    init();
    // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if(form.checkValidity() === false) {
          if(checkValidCB() === false) {
            informCBInvalid();
          }
          $("#failure").fadeTo(2000, 500).slideUp(500, () => {
      			$("#failure").hide();
          });
          event.preventDefault();
          event.stopPropagation();
        } else {
          generatePDF();
          if(storedata.checked === true) {
            saveDatas();
          }
          $("#success").fadeTo(2000, 500).slideUp(500, () => {
            $("#success").hide();
          });
        }
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        form.classList.add('was-validated');
      }, false);
    });

    cleardata.addEventListener('click', function() {
      removeDatas();
      $("#clear").fadeTo(2000, 500).slideUp(500, () => {
        $("#clear").hide();
      });
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    bzh.addEventListener('click', function() {
      language(bzh, fr, labBzh, labFr, brezhonegText);
    });

    fr.addEventListener('click', function() {
      language(fr, bzh, labFr, labBzh, frenchText);
    });

    for(let i = 0; i < raisons.length; i++) {
      raisons[i].addEventListener('click', function() {
        if(checkValidCB() === true) {
          informCBValid();
          for(let i = 0; i < raisons.length; i++) {
            raisons[i].required = false;
          }
        } else {
          for(let i = 0; i < raisons.length; i++) {
            raisons[i].required = true;
          }
        }
      });
    }
  }, false);

  function language(lang, otherLang, labLang, labOtherLang, text) {
    if(lang.checked === true) {
      labLang.classList.add("active");
      labOtherLang.classList.remove("active");
      otherLang.checked = false;
      loadText(text);
    }
  }

  function init() {
    $("#success").hide();
    $("#failure").hide();
    $("#clear").hide();
    $('#datesortie').val(new Date().toDateInputValue());
    loadDatas();
  }

  function loadText(lang) {
    const text = JSON.parse(lang);
    document.querySelector("#title").innerHTML = text.title;
    document.querySelector("#success-label").innerHTML = text.success;
    document.querySelector("#failure-label").innerHTML = text.failure;
    document.querySelector("#clear-label").innerHTML = text.clear;
    document.querySelector("#explication").innerHTML = text.explication;
    document.querySelector("label[for=firstname]").innerHTML = text.firstname.label;
    document.querySelector("#firstnameInvalid").innerHTML = text.firstname.invalid;
    document.querySelector("label[for=lastname]").innerHTML = text.lastname.label;
    document.querySelector("#lastnameInvalid").innerHTML = text.lastname.invalid;
    document.querySelector("label[for=birthday]").innerHTML = text.birthday.label;
    document.querySelector("#birthdayInvalid").innerHTML = text.birthday.invalid;
    document.querySelector("label[for=birthplace]").innerHTML = text.birthplace.label;
    document.querySelector("#birthplaceInvalid").innerHTML = text.birthplace.invalid;
    document.querySelector("label[for=address]").innerHTML = text.address.label;
    address.placeholder = text.address.placeholder;
    document.querySelector("#addressInvalid").innerHTML = text.address.invalid;
    document.querySelector("label[for=city]").innerHTML = text.city.label;
    document.querySelector("#cityInvalid").innerHTML = text.city.invalid;
    document.querySelector("label[for=postal]").innerHTML = text.postal.label;
    document.querySelector("#postalInvalid").innerHTML = text.postal.invalid;
    document.querySelector("label[for=datesortie]").innerHTML = text.datesortie.label;
    document.querySelector("#datesortieInvalid").innerHTML = text.datesortie.invalid;
    document.querySelector("label[for=heuresortie]").innerHTML = text.heuresortie.label;
    document.querySelector("#heuresortieInvalid").innerHTML = text.heuresortie.invalid;
    document.querySelector("#motifsNotValid").innerHTML = text.motifs.invalid;
    document.querySelector("#legendReason").innerHTML = text.motifs.legend;
    document.querySelector("#paragraphReason").innerHTML = text.motifs.paragraph;
    document.querySelector("label[for=checkbox-travail]").innerHTML = text.motifs.travail;
    document.querySelector("label[for=checkbox-achats]").innerHTML = text.motifs.achats;
    document.querySelector("label[for=checkbox-sante]").innerHTML = text.motifs.sante;
    document.querySelector("label[for=checkbox-famille]").innerHTML = text.motifs.famille;
    document.querySelector("label[for=checkbox-handicap]").innerHTML = text.motifs.handicap;
    document.querySelector("label[for=checkbox-sport]").innerHTML = text.motifs.sport;
    document.querySelector("label[for=checkbox-convocation]").innerHTML = text.motifs.convocation;
    document.querySelector("label[for=checkbox-missions]").innerHTML = text.motifs.missions;
    document.querySelector("label[for=checkbox-enfants]").innerHTML = text.motifs.enfants;
    document.querySelector("label[for=checkbox-storedata]").innerHTML = text.storedata;
    document.querySelector("#generate").innerHTML = text.generate;
    document.querySelector("#cleardata").innerHTML = text.cleardata;
  }

  function generatePDF() {
    var doc = new jsPDF();
    // 61 -> 16.5 by 3.7686
    doc.setFontSize(15);
    doc.setFont("times-roman");
    doc.setFontType("bold");

    doc.text(62.09 - 0.5, 16.25, 'TESTENI DILEC’HIAÑ DISDALC’HUS');
    // 165 ; 83
    doc.text(43.7828 - 0.5, 22.2894, 'ATTESTATION DE DÉPLACEMENT DÉROGATOIRE');

    doc.setFontSize(10);
    doc.setFontType("normal");
    // 108 114
    doc.text(28.657857 - 0.5, 30.24996,'Diouzh ar reolennoù hollek rekis evit talañ ouzh epidemiezh ar C’hovid-19 e stern ar stad a zifrae yec’hedel.');
    // 44 129
    doc.text(11.675423 - 0.5, 34.2302 , 'En application des mesures générales nécessaires pour faire face à l’épidémie de covid-19 dans le cadre de l’état d’urgence sanitaire.');

    doc.setFontSize(11);

    // 49 159
    doc.text(13, 42.1907, 'Me a sin amañ dindan, Je soussigné(e),');
    // 49 189
    doc.text(13, 50.15125, `It./Ao. / Mme/M.     ${firstname.value} ${lastname.value}`);

    // 49 219
    doc.text(13, 58.11177, `Bet ganet d’an / Né(e) le :     ${formatDate(birthday)}`);
    doc.text(107.2016, 58.11177, `e / à     ${birthplace.value}`);
    // 49 249
    doc.text(13, 66.07228, `O chom / Demeurant :     ${address.value} - ${postal.value} ${city.value}`);

    // 49 281
    doc.text(13, 74.5635, `A desteni eo liammet ma dilec’hiadenn ouzh an abeg da-heul (askañ al logell) aotreet diouzh ar reolennoù hollek rekis\nevit talañ ouzh epidemiezh ar C’hovid 19 e stern ar stad a zifrae yec’hedel(1):`);

    // 49 322
    doc.text(13, 85.70822, `Certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé en application des mesures générales\nnécessaires pour faire face à l'épidémie de Covid19 dans le cadre de l'état d'urgence sanitaire(1):`);

    doc.setFontSize(10);

    // 1)
    // 56 370
    if(travail.checked === true) {
      doc.rect(14.8596, 95.6797, 2.5, 2.5, 'F');
      doc.rect(107.2016, 95.6797, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 95.6797, 2.5, 2.5);
      doc.rect(107.2016, 95.6797, 2.5, 2.5);
    }
    doc.text(14.8596, 98.1797, `    Dilec’hiadennoù etre an ti-annez hag al lec’h labour pe ul\nlec’h kelenn pe stummañ, dilec’hiadennoù micherel na\nc’hallont ket bezañ ampellet, dilec’hiadennoù evit ur\ngenstrivadeg pe un arnodenn(2)`);
    doc.text(107.2016, 98.1797, `    Déplacements entre le domicile et le lieu d’exercice de\nl’activité professionnelle ou un établissement\nd’enseignement ou de formation, déplacements\nprofessionnels ne pouvant être différés, déplacements pour\nun concours ou un examen(2).`);

    // 2)
    // 56 463
    if(achats.checked === true) {
      doc.rect(14.8596, 120.3573, 2.5, 2.5, 'F');
      doc.rect(107.2016, 120.3573, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 120.3573, 2.5, 2.5);
      doc.rect(107.2016, 120.3573, 2.5, 2.5);
    }
    doc.text(14.8596, 122.8573, `    Dilec’hiadennoù evit prenañ dafar ret d’an obererezh\nmicherel, prenañ traoù a zo ezhomm groñs anezho(3) er\nstalioù a chom aotreet o obererezh, mont da gerc’hat\nurzhiadoù hag an degasadennoù e ti an dud.`);
    doc.text(107.2016, 122.8573, `    Déplacements pour effectuer des achats de fournitures\nnécessaires à l'activité professionnelle, des achats de\npremière nécessité(3) dans des établissements dont les\nactivités demeurent autorisées, le retrait de commande et\nles livraisons à domicile.`);

    // 3)
    // 56 554
    if(sante.checked === true) {
      doc.rect(14.8596, 144.5042, 2.5, 2.5, 'F');
      doc.rect(107.2016, 144.5042, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 144.5042, 2.5, 2.5);
      doc.rect(107.2016, 144.5042, 2.5, 2.5);
    }
    doc.text(14.8596, 147.0004, `    Kuzuliadennoù, imbourc’hioù ha prederioù na c’hallont ket\nbezañ graet a-bell na bezañ ampellet ha prenañ louzeier.`);
    doc.text(107.2016, 147.0004, `    Consultations, examens et soins ne pouvant être ni\nassurés à distance ni différés et l’achat de médicaments.`);

    // 4)
    // 56 600
    if(famille.checked === true) {
      doc.rect(14.8596, 156.71031, 2.5, 2.5, 'F');
      doc.rect(107.2016, 156.71031, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 156.71031, 2.5, 2.5);
      doc.rect(107.2016, 156.71031, 2.5, 2.5);
    }
    doc.text(14.8596, 159.21031, `    Dilec’hiadennoù evit abegoù familh ret-groñs, evit harpañ\ntud klañvus ha bresk pe evit diwall bugale.`);
    doc.text(107.2016, 159.21031, `    Déplacements pour motif familial impérieux, pour\nl'assistance aux personnes vulnérables et précaires ou la\ngarde d'enfants.`);

    // 5)
    if(handicap.checked === true) {
      doc.rect(14.8596, 170.773895, 2.5, 2.5, 'F');
      doc.rect(107.2016, 170.773895, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 170.773895, 2.5, 2.5);
      doc.rect(107.2016, 170.773895, 2.5, 2.5);
    }
    // 56 653
    doc.text(14.8596, 173.273895, `    Dilec’hiadennoù an dud nammet hag o ambrouger.`);
    doc.text(107.2016, 173.273895, `    Déplacement des personnes en situation de handicap et\nleur accompagnant.`);

    // 6)
    if(sport.checked === true) {
      doc.rect(14.8596, 182.714669, 2.5, 2.5, 'F');
      doc.rect(107.2016, 182.714669, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 182.714669, 2.5, 2.5);
      doc.rect(107.2016, 182.714669, 2.5, 2.5);
    }
    // 56 698
    doc.text(14.8596, 185.214669, `    Dilec’hiadennoù berr, un eurvezh-pad bemdez hag ur\nc’hilometr hed tro-dro d’an ti-annez d’ar muiañ, liammet\nouzh embregerezh-korf an den en e-unan, difennet-groñs e\nchom ar pleustradennoù sport a-stroll pe chom tost da dud\nall, pe ouzh mont da vale gant an dud o vevañ er memes ti-\nannez hepken, pe ouzh ezhommoù al loened-ti.`);
    doc.text(107.2016, 185.214669, `    Déplacements brefs, dans la limite d'une heure\nquotidienne et dans un rayon maximal d'un kilomètre autour\ndu domicile, liés soit à l'activité physique individuelle des\npersonnes, à l'exclusion de toute pratique sportive collective\net de toute proximité avec d'autres personnes, soit à la\npromenade avec les seules personnes regroupées dans un\nmême domicile, soit aux besoins des animaux de compagnie.`);

    // 7)
    if(convocation.checked === true) {
      doc.rect(14.8596, 215.618134, 2.5, 2.5, 'F');
      doc.rect(107.2016, 215.618134, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 215.618134, 2.5, 2.5);
      doc.rect(107.2016, 215.618134, 2.5, 2.5);
    }
    // 56 822
    doc.text(14.8596, 218.118134, `    Lizher kengalv melestradurel pe a-berzh ar justis hag evit\nmont en ur servij publik.`);
    doc.text(107.2016, 218.118134, `    Convocation judiciaire ou administrative et pour se rendre\ndans un service public.`);

    // 8)
    if(missions.checked === true) {
      doc.rect(14.8596, 226.4975, 2.5, 2.5, 'F');
      doc.rect(107.2016, 226.4975, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 226.4975, 2.5, 2.5);
      doc.rect(107.2016, 226.4975, 2.5, 2.5);
    }
    // 56 863
    doc.text(14.8596, 228.9975, `    Kemer perzh e kefridioù a laz hollek diwar c’houlenn an\naotrouniezh velestradurel.`);
    doc.text(107.2016, 228.9975, `    Participation à des missions d'intérêt général sur demande\nde l'autorité administrative.`);

    // 9)
    if(enfants.checked === true) {
      doc.rect(14.8596, 237.37688 , 2.5, 2.5, 'F');
      doc.rect(107.2016, 237.37688 , 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 237.37688 , 2.5, 2.5);
      doc.rect(107.2016, 237.37688 , 2.5, 2.5);
    }
    // 56 904
    doc.text(14.8596, 239.87688, `    Dilec’hiadenn evit mont d’ar skol da gerc’hat ar vugale ha\nda-geñver o obererezhioù troskol.`);
    doc.text(107.2016, 239.87688, `    Déplacement pour chercher les enfants à l’école et à\nl’occasion de leurs activités périscolaires.`);

    doc.setFontSize(11);

    // 49 975
    doc.text(13, 258.716765, `Graet e / Fait à :    ${city.value}`);
    // 343
    doc.text(92, 258.716765, `D’an / Le :    ${formatDate(datesortie)}`);
    // 531
    doc.text(141, 258.716765, ` da / à :     ${heuresortie.value.split(':')[0]}`);
    // 613
    doc.text(163, 258.716765, `e / h ${heuresortie.value.split(':')[1]}`);

    doc.setFontSize(7);

    // 1)
    // 56 1037 - 5
    doc.text(14.8596, 275.1685 - 6, `1. Rekis eo d’an dud a garfe ober o mad eus unan eus an nemedennoù-se bezañ ganto pa\nguitaont o zi-annez un teul a c’haller drezañ reizhabegiñ emañ mat an dilec’hiadenn sellet\nouti e-touez an nemedennoù renablet.`);
    doc.text(107.2016, 275.1685 - 6, `1. Les personnes souhaitant bénéficier de l'une de ces exceptions doivent se munir s'il y a\nlieu, lors de leurs déplacements hors de leur domicile, d'un document leur permettant de\njustifier que le déplacement considéré entre dans le champ de l'une de ces exceptions.`);

    // 2)
    // 56 1067
    doc.text(14.8596, 283.1290 - 5, `2. Da vezañ implijet gant al labourerien angopret pa ne c’hallont ket kaout un testeni\ndilec’hiañ savet gant o implijer.`);
    doc.text(107.2016, 283.1290 - 5, `2. À utiliser par les travailleurs non-salariés, lorsqu'ils ne peuvent disposer d'un justificatif de\ndéplacement établi par leur employeur.`);

    // 3)
    // 56 1087
    doc.text(14.8596, 288.436 - 4, `3. En o zouez an akuizitadurioù digoust (danvez bevañs roet...) hag an dilec’hiadennoù\nliammet ouzh resev gratadurioù sokial pe ouzh tennañ arc’hant.`);
    doc.text(107.2016, 288.436 - 4, `3. Y compris les acquisitions à titre gratuit (distribution de denrées alimentaires...) et les\ndéplacements liés à la perception de prestations sociales et au retrait d'espèces.`);

    doc.save(`attestation-${datesortie.value}_${heuresortie.value}.pdf`);
  }

  function checkValidCB() {
    for(let i = 0; i < raisons.length; i++) {
      if(raisons[i].checked === true) {
        return true;
      }
    }
    return false;
  }

  function informCBInvalid() {
    motifsNotValid.style.display = 'block';
    divMotif.style.border = 'solid #dc3545';
  }

  function informCBValid() {
    motifsNotValid.style.display = 'none';
    divMotif.style.border = 'none';
  }

  function saveDatas() {
    localStorage.setItem('datas', true);
    localStorage.setItem('lang', (bzh.checked) ? 'bzh' : 'fr');
    localStorage.setItem('firstname', firstname.value);
    localStorage.setItem('lastname', lastname.value);
    localStorage.setItem('birthday', formatDate(birthday));
    localStorage.setItem('birthplace', birthplace.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('postal', postal.value);
  }

  function loadDatas() {
    if(localStorage.getItem('datas')) {
      if(localStorage.getItem('lang') === 'bzh') {
        bzh.checked = true;
        language(bzh, fr, labBzh, labFr, brezhonegText);
      } else {
        fr.checked = true;
        language(fr, bzh, labFr, labBzh, frenchText);
      }
      firstname.value = localStorage.getItem('firstname');
      lastname.value = localStorage.getItem('lastname');
      birthday.value = reformatDate(localStorage.getItem('birthday'));
      birthplace.value = localStorage.getItem('birthplace');
      address.value = localStorage.getItem('address');
      city.value = localStorage.getItem('city');
      postal.value = localStorage.getItem('postal');
      storedata.checked = true;
    } else {
      fr.checked = true;
      language(fr, bzh, labFr, labBzh, frenchText);
    }
  }

  function removeDatas() {
    localStorage.removeItem('datas');
    localStorage.removeItem('lang');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    localStorage.removeItem('birthday');
    localStorage.removeItem('birthplace');
    localStorage.removeItem('address');
    localStorage.removeItem('city');
    localStorage.removeItem('postal');
  }

  function formatDate(date) {
    return `${date.value.split('-')[2]}/${date.value.split('-')[1]}/${date.value.split('-')[0]}`;
  }

  function reformatDate(date) {
    return `${date.split('/')[2]}-${date.split('/')[1]}-${date.split('/')[0]}`;
  }
})();
