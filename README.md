# Cit'Explore 📱

Bienvenue dans le projet "Cit'Explore" ! Ce README vous guidera étape par étape pour configurer et lancer le projet sur votre machine.

## 🛠 Pré-requis

- **Node.js et npm** : Si ce n'est pas déjà fait, [téléchargez et installez Node.js](https://nodejs.org/).
- **Expo CLI** : Installez-le en utilisant la commande :
```bash
npm install -g expo-cli
```


## 🚀 Installation

1. **Cloner le dépôt** :
```bash
git https://github.com/epi-noahg/Cit-Explore.git
```

2. **Accéder au répertoire du projet :**
```bash
cd Cit-Explore
```
3. **Installer les dépendances :**
```bash
npm install
```

Créez un fichier config.json à la racine du projet et ajoutez-y une clef api pour graphhopper
```json
{
  "apiKey": "YOUR_API_KEY"
}
```

🏁 Exécution
🖥 Sur un simulateur/emulateur
```bash
npm start
```

### 📱 Sur un appareil physique
Installez l'application Expo Go depuis App Store pour iOS ou Google Play pour Android.
Scannez le QR code qui s'affiche dans votre terminal.


## 🛠 Dépannage
Si vous rencontrez des problèmes, voici quelques étapes courantes pour le dépannage :

Assurez-vous d'avoir une connexion Internet stable.
Fermez et relancez l'application Expo Go.
Redémarrez le packager Expo avec Ctrl + C dans le terminal, puis lancez npm start à nouveau.

## 📚 Liens utiles
[Documentation Expo](https://docs.expo.dev)