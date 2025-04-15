## 📦 Installation de Supabase CLI (en local)

### Prérequis

- Avoir **Node.js** installé (`node -v`)
- Avoir **Docker** installé et lancé (`docker -v`)
- Avoir **Git** installé (`git --version`)

---

### 🧰 Étapes d'installation (Linux & macOS)

# Via npm (recommandé si Node est déjà installé)

```bash
npm install -g supabase

# Initialiser Supabase dans le projet :
```bash
supabase init

#Lancer Supabase localement :
```bash
supabase start

## ⚡ Créer une Edge Function avec Supabase

```bash
supabase functions new nom-de-ta-fonction

🧪 Tester une Edge Function en local

## ⚡ Utilise la commande suivante pour lancer le serveur local :

```bash
supabase functions serve nom-de-ta-fonction

## 🗃️ Gestion des migrations (base de données)

### ✅ Créer une migration

```bash
supabase migration new nom_de_la_migration



