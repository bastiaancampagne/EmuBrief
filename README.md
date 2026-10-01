# EmuBrief PWA v2

**Chaque jour, l’essentiel à vos côtés !**

Cette version ajoute trois emplacements Google clairement séparés : **Personnel**, **Travail** et **Autre**. Chaque emplacement peut être associé à un compte Google différent et donne un accès **lecture seule** à Gmail et Google Agenda.

## Fonctions
- Jusqu’à 3 comptes Google : Personnel / Travail / Autre.
- Sélecteur de compte Google lors de chaque connexion ou reconnexion.
- Gmail : lecture des messages récents avec filtrage des catégories promotionnelles/sociales/forums/spam.
- Google Agenda : aujourd’hui + 7 jours.
- Brief lançable et actualisable dans la journée.
- Historique local des briefs sur 3 jours.
- Prompt et mots-clés personnalisables.
- Scènes illustrées avec l’émeu : accueil, e-mails, agenda, paie, LinkedIn et historique.
- Logo et icônes PWA EmuBrief.

## Configuration Google
1. Dans Google Cloud, activez **Gmail API** et **Google Calendar API**.
2. Configurez l’écran de consentement OAuth.
3. Créez un client OAuth 2.0 de type **Application Web**.
4. Ajoutez l’origine de votre PWA dans **Origines JavaScript autorisées** (par exemple votre domaine GitHub Pages ou votre domaine personnel).
5. Copiez l’ID client dans `config.js` à la place de `REMPLACEZ_PAR_VOTRE_CLIENT_ID_WEB.apps.googleusercontent.com`.

Scopes utilisés :
- `https://www.googleapis.com/auth/gmail.readonly`
- `https://www.googleapis.com/auth/calendar.readonly`

## Important pour les 3 comptes
EmuBrief ne stocke pas les mots de passe. Les jetons OAuth restent en mémoire dans la session du navigateur. Si un jeton expire, utilisez **Reconnecter** pour l’emplacement concerné.

## Veille Paie + LinkedIn
Pour une PWA publique, ne placez jamais une clé d’IA ou une clé secrète de recherche dans `app.js` ou `config.js`. `BRIEF_BACKEND_URL` est prévu pour un backend HTTPS sécurisé qui exécute la veille web et renvoie les résultats à la PWA.
