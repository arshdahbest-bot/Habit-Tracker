# IB Study Buddy 🎓

A student-friendly study app for **IBDP** students, built with **Expo (React Native)** so it runs on
iPhone, Android and the web from one codebase and can be published to the App Store and Google Play.

## Features

| Tab | What it does |
| --- | --- |
| 🏠 **Home** | Add your name and photo (it becomes your tutor avatar), light/dark switch, and **My IB subjects** with SL/HL badges and chapter progress. |
| 🎯 **My IB subjects** (from Home) | Pick your 6 subjects + TOK and set each to **SL or HL**. SL hides HL-only chapters. It checks for 6 subjects with 3–4 at HL. |
| 🎨 **Customize** (from Home) | Tutor name; app colour, avatar colour, accessory, shape, frame and cartoon filter; avatar voice, speed and pitch. |
| 🧑‍🏫 **Tutor** | The full **IB syllabus** for each subject, unit by unit. Every unit has an overview lesson and every chapter has its own lesson that your avatar reads aloud; tick any chapter off as **studied** to track your progress. |
| 🃏 **Cards** / 📝 **Quiz** | Pick a subject, then a chapter: every chapter has its own flashcards and quiz that only cover that topic. Answer options are shuffled each attempt; results show an estimated IB grade (1–7). |
| 📊 **Progress** | Study streak, chapters studied, a 7-day activity chart, estimated grade per subject and a predicted Diploma points total. |
| 🎮 **Break** | Play **Snake** or **Ping Pong** — **once per day** — then see **today's leaderboard**. |

**Subjects (15):** English A: Language & Literature · French B · Hindi B · Economics · Business Management ·
History · Psychology · Biology · Chemistry · Physics · Computer Science · Environmental Systems & Societies ·
Maths AA · Maths AI · Theory of Knowledge. Chapter lists are in `data/syllabus.ts` (sciences follow the guides for first
assessment 2025, ESS 2026, CS and Psychology 2027). **Check them against the current IB subject guides
before publishing** — the IB revises courses regularly.

Lessons, flashcards and quizzes live in `data/content/<subject>.ts`, one entry per chapter written as
`C(lessonSteps, cards, quiz, diagrams?)`, plus a short overview per unit. After editing, run
`npx tsx scripts/check-content.ts` — it checks that every syllabus chapter has a lesson, cards and a quiz
with valid answers. Everything runs on the phone:
no accounts, no API keys and no running costs (the optional Supabase leaderboard has a free tier).

**Economics diagrams:** Economics lessons show IB-style diagrams under each step (demand, supply,
equilibrium, demand shifts, excess supply, PED comparisons with worked percentages, perfectly
elastic/inelastic demand, PED along a straight-line demand curve, total revenue, negative
externalities). Chapters 2.1–2.3 include an interactive **Diagram Lab**, and chapter 2.5 a **PED calculator**. Diagrams live in `components/econ/`; attach one to a lesson step with the
`diagrams` field of a chapter in `data/content/econ.ts`.

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
  (tabs)/tutor.tsx     IB syllabus browser (units → chapters)
  chapter.tsx          one chapter: lessons, practice, tools
  lesson.tsx           lesson player, read aloud by the avatar
  subjects.tsx         choose subjects and SL/HL
  customize.tsx        avatar, voice and colour settings
  (tabs)/flashcards.tsx
  (tabs)/quiz.tsx
  (tabs)/progress.tsx  personal progress dashboard
  (tabs)/break.tsx     once-a-day game + daily leaderboard
components/
  Avatar.tsx           photo → animated avatar
  UI.tsx               shared buttons, cards, subject picker
  games/SnakeGame.tsx
  games/PongGame.tsx
  econ/                economics graphs, diagram presets, Diagram Lab, PED calculator
  FlashcardDeck.tsx / QuizRunner.tsx   shared flashcard and quiz components
  ChapterPicker.tsx    chapter chooser for Cards and Quiz
context/AppContext.tsx light/dark theme + saved profile
data/syllabus.ts       IB units and chapters for every subject (HL-only chapters marked)
data/subjects.ts       subject list and helpers (chapterContent, unitOverview, chaptersFor)
data/content/          per-chapter lessons, flashcards and quizzes, one file per subject
scripts/check-content.ts  checks every chapter has complete content
services/progress.ts   personal progress tracking (stored on the device)
services/useSpeaker.ts avatar voice (text-to-speech with the chosen voice settings)
services/dailyGame.ts  once-a-day lock + leaderboard (offline or Supabase)
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
5. Before submitting, write a **privacy policy** (the app uses the student's photo on the device only,
   and, if you enable Supabase, stores names and scores online). Apple asks for its URL. Because many IB students are under 18,
   keep data collection minimal.
