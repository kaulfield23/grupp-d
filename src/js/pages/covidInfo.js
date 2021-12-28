const template = document.createElement('template')
template.innerHTML = `
<h1>Ett tryggt biobesök</h1>

<p>Från och med den 23 december inför regeringen nya smittskyddsåtgärder. Då behöver du som har fyllt 18 år kunna visa upp ett giltigt vaccinationsbevis för Covid-19 och ID-handling med foto när du besöker oss. 
Det gäller samtliga våra biografer och salonger.
För dig som är vaccinerad med minst två doser, där det har gått minst 2 veckor sedan sista dosen, kan du enkelt och gratis ladda ner ditt bevis på covidbevis.se med din e-legitimation. 
Även vaccinationsbevis utfärdade inom EU går att använda tillsammans med giltig ID-handling. </p>

<h3>Godkända ID-handlingar</h3>
<p>För att vi ska veta att vaccinbeviset tillhör dig så behöver du också visa upp en ID-handling. En kopia eller foto på din ID-handling godtas ej. 
Godkända ID-handlingar är svenskt pass, nationellt ID-kort, svenskt körtkort, Feja eID eller identitetskort för folkbokförda i Sverige.
 Vi godtar även utländska ID-kort från länder i Schengenområdet samt utländska EU-pass. </p>

<h3>Inget vaccinationsbevis eller ID-handing</h3>
<p>Om du inte kan visa upp ett giltigt vaccinationsbevis tillsammans med giltig ID-handling kommer vi tyvärr inte kunna släppa in dig i våra salonger och din biljett återbetalas.
Om du av medicinska skäl inte bör ta vaccinet, eller endast får ta en dos, behöver du visa upp ett läkarintyg (tillsammans med ID-handling) som stödjer detta.</p>

<h3>Bra att tänka på</h3>
<p>Har du sedan tidigare laddat ner ett vaccinationsbevis är det en bra idé att kontrollera att det fortfarande är giltigt till ditt besök hos oss. Du kan enkelt förnya ditt bevis på covidbevis.se
Observera att så kallade testbevis, negativt test och tillfrisknandebevis inte räknas som vaccinationsbevis och kan ej användas på biografen.
Kom gärna i god tid. Ibland kan det bli kö när kontroll av vaccinationsbevis sker i entrén till biografen.</p>
`

export const covidInforation = () => {
    const container = document.querySelector(".movies");
    container.innerHTML = "";
    container.appendChild(template.content.cloneNode(true));
  };
