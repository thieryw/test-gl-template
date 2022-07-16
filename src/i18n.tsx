import { createI18nApi, declareComponentKeys } from "i18nifty";
export { declareComponentKeys };

//List the languages you with to support
export const languages = ["en", "fr"] as const;

//If the user's browser language doesn't match any 
//of the languages above specify the language to fallback to:  
export const fallbackLanguage = "en";

export type Language = typeof languages[number];

export type LocalizedString = Parameters<typeof resolveLocalizedString>[0];

export const { 
	useTranslation, 
	resolveLocalizedString, 
	useLang, 
	$lang,
	useResolveLocalizedString,
	/** For use outside of React */
	getTranslation 
} = createI18nApi<
    | typeof import ("pages/Home").i18n
    | typeof import ("pages/PageExample").i18n
		| typeof import ("pages/Page2Example").i18n
    | typeof import ("App/Header").i18n
		| typeof import ("App/Footer").i18n
		| typeof import ("pages/FourOFour").i18n
>()(
    { languages, fallbackLanguage },
    {
        "en": {
					"FourOhFour": {
						"not found": "Page not found"
					},
					"Header": {
						"headerTitle": "Title",
						"link1label": "Example page",
						"link2label": "Link 2",
						"link3label": "Link 3",
						"linkPage2Label": "Link page 2"
					},
					"Footer": {
						"license": "License M.I.T",
						"link1label": "Example page",
						"link2label": "Link 2",
						"link3label": "Link 3",
						"linkPage2Label": "Link page 2"
					},
					"Home": {
						"heroTitle": "Hero title",
						"heroSubtitle": "Hero subtitle",
						"articleTitle": "Article title",
						"articleBody": `Do am he horrible distance marriage 
							so although. Afraid assure square so happen mr 
							an before. His many same been well can high that. 
							Forfeited did law eagerness allowance improving 
							assurance bed. Had saw put seven joy short first. 
							Pronounce so enjoyment my resembled in forfeited 
							sportsman. Which vexed did began son 
							abode short may. Interested astonished he at 
							cultivated or me. Nor brought one invited she 
							produce her.`,
						"articleButtonLabel": "Article button label",
						"article2Title": "Article 2 Title",
						"article2Body": `This is an **example** of how to create an article with an mp4 video along side it !`,
						"article2ButtonLabel": "Article 2 button label",
						"card1Title": "Card title 1",
						"card2Title": "Card title 2",
						"card3Title": "Card title 3",
						"card1Paragraph": `Dissuade ecstatic and properly saw 
							entirely sir why laughter endeavor. 
							In on my jointure horrible margaret suitable 
							he followed speedily.`,
						"card2Paragraph": `Dissuade ecstatic and properly saw 
							entirely sir why laughter endeavor. 
							In on my jointure horrible margaret suitable 
							he followed speedily.`,
						"card3Paragraph": `Dissuade ecstatic and properly saw 
							entirely sir why laughter endeavor. 
							In on my jointure horrible margaret suitable 
							he followed speedily.`,
					},
					"PageExample": {
						"articleTitle": "Article title",
						"articleBody": `Am finished rejoiced drawings so he 
							elegance. Set lose dear upon had two its what seen. 
							Held she sir how know what such whom. 
							Esteem put uneasy set piqued son depend her others. 
							Two dear held mrs feet view her old fine. Bore can 
							led than how has rank. Discovery any extensive has 
							commanded direction. Short at front which blind as. 
							Ye as procuring unwilling principle by.`,
						"articleButtonLabel": "Article button label",
						"projectCardTitle1": "Project card title 1",
						"projectCardTitle2": "Project card title 2",
						"projectCardTitle3": "Project card title 3",
						"projectCardTitle4": "Project card title 4",
						"projectCardSubtitle1": "Project card subtitle 1",
						"projectCardSubtitle2": "Project card subtitle 2",
						"projectCardSubtitle3": "Project card subtitle 3",
						"projectCardSubtitle4": "Project card subtitle 4",
						"checkListHeading": "Check list heading",
						"checkListElementTitle1": "Check list element title 1",
						"checkListElementTitle2": "Check list element title 2",
						"checkListElementTitle3": "Check list element title 3",
						"checkListElementTitle4": "Check list element title 4",
						"checkListElementTitle5": "Check list element title 5",
						"checkListElementTitle6": "Check list element title 6",
						"checkListElementDescription1": "Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.",
						"checkListElementDescription2": "Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.",
						"checkListElementDescription3": "Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.",
						"checkListElementDescription4": "Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.",
						"checkListElementDescription5": "Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.",
						"checkListElementDescription6": "Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen."
					},
					"Page2Example": {
						"Page2Title": "Page 2 Title"
					}
        },
				/* spell-checker: disable */
				"fr": {
					"FourOhFour": {
						"not found": "Page non trouvée"
					},
					"Header": {
						"headerTitle": "Titre",
						"link1label": "Exemple de page",
						"link2label": "Lien 2",
						"link3label": "Lien 3",
						"linkPage2Label": "Lien page 2"
					},
					"Footer": {
						"license": "License M.I.T",
						"link1label": "Exemple de page",
						"link2label": "Lien 2",
						"link3label": "Lien 3",
						"linkPage2Label": "Lien page 2"
					},
					"Home": {
						"heroTitle": "Titre du Hero",
						"heroSubtitle": "Sous titre du Hero",
						"articleTitle": "Titre de l'article",
						"articleBody": `Fille pieds qui ici breve coups 
							soeur. Va on on succedent deroulent de capitaine 
							rapportes esplanade. Accoudees inassouvi sacrifice 
							dit mes ils surveille tangibles ici dentelees. 
							Atroce esprit bazars en boules je sa. 
							Car but approchait artilleurs eclatantes 
							defilaient moi nez paraissent claquaient. 
							Est crepitent car seulement adjudants eux 
							apprendre signalant ere incapable. 
							Prenaient distribua ii en eperonnes enfantent 
							entourage cotillons.`,
						"articleButtonLabel": "Label du bouton",
						"article2Title": "Titre de l'article 2",
						"article2Body": `Ceci est un **exemple** de comment on créer un article avec une vidéo mp4 a coté !`,
						"article2ButtonLabel": "Label du bouton 2",
						"card1Title": "Titre de la carte 1",
						"card2Title": "Titre de la carte 2",
						"card3Title": "Titre de la carte 3",
						"card1Paragraph": `Linge selon court ans toi 
							sabre heros. Connut toi mirent art ton trouve
							enleve hideur eux balaye. Cornette or
							coussins recupera allaient viennent heureuse as.`,
						"card2Paragraph": `Linge selon court ans toi 
							sabre heros. Connut toi mirent art ton trouve
							enleve hideur eux balaye. Cornette or 
							coussins recupera allaient viennent heureuse as.`,
						"card3Paragraph": `Linge selon court ans toi 
							sabre heros. Connut toi mirent art ton trouve
							enleve hideur eux balaye. Cornette or 
							coussins recupera allaient viennent heureuse as.`,
					},
					"PageExample": {
						"articleTitle": "Titre de l'Article",
						"articleBody": `Contes bouton aimons fosses depart 
							ne dedans ca de. Le inassouvi craignait 
							preferait en sa petillent et. Ils souffrance 
							assurances eclaireurs consentiez lui age 
							cherissait manoeuvres net. Tout en chez sais 
							cent cuir avez le va. Feu maladie tot facteur 
							douleur ils empeche pas attendu. Etale feu moi 
							ete voici utile autre ils bride. 
							Cheveux sachant content luisant eux sur 
							attendu retient. Venait cercle rubans ma qu 
							palais oh eperon.`,
						"articleButtonLabel": "Label du bouton",
						"projectCardTitle1": "Titre de la carte de projet 1",
						"projectCardTitle2": "Titre de la carte de projet 2",
						"projectCardTitle3": "Titre de la carte de projet 3",
						"projectCardTitle4": "Titre de la carte de projet 4",
						"projectCardSubtitle1": "Sous titre de la carte de projet 1",
						"projectCardSubtitle2": "Sous titre de la carte de projet 2",
						"projectCardSubtitle3": "Sous titre de la carte de projet 3",
						"projectCardSubtitle4": "Sous titre de la carte de projet 4",
						"checkListHeading": "Titre de la check list",
						"checkListElementTitle1": "Titre d'element de check list 1",
						"checkListElementTitle2": "Titre d'element de check list 2",
						"checkListElementTitle3": "Titre d'element de check list 3",
						"checkListElementTitle4": "Titre d'element de check list 4",
						"checkListElementTitle5": "Titre d'element de check list 5",
						"checkListElementTitle6": "Titre d'element de check list 6",
						"checkListElementDescription1": "Il remarquait et en survivants eclaireurs legerement qu. Animaux nos humains fer fut ramassa encourt.",
						"checkListElementDescription2": "Il remarquait et en survivants eclaireurs legerement qu. Animaux nos humains fer fut ramassa encourt.",
						"checkListElementDescription3": "Il remarquait et en survivants eclaireurs legerement qu. Animaux nos humains fer fut ramassa encourt.",
						"checkListElementDescription4": "Il remarquait et en survivants eclaireurs legerement qu. Animaux nos humains fer fut ramassa encourt.",
						"checkListElementDescription5": "Il remarquait et en survivants eclaireurs legerement qu. Animaux nos humains fer fut ramassa encourt.",
						"checkListElementDescription6": "Il remarquait et en survivants eclaireurs legerement qu. Animaux nos humains fer fut ramassa encourt.",
					},
					"Page2Example": {
						"Page2Title": "Titre de la page 2"
					}

				}
				/* spell-checker: enabled */
    }
);