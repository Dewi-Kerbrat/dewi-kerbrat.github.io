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
        "paragraph": "Certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par le décret n°2020-1310 du 29 octobre 2020 prescrivant les mesures générales nécessaires pour faire face à l'épidémie de Covid-19 dans le cadre de l'état d'urgence sanitaire.",
        "travail": "Déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle ou un établissement d’enseignement ou de formation, déplacements professionnels ne pouvant être différés, déplacements pour un concours ou un examen\u202f;",
        "achats": "Déplacements pour se rendre dans un établissement culturel autorisé ou un lieu de culte\u202f; déplacements pour effectuer des achats de biens, pour des services dont la fourniture est autorisée, pour les retraits de commandes et les livraisons à domicile\u202f;",
        "sante": "Consultations, examens et soins ne pouvant être assurés à distance et l’achat de médicaments\u202f;",
        "famille": "Déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables et précaires ou la garde d'enfants\u202f;",
        "handicap": "Déplacement des personnes en situation de handicap et leur accompagnant\u202f;",
        "sport": "Déplacements en plein air ou vers un lieu de plein air, sans changement de lieu de résidence, dans la limite de trois heures quotidiennes et dans un rayon maximal de vingt kilomètres autour du domicile, liés soit à l'activité physique ou aux loisirs individuels, à l'exclusion de toute pratique sportive collective et de toute proximité avec d'autres personnes, soit à la promenade avec les seules personnes regroupées dans un même domicile, soit aux besoins des animaux de compagnie\u202f;",
        "convocation": "Convocation judiciaire ou administrative et pour se rendre dans un service public\u202f;",
        "missions": "Participation à des missions d'intérêt général sur demande de l'autorité administrative\u202f;",
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
        "paragraph": "A desteni eo liammet ma dilec’hiadenn ouzh an abeg da-heul (askañ al logell) aotreet gant an dekred niv.2020-1310 eus an 29 a viz Here a gemenn ar reolennoù hollek rekis evit talañ ouzh epidemiezh ar c’hovid-19 e stern ar stad a zifrae yec’hedel.",
        "travail": "Dilec’hiadennoù etre an ti-annez hag al lec’h labour pe ul lec’h kelenn pe stummañ, dilec’hiadennoù micherel na c’hallont ket bezañ ampellet, dilec’hiadennoù evit ur genstrivadeg pe un arnodenn\u202f;",
        "achats": "Dilec’hiadennoù evit mont d’ul lec’h sevenadurel aotreet pe d’ul lec’h relijiel\u202f; dilec’hiadennoù evit prenañ madoù, evit servijoù zo aotreet ar pourchas anezho, evit mont da gerc’hat urzhiadoù hag evit an degasadennoù e ti an dud\u202f;",
        "sante": "Kuzuliadennoù, imbourc’hioù ha prederioù na c’hallont ket bezañ graet a-bell na bezañ ampellet ha prenañ louzeier\u202f;",
        "famille": "Dilec’hiadennoù evit abegoù familh ret-groñs, evit harpañ tud klañvus ha bresk pe evit diwall bugale\u202f;",
        "handicap": "Dilec’hiadennoù an dud nammet hag o ambrouger\u202f;",
        "sport": "Dilec’hiadennoù dindan an amzer pe war-zu ul lec’h dindan an amzer, hep cheñch lec’h annez, teir eurvezh-pad bemdez d’an hirañ hag ugent kilometr hed tro-dro d’an ti-annez d’ar muiañ, liammet pe ouzh embregerezh-korf pe ouzh dudiamantoù an den en e-unan, difennet-groñs e chom ar pleustradennoù sport a-stroll pe chom tost da dud all, pe ouzh mont da vale gant an dud o vevañ er memes ti-annez hepken, pe ouzh ezhommoù al loened-ti\u202f;",
        "convocation": "Lizher kengalv melestradurel pe a-berzh ar justis hag evit mont en ur servij publik\u202f;",
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

    birthday.addEventListener('keyup', function(event) {
      if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
        if(birthday.value.length === 2 || birthday.value.length === 5) {
          birthday.value = birthday.value + "/";
        }
      }
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
    // 61 -> 16.5 by 5.92 profondeur + 5 à partir de Me Hag
    doc.setFontSize(13);
    doc.setFont("times-roman");
    doc.setFontType("bold");
    // 404 ; 90
    doc.text(68, 15.25, 'TESTENI DILEC’HIAÑ DISDALC’HUS');
    // 308 ; 121
    doc.text(52.03, 20.43919, 'ATTESTATION DE DÉPLACEMENT DÉROGATOIRE');

    doc.setFontSize(9);
    doc.setFontType("normal");
    // 277 164
    doc.text(46.7905, 27.7027,'Diouzh an dekred niv.2020-1310 eus an 29 a viz Here a gemenn an diarbennoù hollek rekis');
    // 342 188
    doc.text(57.77, 31.75676, 'evit talañ ouzh epidemiezh ar c’hovid-19 e stern ar stad a zifrae yec’hedel.');
    // 231 211
    doc.text(39.02, 35.64189 , 'En application du décret n°2020-1310 du 29 octobre 2020 prescrivant les mesures générales nécessaires');
    // 310 235
    doc.text(52.364865, 39.69595, 'pour faire face à l’épidémie de covid-19 dans le cadre de l’état d’urgence sanitaire.');

    doc.setFontSize(11);

    // 76 281
    doc.text(12.8378, 52.46621, 'Me hag a sin amañ dindan, Je soussigné(e),');
    // 76 325
    doc.text(12.8378, 59.89865, `It./Ao. / Mme/M.     ${firstname.value} ${lastname.value}`);

    // 76 360
    doc.text(12.8378, 65.8108, `Bet ganet d’an / Né(e) le :     ${birthday.value}`);
    doc.text(107.2016, 65.8108, `e / à     ${birthplace.value}`);
    // 76 397
    doc.text(12.8378, 72.0608, `O chom / Demeurant :     ${address.value} - ${postal.value} ${city.value}`);

    doc.setFontSize(9.5);

    // 49 439
    doc.text(14.8596, 79.5635, `A desteni eo liammet ma dilec’hiadenn ouzh an abeg da-heul\n(askañ al logell) aotreet gant an dekred niv.2020-1310 eus an \n29 a viz Here a gemenn ar reolennoù hollek rekis evit talañ \nouzh epidemiezh ar c’hovid-19 e stern ar stad a zifrae yec’hedel :`);

    // 49 322
    doc.text(107.2016, 79.5635, `Certifie que mon déplacement est lié au motif suivant (cocher la\ncase) autorisé par le décret n°2020-1310 du 29 octobre 2020\nprescrivant les mesures générales nécessaires pour faire face à\nl'épidémie de Covid-19 dans le cadre de l'état d'urgence sanitaire :`);

    // 1)
    // 628
    if(travail.checked === true) {
      doc.rect(14.8596, 108.58108, 2.5, 2.5, 'F');
      doc.rect(107.2016, 108.58108, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 108.58108, 2.5, 2.5);
      doc.rect(107.2016, 108.58108, 2.5, 2.5);
    }
    doc.text(14.8596, 111.08108, `    Dilec’hiadennoù etre an ti-annez hag al lec’h labour pe ul\nlec’h kelenn pe stummañ, dilec’hiadennoù micherel na c’hallont\nket bezañ ampellet, dilec’hiadennoù evit ur genstrivadeg pe un\narnodenn.`);
    doc.text(107.2016, 111.08108, `    Déplacements entre le domicile et le lieu d’exercice de\nl’activité professionnelle ou un établissement d’enseignement\nou de formation, déplacements professionnels ne pouvant être\ndifférés, déplacements pour un concours ou un examen`);

    // 2)
    // 774
    if(achats.checked === true) {
      doc.rect(14.8596, 133.24324, 2.5, 2.5, 'F');
      doc.rect(107.2016, 133.24324, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 133.24324, 2.5, 2.5);
      doc.rect(107.2016, 133.24324, 2.5, 2.5);
    }
    doc.text(14.8596, 135.74324, `    Dilec’hiadennoù evit mont d’ul lec’h sevenadurel aotreet pe\nd’ul lec’h relijiel\u202f; dilec’hiadennoù evit prenañ madoù, evit\nservijoù zo aotreet ar pourchas anezho, evit mont da gerc’hat\nurzhiadoù hag evit an degasadennoù e ti an dud.`);
    doc.text(107.2016, 135.74324, `     Déplacements pour se rendre dans un établissement\nculturel autorisé ou un lieu de culte\u202f; déplacements pour\neffectuer des achats de biens, pour des services dont la\nfourniture est autorisée, pour les retraits de commandes et les\nlivraisons à domicile..`);

    // 3)
    // 913
    if(sante.checked === true) {
      doc.rect(14.8596, 156.723, 2.5, 2.5, 'F');
      doc.rect(107.2016, 156.723, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 156.723, 2.5, 2.5);
      doc.rect(107.2016, 156.723, 2.5, 2.5);
    }
    doc.text(14.8596, 159.223, `    Kuzuliadennoù, imbourc’hioù ha prederioù na c’hallont ket\nbezañ graet a-bell na bezañ ampellet ha prenañ louzeier.`);
    doc.text(107.2016, 159.223, `    Consultations, examens et soins ne pouvant être ni\nassurés à distance ni différés et l’achat de médicaments.`);

    // 4)
    // 981
    if(famille.checked === true) {
      doc.rect(14.8596, 168.2095, 2.5, 2.5, 'F');
      doc.rect(107.2016, 168.2095, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 168.2095, 2.5, 2.5);
      doc.rect(107.2016, 168.2095, 2.5, 2.5);
    }
    doc.text(14.8596, 170.7095, `    Dilec’hiadennoù evit abegoù familh ret-groñs, evit harpañ\ntud klañvus ha bresk pe evit diwall bugale.`);
    doc.text(107.2016, 170.7095, `    Déplacements pour motif familial impérieux, pour\nl'assistance aux personnes vulnérables et précaires ou la\ngarde d'enfants.`);

    // 5)
    // 1070
    if(handicap.checked === true) {
      doc.rect(14.8596, 183.2432432, 2.5, 2.5, 'F');
      doc.rect(107.2016, 183.2432432, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 183.2432432, 2.5, 2.5);
      doc.rect(107.2016, 183.2432432, 2.5, 2.5);
    }
    doc.text(14.8596, 185.7432432, `    Dilec’hiadennoù an dud nammet hag o ambrouger.`);
    doc.text(107.2016, 185.7432432, `    Déplacement des personnes en situation de handicap et\nleur accompagnant.`);

    // 6)
    // 1138
    if(sport.checked === true) {
      doc.rect(14.8596, 194.72973, 2.5, 2.5, 'F');
      doc.rect(107.2016, 194.72973, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 194.72973, 2.5, 2.5);
      doc.rect(107.2016, 194.72973, 2.5, 2.5);
    }
    doc.text(14.8596, 197.22973, `    Dilec’hiadennoù dindan an amzer pe war-zu ul lec’h dindan\nan amzer, hep cheñch lec’h annez, teir eurvezh-pad bemdez\nd’an hirañ hag ugent kilometr hed tro-dro d’an ti-annez d’ar\nmuiañ, liammet pe ouzh embregerezh-korf pe ouzh\ndudiamantoù an den en e-unan, difennet-groñs e chom ar\npleustradennoù sport a-stroll pe chom tost da dud all, pe ouzh\nmont da vale gant an dud o vevañ er memes ti-annez hepken,\npe ouzh ezhommoù al loened-ti.`);
    doc.text(107.2016, 197.22973, `     Déplacements en plein air ou vers un lieu de plein air, sans\nchangement de lieu de résidence, dans la limite de trois heures\nquotidiennes et dans un rayon maximal de vingt kilomètres\nautour du domicile, liés soit à l'activité physique ou aux loisirs\nindividuels, à l'exclusion de toute pratique sportive collective et\nde toute proximité avec d'autres personnes, soit à la\npromenade avec les seules personnes regroupées dans un\nmême domicile, soit aux besoins des animaux de compagnie.`);

    // 7)
    // 1346
    if(convocation.checked === true) {
      doc.rect(14.8596, 229.56486, 2.5, 2.5, 'F');
      doc.rect(107.2016, 229.56486, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 229.56486, 2.5, 2.5);
      doc.rect(107.2016, 229.56486, 2.5, 2.5);
    }
    doc.text(14.8596, 232.36486, `    Lizher kengalv melestradurel pe a-berzh ar justis hag evit\nmont en ur servij publik.`);
    doc.text(107.2016, 232.36486, `    Convocation judiciaire ou administrative et pour se rendre\ndans un service public.`);

    // 8)
    // 1411
    if(missions.checked === true) {
      doc.rect(14.8596, 240.8446, 2.5, 2.5, 'F');
      doc.rect(107.2016, 240.8446, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 240.8446, 2.5, 2.5);
      doc.rect(107.2016, 240.8446, 2.5, 2.5);
    }
    doc.text(14.8596, 243.3446, `    Kemer perzh e kefridioù a laz hollek diwar c’houlenn an\naotrouniezh velestradurel.`);
    doc.text(107.2016, 243.3446, `    Participation à des missions d'intérêt général sur demande\nde l'autorité administrative.`);

    // 9)
    // 1470
    if(enfants.checked === true) {
      doc.rect(14.8596, 250.8108, 2.5, 2.5, 'F');
      doc.rect(107.2016, 250.8108, 2.5, 2.5, 'F');
    } else {
      doc.rect(14.8596, 250.8108, 2.5, 2.5);
      doc.rect(107.2016, 250.8108 , 2.5, 2.5);
    }
    doc.text(14.8596, 253.3108, `    Dilec’hiadenn evit mont d’ar skol da gerc’hat ar vugale ha\nda-geñver o obererezhioù troskol.`);
    doc.text(107.2016, 253.3108, `    Déplacement pour chercher les enfants à l’école et à\nl’occasion de leurs activités périscolaires.`);

    doc.setFontSize(11);

    // 1570
    doc.text(12.8378, 270.2027, `Graet e / Fait à :    ${city.value}`);
    // 1610
    doc.text(12.8378, 276.9595, `D’an / Le :    ${formatDate(datesortie)}`);
    // 372
    doc.text(62.8378, 276.9595, ` da / à :     ${heuresortie.value.split(':')[0]}`);
    // 613
    doc.text(84.8378, 276.9595, `e / h ${heuresortie.value.split(':')[1]}`);

    doc.setFontSize(7);
    // 531
    doc.text(14.8596, 94.69595, `Notenn : Rekis eo d’an dud a garfe ober o mad eus unan eus an nemedennoù-se bezañ \nganto pa guitaont o zi-annez un teul a c’haller drezañ reizhabegiñ emañ mat an dilec’hia-\ndenn sellet outi etouez an nemedennoù renablet.`);
    doc.text(107.2016, 94.69595, `Note : Les personnes souhaitant bénéficier de l'une de ces exceptions doivent se munir s'il y a\nlieu, lors de leurs déplacements hors de leur domicile, d'un document leur permettant de justifier\nque le déplacement considéré entre dans le champ de l'une de ces exceptions.`);

    // 721
    doc.text(14.8596, 126.7905, `Notenn : da vezañ implijet gant al labourerien angopret pa ne c’hallont ket kaout un \ntesteni dilec’hiañ savet gant o implijer`);
    doc.text(107.2016, 126.7905, `Note : à utiliser par les travailleurs non-salariés, lorsqu'ils ne peuvent disposer d'un justificatif\nde déplacement établi par leur employeur`);

    const img = `data:image/png;base64,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`;

    // 1056 1636  hauteur 120
    doc.addImage(img, 'PNG', 158.37838, 266.9595, 20.27, 20.27);

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
    localStorage.setItem('birthday', birthday.value);
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
      birthday.value = localStorage.getItem('birthday');
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
