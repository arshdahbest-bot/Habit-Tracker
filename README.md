# IB Study Buddy 🎓

A student-friendly study app for **IBDP** students, built with **Expo (React Native)** so it runs on
iPhone, Android and the web from one codebase and can be published to the App Store and Google Play.

## Features

| Tab | What it does |
| --- | --- |
| 🏠 **Home** | Add your name and photo. Your photo becomes your **tutor avatar** (cartoon tint, outline and a hat you pick). **Light / dark mode** switch in the top-right. |
| 🧑‍🏫 **Tutor** | Pick a subject and lesson. Your avatar **teaches it step by step and reads it aloud** (text-to-speech), bobbing and "talking" while it speaks. |
| 🃏 **Flashcards** | Flip cards with an animation. Cards you mark "still learning" come back later. Progress bar + shuffle. |
| 📝 **Quiz** | IB-style multiple choice with instant feedback, explanations and a saved best score per subject. |
| 📊 **Progress** | Study streak, lessons done, cards mastered, average quiz score, a 7-day activity chart, progress per subject and recent quiz results. |
| 🎮 **Break** | Play **Snake** or **Ping Pong** — **once per day**. Afterwards you see **today's leaderboard**, ranked by score. It resets at midnight. |

Subjects included: Biology, Chemistry, Physics, Maths AA, Economics, History.

**Economics diagrams:** Economics lessons show IB-style diagrams under each step (demand, supply,
equilibrium, demand shifts, excess supply, PED, total revenue, negative externalities), and the
Economics lesson list has an interactive **Diagram Lab** where you shift supply and demand and watch
the equilibrium move. Diagrams live in `components/econ/`; attach one to a lesson step with the
`diagrams` field in `data/subjects.ts`.
To add more content, edit **`data/subjects.ts`** — every screen reads from that one file.

## Run it

### Option A — on your computer
```bash
npm install
npx expo start
```
Scan the QR code with the **Expo Go** app on your phone, or press `w` to open it in a browser.

### Option B — in an online app builder (Rork, Replit, Expo Snack…)
This is a standard Expo Router project, so you can import this GitHub repository (or copy the
`app/`, `components/`, `context/`, `data/`, `services/` folders plus `package.json`, `app.json`
and `tsconfig.json`) into any tool that supports Expo / React Native.

## Project structure
```
app/
  _layout.tsx          root: theme + profile provider
  (tabs)/_layout.tsx   bottom tab bar
  (tabs)/index.tsx     Home: avatar setup, theme switch, subjects
  (tabs)/tutor.tsx     Avatar tutor lessons (text-to-speech)
  (tabs)/flashcards.tsx
  (tabs)/quiz.tsx
  (tabs)/progress.tsx  personal progress dashboard
  (tabs)/break.tsx     once-a-day game + daily leaderboard
components/
  Avatar.tsx           photo → animated avatar
  UI.tsx               shared buttons, cards, subject picker
  games/SnakeGame.tsx
  games/PongGame.tsx
  econ/                economics graphs, diagram presets, Diagram Lab
context/AppContext.tsx light/dark theme + saved profile
data/subjects.ts       all lessons, flashcards and quiz questions
services/progress.ts   personal progress tracking (stored on the device)
services/dailyGame.ts  once-a-day lock + leaderboard (offline or Supabase)
services/avatarService.ts optional AI avatar hook
```

## Making the leaderboard truly multiplayer (recommended before launch)

Out of the box the app works **offline**: your score is ranked against a set of **demo players**
that change every day (the app says so on screen). To have real students compete with each other,
connect a free **Supabase** database:

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run:
   ```sql
   create table scores (
     id bigint generated always as identity primary key,
     player_id text not null,
     name text not null check (char_length(name) <= 20),
     score int not null check (score >= 0 and score < 10000),
     game text not null check (game in ('snake', 'pong')),
     day date not null,
     created_at timestamptz default now(),
     unique (player_id, day)          -- one game per player per day, enforced by the server
   );
   alter table scores enable row level security;
   create policy "read scores"  on scores for select using (true);
   create policy "add a score"  on scores for insert with check (day >= current_date - 1);
   ```
3. Copy `.env.example` to `.env` and fill in `EXPO_PUBLIC_SUPABASE_URL` and
   `EXPO_PUBLIC_SUPABASE_ANON_KEY` (Project Settings → API).

## Turning photos into AI cartoon avatars (optional)

By default the avatar is created **on the device** (circle crop, colour wash, outline, hat,
animation) — no photo ever leaves the phone. If you want a true AI-drawn cartoon, set
`EXPO_PUBLIC_AVATAR_API_URL` to **your own server** endpoint that accepts `{ imageBase64 }` and
returns `{ avatarUrl }` (see `services/avatarService.ts`). Keep any paid AI API key on that server,
never inside the app.

## Publishing to the App Store / Google Play

1. Change `ios.bundleIdentifier` and `android.package` in `app.json` (e.g. `com.yourname.ibstudybuddy`).
2. Add an app icon and splash image (1024×1024 PNG) and reference them in `app.json`.
3. Install the build tool and log in:
   ```bash
   npm install -g eas-cli
   eas login
   eas build:configure
   ```
4. Build and submit:
   ```bash
   eas build --platform ios      # needs an Apple Developer account ($99/year)
   eas submit --platform ios
   eas build --platform android  # Google Play Console account ($25 one-off)
   eas submit --platform android
   ```
5. Before submitting, write a **privacy policy** (the app uses photos and, if you enable
   Supabase, stores names and scores). Apple asks for its URL. Because many IB students are under 18,
   keep data collection minimal.
